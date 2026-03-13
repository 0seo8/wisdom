"use client";

import { useRouter, useSearchParams } from "next/navigation";
import type { NoticeRecord } from "@/lib/queries/notices";
import type { NoticeSort } from "@/lib/source-notice-reference";
import { NoticeItem } from "./NoticeItem";

interface NoticeListProps {
  notices: NoticeRecord[];
  totalCount: number;
  currentPage: number;
  sort: NoticeSort;
}

export function NoticeList({
  notices,
  totalCount,
  currentPage,
  sort,
}: NoticeListProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleSortChange = (nextSort: NoticeSort) => {
    const params = new URLSearchParams(searchParams.toString());
    if (nextSort === "newest") {
      params.delete("sort");
    } else {
      params.set("sort", nextSort);
    }
    params.delete("page");
    router.push(`/notice?${params.toString()}`);
  };

  if (notices.length === 0) {
    return (
      <>
        <div className="kboard-list-header">
          <div className="kboard-total-count">전체 {totalCount}</div>
          <div className="kboard-sort">
            <select value={sort} disabled aria-label="정렬">
              <option value="newest">최신순</option>
            </select>
          </div>
        </div>
        <div className="kboard-empty-state">등록된 공지사항이 없습니다.</div>
      </>
    );
  }

  return (
    <>
      <div className="kboard-list-header">
        <div className="kboard-total-count">전체 {totalCount}</div>
        <div className="kboard-sort">
          <select
            name="sort"
            value={sort}
            onChange={(event) => handleSortChange(event.target.value as NoticeSort)}
            aria-label="정렬"
          >
            <option value="newest">최신순</option>
            <option value="best">추천순</option>
            <option value="viewed">조회순</option>
            <option value="updated">업데이트순</option>
          </select>
        </div>
      </div>

      <div className="kboard-list">
        <table>
          <thead>
            <tr>
              <td className="kboard-list-uid">번호</td>
              <td className="kboard-list-title">제목</td>
              <td className="kboard-list-user">작성자</td>
              <td className="kboard-list-date">작성일</td>
              <td className="kboard-list-vote">추천</td>
              <td className="kboard-list-view">조회</td>
            </tr>
          </thead>
          <tbody>
            {notices.map((notice, index) => (
              <NoticeItem
                key={notice.id}
                notice={notice}
                number={totalCount - ((currentPage - 1) * 10) - index}
              />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
