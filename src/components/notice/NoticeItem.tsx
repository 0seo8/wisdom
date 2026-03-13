import Link from "next/link";
import type { NoticeRecord } from "@/lib/queries/notices";

interface NoticeItemProps {
  notice: NoticeRecord;
  number: number;
}

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}.${month}.${day}`;
}

export function NoticeItem({ notice, number }: NoticeItemProps) {
  const author = notice.author_name ?? "지혜의밭";
  const displayNumber = notice.is_notice
    ? "공지사항"
    : notice.display_number ?? String(number);
  const voteCount = notice.vote_count ?? 0;
  const viewCount = notice.view_count ?? 0;

  return (
    <tr className={notice.is_notice ? "kboard-list-notice" : undefined}>
      <td className="kboard-list-uid">{displayNumber}</td>
      <td className="kboard-list-title">
        <Link href={`/notice/${notice.id}`}>
          <div className="kboard-default-cut-strings">
            {notice.title}
            <span className="kboard-comments-count" />
          </div>
        </Link>
        <div className="kboard-mobile-contents">
          <span className="contents-item kboard-user">{author}</span>
          <span className="contents-separator kboard-date">|</span>
          <span className="contents-item kboard-date">{formatDate(notice.created_at)}</span>
          <span className="contents-separator kboard-vote">|</span>
          <span className="contents-item kboard-vote">추천 {voteCount}</span>
          <span className="contents-separator kboard-view">|</span>
          <span className="contents-item kboard-view">조회 {viewCount}</span>
        </div>
      </td>
      <td className="kboard-list-user">{author}</td>
      <td className="kboard-list-date">{formatDate(notice.created_at)}</td>
      <td className="kboard-list-vote">{voteCount}</td>
      <td className="kboard-list-view">{viewCount}</td>
    </tr>
  );
}
