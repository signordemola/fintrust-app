import CommunityImpactSection from "@/components/home/community-impact-section";
import FeatureCardsSection from "@/components/home/feature-cards-section";
import FinancialSolutionsSection from "@/components/home/financial-solutions-section";
import Footer from "@/components/home/footer";
import HeroSection from "@/components/home/hero-section";
import InnovationSection from "@/components/home/innovation-section";
import TestimonialsSection from "@/components/home/testimonials-section";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <FeatureCardsSection />
      <FinancialSolutionsSection />
      <InnovationSection />
      <TestimonialsSection />
      <CommunityImpactSection />
      <Footer />
    </main>
  );
}
