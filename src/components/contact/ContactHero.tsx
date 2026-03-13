"use client";

const VINTAGE_BG_URL = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/images/somatic-lab/vintage-2608934_1280.jpg`;

export function ContactHero() {
  return (
    <>
      <section className="relative hidden overflow-hidden pb-[452px] md:block">
        <div
          className="absolute inset-0 z-0 bg-no-repeat"
          style={{
            backgroundImage: `url('${VINTAGE_BG_URL}')`,
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

      <section className="relative mt-[40px] overflow-hidden px-[50px] py-[60px] md:hidden">
        <div
          className="absolute inset-0 z-0 bg-cover bg-no-repeat bg-top"
          style={{
            backgroundImage: `url('${VINTAGE_BG_URL}')`,
          }}
          aria-hidden="true"
        />
        <div className="relative z-10 text-center">
          <h1 className="hero-font-times text-[32px] font-semibold leading-none text-white">
            CONTACT US
          </h1>
        </div>
      </section>
    </>
  );
}
