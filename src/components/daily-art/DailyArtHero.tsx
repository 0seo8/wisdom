"use client";

const bucketUrl =
  process.env.NEXT_PUBLIC_SUPABASE_URL + "/storage/v1/object/public/images";

const HERO_BG_URL = `${bucketUrl}/daily-art/daily-art-hero.png`;

export function DailyArtHero() {
  return (
    <>
      <section className="hero-section hero-section--fixed hero-section--mobile-tall">
        <img
          src={HERO_BG_URL}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
          aria-hidden="true"
        />
        <div
          className="hero-overlay"
          style={{ ["--hero-overlay-opacity" as string]: 0.5 }}
          aria-hidden="true"
        />
        <div className="container hero-content px-4">
          <h1 className="hero-page-title hero-font-times hero-title-shadow-strong text-[71px] md:text-[100px]">
            Arts of Living
          </h1>
        </div>
      </section>

      <section className="bg-[#C8BFA9] py-12 md:py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              예술이 힐링이 되는 곳!
            </h2>
            <p className="text-gray-800 leading-relaxed">
              &ldquo;예술의 본질은 존재를 완성하는데 있습니다.&rdquo;
              <br />
              예술을 통해 내적 성찰을 할 수 있도록
              <br />
              모두에게 열려 있지만 누구도 소외되지 않는
              <br />
              쉽고 편하고 안전한 리허설 공간을 만들어 드립니다.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
