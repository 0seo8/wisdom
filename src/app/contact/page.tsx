import type { Metadata } from "next";
import { ContactHero, ContactForm } from "@/components/contact";

export const metadata: Metadata = {
  title: "문의하기",
  description:
    "지혜의밭에 궁금한 점이 있으시면 언제든 문의해 주세요. 프로그램, 기업교육, 협업 등 다양한 문의를 환영합니다.",
  openGraph: {
    title: "문의하기 | 지혜의밭",
    description:
      "지혜의밭에 궁금한 점이 있으시면 언제든 문의해 주세요.",
  },
};

export default function ContactPage() {
  return (
    <div className="bg-[#fcf3eb]">
      <ContactHero />

      {/* Quote Section */}
      <section className="pt-20 pb-12 text-center">
        <div className="container px-4">
          <div className="flex justify-center mb-8">
            <img 
              src="/images/contact/quote.png" 
              alt="Quote" 
              className="h-10 opacity-70"
            />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 tracking-tight">
            경험을 통한 성장, 지금 시작해 보세요!
          </h2>
          <div className="max-w-3xl mx-auto space-y-1 text-gray-600 text-[15px] md:text-[16px] leading-loose">
            <p>지혜의밭에서는 기업 및 기관의 요구에 따른 맞춤형 콘텐츠를 통해</p>
            <p>워크숍, 공연, 교육, 행사의 기획부터 진행까지 만족도 높은 서비스를 제공합니다.</p>
            <p>아래 문의사항을 남겨주시면 친절히 안내해 드리겠습니다.</p>
          </div>
        </div>
      </section>

      {/* Separator with Icon */}
      <div className="relative py-12">
        <div className="max-w-[1300px] mx-auto px-10">
          <div className="relative flex items-center justify-center">
            <div className="absolute inset-0 flex items-center" aria-hidden="true">
              <div className="w-full border-t border-[#8c5a5a] opacity-30"></div>
            </div>
            <div className="relative bg-[#fcf3eb] px-4">
                <div className="w-14 h-14 border border-[#8c5a5a] rounded-sm rotate-45 flex items-center justify-center overflow-hidden bg-white">
                   <div className="-rotate-45">
                      <svg className="w-8 h-8 text-[#8c5a5a]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                        <polyline points="22,6 12,13 2,6"></polyline>
                      </svg>
                   </div>
                </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Section - Now Centered Form */}
      <section className="pb-32">
        <div className="container">
          <div className="max-w-2xl mx-auto">
             <div className="text-center mb-12">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">문의하기</h3>
             </div>
             <ContactForm />
          </div>
        </div>
      </section>

    </div>
  );
}
