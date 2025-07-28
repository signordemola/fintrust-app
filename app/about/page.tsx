import AboutCoreValuesSection from "@/components/about/core-values";
import AboutDifferenceSection from "@/components/about/difference";
import JoinFinancialFamilySection from "@/components/about/family";
import AboutHeroSection from "@/components/about/hero-section";
import AboutJourneySection from "@/components/about/journey";
import MakingADifferenceSection from "@/components/about/making-difference";
import AboutMissionSection from "@/components/about/mission";
import React from "react";

const ContactPage = () => {
  return (
    <>
      <AboutHeroSection />
      <AboutMissionSection />
      <AboutCoreValuesSection />
      <AboutDifferenceSection />
      <AboutJourneySection />
      <MakingADifferenceSection />
      <JoinFinancialFamilySection />
    </>
  );
};

export default ContactPage;
