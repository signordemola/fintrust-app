import React from "react";

const AboutHeroSection = () => {
  return (
    <div className="relative pt-24 overflow-hidden bg-gradient-to-br from-primary-600 to-accent-600">
      <div className="absolute inset-0 bg-pattern-dots opacity-10"></div>
      <div className="absolute inset-0 bg-gradient-radial from-primary-400/20 via-transparent to-transparent"></div>
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center relative">
          <div className="absolute -top-20 -left-20 w-40 h-40 bg-primary-300/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-primary-300/20 rounded-full blur-3xl"></div>
          <h1 className="text-4xl lg:text-5xl font-bold text-text-white mb-6 relative z-10 font-serif">
            Where Financial Strength
            <span className="block mt-2 text-accent-300">
              Meets Community Values
            </span>
          </h1>
          <p className="text-xl text-text-white/90 leading-relaxed max-w-2xl mx-auto mb-12">
            For 50 years, Fintrust Credit Union has been more than a financial
            institution.{" We're"} a cornerstone of community growth,
            innovation, and trusted partnership.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-text-white/10 backdrop-blur-sm rounded-xl p-6 text-center transform hover:scale-105 transition-all duration-300">
              <div className="text-3xl font-bold text-text-white mb-1">
                100,000+
              </div>
              <div className="text-sm text-text-white/80">Members Strong</div>
            </div>
            <div className="bg-text-white/10 backdrop-blur-sm rounded-xl p-6 text-center transform hover:scale-105 transition-all duration-300">
              <div className="text-3xl font-bold text-text-white mb-1">
                $2500M+
              </div>
              <div className="text-sm text-text-white/80">In Member Assets</div>
            </div>
            <div className="bg-text-white/10 backdrop-blur-sm rounded-xl p-6 text-center transform hover:scale-105 transition-all duration-300">
              <div className="text-3xl font-bold text-text-white mb-1">98%</div>
              <div className="text-sm text-text-white/80">
                Member Satisfaction
              </div>
            </div>
            <div className="bg-text-white/10 backdrop-blur-sm rounded-xl p-6 text-center transform hover:scale-105 transition-all duration-300">
              <div className="text-3xl font-bold text-text-white mb-1">
                $5.0M
              </div>
              <div className="text-sm text-text-white/80">Community Impact</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutHeroSection;
