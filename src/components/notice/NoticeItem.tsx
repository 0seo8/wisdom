import Link from "next/link";
import type { Notice } from "@/types/database";

interface NoticeItemProps {
  notice: Notice;
}

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}.${month}.${day}`;
}

export function NoticeItem({ notice }: NoticeItemProps) {
  return (
    <Link
      href={`/notice/${notice.id}`}
      className="block group"
    >
      <div className="flex items-center justify-between py-5 px-4 sm:px-6 border-b border-gray-100 hover:bg-gray-50 transition-colors">
        {/* Title */}
        <div className="flex-1 min-w-0 pr-4">
          <h3 className="text-base sm:text-lg font-medium text-gray-900 group-hover:text-[var(--color-orange)] transition-colors truncate">
            {notice.title}
          </h3>
        </div>

        {/* Meta Info */}
        <div className="flex items-center gap-4 sm:gap-6 text-sm text-gray-500 shrink-0">
          {/* Date */}
          <span className="hidden sm:inline">
            {formatDate(notice.created_at)}
          </span>
          <span className="sm:hidden text-xs">
            {formatDate(notice.created_at)}
          </span>

          {/* View Count */}
          <div className="flex items-center gap-1">
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
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
              />
            </svg>
            <span>{notice.view_count ?? 0}</span>
          </div>

          {/* Arrow */}
          <svg
            className="w-5 h-5 text-gray-400 group-hover:text-[var(--color-orange)] group-hover:translate-x-1 transition-all"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </div>
    </Link>
  );
}
