import { getTimeline } from "@/lib/queries";

const TIMELINE_IMAGES: Record<number, string> = {
  2017: "https://artswisdom.com/wp-content/uploads/2023/10/타임라인사진01.png",
  2018: "https://artswisdom.com/wp-content/uploads/2023/11/타임라인사진_바이올린2018.jpg",
  2019: "https://artswisdom.com/wp-content/uploads/2023/11/히스토리-353x1024.jpg",
  2020: "https://artswisdom.com/wp-content/uploads/2023/10/타임라인사진2022.jpg",
  2021: "https://artswisdom.com/wp-content/uploads/2023/10/타임라인사진2021.jpg",
  2022: "https://artswisdom.com/wp-content/uploads/2023/11/히스토리2.jpg",
  2023: "https://artswisdom.com/wp-content/uploads/2024/01/히스토리2024_이미지수정.jpg",
  2024: "https://artswisdom.com/wp-content/uploads/2026/01/2024-copy.jpg",
  2025: "https://artswisdom.com/wp-content/uploads/2025/12/2323.png",
};

function formatTimelineItem(month: number | null, title: string) {
  if (!month) {
    return title;
  }

  return `${String(month).padStart(2, "0")}. ${title}`;
}

export async function Timeline() {
  const timeline = await getTimeline();
  const entries = timeline.reduce<Record<number, { title: string; month: number | null }[]>>((acc, item) => {
    if (!acc[item.year]) {
      acc[item.year] = [];
    }

    acc[item.year].push({
      title: item.title,
      month: item.month,
    });

    return acc;
  }, {});

  const years = Object.keys(entries)
    .map(Number)
    .sort((a, b) => a - b);

  return (
    <>
      <section className="bg-[#FCF3EB] px-4 pb-5 pt-0 md:px-0">
        <div className="mx-auto max-w-[1200px]">
          <h2 className="hero-font-times text-center text-[25px] font-semibold text-[#85544D] md:text-[40px]">
            Timeline of Artswisdom
          </h2>
        </div>
      </section>

      <section className="hidden bg-[#FCF3EB] px-4 pb-0 md:block">
        <div className="mx-auto max-w-[1300px] overflow-x-auto">
          <div className="grid min-w-[1300px] grid-cols-9 gap-6">
            {years.map((year) => (
              <article key={year} className="text-left">
                <h3 className="mb-4 hero-font-times text-center text-[30px] font-semibold text-[#85544D]">
                  {year}
                </h3>
                <img
                  src={TIMELINE_IMAGES[year]}
                  alt=""
                  className="mb-4 w-full"
                  loading="lazy"
                />
                <ul className="space-y-2 text-[15px] text-[#5B5B5B]">
                  {entries[year].map((item) => (
                    <li key={`${year}-${item.month}-${item.title}`}>
                      {formatTimelineItem(item.month, item.title)}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#FCF3EB] px-4 pb-0 md:hidden">
        <div className="mx-auto max-w-[560px] space-y-10">
          {years.map((year) => (
            <article key={year}>
              <h3 className="mb-4 hero-font-times text-center text-[30px] font-semibold text-[#85544D]">
                {year}
              </h3>
              <img
                src={TIMELINE_IMAGES[year]}
                alt=""
                className="mb-4 w-full"
                loading="lazy"
              />
              <ul className="space-y-2 text-[14px] text-[#5B5B5B]">
                {entries[year].map((item) => (
                  <li key={`${year}-${item.month}-${item.title}`}>
                    {formatTimelineItem(item.month, item.title)}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
