"use client";

import type { NoticeRecord } from "@/lib/queries/notices";

interface NoticeDetailProps {
  notice: NoticeRecord;
}

function formatDetailDate(dateString: string): string {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  return `${year}-${month}-${day} ${hours}:${minutes}`;
}

export function NoticeDetail({ notice }: NoticeDetailProps) {
  return (
    <article id="kboard-default-document">
      <div
        className="kboard-document-wrap"
        itemScope
        itemType="http://schema.org/Article"
      >
        <div className="kboard-title" itemProp="name">
          <h1>{notice.title}</h1>
        </div>

        <div className="kboard-detail">
          <div className="detail-attr detail-writer">
            <div className="detail-name">작성자</div>
            <div className="detail-value">{notice.author_name ?? "지혜의밭"}</div>
          </div>
          <div className="detail-attr detail-date">
            <div className="detail-name">작성일</div>
            <div className="detail-value">{formatDetailDate(notice.created_at)}</div>
          </div>
          <div className="detail-attr detail-view">
            <div className="detail-name">조회</div>
            <div className="detail-value">{notice.view_count ?? 0}</div>
          </div>
        </div>

        <div className="kboard-content" itemProp="description">
          <div
            className="content-view notice-detail-content"
            dangerouslySetInnerHTML={{ __html: notice.content }}
          />
        </div>

        <div className="kboard-document-action">
          <div className="left">
            <button
              type="button"
              className="kboard-button-action kboard-button-like"
              data-uid={notice.source_uid ?? ""}
              title="좋아요"
            >
              좋아요 <span className="kboard-document-like-count">{notice.vote_count ?? 0}</span>
            </button>
            <button
              type="button"
              className="kboard-button-action kboard-button-unlike"
              data-uid={notice.source_uid ?? ""}
              title="싫어요"
            >
              싫어요 <span className="kboard-document-unlike-count">0</span>
            </button>
          </div>
          <div className="right">
            <button
              type="button"
              className="kboard-button-action kboard-button-print"
              title="인쇄"
              onClick={() => window.print()}
            >
              인쇄
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}
