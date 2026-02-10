"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export function ArticleSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="article" ref={ref} className="py-16 md:py-24 bg-[#f5f1e8]">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left: Text Content */}
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-[#8b6f47]">
                Somatics Article
              </h2>
              <h3 className="text-2xl font-bold text-gray-900">
                소매틱스 논문
              </h3>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  ㈜지혜의밭은 세상에 따뜻함을 더하는 사회적기업으로
                  <br />
                  출발하여 소셜벤처 기업에 이어{" "}
                  <strong>소매틱연구전담부서</strong> 인증을 받았습니다.
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
                className="inline-block px-6 py-3 bg-[#8b6f47] text-white font-medium rounded hover:bg-[#6d5638] transition-colors"
              >
                논문 보기
              </a>
            </div>

            {/* Right: Images */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="relative aspect-[3/4] rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="/images/somatic-lab/article-image-1.jpg"
                    alt="소매틱스 연구"
                    fill
                    className="object-cover"
                    onError={(e) => {
                      // Fallback to placeholder if image doesn't exist
                      e.currentTarget.src = "/images/placeholder.jpg";
                    }}
                  />
                </div>
                <div className="relative aspect-[3/4] rounded-lg overflow-hidden shadow-lg mt-8">
                  <Image
                    src="/images/somatic-lab/article-image-2.jpg"
                    alt="소매틱스 논문"
                    fill
                    className="object-cover"
                    onError={(e) => {
                      e.currentTarget.src = "/images/placeholder.jpg";
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
