const ContactHeroSection = () => {
  return (
    <div className="relative pt-24 overflow-hidden bg-gradient-to-br from-primary-600 to-accent-600">
      <div className="absolute inset-0 bg-pattern-dots opacity-10"></div>
      <div className="absolute inset-0 bg-gradient-radial from-primary-400/20 via-transparent to-transparent"></div>
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center relative">
          <div className="absolute -top-20 -left-20 w-40 h-40 bg-primary-300/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-primary-300/20 rounded-full blur-3xl"></div>
          <h1 className="text-4xl lg:text-5xl font-bold text-text-white mb-6 relative z-10 font-serif">
            {"We're Here to Help"}
            <span className="block mt-2 text-accent-300">
              Every Step of the Way
            </span>
          </h1>
          <p className="text-xl text-text-white/90 leading-relaxed max-w-2xl mx-auto">
            Get in touch with our expert team for personalized assistance with
            your banking needs. {"We're"} committed to providing you with the
            best possible service.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactHeroSection;
