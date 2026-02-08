import Link from "next/link";
import type { Notice } from "@/types/database";

interface NoticeNavigationProps {
  prevNotice: Notice | null;
  nextNotice: Notice | null;
}

export function NoticeNavigation({
  prevNotice,
  nextNotice,
}: NoticeNavigationProps) {
  return (
    <div className="mt-8">
      {/* Prev/Next Navigation */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden mb-6">
        {/* Next Notice (newer) */}
        {nextNotice ? (
          <Link
            href={`/notice/${nextNotice.id}`}
            className="flex items-center gap-4 px-6 py-4 border-b border-gray-100 hover:bg-gray-50 transition-colors group"
          >
            <div className="shrink-0 flex items-center gap-2 text-gray-500">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 15l7-7 7 7"
                />
              </svg>
              <span className="text-sm font-medium w-16">다음 글</span>
            </div>
            <span className="text-gray-700 group-hover:text-[var(--color-orange)] transition-colors truncate">
              {nextNotice.title}
            </span>
          </Link>
        ) : (
          <div className="flex items-center gap-4 px-6 py-4 border-b border-gray-100 bg-gray-50">
            <div className="shrink-0 flex items-center gap-2 text-gray-400">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 15l7-7 7 7"
                />
              </svg>
              <span className="text-sm font-medium w-16">다음 글</span>
            </div>
            <span className="text-gray-400">다음 글이 없습니다</span>
          </div>
        )}

        {/* Previous Notice (older) */}
        {prevNotice ? (
          <Link
            href={`/notice/${prevNotice.id}`}
            className="flex items-center gap-4 px-6 py-4 hover:bg-gray-50 transition-colors group"
          >
            <div className="shrink-0 flex items-center gap-2 text-gray-500">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
              <span className="text-sm font-medium w-16">이전 글</span>
            </div>
            <span className="text-gray-700 group-hover:text-[var(--color-orange)] transition-colors truncate">
              {prevNotice.title}
            </span>
          </Link>
        ) : (
          <div className="flex items-center gap-4 px-6 py-4 bg-gray-50">
            <div className="shrink-0 flex items-center gap-2 text-gray-400">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
              <span className="text-sm font-medium w-16">이전 글</span>
            </div>
            <span className="text-gray-400">이전 글이 없습니다</span>
          </div>
        )}
      </div>

      {/* Back to List Button */}
      <div className="flex justify-center">
        <Link
          href="/notice"
          className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-colors font-medium"
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
              d="M4 6h16M4 10h16M4 14h16M4 18h16"
            />
          </svg>
          목록으로 돌아가기
        </Link>
      </div>
    </div>
  );
}
