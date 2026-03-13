"use client";

export function HealsomaHero() {
  return (
    <section className="hero-section hero-section--logo">
      <div
        className="absolute inset-0 z-0 bg-no-repeat bg-center lg:bg-[position:0px_-172px] lg:bg-fixed"
        style={{
          backgroundImage:
            "url('https://artswisdom.com/wp-content/uploads/2025/04/leaves-8222919_1280-1.jpg')",
          backgroundSize: "100% auto",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 z-10 bg-[#070707]"
        style={{ opacity: 0.57 }}
        aria-hidden="true"
      />

      <div className="container hero-content px-4">
        <img
          src="https://artswisdom.com/wp-content/uploads/2025/04/222.png"
          alt=""
          className="h-auto w-full max-w-[320px] md:max-w-[552px]"
        />
      </div>
    </section>
  );
}
