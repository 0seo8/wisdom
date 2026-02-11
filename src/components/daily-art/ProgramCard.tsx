"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface ProgramPresent {
  image: string;
  bullets: string[];
}

interface ProgramReview {
  text: string;
}

interface ProgramCardProps {
  id: string;
  englishTitle: string;
  title: string;
  description: string;
  collageImage: string;
  present: ProgramPresent;
  recommendItems: { image: string; caption: string }[];
  reviews: ProgramReview[];
  reviewBgImage: string;
}

export function ProgramCard({
  englishTitle,
  title,
  description,
  collageImage,
  present,
  recommendItems,
  reviews,
  reviewBgImage,
}: ProgramCardProps) {
  return (
    <div>
      {/* Program Intro - Title + Description + Collage Image */}
      <section className="bg-white">
        <div className="container py-16 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Left: Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <h2
                className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#5D2E1E] italic"
                style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
              >
                {englishTitle}
              </h2>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                {title}
              </h3>
              <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                {description}
              </p>
            </motion.div>

            {/* Right: Collage Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={collageImage}
                  alt={`${title} 공연`}
                  fill
                  className="object-contain"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Present Section - Image + Bullets */}
      <section className="bg-[#f5f3ee]">
        <div className="container py-16 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left: Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative aspect-[4/3] overflow-hidden shadow-md"
            >
              <Image
                src={present.image}
                alt={`${title} present`}
                fill
                className="object-cover"
              />
            </motion.div>

            {/* Right: Title + Bullets */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                {title}{" "}
                <span
                  className="font-serif italic text-[#5D2E1E]"
                  style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
                >
                  present
                </span>
              </h3>
              <ul className="space-y-3">
                {present.bullets.map((bullet, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-gray-700 text-base md:text-lg"
                  >
                    <span className="text-[#8b6f47] mt-1 flex-shrink-0">•</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Recommend Section - 4 cards */}
      <section className="bg-white">
        <div className="container py-16 md:py-20">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl md:text-3xl font-bold text-gray-900 mb-10"
          >
            이런 대상에게 추천합니다
          </motion.h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {recommendItems.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * idx }}
              >
                <div className="relative aspect-[4/3] overflow-hidden mb-3">
                  <Image
                    src={item.image}
                    alt={item.caption}
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-sm text-gray-700 leading-relaxed">
                  {item.caption}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Review Section - Sticky/Fixed dark background with stars */}
      {reviews.length > 0 && (
        <section
          className="relative py-16 md:py-24"
          style={{
            backgroundImage: `url(${reviewBgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
          }}
        >
          <div className="absolute inset-0 bg-black/60" />
          <div className="container relative z-10 text-center text-white">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p
                className="text-3xl md:text-4xl font-serif italic text-white/80 mb-2"
                style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
              >
                Review of
              </p>
              <h3
                className="text-5xl md:text-7xl font-serif text-white mb-12"
                style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
              >
                {englishTitle}
              </h3>
            </motion.div>

            <div className="max-w-3xl mx-auto space-y-10">
              {reviews.map((review, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 * idx }}
                >
                  {/* Stars */}
                  <div className="flex justify-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-yellow-500 text-2xl">★</span>
                    ))}
                  </div>
                  <p className="text-white/90 leading-relaxed whitespace-pre-line">
                    {review.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
