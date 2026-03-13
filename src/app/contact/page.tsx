import type { Metadata } from "next";
import { MailOpen } from "lucide-react";
import { ContactHero, ContactForm } from "@/components/contact";

export const metadata: Metadata = {
  title: "문의하기",
  description: "문화예술 프로그램을 활용한 워크숍, 교육, 공연, 차별화된 행사 기획이 필요하다면 문의주세요.",
  openGraph: {
    title: "문의하기 | 지혜의밭",
    description: "문화예술 프로그램을 활용한 워크숍, 교육, 공연, 차별화된 행사 기획이 필요하다면 문의주세요.",
  },
};

export default function ContactPage() {
  return (
    <main className="bg-[#fcf3eb]">
      <ContactHero />

      <section className="bg-[#fcf3eb]">
        <div className="h-[45px]" aria-hidden="true" />
        <div className="mx-auto max-w-[1200px] px-6 text-center md:px-8">
          <div className="flex justify-center text-[#85544D]">
            <span className="font-serif text-[42px] leading-none md:text-[50px]" aria-hidden="true">
              “
            </span>
          </div>
          <h2 className="mt-1 text-[29px] font-semibold leading-[1.45] text-[#2B2B2B] md:text-[32px]">
            경험을 통한 성장, 지금 시작해 보세요!
          </h2>
          <div className="mt-[20px] text-[15px] leading-[2] text-[#5B5B5B] md:text-[16px]">
            <div className="hidden md:block">
              <p>지혜의밭에서는 기업 및 기관의 요구에 따른 맞춤형 콘텐츠를 통해</p>
              <p>워크숍, 공연, 교육, 행사의 기획부터 진행까지 만족도 높은 서비스를 제공합니다.</p>
              <p>아래 문의사항을 남겨주시면 친절히 안내해 드리겠습니다.</p>
            </div>
            <div className="md:hidden">
              <p>지혜의밭에서는 기업 및 기관의 요구에 따른</p>
              <p>맞춤형 콘텐츠를 통해</p>
              <p>워크숍, 공연, 교육, 행사의 기획부터 진행까지</p>
              <p>만족도 높은 서비스를 제공합니다.</p>
              <p>아래 문의 사항 남겨주시면</p>
              <p>친절히 안내해 드리겠습니다.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#fcf3eb]">
        <div className="mx-auto max-w-[1106px] px-4 sm:px-6 md:px-8">
          <div className="flex items-center justify-center py-[16px]">
            <div className="h-[1.7px] flex-1 bg-[#85544D]" aria-hidden="true" />
            <div className="bg-[#fcf3eb] px-5 text-[#85544D]">
              <MailOpen className="h-[31px] w-[31px]" strokeWidth={1.75} aria-hidden="true" />
            </div>
            <div className="h-[1.7px] flex-1 bg-[#85544D]" aria-hidden="true" />
          </div>
        </div>
      </section>

      <section className="bg-[#fcf3eb]">
        <div className="mx-auto max-w-[522px] px-4">
          <div className="pb-8 text-center">
            <h2 className="text-[32px] font-semibold leading-[1.4] text-black">문의하기</h2>
          </div>
          <ContactForm />
        </div>
        <div className="h-[50px]" aria-hidden="true" />
      </section>
    </main>
  );
}
