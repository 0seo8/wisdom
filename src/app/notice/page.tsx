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
  searchParams: Promise<{ page?: string; search?: string }>;
}

async function NoticeContent({
  page,
  search,
}: {
  page: number;
  search?: string;
}) {
  const { notices, totalPages, currentPage } = await getNotices(
    page,
    10,
    search
  );

  return (
    <>
      <NoticeList notices={notices} />
      <NoticePagination currentPage={currentPage} totalPages={totalPages} />
    </>
  );
}

function NoticeListSkeleton() {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
      {/* Header Skeleton */}
      <div className="hidden sm:flex items-center justify-between py-4 px-6 bg-gray-50 border-b border-gray-100">
        <div className="h-5 w-16 bg-gray-200 rounded animate-pulse" />
        <div className="flex items-center gap-6">
          <div className="h-5 w-24 bg-gray-200 rounded animate-pulse" />
          <div className="h-5 w-16 bg-gray-200 rounded animate-pulse" />
        </div>
      </div>

      {/* List Skeleton */}
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          className="flex items-center justify-between py-5 px-6 border-b border-gray-100"
        >
          <div className="flex-1">
            <div className="h-5 bg-gray-200 rounded animate-pulse w-3/4" />
          </div>
          <div className="flex items-center gap-6">
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
  const search = params.search;

  return (
    <>
      <section className="section bg-white pt-32 md:pt-36">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <Suspense fallback={null}>
              <NoticeSearch initialSearch={search} />
            </Suspense>

            <Suspense fallback={<NoticeListSkeleton />}>
              <NoticeContent page={page} search={search} />
            </Suspense>
          </div>
        </div>
      </section>
    </>
  );
}
