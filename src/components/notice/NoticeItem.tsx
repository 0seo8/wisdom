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
  const isNotice = notice.id === -1; // Placeholder for important notice logic
  const author = "지혜의밭"; // Default author as seen in screenshots
  const recommendations = 0; // Default recommendations as not in DB

  return (
    <Link href={`/notice/${notice.id}`} className="block group">
      {/* Mobile View */}
      <div className="md:hidden flex flex-col gap-2 py-5 px-4 border-b border-gray-100">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-base font-medium text-gray-900 group-hover:text-[var(--color-orange)] transition-colors line-clamp-2">
            {isNotice && <span className="text-[var(--color-orange)] font-bold mr-2">[공지]</span>}
            {notice.title}
          </h3>
        </div>
        <div className="flex items-center gap-3 text-xs text-gray-500">
          <span>{author}</span>
          <span className="w-px h-3 bg-gray-300" />
          <span>{formatDate(notice.created_at)}</span>
          <span className="w-px h-3 bg-gray-300" />
          <div className="flex items-center gap-1">
             <span>조회 {notice.view_count ?? 0}</span>
          </div>
        </div>
      </div>

      {/* Desktop View */}
      <div className={`hidden md:flex items-center py-4 border-b border-gray-100 hover:bg-gray-50 transition-colors ${isNotice ? 'bg-gray-50/50' : ''}`}>
        <div className={`w-16 text-center shrink-0 text-sm ${isNotice ? 'text-gray-900 font-bold' : 'text-gray-500'}`}>
          {isNotice ? "공지사항" : number}
        </div>
        <div className="flex-1 min-w-0 px-4 text-left">
          <span className={`text-[#333] group-hover:text-[var(--color-orange)] transition-colors truncate block text-[15px] ${isNotice ? 'font-bold' : ''}`}>
            {notice.title}
          </span>
        </div>
        <div className="w-24 text-center text-gray-600 shrink-0 text-[14px]">
          {author}
        </div>
        <div className="w-28 text-center text-gray-500 shrink-0 text-[14px]">
          {formatDate(notice.created_at)}
        </div>
        <div className="w-16 text-center text-gray-500 shrink-0 text-[14px]">
          {recommendations}
        </div>
        <div className="w-16 text-center text-gray-500 shrink-0 text-[14px]">
          {notice.view_count ?? 0}
        </div>
      </div>
    </Link>
  );
}
