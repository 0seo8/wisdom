import type { Metadata } from "next";
import { Suspense } from "react";
import { getNotices } from "@/lib/queries/notices";
import {
  NoticeHero,
  NoticeSearch,
  NoticeList,
  NoticePagination,
} from "@/components/notice";

export const metadata: Metadata = {
  title: "공지사항",
  description:
    "지혜의밭의 새로운 소식과 공지사항을 확인하세요. 프로그램 안내, 이벤트, 중요 공지 등 다양한 소식을 전해드립니다.",
  openGraph: {
    title: "공지사항 | 지혜의밭",
    description: "지혜의밭의 새로운 소식과 공지사항을 확인하세요.",
  },
};

interface NoticePageProps {
  searchParams: Promise<{
    page?: string;
    keyword?: string;
    target?: string;
    sort?: string;
  }>;
}

async function NoticeContent({
  page,
  keyword,
  target,
  sort,
}: {
  page: number;
  keyword?: string;
  target?: string;
  sort?: string;
}) {
  const { notices, totalPages, currentPage, totalCount } = await getNotices({
    page,
    limit: 10,
    keyword,
    target:
      target === "title" || target === "content" || target === "member_display"
        ? target
        : "",
    sort:
      sort === "best" || sort === "viewed" || sort === "updated" ? sort : "newest",
    sourceLayout: true,
  });

  return (
    <div id="kboard-default-list">
      <NoticeList
        notices={notices}
        currentPage={currentPage}
        totalCount={totalCount}
        sort={
          sort === "best" || sort === "viewed" || sort === "updated"
            ? sort
            : "newest"
        }
      />
      <NoticePagination currentPage={currentPage} totalPages={totalPages} />
      <NoticeSearch
        initialKeyword={keyword}
        initialTarget={
          target === "title" || target === "content" || target === "member_display"
            ? target
            : ""
        }
        initialSort={
          sort === "best" || sort === "viewed" || sort === "updated"
            ? sort
            : "newest"
        }
      />
      <div className="kboard-default-poweredby">
        <a
          href="https://www.cosmosfarm.com/products/kboard"
          target="_blank"
          rel="noreferrer"
          title="의미있는 워드프레스 게시판"
        >
          Powered by KBoard
        </a>
      </div>
    </div>
  );
}

function NoticeListSkeleton() {
  return (
    <div className="border-y border-[#e5e5e5] bg-white">
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          className="flex items-center justify-between border-b border-[#f1f1f1] px-4 py-5"
        >
          <div className="flex-1">
            <div className="h-5 bg-gray-200 rounded animate-pulse w-3/4" />
          </div>
          <div className="flex items-center gap-6 pl-6">
            <div className="h-5 w-20 bg-gray-200 rounded animate-pulse" />
            <div className="h-5 w-12 bg-gray-200 rounded animate-pulse" />
          </div>
        </div>
      ))}
    </div>
  );
}

export default async function NoticePage({ searchParams }: NoticePageProps) {
  const params = await searchParams;
  const page = params.page ? parseInt(params.page, 10) : 1;
  const keyword = params.keyword;
  const target = params.target;
  const sort = params.sort;

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
                                    <Suspense fallback={<NoticeListSkeleton />}>
                                      <NoticeContent
                                        page={page}
                                        keyword={keyword}
                                        target={target}
                                        sort={sort}
                                      />
                                    </Suspense>
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
