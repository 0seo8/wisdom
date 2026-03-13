import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getNoticeById, getAdjacentNotices, incrementViewCount } from "@/lib/queries/notices";
import { NoticeDetail, NoticeNavigation, NoticeHero } from "@/components/notice";

interface NoticeDetailPageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({
  params,
}: NoticeDetailPageProps): Promise<Metadata> {
  const { id } = await params;
  const noticeId = parseInt(id, 10);

  if (isNaN(noticeId)) {
    return {
      title: "공지사항을 찾을 수 없습니다",
    };
  }

  const notice = await getNoticeById(noticeId);

  if (!notice) {
    return {
      title: "공지사항을 찾을 수 없습니다",
    };
  }

  // Extract plain text from HTML content for description
  const plainText = notice.content
    .replace(/<[^>]*>/g, "")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, 160);

  return {
    title: notice.title,
    description: plainText || "지혜의밭 공지사항입니다.",
    openGraph: {
      title: `${notice.title} | 지혜의밭`,
      description: plainText || "지혜의밭 공지사항입니다.",
    },
  };
}

export default async function NoticeDetailPage({
  params,
}: NoticeDetailPageProps) {
  const { id } = await params;
  const noticeId = parseInt(id, 10);

  if (isNaN(noticeId)) {
    notFound();
  }

  const notice = await getNoticeById(noticeId);

  if (!notice) {
    notFound();
  }

  // Increment view count
  await incrementViewCount(noticeId);

  // Get adjacent notices for navigation
  const { prev, next } = await getAdjacentNotices(noticeId);

  return (
    <>
      <NoticeHero />
      <section className="elementor-section elementor-top-section elementor-element elementor-element-e2db768 elementor-section-boxed elementor-section-height-default elementor-section-height-default notice-elementor-shell">
        <div className="elementor-container elementor-column-gap-default">
          <div className="elementor-row">
            <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-5dea498">
              <div className="elementor-column-wrap elementor-element-populated">
                <div className="elementor-widget-wrap">
                  <div className="elementor-element elementor-element-6f1c249 elementor-widget elementor-widget-spacer">
                    <div className="elementor-widget-container">
                      <div className="elementor-spacer">
                        <div className="elementor-spacer-inner" />
                      </div>
                    </div>
                  </div>

                  <div className="elementor-element elementor-element-84fccab elementor-view-default elementor-widget elementor-widget-icon">
                    <div className="elementor-widget-container">
                      <div className="elementor-icon-wrapper">
                        <div className="elementor-icon" aria-hidden="true">
                          <svg viewBox="0 0 24 24" className="notice-volume-icon">
                            <path
                              fill="currentColor"
                              d="M3 10v4h4l5 4V6L7 10H3zm13.5 2c0-1.77-1-3.29-2.5-4.03v8.05A4.49 4.49 0 0 0 16.5 12zm-2.5-9.5v2.06c2.89.86 5 3.54 5 6.94s-2.11 6.08-5 6.94v2.06c4.01-.91 7-4.49 7-9s-2.99-8.09-7-9z"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="elementor-element elementor-element-003d057 elementor-widget elementor-widget-heading">
                    <div className="elementor-widget-container">
                      <h2 className="elementor-heading-title elementor-size-default">
                        공지사항
                      </h2>
                    </div>
                  </div>

                  <section className="elementor-section elementor-inner-section elementor-element elementor-element-4cda951 elementor-section-boxed elementor-section-height-default elementor-section-height-default">
                    <div className="elementor-container elementor-column-gap-default">
                      <div className="elementor-row">
                        <div className="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-58c5fe6">
                          <div className="elementor-column-wrap elementor-element-populated">
                            <div className="elementor-widget-wrap">
                              <div className="elementor-element elementor-element-3f0f563 elementor-widget elementor-widget-shortcode">
                                <div className="elementor-widget-container">
                                  <div className="elementor-shortcode">
                                    <div id="kboard-document">
                                      <NoticeDetail notice={notice} />
                                      <NoticeNavigation prevNotice={prev} nextNotice={next} />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
