"use client";

export function ContactHero() {
  return (
    <>
      <section className="relative hidden overflow-hidden pb-[452px] md:block">
        <div
          className="absolute inset-0 z-0 bg-no-repeat"
          style={{
            backgroundImage:
              "url('http://artswisdom.com/wp-content/uploads/2023/10/vintage-2608934_1280.jpg')",
            backgroundPosition: "0px -105px",
            backgroundSize: "100% auto",
          }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 z-10 bg-[#120F0F]/50" aria-hidden="true" />
        <div className="relative z-20 mx-auto w-full max-w-full text-center">
          <h1 className="hero-font-times translate-y-[235px] text-[100px] font-semibold leading-none text-[#EFEDE1]">
            Contact us
          </h1>
        </div>
      </section>

      <section className="relative overflow-hidden px-[50px] py-[60px] md:hidden">
        <div
          className="absolute inset-0 z-0 bg-cover bg-no-repeat"
          style={{
            backgroundImage:
              "url('http://artswisdom.com/wp-content/uploads/2023/10/vintage-2608934_1280.jpg')",
            backgroundPosition: "top center",
          }}
          aria-hidden="true"
        />
        <div className="relative z-10 text-center">
          <h1 className="hero-font-times text-[32px] font-semibold leading-none text-white">
            Contact us
          </h1>
        </div>
      </section>
    </>
  );
}
