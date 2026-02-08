"use client";

import { Section, SectionTitle } from "@/components/common";
import { motion } from "framer-motion";
import { MapPin, Phone, Printer, Mail, Train, Bus, CarFront } from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    label: "Address",
    value: "서울특별시 영등포구 대림로 231, MG빌딩 3층",
    sub: "(서울특별시 영등포구 대림동 782-1, 3층)",
    link: "https://www.google.com/maps/search/?api=1&query=서울특별시+영등포구+대림로+231",
    external: true,
  },
  {
    icon: Phone,
    label: "Tel",
    value: "070-8264-6477",
    link: "tel:070-8264-6477",
    external: false,
  },
  {
    icon: Printer,
    label: "Fax",
    value: "0504-387-6477",
    link: undefined,
    external: false,
  },
  {
    icon: Mail,
    label: "E-mail",
    value: "info@artswisdom.com",
    link: "mailto:info@artswisdom.com",
    external: false,
  },
];

const transportInfo = [
  {
    icon: Train,
    label: "지하철",
    details: "7호선 대림역 12번 출구 / 2호선 대림역 5번 출구 → 마을버스 04번 (도보 3분)",
  },
  {
    icon: Train,
    label: "지하철",
    details: "1·2호선 신도림역 2번 출구 → 버스 5611 이용",
  },
  {
    icon: Bus,
    label: "버스",
    details: "신영초등학교 정류장(19275) / 명지춘혜병원 정류장(19327)",
  },
  {
    icon: CarFront,
    label: "주차",
    details: "건물 내 지하주차장 이용 가능",
  },
];

export function MapSection() {
  return (
    <Section id="location" background="gray">
      <SectionTitle
        title="LOCATION"
        subtitle="오시는 길"
        align="center"
      />

      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left Column: Map - Wider (7/12) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-12 xl:col-span-7 h-[400px] lg:h-[600px] bg-white rounded-3xl overflow-hidden shadow-xl shadow-gray-200/50 border border-gray-100 relative group"
          >
           <iframe
              src="https://maps.google.com/maps?q=서울특별시%20영등포구%20대림로%20231&t=&z=16&ie=UTF8&iwloc=&output=embed"
              title="Google Map"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full filter grayscale-0 hover:grayscale-0 transition-all duration-700"
            ></iframe>
            {/* Overlay for aesthetic border/shadow */}
            <div className="absolute inset-0 pointer-events-none border border-black/5 rounded-3xl z-10" />
          </motion.div>

          {/* Right Column: Info - Narrower (5/12) */}
          <div className="lg:col-span-12 xl:col-span-5 space-y-6 flex flex-col justify-center">
            {/* Contact Info Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-3xl p-8 lg:p-10 shadow-lg shadow-gray-100/50 border border-gray-100 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-orange)]/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
              
              <h3 className="font-bold text-gray-900 text-xl mb-8 flex items-center gap-3">
                <span className="w-1.5 h-6 bg-[var(--color-orange)] rounded-full"></span>
                Contact Information
              </h3>
              
              <div className="grid grid-cols-1 gap-6">
                {contactInfo.map((item) => {
                  const Icon = item.icon;
                  const content = (
                    <div className="flex items-start gap-5 group/item">
                      <div className="w-12 h-12 rounded-2xl bg-[var(--color-orange-light)] flex items-center justify-center flex-shrink-0 mt-0.5 group-hover/item:scale-110 group-hover/item:rotate-3 transition-transform duration-300">
                        <Icon className="w-5 h-5 text-[var(--color-orange)]" />
                      </div>
                      <div>
                        <span className="text-xs font-bold text-gray-400 uppercase tracking-widest block mb-1">
                          {item.label}
                        </span>
                        <span className="text-gray-900 text-[17px] font-medium group-hover/item:text-[var(--color-orange)] transition-colors leading-snug block">
                          {item.value}
                        </span>
                        {item.sub && (
                          <span className="text-sm text-gray-500 block mt-1 leading-normal">
                            {item.sub}
                          </span>
                        )}
                      </div>
                    </div>
                  );

                  if (item.link) {
                    return (
                      <a
                        key={item.label}
                        href={item.link}
                        target={item.external ? "_blank" : undefined}
                        rel={item.external ? "noopener noreferrer" : undefined}
                        className="block hover:bg-gray-50 -m-3 p-3 rounded-2xl transition-colors duration-300"
                      >
                        {content}
                      </a>
                    );
                  }
                  return <div key={item.label} className="-m-3 p-3">{content}</div>;
                })}
              </div>
            </motion.div>

            {/* Transport Info Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white rounded-3xl p-8 lg:p-10 shadow-lg shadow-gray-100/50 border border-gray-100 relative overflow-hidden"
            >
               <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-blue)]/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />

              <h3 className="font-bold text-gray-900 text-xl mb-8 flex items-center gap-3">
                 <span className="w-1.5 h-6 bg-[var(--color-blue)] rounded-full"></span>
                 Transportation
              </h3>
              <div className="space-y-6">
                {transportInfo.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={index} className="flex items-start gap-5 group/transport">
                      <div className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center flex-shrink-0 mt-0.5 border border-gray-100 group-hover/transport:border-gray-200 transition-colors">
                        <Icon className="w-5 h-5 text-gray-600 group-hover/transport:scale-110 transition-transform" />
                      </div>
                      <div>
                        <span className="text-xs font-bold text-gray-400 uppercase tracking-widest block mb-1">
                          {item.label}
                        </span>
                        <span className="text-gray-700 text-[15px] leading-relaxed block font-medium">
                          {item.details}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </Section>
  );
}
