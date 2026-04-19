const bucketUrl =
  process.env.NEXT_PUBLIC_SUPABASE_URL + "/storage/v1/object/public/images";

const CI_ITEMS = [
  {
    title: "< 심볼마크 >",
    image: `${bucketUrl}/logo/logo-symbol.png`,
    items: [
      "키워드 : 밭 전(田), 지혜의 밭(ㅈ, ㅎ, ㅇ, ㅂ)",
      "디자인 : 삶의 터전이자 긍정적인 결실을 맺는 수확의 공간을 의미하는 밭에서 모티브를 얻어 ‘밭전(田)’자를 단순화 하였으며, 지혜의밭 자음(ㅈ, ㅎ, ㅇ, ㅂ)활용",
    ],
  },
  {
    title: "< 기본형 로고 >",
    image: `${bucketUrl}/logo/logo-default.png`,
    items: [
      "’밭 전(田)’자를 단순화 하였고 지혜의밭 자음(ㅈ, ㅎ, ㅇ, ㅂ) 활용",
      "지혜의밭에서 추구하는 ‘소통, 공감, 공연, 치유’의 키워드를 담은 그래픽 모티브 사용",
    ],
  },
  {
    title: "< 그래픽 모티브 >",
    image: `${bucketUrl}/logo/logo-graphic.png`,
    items: ["소통의 ‘대화’", "공감의 ‘어깨동무’", "예술의 ‘춤과 공연’", "치유의 ‘꽃’"],
  },
  {
    title: "< 시그니춰 로고 >",
    image: `${bucketUrl}/logo/logo-brochure.png`,
    items: ["가로형 로고 심볼과 ‘소통·공감·해소·통섭’ 레터마크 혼합형"],
  },
  {
    title: "< 한글 레터마크 >",
    image: `${bucketUrl}/logo/logo-lettermark-ko.png`,
    items: [
      "심볼의 정사각형 조형을 바탕으로 한글 로고타입 디자인",
      "모던라이프의 Light 폰트를 바탕으로 지혜의밭만의 한글 로고타입",
    ],
  },
] as const;

const CI_COLORS = [
  {
    image: `${bucketUrl}/ci/color-yellow.png`,
    desc: ["긍정의 에너지", "(Bright Yellow)", "CMYK 0 20 100 0"],
  },
  {
    image: `${bucketUrl}/ci/color-orange.png`,
    desc: ["따뜻한 온정", "(Warm Orange)", "CMYK 0 85 100 0"],
  },
  {
    image: `${bucketUrl}/ci/color-green.png`,
    desc: ["마음의 안정", "(Calm Green)", "CMYK 45 10 100 0"],
  },
  {
    image: `${bucketUrl}/ci/color-blue.png`,
    desc: ["내면의 치유", "(Deep Blue)", "CMYK 100 100 0 15"],
  },
] as const;

export function CISection() {
  return (
    <section id="ci" className="bg-[#FCF3EB] px-4 pb-0 pt-[30px] md:px-0">
      <div className="mx-auto max-w-[900px]">
        <h2 className="mb-[30px] text-center font-['Times_New_Roman',serif] text-[22px] text-[#85544D] md:text-[40px]">
          C.I
        </h2>

        <div className="space-y-[34px]">
          {CI_ITEMS.map((item) => (
            <div key={item.title} className="grid items-center gap-4 md:grid-cols-[20%_80%]">
              <div className="flex justify-center">
                <img
                  src={item.image}
                  alt=""
                  className="h-auto max-w-[120px] md:max-w-[140px]"
                  loading="lazy"
                />
              </div>
              <div className="font-['Noto_Sans_KR',sans-serif] text-[14px] leading-[1.8] text-[#242424] md:text-[17px] md:leading-[2.2em]">
                <div className="text-center md:text-left">
                  <strong>{item.title}</strong>
                </div>
                <ul className="list-disc pl-5 text-left">
                  {item.items.map((line) => (
                    <li key={line}>{line}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <h2 className="mb-[30px] mt-[30px] text-center font-['Noto_Sans_KR',sans-serif] text-[22px] font-semibold text-[#85544D] md:text-[35px]">
          컬러 시스템
        </h2>

        <div className="grid gap-6 md:grid-cols-4">
          {CI_COLORS.map((color) => (
            <div key={color.image} className="text-center">
              <img
                src={color.image}
                alt=""
                className="mx-auto mb-4 h-auto max-w-[150px]"
                loading="lazy"
              />
              <p className="font-['Noto_Sans_KR',sans-serif] text-[14px] leading-[1.8] text-[#242424] md:text-[15px]">
                {color.desc.map((line) => (
                  <span key={line}>
                    {line}
                    <br />
                  </span>
                ))}
              </p>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-[30px] border-t border-[#d9d1c4]" />
      </div>
    </section>
  );
}
