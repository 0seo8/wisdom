"use client";

import { motion } from "framer-motion";
import { images } from "@/constants/images";

const MINI_LOGO_URL = images.logo.brochure;
const COVER_VIDEO_URL = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/images/brochure/coverv.mp4`;
const COVER_IMAGE_URL =
  "https://artswisdom.com/wp-content/uploads/2023/12/메인-브로슈어_수정1202.png";

export function BrochureHero() {
  return (
    <section className="bg-white px-4 pb-10 pt-5 md:pb-12">
      <div className="mx-auto flex max-w-[1300px] flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-5 mt-[15px] md:mt-5"
        >
          <img
            src={MINI_LOGO_URL}
            alt="지혜의밭 브로슈어 로고"
            className="h-auto w-[103px]"
            loading="eager"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative mx-auto w-[80%] max-w-[525px] overflow-hidden md:w-[48%]"
          style={{ aspectRatio: "525 / 700" }}
        >
          <video
            className="absolute inset-0 h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src={COVER_VIDEO_URL} type="video/mp4" />
          </video>

          <img
            src={COVER_IMAGE_URL}
            alt="지혜의밭 웹브로슈어 메인 표지"
            className="absolute inset-0 h-full w-full object-cover"
            loading="eager"
          />
        </motion.div>
      </div>
    </section>
  );
}
