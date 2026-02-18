"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export function EducationSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" ref={ref} className="py-16 md:py-32 bg-[#fcf3eb] overflow-hidden">
      <div className="container px-4 mx-auto max-w-[1400px]">
        {/* Main Content Layout */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center mb-32">
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-[33%] space-y-12"
          >
            <div className="space-y-4">
              <h2 
                className="text-5xl md:text-6xl lg:text-7xl font-serif text-[#7a5c51] leading-tight"
                style={{ transform: "translateX(15px)", fontFamily: "var(--font-libre-baskerville), serif" }}
              >
                Corporate
                <br />
                Education
              </h2>
              <h3 
                className="text-2xl md:text-3xl font-bold text-gray-900"
                style={{ transform: "translateX(15px)" }}
              >
                기업교육
              </h3>
            </div>

            <div 
              className="space-y-8 text-gray-700 leading-relaxed text-lg break-keep"
              style={{ transform: "translate(35px, 42px)" }}
            >
              <div className="space-y-2">
                <h4 className="font-bold text-xl text-[#7a5c51]">“맞춤형 강의”</h4>
                <p>
                  기업의 지속성장가능을 위한 소통, 협업, 리더십, 코칭 Skill 등 기업의 역량강화를 위한 인사이트 제공 및 기업이 요구하는 맞춤형 교육을 진행합니다.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-bold text-xl text-[#7a5c51]">
                  “Open Space Technology”
                </h4>
                <p>
                  조직 내 다양한 이슈를 선택하여 모두가 자유로우며 평등하게 토론하고 짧은 공연을 통해 해결방안 도출 및 창의적인 아이디어와 함께 유연한 조직을 만들 수 있습니다.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right: Images Overlap with specific transforms */}
          <div className="w-full lg:w-[66%] flex items-center justify-end relative min-h-[500px] md:min-h-[600px]">
            {/* Background Image: Landscape Meeting */}
            <motion.div 
              initial={{ opacity: 0, scale: 1.1 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 1 }}
              className="w-[85%] md:w-[75%] aspect-[4/3] z-0 overflow-hidden rounded-sm shadow-xl"
            >
              <Image
                src="/images/business/20230513_193104995_23-1024x768.jpg"
                alt="Education Session detail"
                fill
                className="object-cover"
              />
            </motion.div>

            {/* Foreground Image: Hanok Dance */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 1, delay: 0.2 }}
              className="absolute left-0 top-1/2 -translate-y-[40%] w-[55%] md:w-[45%] aspect-[3/4] z-10 shadow-[-7px_20px_50px_0px_rgba(0,0,0,0.48)] overflow-hidden rounded-sm"
            >
              <Image
                src="/images/business/123456-1150x1536.png"
                alt="Main Education Scene"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>

        {/* Banner: Corporate Education present... */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-[#ebe6db] rounded-none p-8 md:p-12 lg:p-16 flex flex-col md:flex-row gap-12 items-center mb-32"
        >
          <div className="w-full md:w-1/2 relative aspect-[4/3] rounded-sm overflow-hidden shadow-lg">
            <Image
              src="/images/business/20230513_193104995_19-scaled.jpg"
              alt="Classroom scene"
              fill
              className="object-cover"
            />
          </div>
          <div className="w-full md:w-1/2 space-y-8">
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900">
              기업교육 present
            </h3>
            <ul className="space-y-4">
              {[
                "이제는 경영에도 compassion이 필요합니다.",
                "문화예술을 접목하여 module의 특별함을 선사합니다.",
                "결과보다는 과정 중심으로 아이디어의 창의성을 깨웁니다.",
                "문제해결 능력을 민주적인 토의 방식으로 이끕니다.",
                "솔루션을 연습해봄으로써 업무 현장에서 자원이 됩니다.",
                "업무 저해 스트레스 관리 및 번아웃 증후군을 예방합니다.",
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-4 text-[17px] md:text-lg text-gray-700">
                  <span className="mt-2.5 w-1.5 h-1.5 bg-gray-900 rounded-full flex-shrink-0" />
                  <span className="break-keep">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Section: Recommendation */}
        <div className="space-y-12 mb-32">
          <div className="space-y-4 text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 break-keep">
              이런 대상에게 추천합니다
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { img: "/images/business/행사기획-추천-이미지11.jpg", text: "새롭고 참신한 방법으로 행사의 퀄리티를 높이고 싶은 조직" },
              { img: "/images/business/행사기획-추천-이미지2.jpg", text: "행사의 목적에 부합하는 전문적인 결과를 내고 싶은 조직" },
              { img: "/images/business/행사기획-추천-이미지3.jpg", text: "One-Stop으로 편리하게 서비스를 받고 싶은 조직 및 공동체" },
              { img: "/images/business/행사기획-추천-이미지4.jpg", text: "일회성 행사에 그치지 않고 섬김과 존중을 받고 싶은 조직 및 공동체" }
            ].map((card, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * idx }}
                className="space-y-4"
              >
                <div className="relative aspect-[4/3] rounded-sm overflow-hidden shadow-md group">
                  <Image
                    src={card.img}
                    alt="Recommendation thumbnail"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <p className="text-gray-800 leading-relaxed break-keep px-1 text-[15px] md:text-base">
                  {card.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>

      {/* Review Banner with STICKY background - FULL WIDTH */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 1 }}
        className="relative overflow-hidden min-h-[700px] flex items-center justify-center text-center px-6 py-24 mt-32"
      >
        {/* Sticky Background Implementation */}
        <div 
          className="absolute inset-0 z-0 bg-fixed bg-center bg-cover"
          style={{ 
            backgroundImage: "url('/images/business/education-photo-3.png')",
          }}
        >
          <div className="absolute inset-0 bg-black/70" />
        </div>
        
        <div className="container relative z-10 mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12 text-white">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-7xl font-serif leading-tight italic" style={{ fontFamily: "var(--font-libre-baskerville), serif" }}>
                Review of
              </h2>
              <h3 className="text-3xl md:text-5xl font-serif" style={{ fontFamily: "var(--font-libre-baskerville), serif" }}>Corporate Education</h3>
            </div>
            
            <div className="space-y-16 max-w-3xl mx-auto">
              {/* Review 1 */}
              <div className="space-y-6">
                <div className="flex justify-center gap-1.5 text-[#f4d03f] text-2xl">
                  {"★★★★★"}
                </div>
                <p className="text-lg md:text-xl font-medium leading-relaxed break-keep opacity-95">
                  우리는 늘 급하게 변하는 사회에 적응하기 위해 무던히 노력해왔습니다. 지난시절에 기술, 지식과 정보의 학습과 실천으로 외적인 성장을 가져왔다면 이젠 우리 스스로 내적고찰 비중을 확대하는 체험과 학습도 필요한 시대입니다.
                </p>
              </div>

              {/* Review 2 */}
              <div className="space-y-6">
                <div className="flex justify-center gap-1.5 text-[#f4d03f] text-2xl">
                  {"★★★★★"}
                </div>
                <p className="text-lg md:text-xl font-medium leading-relaxed break-keep opacity-95">
                  살아가면서 나의 이야기에 귀기울여 주는 사람이 없어 마음 아파한 적이 많습니다. 하지만 난 다른 사람들에게 그렇게 했을까요? 사회가 복잡다단해지면서 우리에게 공감 능력은 매우 중요하면서 발휘하지 못하는 아픈 손가락입니다. 이 아픈 손가락을 치유하는 ‘지혜의밭‘ 공연과 워크숍 프로그램을 여러분께 추천합니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
