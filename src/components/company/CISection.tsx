"use client";

import Image from "next/image";
import { Section, SectionTitle } from "@/components/common";
import { images } from "@/constants/images";

export function CISection() {
  return (
    <Section id="ci" background="white" className="py-20 md:py-32">
      <SectionTitle
        title="CI"
        subtitle="Corporate Identity"
        align="center"
      />

      <div className="max-w-5xl mx-auto px-4 space-y-24 mt-16">
        {/* 1. Symbol Mark */}
        <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-10 items-start">
            <div className="relative w-full aspect-square border border-gray-100 bg-white shadow-sm flex items-center justify-center p-8">
                <Image
                    src={images.logo.symbol}
                    alt="Symbol Mark"
                    width={200}
                    height={200}
                    className="object-contain"
                />
            </div>
            <div className="pt-2">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                    <span className="w-2 h-8 bg-[#8c5a5a]"></span>
                    심볼마크 (Symbol Mark)
                </h3>
                <p className="text-gray-600 leading-loose text-lg mb-6">
                    지혜의밭 심볼은 <strong>&apos;밭 전(田)&apos;</strong> 자를 모티브로 하여 삶의 터전을 형상화했습니다.
                    지혜의밭의 초성 <strong>&apos;ㅈ, ㅎ, ㅇ, ㅂ&apos;</strong>을 조형적으로 배치하여, 
                    각각의 요소가 서로 어우러지고 연결되는 유기적인 관계를 표현하고 있습니다.
                </p>
                <ul className="space-y-3 text-gray-600 text-lg">
                    <li className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#8c5a5a] mt-2.5"></span>
                        <span><strong>Yellow (소통)</strong>: 밝은 에너지와 열린 마음</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#8c5a5a] mt-2.5"></span>
                        <span><strong>Orange (공감)</strong>: 따뜻한 이해와 긍정적 시너지</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#8c5a5a] mt-2.5"></span>
                        <span><strong>Green (예술)</strong>: 창의적인 활동과 삶의 기쁨</span>
                    </li>
                     <li className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#8c5a5a] mt-2.5"></span>
                        <span><strong>Blue (치유)</strong>: 내면의 평화와 건강한 삶</span>
                    </li>
                </ul>
            </div>
        </div>

        {/* 2. Basic Logo */}
        <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-10 items-start">
            <div className="relative w-full aspect-[2/1] border border-gray-100 bg-white shadow-sm flex items-center justify-center p-8">
                <Image
                    src={images.logo.basic}
                    alt="Basic Logo"
                    width={240}
                    height={100}
                    className="object-contain"
                />
            </div>
             <div className="pt-2">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                    <span className="w-2 h-8 bg-[#8c5a5a]"></span>
                    기본형 (Basic Logo)
                </h3>
                <p className="text-gray-600 leading-loose text-lg">
                    심볼마크와 로고타입을 조합한 가장 기본적인 활용형으로, 
                    대외적인 커뮤니케이션에 우선적으로 사용됩니다.
                    국문 로고타입은 신뢰감 있고 부드러운 서체를 사용하여 
                    전문성과 친근함을 동시에 전달합니다.
                </p>
            </div>
        </div>

         {/* 3. Graphic Motif (Pattern) -- Using 'expanded' image as placeholder or pure color patterns */}
         <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-10 items-start">
            <div className="relative w-full aspect-square border border-gray-100 bg-white shadow-sm flex items-center justify-center p-4">
                 <Image
                    src={images.logo.expanded} 
                    alt="Graphic Motif"
                    width={200}
                    height={200}
                    className="object-contain"
                />
            </div>
             <div className="pt-2">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                    <span className="w-2 h-8 bg-[#8c5a5a]"></span>
                    그래픽 모티브 (Graphic Motif)
                </h3>
                <p className="text-gray-600 leading-loose text-lg">
                    지혜의밭의 아이덴티티를 보조하는 그래픽 요소로, 
                    심볼의 조형적 특징을 패턴화하여 다양한 매체에 적용할 수 있습니다.
                    브랜드 이미지를 일관성 있게 전달하고 시각적인 풍부함을 더해줍니다.
                </p>
            </div>
        </div>

        {/* 4. Lettermark / Signature */}
        <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-10 items-start">
             <div className="relative w-full aspect-[2/1] border border-gray-100 bg-white shadow-sm flex items-center justify-center p-8">
                <Image
                    src={images.logo.lettermark}
                    alt="Korean Lettermark"
                    width={200}
                    height={80}
                    className="object-contain"
                />
            </div>
             <div className="pt-2">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                    <span className="w-2 h-8 bg-[#8c5a5a]"></span>
                    한글 레터마크 및 시그니처
                </h3>
                <p className="text-gray-600 leading-loose text-lg">
                    한글 상호만을 사용하여 명확한 정보 전달이 필요할 때 사용되는 레터마크입니다.
                    공식 문서나 사인물 등 상황에 맞게 적절한 시그니처를 선택하여 사용할 수 있습니다.
                </p>
            </div>
        </div>
        
      </div>
    </Section>
  );
}
