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
      {/* Speaker Icon & Title */}
      <div className="flex flex-col items-center mb-12">
        <div className="mb-4">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11 5L6 9H2V15H6L11 19V5Z" fill="#8C6A5E" stroke="#8C6A5E" strokeWidth="2" strokeLinejoin="round"/>
            <path d="M19.07 4.93C20.9447 6.80527 21.9979 9.34836 21.9979 12C21.9979 14.6516 20.9447 17.1947 19.07 19.07" stroke="#8C6A5E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M15.54 8.46C16.4771 9.39764 17.0037 10.6692 17.0037 12C17.0037 13.3308 16.4771 14.6024 15.54 15.54" stroke="#8C6A5E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">공지사항</h2>
      </div>

      {/* Info Bar */}
      <div className="flex items-center justify-between mb-4 text-sm">
        <div className="text-gray-600">
          전체 <span className="font-bold">{totalCount}</span>
        </div>
        <div>
          <select className="border-none bg-transparent text-gray-500 focus:ring-0 cursor-pointer">
            <option>최신순</option>
          </select>
        </div>
      </div>

      {/* Header */}
      <div className="hidden md:flex items-center py-4 border-t-2 border-gray-900 border-b border-gray-200 text-[15px] font-bold text-gray-800 bg-white">
        <div className="w-16 text-center shrink-0">번호</div>
        <div className="flex-1 text-center">제목</div>
        <div className="w-24 text-center shrink-0">작성자</div>
        <div className="w-28 text-center shrink-0">작성일</div>
        <div className="w-16 text-center shrink-0">추천</div>
        <div className="w-16 text-center shrink-0">조회</div>
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
