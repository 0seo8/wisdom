import type { Notice } from "@/types/database";
import { NoticeItem } from "./NoticeItem";

interface NoticeListProps {
  notices: Notice[];
  totalCount: number;
  currentPage: number;
}

export function NoticeList({ notices, totalCount, currentPage }: NoticeListProps) {
  if (notices.length === 0) {
    return (
      <div className="text-center py-24 border-y border-gray-100">
        <div className="w-16 h-16 mx-auto mb-4 bg-gray-50 rounded-full flex items-center justify-center">
          <svg
            className="w-8 h-8 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
        </div>
        <h3 className="text-lg font-medium text-gray-900 mb-2">
          등록된 공지사항이 없습니다
        </h3>
        <p className="text-gray-500">
          새로운 공지사항이 등록되면 이곳에 표시됩니다.
        </p>
      </div>
    );
  }

  const itemsPerPage = 10;

  return (
    <div className="w-full">
      {/* Header */}
      <div className="hidden md:flex items-center py-4 border-t-2 border-gray-900 border-b border-gray-200 text-sm font-medium text-gray-600">
        <div className="w-20 text-center shrink-0">번호</div>
        <div className="flex-1 text-center">제목</div>
        <div className="w-32 text-center shrink-0">작성일</div>
        <div className="w-20 text-center shrink-0">조회</div>
      </div>

      {/* List */}
      <div className="border-b border-gray-200 divide-y divide-gray-100">
        {notices.map((notice, index) => (
          <NoticeItem 
            key={notice.id} 
            notice={notice} 
            number={totalCount - ((currentPage - 1) * itemsPerPage) - index}
          />
        ))}
      </div>
    </div>
  );
}
