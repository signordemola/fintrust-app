import React from "react";

const AboutMissionSection = () => {
  return (
    <div className="py-16 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 font-serif">
            Our Mission
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            To empower our {"members'"} financial success through personalized
            service, innovative solutions, and unwavering commitment to
            community well-being. We believe that when our members thrive, our
            community prospers.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMissionSection;
