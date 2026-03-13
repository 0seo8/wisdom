"use client";

export function IntroSection() {
  return (
    <section
      className="bg-[#B6C2AE] bg-cover bg-center px-5 pb-5 pt-10 text-center md:px-0 md:pb-0 md:pt-[60px] lg:bg-fixed"
      style={{
        backgroundImage:
          "url('http://bobospia.cafe24.com/wp-content/uploads/2020/05/공연관객2-1.png')",
      }}
    >
      <div className="mx-auto max-w-[1200px]">
        <div>
          <h2 className="mb-4 font-['Noto_Sans_KR',sans-serif] text-[18px] font-semibold tracking-[-1px] text-[#2B2B2B] lg:text-[35px]">
            일상의 쉼을 더하는 곳!
          </h2>

          <div className="mx-auto text-[15px] tracking-[-0.4px] text-[#5B5B5B] lg:text-[20px]">
            <p className="mb-0 lg:mb-5">
              &quot;당신도 온전한 쉼이 필요하다&quot;
              <br />
              분주한 일상 너머, 깊은 쉼을 통해 평온함을 선사하는 공간.
              <br />
              몸에 깃든 감각을 깨우고, 마음의 결을 다독이는 나를 위한 작은 사치.
            </p>
          </div>

          <div className="mt-0 text-[15px] tracking-[-0.4px] text-[#5B5B5B] lg:text-[20px]">
            <p>
              <strong>온전한 쉼&apos; 힐소마는</strong>
              <br />
              <strong>Heal</strong> (치유하다,회복하다) + <strong>Soma</strong>(지성,감성,영성이 깃든 몸)의 합성어로
              <br />
              &quot;온전한 쉼을 통해 몸과 마음을 회복하다&quot;라는 의미입니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
