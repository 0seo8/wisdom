"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { images } from "@/constants/images";

export function OverviewSection() {
  const ageGroups = [
    {
      title: "청소년기",
      image: images.somaticLab.ageAdolescent,
      description:
        "학업 성취를 위해 장시간 앉아서 공부를 해야하는 시기입니다. 쉬는 시간마저도 게임을 하거나 SNS로 소통을 하기에 머리를 계속해서 아래로 내려다보는 자세가 유지되며 목 앞쪽, 가슴, 복부의 근육을 수축합니다.",
    },
    {
      title: "청년기",
      image: images.somaticLab.ageYoungAdult,
      description:
        "업무로 인해 장시간 컴퓨터 사용을 함으로써 뇌와 복부 및 가슴 근육이 수축되어 구부정한 자세가 되고, 고유감각 및 전정신경 시스템 역시 이 자세를 자연스러운 자세로 인지 하며 몸이 틀어지기 시작합니다.",
    },
    {
      title: "중장년기",
      image: images.somaticLab.ageMiddle,
      description:
        "틀어진 몸을 인지하지 못한 채 잘못 된 운동, 스트레스와 과음으로 인해 각종 질환이 발생되며 이시기에 호르몬 변화로 인해 갱년기를 겪게되며 몸의 변형이 나타납니다.",
    },
    {
      title: "노년기",
      image: images.somaticLab.ageElderly,
      description:
        "틀어진 몸에 의해 신체적 및 정서적 영역의 기능 저하가 시작되며, 움직임 부족으로 뇌 신경계 및 근육과 관절이 노쇠하며 거동의 불편으로 삶의 질이 떨어집니다.",
    },
    {
      title: "스포츠",
      image: images.somaticLab.ageAthletes,
      description:
        "지나친 고강도 훈련으로 몸의 부하와 근력 손상이 발생하고, 반복되는 패턴으로 회복이 더디고 부상이 재속됩니다. 이런 상황이 장기간 지속되고 시합에 대한 강한 심리적 스트레스와 압박은 심신에 긴장을 유발합니다.",
    },
    {
      title: "연예인",
      image: images.somaticLab.ageEntertainment,
      description:
        "직업 특성상 감수성이 풍부하고 예민하며, 일반 직장인과 달리 밤낮이 수시로 바뀌며 휴식과 업무 시간의 경계 또한 뚜렷하지 않기 때문에 우울증, 불안 장애, 불면증 위험이 매우 높아 건강을 위협합니다.",
    },
  ];

  return (
    <section id="overview" className="bg-[#f5f1e8]">
      {/* 소매틱연구전담부서 */}
      <div className="py-16 md:py-24">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12"
          >
            소매틱연구전담부서
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-3xl mx-auto"
          >
            <div className="relative aspect-[16/9] md:aspect-[21/9] mb-8">
              <Image
                src={images.somaticLab.certification}
                alt="Artswisdom 소매틱연구전담부서 인증"
                fill
                className="object-contain"
              />
            </div>
            <div className="text-center space-y-3 text-gray-700 leading-relaxed">
              <p className="font-bold text-lg">
                Holistic관점의 소매틱을 연구하여
                <br />
                새로운 웰니스 패러다임을 만들어 갑니다.
              </p>
              <p>
                웰니스는 나를 제대로 아는 것부터 시작됩니다.
                <br />
                동양사상과 심리학, 서양의 뇌과학등을 통섭한
                <br />
                전인적인 연구를 통해 널리 사람을 이롭게하여
                <br />
                풍요로운 세상을 만듭니다.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* What is Somatics? */}
      <div className="py-16 md:py-24 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2
              className="text-3xl md:text-5xl font-serif text-[#5D2E1E] mb-6"
              style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
            >
              What is Somatics?
            </h2>
            <p className="text-lg font-bold text-gray-800 mb-2">
              쓰지 않으면 잃는다 : Use it, lose it
            </p>
            <p className="text-gray-600 max-w-4xl mx-auto">
              지금 여기에서 경험하는 효율적인 움직임을 통해 몸과 마음의 문제를
              스스로 해결할 수 있도록 돕는 통합 솔루션, 바디 풀니스(몸명상)입니다
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto"
          >
            {/* Trinity Diagram */}
            <div className="relative aspect-square max-w-md mx-auto">
              <Image
                src={images.somaticLab.trinityConcept}
                alt="Body Mind Soul - Bodyfulness"
                fill
                className="object-contain"
              />
            </div>

            {/* Description */}
            <div className="space-y-6">
              <h3 className="text-xl md:text-2xl font-bold text-[#8b6f47]">
                마인드풀니스와 바디풀니스
              </h3>
              <div className="space-y-4 text-gray-700">
                <div className="flex items-start gap-2">
                  <span className="text-[#8b6f47] mt-1 flex-shrink-0">☑</span>
                  <span>
                    <strong>마인드풀니스(마음 챙김)?</strong>
                    <br />
                    주로 정좌 자세로 인내를 요하며 의식을 집중하여 마음을 고요히
                    하는 것
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[#8b6f47] mt-1 flex-shrink-0">☑</span>
                  <span>
                    <strong>바디풀니스(몸 챙김)?</strong>
                    <br />
                    신경과학기반의 움직임 명상으로 몸의 감각을 알아차림하며
                    마음까지 돌보는 것
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Characteristics by Age */}
      <div className="py-16 md:py-24 bg-[#f5f1e8]">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-serif text-[#5D2E1E] text-center mb-12"
            style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
          >
            Characteristics by age
          </motion.h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {ageGroups.map((group, index) => (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.05 * index }}
              >
                <h3 className="text-base font-bold text-[#8b6f47] text-center mb-3">
                  {group.title}
                </h3>
                <div className="relative aspect-[3/4] mb-3 overflow-hidden">
                  <Image
                    src={group.image}
                    alt={group.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-xs text-gray-600 leading-relaxed">
                  {group.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* 전인적 성장 - Holistic Section */}
      <div
        className="py-16 md:py-24 text-white relative overflow-hidden"
        style={{
          backgroundImage: `url(${images.somaticLab.methodologyMain})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center space-y-6"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8">
              소매틱스는 전인적인 성장을 위해 전체를 봅니다.
            </h2>
            <div className="space-y-4 text-gray-200 leading-relaxed">
              <p>
                <strong className="text-yellow-400 underline">홀리스틱</strong>
                이란 홀리즘(holism)적인 의미로 &apos;전체&apos;를 말하는데,
                <br />
                그리스어의{" "}
                <strong>전체(whole)건강(health)치유(healing) 신성한(holy)</strong>
                등의 어원을 담고 있습니다.
                <br />
                &apos;전체&apos;는 유기적으로 연결되어 있으며{" "}
                <strong className="underline">잠재적 치유성</strong>을 갖고
                있다고 믿습니다.
              </p>
              <p className="pt-4">
                우리의 몸과 마음은 유기적으로 연결되어 있습니다.
                <br />
                스트레스를 받으면 우리의 근육은 긴장을 하고, 근육 긴장이 계속
                발생하면 습관이 되어
                <br />
                <strong className="text-yellow-400 underline">
                  감각 운동 기억 상실증(SMA)
                </strong>
                에 빠지게 됩니다.
                <br />
                그래서 효율적인 방법이 아닌, 감각하고 움직이는 방법을
                잊어버리게 되는 것입니다.
                <br />
                만성적인 통증은 잘못된 습관이 빚은 결과입니다.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* 소매틱 무브먼트 효과 */}
      <div className="py-16 md:py-24 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto text-center space-y-8"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              이제 소매틱 무브먼트를 통해 우아한 마음의 길을 열어갑니다.
            </h2>
          </motion.div>
        </div>
      </div>

      {/* 소매틱스가 독특하고 효과적인 이유 */}
      <div className="py-16 md:py-24 bg-[#f5f1e8]">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-6xl mx-auto">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative aspect-[4/3] overflow-hidden"
            >
              <Image
                src={images.somaticLab.methodology}
                alt="소매틱 무브먼트"
                fill
                className="object-cover"
              />
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <h3 className="text-2xl md:text-3xl font-bold text-[#5D2E1E]">
                소매틱스가 독특하고 효과적인
                <br />
                이유는 무엇입니까?
              </h3>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  근육을 만들기 위한 일반적인 운동과 달리
                  <br />
                  <strong>SOMATIC MOVEMENT</strong>는
                  <br />
                  신경과학기반으로 뇌의 감각 운동 영역에 변화를 주며,
                  <br />
                  지금 여기에서 깨어 있어야 하는 알아차림을 동반한
                  움직임입니다.
                </p>
                <p>
                  근육 긴장이 어떻게, 왜 발생하는지
                  <br />
                  그리고 이에 대한 해결 방법으로 무엇을 어떻게 해야 하는지
                  <br />
                  뇌와 신체 네트워크를 동시에 활용하는 평생 움직임 교육으로
                </p>
                <div className="space-y-1">
                  <p>
                    <strong>self-aware</strong> 자기-인식
                  </p>
                  <p>
                    <strong>self-sensing</strong> 자기-감각
                  </p>
                  <p>
                    <strong>self-regulating</strong> 자기-조율
                  </p>
                  <p>
                    <strong>self-responsible</strong> 자기-책임
                  </p>
                </div>
                <p>을 수련합니다.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
