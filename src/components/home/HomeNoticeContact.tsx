import { Section } from "@/components/common";
import { getNotices } from "@/lib/queries/notices";
import { HomeContact } from "./HomeContact";
import Link from "next/link";

export async function HomeNoticeContact() {
  const { notices } = await getNotices(1, 10);

  // Date formatting helper
  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}.${month}.${day}`;
  };

  return (
    <Section id="notice-contact" background="white" className="py-20 md:py-32">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        {/* Left Column: Notice */}
        <div className="flex flex-col">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">공지사항</h2>
            <div className="w-12 h-1 bg-[var(--color-primary)] mx-auto opacity-30"></div>
          </div>
          
          <div className="flex-1">
             {/* Desktop Table Layout */}
            <div className="hidden md:block">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="py-3 font-medium text-gray-500 w-3/4 pl-2">제목</th>
                    <th className="py-3 font-medium text-gray-500 text-right pr-2">작성일</th>
                  </tr>
                </thead>
                <tbody>
                  {notices.map((notice) => (
                    <tr key={notice.id} className="border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors">
                      <td className="py-4 pl-2">
                        <Link href={`/notice/${notice.id}`} className="block truncate text-gray-800 hover:text-[var(--color-orange)] transition-colors">
                          {notice.title}
                        </Link>
                      </td>
                      <td className="py-4 text-right text-gray-500 text-sm pr-2 whitespace-nowrap">
                        {formatDate(notice.created_at)}
                      </td>
                    </tr>
                  ))}
                  {notices.length === 0 && (
                    <tr>
                      <td colSpan={2} className="py-8 text-center text-gray-500">
                        등록된 공지사항이 없습니다.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

            {/* Mobile List Layout */}
            <div className="md:hidden space-y-4">
               {notices.map((notice) => (
                  <Link key={notice.id} href={`/notice/${notice.id}`} className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <h3 className="font-medium text-gray-900 mb-2 line-clamp-2">{notice.title}</h3>
                    <p className="text-sm text-gray-500 text-right">{formatDate(notice.created_at)}</p>
                  </Link>
               ))}
               {notices.length === 0 && (
                  <div className="py-8 text-center text-gray-500 bg-gray-50 rounded-lg">
                    등록된 공지사항이 없습니다.
                  </div>
               )}
            </div>
          </div>
        </div>

        {/* Right Column: Contact */}
        <div className="flex flex-col">
           <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">문의하기</h2>
             <div className="w-12 h-1 bg-[var(--color-primary)] mx-auto opacity-30"></div>
          </div>
          <HomeContact />
        </div>
      </div>
    </Section>
  );
}
