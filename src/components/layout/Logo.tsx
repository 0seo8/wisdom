import Image from "next/image";
import { images } from "@/constants/images";

interface LogoProps {
  className?: string;
  showText?: boolean;
  variant?: "default" | "white";
}

export function Logo({ className = "", showText = true, variant = "default" }: LogoProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* 로고 이미지 */}
      <div className="relative w-10 h-10">
        <Image
          src={images.logo.header}
          alt="지혜의밭 로고"
          fill
          className="object-contain"
          priority
        />
      </div>

      {showText && (
        <div className="flex flex-col">
          <span className={`text-xl font-bold leading-tight ${variant === "white" ? "text-white" : "text-gray-900"}`}>
            지혜의밭
          </span>
          <span className={`text-xs tracking-wider ${variant === "white" ? "text-white/70" : "text-gray-500"}`}>
            ARTSWISDOM
          </span>
        </div>
      )}
    </div>
  );
}
