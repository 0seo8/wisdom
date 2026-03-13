"use client";

export function BusinessHero() {
  return (
    <section className="relative overflow-hidden pb-[400px] md:pb-[452px]">
      <div
        className="absolute inset-0 z-0 bg-center bg-cover bg-no-repeat"
        style={{
          backgroundImage:
            "url('http://artswisdom.com/wp-content/uploads/2023/10/20210615_112010.png')",
        }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 z-10 bg-[#120F0F]/50" aria-hidden="true" />

      <div className="relative z-20 mx-auto w-full max-w-full text-center">
        <h1 className="hero-font-times translate-y-[230px] text-[40px] font-semibold leading-none text-[#EFEDE1] md:translate-y-[235px] md:text-[100px]">
          Educational Event
        </h1>
      </div>
    </section>
  );
}
