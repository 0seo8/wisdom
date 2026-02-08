import type { Notice } from "@/types/database";
import { NoticeItem } from "./NoticeItem";

interface NoticeListProps {
  notices: Notice[];
}

export function NoticeList({ notices }: NoticeListProps) {
  if (notices.length === 0) {
    return (
      <div className="text-center py-16">
        <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
          <svg
            className="w-8 h-8 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
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

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
      {/* Header */}
      <div className="hidden sm:flex items-center justify-between py-4 px-6 bg-gray-50 border-b border-gray-100">
        <span className="font-medium text-gray-700">제목</span>
        <div className="flex items-center gap-6 text-sm text-gray-500">
          <span className="w-24 text-center">작성일</span>
          <span className="w-16 text-center">조회수</span>
          <span className="w-5" />
        </div>
      </div>

      {/* List */}
      <div className="divide-y divide-gray-100">
        {notices.map((notice) => (
          <NoticeItem key={notice.id} notice={notice} />
        ))}
      </div>
    </div>
  );
}
