import React from 'react';

const AboutJourneySection = () => {
  return (
    <div className="py-20 bg-gradient-to-br from-primary-600 to-accent-600 text-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif">Our Journey</h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">Five decades of growth, innovation, and unwavering commitment to our community</p>
        </div>
        <div className="max-w-6xl mx-auto">
          {/* Timeline Item 1: 1973 */}
          <div className="relative flex items-start mb-12 last:mb-0 group">
            <div className="flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full shadow-soft flex-shrink-0 group-hover:bg-primary-200 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" className="w-8 h-8 text-primary-600"><path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z"></path></svg>
            </div>
            <div className="ml-8 group-hover:translate-x-2 transition-transform duration-300">
              <div className="flex items-center mb-2">
                <span className="text-2xl font-bold text-muted mr-4">1973</span>
                <h3 className="text-xl font-bold">A Vision of Community Banking</h3>
              </div>
              <p className="text-muted leading-relaxed">Founded by local educators who believed in the power of cooperative banking, Fintrust Credit Union began with a mission to provide fair, accessible financial services to teachers and their families.</p>
            </div>
          </div>

          {/* Timeline Item 2: 1985 */}
          <div className="relative flex items-start mb-12 last:mb-0 group">
            <div className="flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full shadow-soft flex-shrink-0 group-hover:bg-primary-200 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" className="w-8 h-8 text-primary-600"><path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"></path></svg>
            </div>
            <div className="ml-8 group-hover:translate-x-2 transition-transform duration-300">
              <div className="flex items-center mb-2">
                <span className="text-2xl font-bold text-muted mr-4">1985</span>
                <h3 className="text-xl font-bold">Expanding Our Family</h3>
              </div>
              <p className="text-muted leading-relaxed">As our reputation for personalized service grew, we opened our membership to all community members. This expansion allowed us to introduce innovative home loans and small business programs.</p>
            </div>
          </div>

          {/* Timeline Item 3: 1995 */}
          <div className="relative flex items-start mb-12 last:mb-0 group">
            <div className="flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full shadow-soft flex-shrink-0 group-hover:bg-primary-200 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" className="w-8 h-8 text-primary-600"><path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"></path></svg>
            </div>
            <div className="ml-8 group-hover:translate-x-2 transition-transform duration-300">
              <div className="flex items-center mb-2">
                <span className="text-2xl font-bold text-muted mr-4">1995</span>
                <h3 className="text-xl font-bold">Pioneering Digital Banking</h3>
              </div>
              <p className="text-muted leading-relaxed">We embraced the digital revolution early, becoming one of the first credit unions to offer online banking. This forward-thinking approach set the foundation for our future innovations.</p>
            </div>
          </div>

          {/* Timeline Item 4: 2008 */}
          <div className="relative flex items-start mb-12 last:mb-0 group">
            <div className="flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full shadow-soft flex-shrink-0 group-hover:bg-primary-200 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" className="w-8 h-8 text-primary-600"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"></path></svg>
            </div>
            <div className="ml-8 group-hover:translate-x-2 transition-transform duration-300">
              <div className="flex items-center mb-2">
                <span className="text-2xl font-bold text-muted mr-4">2008</span>
                <h3 className="text-xl font-bold">Supporting Through Crisis</h3>
              </div>
              <p className="text-muted leading-relaxed">During the financial crisis, we stood by our members when they needed us most. Our mortgage assistance program helped over 1,000 families keep their homes, demonstrating our unwavering commitment.</p>
            </div>
          </div>

          {/* Timeline Item 5: 2015 */}
          <div className="relative flex items-start mb-12 last:mb-0 group">
            <div className="flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full shadow-soft flex-shrink-0 group-hover:bg-primary-200 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" className="w-8 h-8 text-primary-600"><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"></path></svg>
            </div>
            <div className="ml-8 group-hover:translate-x-2 transition-transform duration-300">
              <div className="flex items-center mb-2">
                <span className="text-2xl font-bold text-muted mr-4">2015</span>
                <h3 className="text-xl font-bold">Banking at Your Fingertips</h3>
              </div>
              <p className="text-muted leading-relaxed">Our award-winning mobile app revolutionized how members interact with their finances. Features like instant mobile deposits and real-time alerts made banking more convenient than ever.</p>
            </div>
          </div>

          {/* Timeline Item 6: 2023 */}
          <div className="relative flex items-start mb-12 last:mb-0 group">
            <div className="flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full shadow-soft flex-shrink-0 group-hover:bg-primary-200 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" className="w-8 h-8 text-primary-600"><path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z"></path></svg>
            </div>
            <div className="ml-8 group-hover:translate-x-2 transition-transform duration-300">
              <div className="flex items-center mb-2">
                <span className="text-2xl font-bold text-muted mr-4">2023</span>
                <h3 className="text-xl font-bold">Embracing the Future</h3>
              </div>
              <p className="text-muted leading-relaxed">Celebrating our golden anniversary with over 100,000 members, we launched AI-powered financial advisory services while maintaining our personal touch. Our commitment to innovation continues.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutJourneySection;
