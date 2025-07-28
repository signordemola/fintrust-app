import React from 'react';

const MakingADifferenceSection = () => {
  return (
    <div className="py-20 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-serif">Making a Difference</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Our commitment to community extends beyond banking</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Card 1: Education Grants */}
          <div className="bg-gradient-to-br from-primary-50 to-text-white p-8 rounded-2xl shadow-soft">
            <div className="text-3xl font-bold text-primary-600 mb-2">$2M+</div>
            <h3 className="text-xl font-bold text-foreground mb-4">Education Grants</h3>
            <p className="text-muted-foreground">Supporting local schools and providing scholarships to help students achieve their dreams.</p>
          </div>

          {/* Card 2: Volunteer Hours */}
          <div className="bg-gradient-to-br from-primary-50 to-text-white p-8 rounded-2xl shadow-soft">
            <div className="text-3xl font-bold text-primary-600 mb-2">10,000+</div>
            <h3 className="text-xl font-bold text-foreground mb-4">Volunteer Hours</h3>
            <p className="text-muted-foreground">Our team actively participates in community service and local improvement projects.</p>
          </div>

          {/* Card 3: Local Business Grants */}
          <div className="bg-gradient-to-br from-primary-50 to-text-white p-8 rounded-2xl shadow-soft">
            <div className="text-3xl font-bold text-primary-600 mb-2">$500K</div>
            <h3 className="text-xl font-bold text-foreground mb-4">Local Business Grants</h3>
            <p className="text-muted-foreground">Supporting small businesses through grants, loans, and mentorship programs.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MakingADifferenceSection;
