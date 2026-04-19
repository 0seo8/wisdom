import { getTimeline } from "@/lib/queries";

const bucketUrl =
  process.env.NEXT_PUBLIC_SUPABASE_URL + "/storage/v1/object/public/images";

const DESKTOP_TIMELINE_IMAGES: Record<number, string> = {
  2017: `${bucketUrl}/timeline/2020-desktop.png`,
  2018: `${bucketUrl}/timeline/2018-desktop.jpg`,
  2019: `${bucketUrl}/timeline/2019-desktop.jpg`,
  2020: `${bucketUrl}/timeline/2020-desktop.png`,
  2021: `${bucketUrl}/timeline/2021-desktop.jpg`,
  2022: `${bucketUrl}/timeline/2022-desktop.jpg`,
  2023: `${bucketUrl}/timeline/history-2.jpg`,
  2024: `${bucketUrl}/timeline/2024-desktop.jpg`,
  2025: `${bucketUrl}/misc/2323.png`,
};

const MOBILE_TIMELINE_IMAGES: Record<number, string> = {
  2017: `${bucketUrl}/timeline/2017-mobile.jpg`,
  2018: `${bucketUrl}/timeline/2018-mobile.jpg`,
  2019: `${bucketUrl}/timeline/2019-mobile.jpg`,
  2020: `${bucketUrl}/timeline/2020-mobile.jpg`,
  2021: `${bucketUrl}/timeline/2021-mobile.jpg`,
  2022: `${bucketUrl}/timeline/2022-mobile.jpg`,
  2023: `${bucketUrl}/timeline/history-tall.jpg`,
  2024: `${bucketUrl}/timeline/2024-mobile.jpg`,
  2025: `${bucketUrl}/timeline/2025-desktop.jpg`,
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
  const mobileYears = [...years].reverse();

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
                  src={DESKTOP_TIMELINE_IMAGES[year]}
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
          {mobileYears.map((year) => (
            <article key={year}>
              <h3 className="mb-4 hero-font-times text-center text-[30px] font-semibold text-[#85544D]">
                {year}
              </h3>
              <img
                src={MOBILE_TIMELINE_IMAGES[year]}
                alt=""
                className="mx-auto mb-4 block h-[176px] w-auto max-w-full"
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
