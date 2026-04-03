import React from 'react';

export const About: React.FC = () => {
  return (
    <div className="bg-charcoal min-h-screen py-32 text-ivory animate-fadeIn">
      <div className="max-w-7xl mx-auto px-6">

        {/* Hero Block */}
        <div className="grid lg:grid-cols-2 gap-32 items-center mb-48">
          <div className="relative group">
            <div className="absolute -top-12 -left-12 w-64 h-64 border-l border-t border-antiqueGold/20 z-0" />
            <div className="relative z-10 overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.4)]">
              <img
                src="/founder-sunderdipaksir.png"
                className="w-full rounded-sm group-hover:scale-105 transition-all duration-1000"
                alt="Mr. Sunder Dipak — Founder, Dipak Studios"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 bg-antiqueGold p-10 text-royalGreen shadow-2xl z-20">
              <span className="font-serif text-7xl leading-none">1962</span>
              <span className="block text-[9px] uppercase font-bold tracking-[0.5em] mt-3">The First Commission</span>
            </div>
          </div>

          <div className="space-y-12">
            <h3 className="font-sans text-[10px] tracking-[0.6em] uppercase text-antiqueGold font-bold">
              Six Decades of Mastery
            </h3>
            <h1 className="font-serif text-5xl md:text-7xl leading-[0.95] text-ivory">
              Our History, <br />
              Your <span className="italic font-light gold-gradient-text">Heritage.</span>
            </h1>
            <p className="text-ivory/50 text-base leading-loose font-light tracking-wide">
              Founded in 1962 by Mr. Sunder Dipak as a humble photo studio at Neelam Chowk, Faridabad, our studio emerged from a singular vision: to transform Indian wedding photography into a fine art form. From that first darkroom to the multi-office institution of today, our commitment has remained unchanged — to capture the unrepeatable majesty of the Indian union. Today, the second generation continues to push the boundaries of cinematic storytelling, merging 62 years of institutional knowledge with tomorrow's technology.
            </p>
            <div className="w-24 h-px bg-antiqueGold/40" />
            <p className="text-antiqueGold/60 text-sm leading-relaxed italic font-light">
              "We are not merely photographers; we are the custodians of your most sacred narratives."
            </p>
          </div>
        </div>

        {/* The Team */}
        <section className="py-20 border-t border-ivory/5 mb-20">
          <div className="text-center mb-20">
            <h3 className="font-sans text-[10px] tracking-[0.5em] uppercase text-antiqueGold font-bold mb-4">
              The Family
            </h3>
            <h2 className="font-serif text-5xl text-ivory">
              Meet the <span className="italic font-light">Torchbearers</span>
            </h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="relative group">
              <img
                src="/legacyfounders.png"
                className="w-full rounded-sm shadow-2xl group-hover:scale-[1.02] transition-all duration-700"
                alt="The Dipak Family — Sunder, Mohan, Raman & next generation"
              />
            </div>
            <div className="space-y-10">
              <div>
                <h4 className="font-serif text-3xl text-antiqueGold mb-2">Mr. Sunder Dipak</h4>
                <p className="font-sans text-[9px] uppercase tracking-widest text-ivory/30 mb-4">Founder · Est. 1962</p>
                <p className="text-ivory/60 text-sm leading-loose font-light">
                  A pioneer of Indian wedding photography who built an institution from a single studio in Faridabad. His philosophy — to preserve the cultural fabric of India's celebrations — remains the studio's guiding north star.
                </p>
              </div>
              <div className="border-t border-ivory/10 pt-8">
                <h4 className="font-serif text-3xl text-antiqueGold mb-2">Mohan Dipak</h4>
                <p className="font-sans text-[9px] uppercase tracking-widest text-ivory/30 mb-4">Creative Director</p>
                <p className="text-ivory/60 text-sm leading-loose font-light">
                  Leads the artistic vision of every commission. Mohan curates the visual language, directs the crew, and ensures every frame reflects the emotional truth of the day.
                </p>
              </div>
              <div className="border-t border-ivory/10 pt-8">
                <h4 className="font-serif text-3xl text-antiqueGold mb-2">Raman Dipak</h4>
                <p className="font-sans text-[9px] uppercase tracking-widest text-ivory/30 mb-4">Technical Visionary & Imaging Expert</p>
                <p className="text-ivory/60 text-sm leading-loose font-light">
                  With a background in computer science and imaging technology, Raman has pioneered the studio's digital evolution — from RAW processing pipelines to 4K cinematic workflows and global archival systems.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-32 border-t border-ivory/5">
          <h2 className="font-serif text-5xl text-center mb-24">
            The <span className="italic font-light">Evolution</span> of Light
          </h2>
          <div className="max-w-4xl mx-auto space-y-24">
            {[
              { year: '1962', text: 'Mr. Sunder Dipak establishes the flagship studio at Neelam Chowk, Faridabad — setting a new benchmark for wedding portraiture in post-independence India.' },
              { year: '1988', text: 'Introduction of proprietary high-fidelity color processing, revolutionizing the vibrant palette of North Indian wedding photography.' },
              { year: '2012', text: 'Launch of the Cinematic Division, bringing Hollywood-standard equipment, narrative pacing, and 4K production to the Indian wedding market.' },
              { year: '2024', text: 'Pioneering AI-assisted visual curation, real-time archival delivery, and global destination capabilities for India\'s most discerning families.' },
            ].map((milestone, i) => (
              <div
                key={milestone.year}
                className={`flex flex-col md:flex-row items-center ${i % 2 === 0 ? '' : 'md:flex-row-reverse'} gap-16`}
              >
                <div className="w-full md:w-1/3 text-center">
                  <span className="font-serif text-8xl text-antiqueGold/10 block leading-none">{milestone.year}</span>
                </div>
                <div className="w-full md:w-2/3 bg-royalGreen/10 p-14 border-l border-antiqueGold/30 backdrop-blur-sm shadow-xl">
                  <p className="text-ivory/80 font-sans text-lg italic leading-relaxed font-light">{milestone.text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};
