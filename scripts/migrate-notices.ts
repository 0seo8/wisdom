
import * as cheerio from 'cheerio';
import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';

// Load environment variables from .env.local
dotenv.config({ path: '.env.local' });

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!SUPABASE_URL || !SUPABASE_KEY) {
  console.error('Missing Supabase credentials in .env.local');
  process.exit(1);
}

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

const BASE_URL = 'https://artswisdom.com/%ea%b3%b5%ec%a7%80%ec%82%ac%ed%95%ad/';

async function fetchNotices(page = 1) {
  const url = `${BASE_URL}?pageid=${page}&mod=list`;
  console.log(`Fetching list page: ${url}`);
  
  try {
      const response = await fetch(url);
      const html = await response.text();
      const $ = cheerio.load(html);
      
      const noticeLinks: string[] = [];
      
      // Select existing notice links
      $('.kboard-list-title a').each((_, element) => {
          const href = $(element).attr('href');
          if (href && href.includes('uid=')) {
             if(href.includes('http')) {
                 noticeLinks.push(href);
             } else {
                 // Ensure we don't double slash if href starts with /
                 const prefix = href.startsWith('/') ? '' : '/';
                 noticeLinks.push(`https://artswisdom.com${prefix}${href}`);
             }
          }
      });
      
      return [...new Set(noticeLinks)];

  } catch (error) {
    console.error(`Error fetching list page:`, error);
    return [];
  }
}

async function scrapeNoticeDetail(url: string) {
    console.log(`Scraping detail: ${url}`);
    try {
        const response = await fetch(url);
        const html = await response.text();
        const $ = cheerio.load(html);
        
        // Verified Selectors
        const title = $('.kboard-title h1').text().trim();
        const content = $('.content-view').html() || '';
        const dateStr = $('.detail-date .detail-value').text().trim();
        const viewCountStr = $('.detail-view .detail-value').text().trim().replace(/[^0-9]/g, '');
        
        const viewCount = parseInt(viewCountStr || '0', 10);
        
        let created_at = new Date().toISOString();
        if (dateStr) {
            // Try parsing "2025-12-01 14:13" or similar
            // Basic check if it's "YYYY.MM.DD" or "YYYY-MM-DD"
             const parsedDate = new Date(dateStr.replace(/\./g, '-'));
             if (!isNaN(parsedDate.getTime())) {
                 created_at = parsedDate.toISOString();
             }
        }

        if (!title) {
            console.warn(`Skipping ${url} - No title found`);
            return null;
        }

        return {
            title,
            content,
            created_at,
            view_count: viewCount,
            is_published: true,
        };

    } catch (e) {
        console.error(`Error scraping ${url}:`, e);
        return null;
    }
}

async function migrate() {
    console.log('Starting full migration...');
    
    let page = 1;
    let totalSuccesses = 0;
    let totalFailures = 0;
    
    while (true) {
        console.log(`Processing page ${page}...`);
        const links = await fetchNotices(page);
        
        if (links.length === 0) {
            console.log(`No notices found on page ${page}. Stopping.`);
            break;
        }
        
        console.log(`Found ${links.length} notices on page ${page}.`);
        
        for (const link of links) {
            const data = await scrapeNoticeDetail(link);
            if (data) {
                 const { data: existing } = await supabase
                    .from('notices')
                    .select('id')
                    .eq('title', data.title)
                    .single();
                 
                 let error;
                 
                 if (existing) {
                     const { error: updateError } = await supabase
                        .from('notices')
                        .update(data)
                        .eq('id', existing.id);
                     error = updateError;
                     if(!error) console.log(`Updated: ${data.title}`);
                 } else {
                     const { error: insertError } = await supabase
                        .from('notices')
                        .insert(data);
                     error = insertError;
                     if(!error) console.log(`Inserted: ${data.title}`);
                 }
                 
                 if (error) {
                     console.error(`Failed to process ${data.title}:`, error);
                     totalFailures++;
                 } else {
                     totalSuccesses++;
                 }
            } else {
                totalFailures++;
            }
            
            // Throttle per item
            await new Promise(resolve => setTimeout(resolve, 300));
        }
        
        page++;
        // Throttle per page
        await new Promise(resolve => setTimeout(resolve, 1000));
    }
    
    console.log(`Full migration complete. Total Success: ${totalSuccesses}, Total Failures: ${totalFailures}`);
}

migrate();
