import type { Metadata } from "next";
import { ContactHero, ContactForm, ContactInfo, MapSection } from "@/components/contact";

export const metadata: Metadata = {
  title: "문의하기",
  description:
    "지혜의밭에 궁금한 점이 있으시면 언제든 문의해 주세요. 프로그램, 기업교육, 협업 등 다양한 문의를 환영합니다.",
  openGraph: {
    title: "문의하기 | 지혜의밭",
    description:
      "지혜의밭에 궁금한 점이 있으시면 언제든 문의해 주세요.",
  },
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />

      {/* Contact Form and Info Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
              {/* Form - Takes 3 columns */}
              <div className="lg:col-span-3">
                <ContactForm />
              </div>

              {/* Info - Takes 2 columns */}
              <div className="lg:col-span-2">
                <ContactInfo />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <MapSection />
    </>
  );
}
