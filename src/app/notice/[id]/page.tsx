import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
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
      <section className="bg-[#FAF7F2] py-20 min-h-[600px]">
        <div className="container px-4 mx-auto max-w-[1300px]">
          <div className="mb-8">
            <Link
              href="/notice"
              className="inline-flex items-center gap-2 text-gray-500 hover:text-[#7a5c51] transition-colors font-medium border border-gray-200 bg-white px-4 py-2 rounded-lg shadow-sm"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              <span>공지사항 목록으로</span>
            </Link>
          </div>

          <div className="w-full">
            <NoticeDetail notice={notice} />
            <div className="mt-12">
              <NoticeNavigation prevNotice={prev} nextNotice={next} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
