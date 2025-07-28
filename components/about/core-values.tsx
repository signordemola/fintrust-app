import React from 'react';

const AboutCoreValuesSection = () => {
  return (
    <div className="py-20 bg-gradient-to-br from-primary-600 to-accent-600 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-serif">Our Core Values</h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">These fundamental principles shape every interaction, decision, and service we provide</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Card 1: Trust & Integrity */}
          <div className="bg-text-white p-8 rounded-2xl shadow-soft group hover:shadow-lg transition-all duration-300">
            <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" className="w-6 h-6 text-accent-600"><path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0 0 12 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 0 1-2.031.352 5.988 5.988 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971Zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 0 1-2.031.352 5.989 5.989 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971Z"></path></svg>
            </div>
            <h3 className="text-xl font-bold text-foreground mb-4">Trust &amp; Integrity</h3>
            <p className="text-muted-foreground">We maintain the highest standards of security and ethical practices, ensuring your financial well-being is protected at every step.</p>
          </div>

          {/* Card 2: Community Focus */}
          <div className="bg-text-white p-8 rounded-2xl shadow-soft group hover:shadow-lg transition-all duration-300">
            <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" className="w-6 h-6 text-accent-600"><path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"></path></svg>
            </div>
            <h3 className="text-xl font-bold text-foreground mb-4">Community Focus</h3>
            <p className="text-muted-foreground">Our roots in the community run deep. We invest in local growth, support small businesses, and contribute to community development.</p>
          </div>

          {/* Card 3: Forward Thinking */}
          <div className="bg-text-white p-8 rounded-2xl shadow-soft group hover:shadow-lg transition-all duration-300">
            <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" className="w-6 h-6 text-accent-600"><path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"></path></svg>
            </div>
            <h3 className="text-xl font-bold text-foreground mb-4">Forward Thinking</h3>
            <p className="text-muted-foreground">We embrace innovation while maintaining our personal touch, ensuring our services evolve with your changing needs.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCoreValuesSection;
