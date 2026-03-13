"use client";

import { useCallback, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import type { NoticeSearchTarget, NoticeSort } from "@/lib/source-notice-reference";

interface NoticeSearchProps {
  initialKeyword?: string;
  initialTarget?: NoticeSearchTarget;
  initialSort?: NoticeSort;
}

export function NoticeSearch({
  initialKeyword = "",
  initialTarget = "",
  initialSort = "newest",
}: NoticeSearchProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [keyword, setKeyword] = useState(initialKeyword);
  const [target, setTarget] = useState<NoticeSearchTarget>(initialTarget);

  const handleSubmit = useCallback(
    (event: React.FormEvent) => {
      event.preventDefault();
      const params = new URLSearchParams(searchParams.toString());

      if (keyword.trim()) {
        params.set("keyword", keyword.trim());
      } else {
        params.delete("keyword");
      }

      if (target) {
        params.set("target", target);
      } else {
        params.delete("target");
      }

      if (initialSort === "newest" && !params.get("sort")) {
        params.delete("sort");
      }

      params.delete("page");
      router.push(`/notice?${params.toString()}`);
    },
    [initialSort, keyword, router, searchParams, target]
  );

  const handleClear = useCallback(() => {
    setKeyword("");
    setTarget("");
    const params = new URLSearchParams(searchParams.toString());
    params.delete("keyword");
    params.delete("target");
    params.delete("page");
    router.push(`/notice?${params.toString()}`);
  }, [router, searchParams]);

  return (
    <div className="kboard-search">
      <form onSubmit={handleSubmit}>
        <input type="hidden" name="mod" value="list" />
        <input type="hidden" name="pageid" value="1" />
        <select
          name="target"
          value={target}
          onChange={(event) => setTarget(event.target.value as NoticeSearchTarget)}
          aria-label="검색 대상"
        >
          <option value="">전체</option>
          <option value="title">제목</option>
          <option value="content">내용</option>
          <option value="member_display">작성자</option>
        </select>
        <input
          type="text"
          name="keyword"
          value={keyword}
          onChange={(event) => setKeyword(event.target.value)}
          aria-label="검색어"
        />
        <button type="submit" className="kboard-default-button-small">
          검색
        </button>
        {initialKeyword ? (
          <button
            type="button"
            onClick={handleClear}
            className="kboard-default-button-small"
          >
            초기화
          </button>
        ) : null}
      </form>
    </div>
  );
}
