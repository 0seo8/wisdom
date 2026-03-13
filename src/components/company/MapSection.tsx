"use client";

import { Bus, MapPin, Phone, Train } from "lucide-react";

export function MapSection() {
  return (
    <section id="map" className="bg-[#FCF3EB] px-4 pb-[20px] pt-0 md:px-0">
      <div className="mx-auto max-w-[1200px]">
        <h2 className="mb-[20px] text-center font-['Noto_Sans_KR',sans-serif] text-[22px] font-semibold leading-[2em] text-[#85544D] md:text-[35px] md:leading-[2.2em]">
          오시는 길
        </h2>

        <div className="mx-auto max-w-[1200px] overflow-hidden">
          <iframe
            src="https://maps.google.com/maps?q=%EC%84%9C%EC%9A%B8%20%EC%98%81%EB%93%B1%ED%8F%AC%EA%B5%AC%20%EB%8C%80%EB%A6%BC%EB%A1%9C%20231&t=m&z=16&output=embed&iwloc=near"
            title="서울 영등포구 대림로 231"
            aria-label="서울 영등포구 대림로 231"
            className="h-[340px] w-full md:h-[435px]"
            loading="lazy"
          />
        </div>

        <div className="hidden md:block">
          <InfoRow
            icon={<MapPin className="h-[25px] w-[25px] md:h-[33px] md:w-[33px]" strokeWidth={1.8} />}
            text={
              <>
                <strong>주소</strong>
                <br />
                서울시 영등포구 대림로 231 MG 빌딩 3층 (
                <span className="text-[#444447]">서울특별시 영등포구 대림동 782-1, 3층</span>)
              </>
            }
          />
          <InfoRow
            icon={<Phone className="h-[25px] w-[25px] md:h-[33px] md:w-[33px]" strokeWidth={1.8} />}
            text={
              <>
                <strong>전화</strong> 070-8264-6477 / <strong>팩스</strong> 0504-387-6477
              </>
            }
          />
          <InfoRow
            icon={<Train className="h-[25px] w-[25px] md:h-[33px] md:w-[33px]" strokeWidth={1.8} />}
            text={
              <>
                <strong>지하철 이용 시</strong>
                <br />
                7호선 대림역 12번 출구/2호선 5번 출구 → 마을버스 04번 환승/ 대림3동사거리 , 명지춘혜병원 하차
                <br />
                1,2호선 신도림역 2번 출구 → 5611번 YDP 평생학습관 하차 또는 12번 현대아파트3차 하차
              </>
            }
          />
          <InfoRow
            icon={<Bus className="h-[25px] w-[25px] md:h-[33px] md:w-[33px]" strokeWidth={1.8} />}
            text={
              <>
                <strong>버스 이용 시</strong>
                <br />
                신영초등학교(19275), 명지춘혜병원(19327)
              </>
            }
          />
        </div>

        <div className="md:hidden">
          <MobileInfoRow
            icon={<MapPin className="h-[25px] w-[25px]" strokeWidth={1.8} />}
            text={
              <>
                <strong>주소</strong>
                <br />
                서울시 영등포구 대림로 231 MG 빌딩 3층
                <br />
                <span className="text-[#444447]">(서울특별시 영등포구 대림동 782-1, 3층)</span>
              </>
            }
          />
          <MobileInfoRow
            icon={<Phone className="h-[25px] w-[25px]" strokeWidth={1.8} />}
            text={
              <>
                <strong>전화</strong> 070-8264-6477 / <strong>팩스</strong> 0504-387-6477
              </>
            }
          />
          <MobileInfoRow
            icon={<Train className="h-[25px] w-[25px]" strokeWidth={1.8} />}
            text={
              <>
                <strong>지하철 이용 시</strong>
                <br />
                7호선 대림역 12번 출구/2호선 5번 출구
                <br />→마을버스 04번 환승(하차 후 도보 3분)
                <p className="mt-2">
                  1,2호선 신도림역 2번 출구
                  <br />→ 5611번 YDP 평생학습관 하차
                </p>
              </>
            }
          />
          <MobileInfoRow
            icon={<Bus className="h-[25px] w-[25px]" strokeWidth={1.8} />}
            text={
              <>
                <strong>버스 이용 시</strong>
                <br />
                신영초등학교(19275), 명지춘혜병원(19327)
              </>
            }
          />
        </div>
      </div>
    </section>
  );
}

function InfoRow({
  icon,
  text,
}: {
  icon: React.ReactNode;
  text: React.ReactNode;
}) {
  return (
    <div className="grid grid-cols-[8.986%_91.014%] items-start pt-[10px]">
      <div className="flex justify-center text-[#85544D]">{icon}</div>
      <div className="font-['Noto_Sans_KR',sans-serif] text-[17px] leading-[2.2em] text-[#242424]">
        {text}
      </div>
    </div>
  );
}

function MobileInfoRow({
  icon,
  text,
}: {
  icon: React.ReactNode;
  text: React.ReactNode;
}) {
  return (
    <div className="grid grid-cols-[8.986%_91.014%] items-start pt-[10px]">
      <div className="flex justify-center text-[#85544D]">{icon}</div>
      <div className="text-center font-['Noto_Sans_KR',sans-serif] text-[15px] leading-[2em] text-[#242424]">
        {text}
      </div>
    </div>
  );
}
