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
    <section id="notice-contact" className="bg-[#FCF3EB] px-[10px] pb-[30px] pt-[10px] md:px-[20px] md:pb-[30px] md:pt-[55px]">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-[20px] md:grid-cols-[51.316%_43.671%] md:gap-[4.649%]">
        {/* Left Column: Notice */}
        <div className="flex flex-col">
          <div className="mb-[10px] md:mb-[10px]">
            <h2 className="m-[10px] text-center font-['Noto_Sans_KR',sans-serif] text-[24px] text-[#242424] md:text-[24px]">
              공지사항
            </h2>
          </div>

          <div className="flex-1">
            <div className="overflow-x-auto">
              <table className="w-full table-fixed border-0 border-b border-[#f1f1f1] text-[13px]">
                <thead>
                  <tr className="border-0">
                    <th className="h-auto border-0 py-[5px] pl-[5px] text-left font-normal text-black">제목</th>
                    <th className="w-20 h-auto border-0 py-[5px] text-center font-normal text-black">작성일</th>
                  </tr>
                </thead>
                <tbody>
                  {notices.map((notice) => (
                    <tr key={notice.id} className="border-0">
                      <td className="h-auto border-0 border-t border-[#f1f1f1] py-[5px] pl-[5px] align-middle text-left">
                        <Link href={`/notice/${notice.id}`} className="block truncate text-[13px] text-black no-underline">
                          {notice.title}
                        </Link>
                      </td>
                      <td className="w-20 h-auto border-0 border-t border-[#f1f1f1] py-[5px] align-middle text-center text-[13px] text-black">
                        {formatDate(notice.created_at)}
                      </td>
                    </tr>
                  ))}
                  {notices.length === 0 && (
                    <tr className="border-0">
                      <td colSpan={2} className="border-0 border-t border-[#f1f1f1] py-6 text-center text-[13px] text-gray-500">
                        등록된 공지사항이 없습니다.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Right Column: Contact */}
        <div className="flex flex-col">
          <div className="mb-[10px] md:mb-[10px]">
            <h2 className="m-[10px] text-center font-['Noto_Sans_KR',sans-serif] text-[24px] text-[#242424] md:text-[24px]">
              문의하기
            </h2>
          </div>
          <HomeContact />
        </div>
      </div>
    </section>
  );
}
