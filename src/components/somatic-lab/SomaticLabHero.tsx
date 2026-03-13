"use client";

export function SomaticLabHero() {
  return (
    <section className="hero-section hero-section--fixed hero-section--mobile-banner">
      <div
        className="absolute inset-0 z-0 bg-cover bg-no-repeat bg-top md:bg-[position:center_-80px]"
        style={{
          backgroundImage:
            "url('http://artswisdom.com/wp-content/uploads/2023/12/library-869061_1280.jpg')",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 z-10 bg-[#070707]"
        style={{ opacity: 0.57 }}
        aria-hidden="true"
      />

      <div className="container hero-content px-4">
        <h1 className="hero-page-title hero-font-times hero-title-shadow-strong text-[32px] md:text-[100px]">
          Somatic Laboratory
        </h1>
      </div>
    </section>
  );
}
