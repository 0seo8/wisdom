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

      {/* Quote Section */}
      <section className="bg-[var(--background)] pt-16 pb-8 text-center">
        <div className="container">
          <div className="flex justify-center mb-6">
            <img 
              src="/문의하기/주석_2020-04-12_143549-removebg-preview-1-qdoxj9n96c5b8tbecdzv7b2uibq5qpr475g5wfstqm.png" 
              alt="Quote" 
              className="h-12 opacity-80"
            />
          </div>
        </div>
      </section>

      {/* Contact Form and Info Section */}
      <section className="pb-20 bg-[var(--background)]">
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
