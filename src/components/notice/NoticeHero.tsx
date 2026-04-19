"use client";

const bucketUrl =
  process.env.NEXT_PUBLIC_SUPABASE_URL + "/storage/v1/object/public/images";

export function NoticeHero() {
  return (
    <section className="hero-section hero-section--fixed hero-section--mobile-banner">
      <div
        className="absolute inset-0 z-0 bg-cover bg-no-repeat bg-center"
        style={{
          backgroundImage:
            `url('${bucketUrl}/notice/hero-bg.jpg')`,
        }}
        aria-hidden="true"
      />
      <div
        className="hero-overlay"
        style={{ ["--hero-overlay-opacity" as string]: 0.5 }}
        aria-hidden="true"
      />
      <div className="container hero-content px-4">
        <h1 className="hero-page-title hero-font-times hero-title-shadow-strong text-[32px] uppercase md:text-[100px] md:normal-case">
          Notice
        </h1>
      </div>
    </section>
  );
}
