export function BusinessHero() {
  return (
    <>
      <section
        className="relative hidden overflow-hidden pb-[452px] md:block"
        style={{
          backgroundImage:
            "url('https://artswisdom.com/wp-content/uploads/2023/10/20210615_112010.png')",
          backgroundPosition: "center center",
          backgroundSize: "cover",
        }}
      >
        <div className="absolute inset-0 bg-[#120f0f]/50" aria-hidden="true" />
        <div className="relative z-10 mx-auto w-full max-w-full text-center">
          <h1 className="hero-font-times translate-y-[235px] text-[100px] font-semibold leading-none text-[#efede1]">
            Educational Event
          </h1>
        </div>
      </section>

      <section
        className="relative mt-[40px] overflow-hidden px-0 py-[60px] md:hidden"
        style={{
          backgroundImage:
            "url('https://artswisdom.com/wp-content/uploads/2023/11/%ED%96%89%EC%82%AC1.jpg')",
          backgroundPosition: "top center",
          backgroundSize: "cover",
        }}
      >
        <div className="absolute inset-0 bg-[#393030]/50" aria-hidden="true" />
        <div className="relative z-10 text-center">
          <h1 className="hero-font-times text-[30px] font-semibold leading-none text-white">
            Educational Event
          </h1>
        </div>
      </section>
    </>
  );
}
