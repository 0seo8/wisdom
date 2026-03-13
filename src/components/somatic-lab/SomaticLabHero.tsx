"use client";

export function SomaticLabHero() {
  return (
    <section className="relative overflow-hidden pb-[400px] md:pb-[450px]">
      <div
        className="absolute inset-0 z-0 bg-[position:0px_0px] bg-cover bg-no-repeat md:bg-[position:0px_-80px]"
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

      <div className="relative z-20 mx-auto w-full max-w-full text-center">
        <h1 className="hero-font-times translate-y-[230px] text-[40px] font-semibold leading-none text-[#EFEDE1] md:translate-y-[235px] md:text-[100px]">
          Somatic Laboratory
        </h1>
      </div>
    </section>
  );
}
