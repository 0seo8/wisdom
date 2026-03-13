"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

interface NoticePaginationProps {
  currentPage: number;
  totalPages: number;
}

export function NoticePagination({
  currentPage,
  totalPages,
}: NoticePaginationProps) {
  const searchParams = useSearchParams();

  if (totalPages <= 1) {
    return null;
  }

  const createHref = (page: number) => {
    const params = new URLSearchParams(searchParams.toString());
    if (page === 1) {
      params.delete("page");
    } else {
      params.set("page", page.toString());
    }
    return `/notice?${params.toString()}`;
  };

  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <nav className="kboard-pagination" aria-label="공지사항 페이지네이션">
      <ul className="kboard-pagination-pages">
        {currentPage > 1 ? (
          <li className="prev-page">
            <Link href={createHref(currentPage - 1)}>«</Link>
          </li>
        ) : null}

        {pages.map((page) => (
          <li key={page} className={page === currentPage ? "active" : undefined}>
            <Link href={createHref(page)}>{page}</Link>
          </li>
        ))}

        {currentPage < totalPages ? (
          <>
            <li className="next-page">
              <Link href={createHref(currentPage + 1)}>»</Link>
            </li>
            <li className="last-page">
              <Link href={createHref(totalPages)}>마지막</Link>
            </li>
          </>
        ) : null}
      </ul>
    </nav>
  );
}
