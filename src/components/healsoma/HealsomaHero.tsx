"use client";

export function HealsomaHero() {
  return (
    <section className="relative overflow-hidden">
      <div
        className="absolute inset-0 z-0 bg-[position:0px_0px] bg-no-repeat md:bg-[position:0px_-172px]"
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

      <div className="relative z-20 mx-auto flex w-full max-w-[1200px] justify-center px-4 pt-[60px]">
        <img
          src="https://artswisdom.com/wp-content/uploads/2025/04/222.png"
          alt=""
          className="h-auto w-full max-w-[552px]"
        />
      </div>
    </section>
  );
}
