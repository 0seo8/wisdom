"use client";

export function DailyArtHero() {
  return (
    <>
      <section className="relative overflow-hidden pb-[400px] md:pb-[450px]">
        <div
          className="absolute inset-0 z-0 bg-cover bg-no-repeat"
          style={{
            backgroundImage:
              "url('http://artswisdom.com/wp-content/uploads/2023/10/무늬만-공연-4.png')",
          }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 z-10 bg-black/50" aria-hidden="true" />
        <div className="relative z-20 mx-auto w-full max-w-full text-center">
          <h1 className="hero-font-times translate-y-[230px] text-[40px] font-semibold leading-none text-[#EFEDE1] md:translate-y-[235px] md:text-[100px]">
            Arts of Living
          </h1>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-[#C8BFA9]">
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
