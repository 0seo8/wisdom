import Link from "next/link";
import type { Notice } from "@/types/database";

interface NoticeItemProps {
  notice: Notice;
  number: number;
}

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}.${month}.${day}`;
}

export function NoticeItem({ notice, number }: NoticeItemProps) {
  return (
    <Link href={`/notice/${notice.id}`} className="block group">
      {/* Mobile View */}
      <div className="md:hidden flex flex-col gap-2 py-5 px-4 border-b border-gray-100">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-base font-medium text-gray-900 group-hover:text-[var(--color-orange)] transition-colors line-clamp-2">
            {notice.title}
          </h3>
        </div>
        <div className="flex items-center gap-3 text-sm text-gray-500">
          <span>{formatDate(notice.created_at)}</span>
          <span className="w-px h-3 bg-gray-300" />
          <div className="flex items-center gap-1">
             <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
             </svg>
             <span>{notice.view_count ?? 0}</span>
          </div>
        </div>
      </div>

      {/* Desktop View */}
      <div className="hidden md:flex items-center py-5 border-b border-gray-100 hover:bg-gray-50 transition-colors">
        <div className="w-20 text-center text-gray-500 shrink-0 font-medium">
          {number}
        </div>
        <div className="flex-1 min-w-0 px-4 text-left">
          <span className="text-gray-900 group-hover:text-[var(--color-orange)] transition-colors truncate block">
            {notice.title}
          </span>
        </div>
        <div className="w-32 text-center text-gray-500 shrink-0 text-sm">
          {formatDate(notice.created_at)}
        </div>
        <div className="w-20 text-center text-gray-500 shrink-0 text-sm">
          {notice.view_count ?? 0}
        </div>
      </div>
    </Link>
  );
}
