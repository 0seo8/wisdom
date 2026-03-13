"use client";

import Image from "next/image";
import { images } from "@/constants/images";

export function EffectSection() {
  return (
    <section id="effect" className="bg-[#fcf3eb]">
      <div className="container px-4 pt-10 md:px-6 md:pt-16">
        <div className="mx-auto h-px w-1/2 bg-[#85544d]" />
      </div>

      <div className="container px-4 py-10 md:hidden">
        <div className="relative mx-auto mb-8 min-h-[377px] max-w-[520px]">
          <Image
            src={images.somaticLab.methodology}
            alt="소매틱스 효과"
            fill
            className="object-cover"
          />
        </div>
        <div className="mx-auto max-w-[520px] text-left">
          <h2 className="mb-6 text-[25px] leading-tight text-[#85544d] hero-font-times font-semibold">
            소매틱스가
            <br />
            독특하고 효과적인
            <br />
            이유는 무엇입니까?
          </h2>
          <div className="somatic-body space-y-4 text-[15px] leading-[2]">
            <p>
              근육을 만들기 위한 일반적인 운동과 달리 <strong>SOMATIC
              MOVEMENT</strong>는 신경과학기반으로 뇌의 감각 운동 영역에 변화를
              주며, 지금 여기에서 깨어 있어야 하는 알아차림을 동반한
              움직임입니다.
            </p>
            <p>
              근육 긴장이 어떻게, 왜 발생하는지 그리고 이에 대한 해결 방법으로
              무엇을 어떻게 해야 하는지 뇌와 신체 네트워크를 동시에 활용하는
              평생 움직임 교육으로
            </p>
            <p>
              <strong>self-aware</strong> 자기-인식
              <br />
              <strong>self-sensing</strong> 자기-감각
              <br />
              <strong>self-regulating</strong> 자기-조율
              <br />
              <strong>self-responsible</strong> 자기-책임
            </p>
            <p>을 수련합니다.</p>
          </div>
        </div>
      </div>

      <div className="container hidden px-6 py-20 md:block">
        <div className="mx-auto grid max-w-[1211px] grid-cols-[47.84%_3.97%_47.52%] items-center">
          <div className="relative min-h-[563px]">
            <Image
              src={images.somaticLab.methodology}
              alt="소매틱스 효과"
              fill
              className="object-cover"
            />
          </div>
          <div />
          <div className="text-left">
            <h2 className="mb-6 text-[30px] leading-tight text-[#2b2b2b] somatic-heading">
              소매틱스가 독특하고 효과적인
              <br />
              이유는 무엇입니까?
            </h2>
            <div className="somatic-body space-y-4 text-[20px] leading-[2]">
              <p>
                근육을 만들기 위한 일반적인 운동과 달리 <strong>SOMATIC
                MOVEMENT</strong>는
                <br />
                신경과학기반으로 뇌의 감각 운동 영역에 변화를 주며,
                <br />
                지금 여기에서 깨어 있어야 하는 알아차림을 동반한 움직임입니다.
              </p>
              <p>
                근육 긴장이 어떻게, 왜 발생하는지
                <br />
                그리고 이에 대한 해결 방법으로 무엇을 어떻게 해야 하는지
                <br />
                뇌와 신체 네트워크를 동시에 활용하는 평생 움직임 교육으로
              </p>
              <p>
                <strong>self-aware</strong> 자기-인식
                <br />
                <strong>self-sensing</strong> 자기-감각
                <br />
                <strong>self-regulating</strong> 자기-조율
                <br />
                <strong>self-responsible</strong> 자기-책임
              </p>
              <p>을 수련합니다.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container px-4 pb-10 md:px-6 md:pb-20">
        <div className="mx-auto h-px w-1/2 bg-[#85544d]" />
      </div>
    </section>
  );
}
