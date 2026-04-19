const bucketUrl =
  process.env.NEXT_PUBLIC_SUPABASE_URL + "/storage/v1/object/public/images";

const SDGS_ITEMS = [
  "국민 건강 불평등 해소를 위해 웰니스 문화에 앞장선다.",
  "지속 가능한 지구를 위해 일회용품 사용을 자제한다.",
  "기후 변화 대응을 위해 대중교통을 생활화한다.",
  "양성 평등한 권리의 기업 문화를 조성한다.",
  "지속 가능한 일자리를 위해 사회적 약자를 고용한다.",
  "지역사회와 상생하며 혁신과 인프라를 구축한다.",
  "건강하고 안전한 사회를 위해 기부를 실천한다.",
] as const;

export function SDGs() {
  return (
    <section id="sdgs" className="bg-[#FCF3EB] px-4 pb-[20px] pt-0 md:px-0">
      <div className="mx-auto max-w-[1200px]">
        <h2 className="pb-[10px] text-center font-['Noto_Sans_KR',sans-serif] text-[24px] font-semibold text-[#85544D] md:text-[30px]">
          SDGs를 위한 약속
        </h2>

        <div className="flex justify-center">
          <img
            src={`${bucketUrl}/sdgs/un-sdgs.png`}
            alt=""
            className="w-full max-w-[1024px] md:w-[70%]"
            loading="lazy"
          />
        </div>

        <div className="mt-[10px] space-y-0 font-['Noto_Sans_KR',sans-serif] text-[14px] font-normal text-[#242424] md:mt-0 md:text-[20px]">
          {SDGS_ITEMS.map((item, index) => (
            <p
              key={item}
              className={index === 0 ? "mt-[10px] text-left md:pl-[100px]" : "text-left md:pl-[100px]"}
            >
              <strong>하나,</strong> {item}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
