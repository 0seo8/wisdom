import { BusinessHero } from "@/components/business";
import { BusinessLanding } from "@/components/business/BusinessLanding";

export default function BusinessPage() {
  return (
    <main className="bg-[#fcf3eb] min-h-screen">
      <BusinessHero />
      <BusinessLanding />
    </main>
  );
}
