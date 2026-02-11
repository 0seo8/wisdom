"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function ReviewSection() {
  return (
    <div className="bg-[#fcf3eb]">
      {/* Event Planning Review */}
      <section className="relative min-h-[600px] flex items-center justify-center text-center px-6 py-24 mb-1">
        <div className="absolute inset-0 z-0">
          <Image
            src={"/images/business/event-documentation.jpg"}
            alt="Event Review Background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto space-y-8 text-white">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <div className="space-y-2">
              <h2 className="text-[40px] md:text-[60px] lg:text-[70px] font-serif leading-tight italic grayscale opacity-20 absolute -top-12 left-1/2 -translate-x-1/2 w-full select-none pointer-events-none">
                Review of
              </h2>
              <h2 className="text-[50px] md:text-[70px] lg:text-[80px] font-serif leading-tight italic" style={{ fontFamily: "var(--font-libre-baskerville), serif" }}>
                Review of
              </h2>
              <h3 className="text-[36px] md:text-[50px] lg:text-[60px] font-serif" style={{ fontFamily: "var(--font-libre-baskerville), serif" }}>
                Event Planning
              </h3>
            </div>
            
            <div className="flex justify-center gap-1.5 text-[#f4d03f] text-[28px]">
              {"★★★★★"}
            </div>

            <div className="space-y-8 text-[18px] md:text-[20px] font-medium leading-relaxed break-keep max-w-3xl mx-auto opacity-95">
              <p>
                어린이, 청소년들을 위한 다양한 프로그램을 20여 년간 운영해 온 경험으로 바라볼 때 넋두리와 내비침은 연극 치유의 순수한 지향성을 가집니다 비용 측면으로 맞춤식이 된다면 치유 공연으로 많은 사랑 기대됩니다.
              </p>
              <p>
                우리는 늘 급하게 변하는 사회에 적응하기 위해 무던히 노력해왔습니다. 지난 시절에 기술, 지식과 정보의 학습과 실천으로 외적인 성적을 가져왔다면 이제 우리 스스로 내적 고찰 비중을 확대하는 체험과 학습도 필요한 시대입니다.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Corporate Education Review */}
      <section className="relative min-h-[600px] flex items-center justify-center text-center px-6 py-24">
        <div className="absolute inset-0 z-0">
          <Image
            src={"/images/business/education-photo-3.png"}
            alt="Education Review Background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto space-y-8 text-white">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <div className="space-y-2">
               <h2 className="text-[50px] md:text-[70px] lg:text-[80px] font-serif leading-tight italic" style={{ fontFamily: "var(--font-libre-baskerville), serif" }}>
                Review of
              </h2>
              <h3 className="text-[36px] md:text-[50px] lg:text-[60px] font-serif" style={{ fontFamily: "var(--font-libre-baskerville), serif" }}>
                Corporate Education
              </h3>
            </div>
            
            <div className="flex justify-center gap-1.5 text-[#f4d03f] text-[28px]">
              {"★★★★★"}
            </div>

            <div className="space-y-8 text-[18px] md:text-[20px] font-medium leading-relaxed break-keep max-w-3xl mx-auto opacity-95">
              <p>
                우리는 늘 급하게 변하는 사회에 적응하기 위해 무던히 노력해왔습니다. 지난시절에 기술, 지식과 정보의 학습과 실천으로 외적인 성장을 가져왔다면 이젠 우리 스스로 내적고찰 비중을 확대하는 체험과 학습도 필요한 시대입니다.
              </p>
              <p>
                살아가면서 나의 이야기에 귀기울여 주는 사람이 없어 마음 아파한 적이 많습니다. 하지만 난 다른 사람들에게 그렇게 했을까요? 사회가 복잡다단해지면서 우리에게 공감 능력은 매우 중요하면서 발휘하지 못하는 아픈 손가락입니다. 이 아픈 손가락을 치유하는 ‘지혜의밭‘ 공연과 워크숍 프로그램을 여러분께 추천합니다.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
