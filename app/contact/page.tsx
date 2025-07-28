import ContactFormSection from "@/components/contact/form-section";
import ContactHeroSection from "@/components/contact/hero-section";
import ContactOptionsSection from "@/components/contact/options-section";
import React from "react";

const ContactPage = () => {
  return (
    <>
      <ContactHeroSection />
      <ContactOptionsSection />
      <ContactFormSection />
    </>
  );
};

export default ContactPage;
