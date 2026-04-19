"use client";

import Image from "next/image";
import { images } from "@/constants/images";

export function ArticleSection() {
  return (
    <section id="article" className="bg-[#fcf3eb] py-16 md:py-24 scroll-mt-[76px]">
      <div className="container px-4 md:hidden">
        <div className="relative mx-auto mb-8 aspect-[787/478] w-full max-w-[560px]">
          <Image
            src={images.somaticLab.somaticsResearch}
            alt="소매틱스 연구 논문"
            fill
            className="object-contain"
          />
        </div>
        <div className="mx-auto max-w-[560px] text-left">
          <h2 className="mb-1 text-[35px] text-[#85544d] hero-font-times font-semibold">
            Somatics Article
          </h2>
          <h3 className="mb-5 text-[30px] text-[#85544d] hero-font-times font-semibold">
            소매틱스 논문
          </h3>
          <div className="somatic-body space-y-4 text-[16px] leading-[1.9]">
            <p>
              ㈜지혜의밭은 세상에 따뜻함을 더하는 사회적기업으로 출발하여
              소셜벤처 기업에 이어 <strong>소매틱연구전담부서</strong> 인증을
              받았습니다.
            </p>
            <p>
              소수 집단만이 가능했던 소매틱스를 널리 보급하기 위하여 국내외
              논문 자료를 집대성한 최초의 페이지로 한국데이터산업진흥원의
              지원으로 제작되었습니다.
            </p>
          </div>
          <a
            href="https://somatic.artswisdom.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center justify-center bg-[#85544d] px-5 py-2 text-[13px] text-white"
          >
            논문 보기
          </a>
        </div>
      </div>

      <div className="container hidden px-6 md:block">
        <div className="mx-auto grid max-w-[1211px] grid-cols-[39.75%_60.25%] items-start">
          <div className="pt-4">
            <h2 className="translate-x-[15px] text-[45px] text-[#85544d] hero-font-times font-semibold">
              Somatics Article
            </h2>
            <h3 className="translate-x-[15px] text-[45px] text-[#85544d] hero-font-times font-semibold">
              소매틱스 논문
            </h3>
            <div className="somatic-body mt-5 translate-x-[25px] translate-y-[10px] space-y-5 text-[17px] leading-[1.9]">
              <p>
                ㈜지혜의밭은 세상에 따뜻함을 더하는 사회적기업으로
                <br />
                출발하여 소셜벤처 기업에 이어 <strong>소매틱연구전담부서</strong>{" "}
                인증을
                <br />
                받았습니다.
              </p>
              <p>
                소수 집단만이 가능했던 소매틱스를 널리 보급하기 위하여
                <br />
                국내외 논문 자료를 집대성한 최초의 페이지로
                <br />
                한국데이터산업진흥원의 지원으로 제작되었습니다.
              </p>
            </div>
            <a
              href="https://somatic.artswisdom.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-[21px] mt-8 inline-flex items-center justify-center bg-[#85544d] px-5 py-2 text-[13px] text-white"
            >
              논문 보기
            </a>
          </div>

          <div className="relative min-h-[420px] translate-y-[60px] scale-[1.08]">
            <Image
              src={images.somaticLab.somaticsResearch}
              alt="소매틱스 연구 논문"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
