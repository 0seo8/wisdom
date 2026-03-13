"use client";

const coreValues = [
  {
    imageSrc: "https://artswisdom.com/wp-content/uploads/2023/10/차별성.png",
    title: "차별성",
    description: "디테일의 차이가 감동으로 이어진다.",
    imageWidthClass: "md:w-[97%]",
  },
  {
    imageSrc: "https://artswisdom.com/wp-content/uploads/2023/10/포용성.png",
    title: "포용성",
    description: "지속 가능한 성장을 위하여 변화를 수용한다.",
    imageWidthClass: "md:w-full",
  },
  {
    imageSrc: "https://artswisdom.com/wp-content/uploads/2023/10/연결성.png",
    title: "연결성",
    description: "모든 에너지는 서로 연결되어 있으므로 우리는 하나다.",
    imageWidthClass: "md:w-full",
  },
] as const;

export function CoreValues() {
  return (
    <>
      <section className="bg-[#FCF3EB] px-4 pb-0 pt-10 md:px-0 md:pt-[50px]">
        <div className="mx-auto max-w-[1300px]">
          <h2 className="hero-font-times text-center text-[25px] font-semibold leading-[2.2em] text-[#85544D] md:text-[40px]">
            Core Value
          </h2>
        </div>
      </section>

      <section className="bg-[#FCF3EB] px-4 py-0 md:px-0">
        <div className="mx-auto grid max-w-[1300px] items-center gap-8 md:min-h-[400px] md:grid-cols-3 md:gap-0">
          {coreValues.map((item, index) => (
            <div key={item.title} className="text-center">
              <figure className={`mx-auto mb-[15px] w-full ${index === 0 ? "md:mb-[22px]" : "md:mb-[15px]"} ${item.imageWidthClass}`}>
                <img
                  src={item.imageSrc}
                  alt=""
                  className="w-full rounded-[17px]"
                  loading="lazy"
                />
              </figure>
              <h3 className="mb-[10px] hero-font-times text-[24px] font-semibold text-[#85544D] md:text-[30px]">
                {item.title}
              </h3>
              <p className="mx-auto max-w-[320px] whitespace-pre-line text-[14px] text-[#5B5B5B] md:max-w-none md:text-[15px]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#FCF3EB] px-4 pb-0 pt-[10px] md:px-0">
        <div className="mx-auto max-w-[1200px] py-[40px]">
          <div className="mx-auto w-[15%] border-t-[5px] border-[#5B5B5B]" />
        </div>
      </section>
    </>
  );
}
