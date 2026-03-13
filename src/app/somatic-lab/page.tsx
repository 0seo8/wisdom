import {
  SomaticLabHero,
  OverviewSection,
  EffectSection,
  ArticleSection,
  ResearchersSection,
  ProgramListSection,
} from "@/components/somatic-lab";

import { getPrograms } from "@/lib/queries/programs";
import { createClient } from "@supabase/supabase-js";

// Initialize supabase here just to get researchers easily, or create a query function. For brevity:
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default async function SomaticLabPage() {
  const programs = await getPrograms("somatic-lab");
  
  const { data: researchersData } = await supabase
    .from("researchers")
    .select("*")
    .order("order", { ascending: true });

  const researchers = researchersData || [];

  return (
    <main className="somatic-lab-page bg-[#fcf3eb]">
      <SomaticLabHero />
      <OverviewSection />
      <EffectSection />
      <ArticleSection />
      <ResearchersSection researchers={researchers} />
      <ProgramListSection programs={programs} />
    </main>
  );
}
