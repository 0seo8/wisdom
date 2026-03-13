import Link from "next/link";
import type { NoticeRecord } from "@/lib/queries/notices";

interface NoticeNavigationProps {
  prevNotice: NoticeRecord | null;
  nextNotice: NoticeRecord | null;
}

export function NoticeNavigation({
  prevNotice,
  nextNotice,
}: NoticeNavigationProps) {
  return (
    <>
      <div className="kboard-document-navi">
        <div className="kboard-prev-document">
          {prevNotice ? (
            <Link href={`/notice/${prevNotice.id}`} title={prevNotice.title}>
              <span className="navi-arrow">«</span>
              <span className="navi-document-title kboard-default-cut-strings">
                {prevNotice.title}
              </span>
            </Link>
          ) : (
            <span className="navi-document-title kboard-default-cut-strings">
              이전 글이 없습니다
            </span>
          )}
        </div>

        <div className="kboard-next-document">
          {nextNotice ? (
            <Link href={`/notice/${nextNotice.id}`} title={nextNotice.title}>
              <span className="navi-document-title kboard-default-cut-strings">
                {nextNotice.title}
              </span>
              <span className="navi-arrow">»</span>
            </Link>
          ) : (
            <span className="navi-document-title kboard-default-cut-strings">
              다음 글이 없습니다
            </span>
          )}
        </div>
      </div>

      <div className="kboard-control">
        <div className="left">
          <Link href="/notice" className="kboard-default-button-small">
            목록보기
          </Link>
        </div>
      </div>

      <div className="kboard-default-poweredby">
        <a
          href="https://www.cosmosfarm.com/products/kboard"
          target="_blank"
          rel="noreferrer"
          title="의미있는 워드프레스 게시판"
        >
          Powered by KBoard
        </a>
      </div>
    </>
  );
}
