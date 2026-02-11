"use client";

import { useState, useCallback } from "react";
import { useRouter, useSearchParams } from "next/navigation";

interface NoticeSearchProps {
  initialSearch?: string;
}

export function NoticeSearch({ initialSearch = "" }: NoticeSearchProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [searchValue, setSearchValue] = useState(initialSearch);

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      const params = new URLSearchParams(searchParams.toString());

      if (searchValue.trim()) {
        params.set("search", searchValue.trim());
      } else {
        params.delete("search");
      }
      params.delete("page"); // Reset to first page on new search

      router.push(`/notice?${params.toString()}`);
    },
    [searchValue, searchParams, router]
  );

  const handleClear = useCallback(() => {
    setSearchValue("");
    const params = new URLSearchParams(searchParams.toString());
    params.delete("search");
    params.delete("page");
    router.push(`/notice?${params.toString()}`);
  }, [searchParams, router]);

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-2xl mx-auto py-8">
      <div className="flex items-center justify-center gap-1 h-10">
        <select className="h-full px-4 border border-[#E1E1E1] text-sm text-gray-600 focus:outline-none focus:border-gray-400 min-w-[100px] rounded-none">
          <option>전체</option>
        </select>
        <input
          type="text"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          className="h-full px-4 border border-[#E1E1E1] text-sm flex-1 focus:outline-none focus:border-gray-400 rounded-none"
        />
        <button
          type="submit"
          className="h-full px-6 bg-[#666] text-white text-sm font-medium hover:bg-[#555] transition-colors rounded-none"
        >
          검색
        </button>
      </div>
    </form>
  );
}
