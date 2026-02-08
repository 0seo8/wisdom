"use client";

const PARTNERS = [
  "서울특별시",
  "영등포구",
  "한국사회적기업진흥원",
  "한국사회적기업중앙회",
  "서울사회적경제지원센터",
  "한국콘텐츠진흥원",
  "한국문화예술교육진흥원",
  "한국문화예술위원회",
];

export function Partners() {
  const items = [...PARTNERS, ...PARTNERS];

  return (
    <section id="partners" className="py-12 md:py-16 bg-gray-50 overflow-hidden">
      <div className="container">
        <div className="text-center mb-8 md:mb-10">
          <p className="text-sm font-medium text-gray-500 tracking-widest uppercase mb-2">
            PARTNERS
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            함께한 기업, 기관
          </h2>
        </div>
      </div>

      <div className="relative group">
        <div
          className="flex gap-6 group-hover:[animation-play-state:paused]"
          style={{
            animation: "partner-scroll 30s linear infinite",
          }}
        >
          {items.map((partner, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 bg-white rounded-lg border border-gray-200 px-8 py-5 min-w-[180px] flex items-center justify-center shadow-sm"
            >
              <span className="text-gray-700 font-medium text-center whitespace-nowrap text-sm">
                {partner}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
