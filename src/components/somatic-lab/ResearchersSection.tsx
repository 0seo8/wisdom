"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { images } from "@/constants/images";

export function ResearchersSection() {
  const researchers = [
    {
      name: "문수정",
      specialty: "Hanna Somatics",
      qualifications: [
        "소마전문사",
        "문화예술교육사",
        "Applied Drama Practitioner",
        "내면아이, 상호상담RC/명상 지도사",
      ],
      experience: [
        "전)경기대학교 평생교육원 출강",
        "전주대학교 하계 교수 워크숍 '공감을 위한 비폭력 스킬'",
        "서원대 산업대학원 소셜벤처전공entrepreneurship 강의",
        "한국장학재단 상담센터 힐링캠프 진행",
        "동작구 시설관리공단 힐링캠프 진행",
        "자전적 공연-과천시민회관 <나에게 반하다> 외",
      ],
      image: images.somaticLab.researchers.moon,
    },
    {
      name: "최미라",
      specialty: "Laban & Dance Therapy",
      qualifications: [
        "소마전문사",
        "국제공인라반동작분석가",
        "인지행동발달심리상담사",
        "통합예술심리상담사/미술치료사",
      ],
      experience: [
        "과천시 장애인 복지관<장애인을 위한 춤테라피>",
        "서귀포치유숲 자기돌봄예술치유",
        "토요예술학교 몸으로 읽는 그림책",
        "치매어르신을 위한 라반 기반 움직임",
        "국제즉흥춤축제 <Rebirth of sacrum>",
        "경의선 축제 몸 꽃 안무",
        "과천 민예총 춤타조타 안무 외",
      ],
      image: images.somaticLab.researchers.choiMira,
    },
    {
      name: "이영선",
      specialty: "Soma Healing Yoga",
      qualifications: [
        "소마전문사",
        "요가, 명상 지도사",
        "물리치료사/도수치료사",
        "표현예술심리치료사",
        "미술치료사/놀이심리상담사",
      ],
      experience: [
        "전)한양여대 요가과정 출강",
        "인도요가 및 아유르베다 연수",
        "목동문화센터 명상, 요가 강의",
        "하나원 소매틱과 춤 강의",
        "수도원 요가와 서클댄스",
        "강릉한옥마을 소매틱 요가",
        "이화여대 공연 <물끄러미 .하염없이> 외",
      ],
      image: images.somaticLab.researchers.lee,
    },
    {
      name: "정이와",
      specialty: "Soma Ballet",
      qualifications: [
        "소마전문사",
        "문화예술교육사",
        "이화여자대학교 무용과 출강",
        "정이와 댄스프로젝트 안무가",
      ],
      experience: [
        "소마전문가 양성 과정 전임 강사",
        "<몸공부: Somatic Learning> 전문강사",
        "문화조성 사업 서대문구 50+센터 강의",
        "몸춤놀이학교 서대문구 50+센터 진행",
        "중랑구 성평등활동센터 자기돌봄 워크숍",
        "서울문화재단 링가링가 자이언트 얀",
        "서강대 메리홀 <보이지 않는 벽> 안무 외",
      ],
      image: images.somaticLab.researchers.jung,
    },
    {
      name: "최은화",
      specialty: "Movemove Bodybody",
      qualifications: [
        "소마전문사",
        "문화예술교육사",
        "경민대학교 공연예술과 출강",
        "움직임창작소See 대표",
        "한국문화예술교육진흥원 예술강사",
      ],
      experience: [
        "서울문화재단 <SEARCH_예술적 거리두기 해제법> 연구",
        "인천문화재단<가족과 만나는 바다 속 이야기>",
        "국립현대미술관 서울관,과천관 통합예술교육",
        "서울문화재단 꿈다락토요문화학교 기획, 강의",
        "아르코·대학로 예술극장 대학로 놀이학교 기획",
        "국립극단 청소년시리즈<레스슬링시즌> 안무 외",
      ],
      image: images.somaticLab.researchers.choiEunhwa,
    },
  ];

  return (
    <section id="people" className="bg-[#7C554D] py-16 md:py-24">
      <div className="container">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <h2
            className="text-3xl md:text-5xl lg:text-6xl font-serif text-white mb-6"
            style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
          >
            Somatics Researcher
          </h2>
          <p className="text-white/80 text-base md:text-lg leading-relaxed">
            발레 전공, 한국 무용 전공, 표현 예술 심리상담 전공, 물리 치료 전공,
            요가, 명상 전공, 통합 예술 치유 전공,
            <br />
            교육학 등을 전공하고 소매틱스를 통해 몸과 마음을 깊이 있게
            공부하신 최고 수준의 전문가들로 구성되어 있습니다.
          </p>
        </motion.div>

        {/* Researchers Grid - 5 columns */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-8 mb-12">
          {researchers.map((researcher, index) => (
            <motion.div
              key={researcher.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="text-center"
            >
              {/* Profile Illustration */}
              <div className="relative w-32 h-32 md:w-40 md:h-40 mx-auto mb-4">
                <Image
                  src={researcher.image}
                  alt={researcher.name}
                  fill
                  className="object-contain"
                />
              </div>

              <h3 className="text-xl md:text-2xl font-bold text-white">
                {researcher.name}
              </h3>
              <p className="text-white/70 text-sm mt-1 italic">
                {researcher.specialty}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Researcher Details - scrollable cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {researchers.map((researcher) => (
            <div key={`detail-${researcher.name}`} className="text-white/80 text-xs leading-relaxed">
              {researcher.qualifications.map((qual, i) => (
                <p key={`q-${i}`}>– {qual}</p>
              ))}
              <div className="mt-2">
                {researcher.experience.map((exp, i) => (
                  <p key={`e-${i}`}>– {exp}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
