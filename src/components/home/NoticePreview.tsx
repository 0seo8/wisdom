import Link from "next/link";
import { Section, SectionTitle } from "@/components/common";
import { getNotices } from "@/lib/queries/notices";

export async function NoticePreview() {
  // Fetch latest 10 published notices
  const { notices } = await getNotices(1, 10);

  if (notices.length === 0) {
    return null;
  }

  return (
    <Section id="notices" background="white">
      <div className="flex items-end justify-between mb-8 md:mb-12">
        <SectionTitle
          title="공지사항"
          subtitle="NOTICE"
          align="left"
          className="mb-0"
        />
        <Link
          href="/notice"
          className="text-sm text-gray-600 hover:text-[var(--color-orange)] transition-colors flex items-center gap-1 group"
        >
          더보기
          <svg
            className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </Link>
      </div>

      {/* Desktop: Table Layout */}
      <div className="hidden md:block bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-100">
            <tr>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 w-16">
                번호
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                제목
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 w-32">
                등록일
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {notices.map((notice, index) => (
              <tr
                key={notice.id}
                className="hover:bg-gray-50 transition-colors group"
              >
                <td className="px-6 py-4 text-sm text-gray-600">
                  {index + 1}
                </td>
                <td className="px-6 py-4">
                  <Link
                    href={`/notice/${notice.id}`}
                    className="text-gray-900 hover:text-[var(--color-orange)] transition-colors line-clamp-1 group-hover:underline"
                  >
                    {notice.title}
                  </Link>
                </td>
                <td className="px-6 py-4 text-sm text-gray-600 whitespace-nowrap">
                  {formatDate(notice.created_at)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile: Card Layout */}
      <div className="md:hidden space-y-3">
        {notices.map((notice, index) => (
          <Link
            key={notice.id}
            href={`/notice/${notice.id}`}
            className="block bg-white rounded-xl shadow-sm border border-gray-100 p-4 hover:shadow-md transition-shadow"
          >
            <div className="flex items-start gap-3">
              <span className="flex-shrink-0 w-8 h-8 bg-[var(--color-orange)]/10 text-[var(--color-orange)] rounded-full flex items-center justify-center text-sm font-semibold">
                {index + 1}
              </span>
              <div className="flex-1 min-w-0">
                <h3 className="text-gray-900 font-medium line-clamp-2 mb-1">
                  {notice.title}
                </h3>
                <p className="text-sm text-gray-500">
                  {formatDate(notice.created_at)}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </Section>
  );
}

// Date formatting helper (YYYY.MM.DD)
function formatDate(dateString: string): string {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}.${month}.${day}`;
}
