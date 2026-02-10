"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { images } from "@/constants/images";

const services = [
  {
    title: "참여형 공연",
    description: "관객이 단순한 관람자가 아닌 창작의 주체가 되는 공연입니다. 함께 만들어가는 경험을 통해 깊은 몰입과 감동을 선사합니다.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
    highlights: ["관객 참여 기반 공연", "맞춤형 스토리텔링", "기업 메시지 전달"],
  },
  {
    title: "힐링 프로그램",
    description: "신체와 정신 관리를 위한 통합 웰니스 워크숍입니다. 소마틱 접근과 예술 치유를 결합하여 진정한 휴식을 경험합니다.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    highlights: ["번아웃 예방", "스트레스 해소", "마음챙김 워크숍"],
  },
  {
    title: "기업 행사",
    description: "워크숍, 세미나, 팀빌딩 등 다양한 기업 행사를 기획하고 운영합니다. 참여자 모두가 주인공이 되는 특별한 경험을 만듭니다.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    highlights: ["창립기념일 행사", "팀빌딩 워크숍", "리더십 세미나"],
  },
];

const features = [
  {
    title: "기업 맞춤 기획",
    description: "기업의 목표와 문화에 맞는 프로그램 설계",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
      </svg>
    ),
  },
  {
    title: "참여자 경험 중심",
    description: "모든 참여자가 주체가 되는 경험 설계",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "전문 퍼실리테이터",
    description: "예술 전문가와 교육 전문가의 협업 진행",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
];

export function EventSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="event" ref={ref} className="py-16 md:py-24 bg-white">
      <div className="container">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex-1 space-y-12"
          >
            {/* Event Planning */}
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-serif text-[#5d4037] leading-tight">
                Event
                <br />
                Planning
                <br />
                <span className="text-3xl md:text-4xl font-sans font-bold text-gray-900 mt-2 block">
                  행사기획
                </span>
              </h2>
              <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
                <div>
                  <h3 className="font-bold text-xl mb-2 text-[#8b6f47]">
                    “참여형 공연”
                  </h3>
                  <p>
                    구성원들의 다양한 이야기를 마법같은 즉흥공연으로 반영하고
                    수용과 지지 경험으로 서로를 이해하고 연대감을 형성함으로써
                    조직문화 활성화를 이끌 수 있습니다.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2 text-[#8b6f47]">
                    “몸 챙김, 마음 챙김”
                  </h3>
                  <p>
                    소매틱, 춤, 명료한 앎을 통해 스트레스 해소 및 refresh를
                    경험하여 번아웃을 사전에 예방하고 감정에 휘둘리지 않는
                    마음의 주인으로 조직 내 갈등을 지혜롭게 해결합니다.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Images */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex-1 relative"
          >
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg w-full">
              <Image
                src={images.business.eventMain}
                alt="행사기획 현장"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>

        {/* Event Planning present */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-24 flex flex-col-reverse lg:flex-row gap-12 items-center bg-[#fcf9f2] rounded-3xl p-8 lg:p-16"
        >
          <div className="flex-1 space-y-8">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
              행사기획 present
            </h3>
            <ul className="space-y-4 text-gray-700 text-lg leading-relaxed">
              {[
                "기업의 요구와 환경을 고려한 최적화된 서비스",
                "다양한 장르의 콜라보를 통한 창의적인 행사",
                "흥미로운 이벤트 구성으로 참여 동기 극대화",
                "즐거움과 행복을 추구하는 인간의 기본 욕구 충족",
                "재미와 더불어 삶의 유연성을 통한 긍정적인 변화",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-[#8b6f47] rounded-full mt-2.5 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex-1 relative aspect-square lg:aspect-[4/3] w-full rounded-xl overflow-hidden shadow-md">
            <Image
              src={images.business.eventActivity}
              alt="행사기획 present"
              fill
              className="object-cover"
            />
          </div>
        </motion.div>

        {/* Recommendations */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-24 text-center"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
            이런 대상에게 추천합니다
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                src: images.business.eventRecommend.recommend1,
                text: "새롭고 참신한 방법으로 행사의 퀄리티를 높이고 싶은 조직",
              },
              {
                src: images.business.eventRecommend.recommend2,
                text: "행사의 목적에 부합하는 전문적인 결과를 내고 싶은 조직",
              },
              {
                src: images.business.eventRecommend.recommend3,
                text: "One-Stop으로 편리하게 서비스를 받고 싶은 조직 및 공동체",
              },
              {
                src: images.business.eventRecommend.recommend4,
                text: "일회성 행사에 그치지 않고 섬김과 존중을 받고 싶은 조직 및 공동체",
              },
            ].map((item, index) => (
              <div key={index} className="space-y-4 group">
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-md">
                  <Image
                    src={item.src}
                    alt={item.text}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <p className="text-gray-700 leading-relaxed break-keep text-left px-2">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Review Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="mt-24 relative rounded-2xl overflow-hidden min-h-[400px] flex items-center justify-center text-center px-4"
        >
          <Image
            src={images.business.eventReview}
            alt="Review of Event Planning"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
          <div className="relative z-10 max-w-4xl mx-auto space-y-6 text-white text-shadow-sm">
            <h2 className="text-4xl md:text-6xl font-serif leading-tight drop-shadow-md">
              Review of
              <br />
              Event Planning
            </h2>
            <div className="flex justify-center gap-2 text-[#f4d03f] text-2xl my-6 drop-shadow-md">
              {"★★★★★"}
            </div>
            <p className="text-lg md:text-xl font-medium leading-relaxed drop-shadow-md pb-6 md:pb-0">
              "어린이, 청소년들을 위한 다양한 프로그램을 20여 년간 운영해 온 경험으로
              바라볼 때<br />
              넋두리와 내비침은 연극 치유의 순수한 지향성을 가집니다
              <br />
              비용 측면으로 맞춤식이 된다면 치유 공연으로 많은 사랑 기대됩니다"
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
