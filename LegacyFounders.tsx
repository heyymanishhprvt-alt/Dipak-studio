import React from 'react';

export const LegacyFounders: React.FC = () => {
  return (
    <section className="bg-charcoal text-ivory overflow-hidden border-y border-antiqueGold/10">

      {/* 1. Legacy Statement */}
      <div className="py-24 px-6 text-center bg-royalGreen/20 relative">
        <div className="absolute inset-0 opacity-5 pointer-events-none overflow-hidden">
          <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-serif italic text-antiqueGold whitespace-nowrap">
            Heritage
          </span>
        </div>
        <div className="max-w-4xl mx-auto space-y-6 relative z-10">
          <h3 className="font-sans text-[10px] tracking-[0.8em] uppercase text-antiqueGold font-bold animate-fadeIn">
            The Visual Institution
          </h3>
          <h2 className="font-serif text-5xl md:text-7xl leading-tight">
            Capturing stories that <br />
            <span className="italic font-light gold-gradient-text">generations return to.</span>
          </h2>
          <p className="font-sans text-[10px] tracking-[0.4em] uppercase text-ivory/40">
            Preserving the silent promises of India's most celebrated unions since 1962.
          </p>
          <div className="w-24 h-px bg-antiqueGold/30 mx-auto mt-10" />
        </div>
      </div>

      {/* 2. Founder — Mr. Sunder Dipak */}
      <div className="py-32 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24 items-center">
          <div className="relative group">
            <div className="absolute -inset-4 border border-antiqueGold/10 translate-x-4 translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-1000" />
            <div className="relative z-10 overflow-hidden shadow-2xl">
              <img
                src="/founder-sunderdipaksir.png"
                className="w-full object-cover object-top group-hover:scale-105 transition-all duration-1000"
                alt="Mr. Sunder Dipak — Founder, Dipak Studios"
              />
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-charcoal to-transparent">
                <span className="font-serif text-2xl italic text-antiqueGold">Mr. Sunder Dipak</span>
                <p className="text-[8px] uppercase tracking-[0.3em] text-ivory/50 mt-1">
                  Founder · Est. 1962 · Neelam Chowk, Faridabad
                </p>
              </div>
            </div>
          </div>
          <div className="space-y-10">
            <h3 className="font-sans text-[10px] tracking-[0.5em] uppercase text-antiqueGold font-bold">
              The Foundation
            </h3>
            <h2 className="font-serif text-5xl leading-tight">
              A Vision <br />
              <span className="italic font-light">Etched in Light</span>
            </h2>
            <div className="space-y-6 text-ivory/60 font-sans text-sm leading-loose font-light tracking-wide max-w-lg">
              <p>
                The journey began in 1962, when Mr. Sunder Dipak founded what would become an institution of Indian wedding photography — starting as a small photo studio at Neelam Chowk, Faridabad. Driven by a relentless pursuit of craftsmanship and deep respect for the sanctity of the wedding ritual, he built a foundation on trust, elegance, and the mastery of the Golden Hour.
              </p>
              <p>
                His vision was never merely to record an event, but to preserve the cultural fabric of a nation's celebrations. He treated every frame as a foundation stone for a family's legacy — a philosophy that remains the heartbeat of Dipak Studios today, six decades on, celebrated by icons from Amitabh Bachchan to Rishi Kapoor.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Second Generation — Mohan, Raman & the next wave */}
      <div className="py-32 px-6 bg-ivory text-royalGreen">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24 items-center">
          <div className="order-2 lg:order-1 space-y-10">
            <h3 className="font-sans text-[10px] tracking-[0.5em] uppercase text-antiqueGold font-bold">
              The Torchbearers
            </h3>
            <h2 className="font-serif text-5xl leading-tight text-charcoal">
              Legacy <br />
              <span className="italic font-light text-royalGreen">Meets Innovation</span>
            </h2>
            <div className="space-y-6 text-charcoal/70 font-sans text-sm leading-loose font-light tracking-wide max-w-lg">
              <p>
                Today, that foundation is elevated by the second generation of the Dipak family. As torchbearers of their father's legacy, they have evolved the studio without losing its soul — merging 62 years of institutional knowledge with tomorrow's possibilities.
              </p>
              <p>
                Raman Dipak, integrating his background in imaging technology and computer science, has pioneered the technical evolution of the studio — ensuring that while the tools transform, the emotional purity of every narrative remains untouched. Mohan Dipak leads the creative direction, curating the visual language that defines every commission they accept.
              </p>
            </div>
            <div className="pt-8 flex flex-wrap gap-12 border-t border-royalGreen/10">
              <div>
                <span className="block font-serif text-3xl text-charcoal">Mohan Dipak</span>
                <span className="text-[9px] uppercase tracking-widest text-antiqueGold">Creative Director</span>
              </div>
              <div>
                <span className="block font-serif text-3xl text-charcoal">Raman Dipak</span>
                <span className="text-[9px] uppercase tracking-widest text-antiqueGold">Technical Visionary</span>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2 relative group">
            <div className="absolute -inset-4 border border-royalGreen/5 -translate-x-4 translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-1000" />
            <img
              src="/legacyfounders.png"
              className="relative z-10 w-full shadow-2xl rounded-sm group-hover:scale-[1.02] transition-all duration-1000"
              alt="The Dipak Family — Legacy Founders"
            />
          </div>
        </div>
      </div>

      {/* 4. Creative Philosophy */}
      <div className="py-32 px-6 border-t border-white/5 bg-charcoal">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <h3 className="font-sans text-[10px] tracking-[0.6em] uppercase text-antiqueGold font-bold">
            Creative Philosophy
          </h3>
          <h2 className="font-serif text-5xl md:text-6xl leading-tight">
            The Art of the <br />
            <span className="italic font-light gold-gradient-text">Unscripted Moment</span>
          </h2>
          <p className="text-ivory/50 text-base leading-loose font-light tracking-wide max-w-2xl mx-auto">
            In the last decade, we have led a paradigm shift toward candid, raw storytelling. Our creative directors don't just lead a crew — they curate an experience. We focus on cinematic pacing and emotional gravity, creating films and albums that do not just age; they mature into heirlooms.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12">
            {[
              { title: 'Candid Grace', desc: 'Finding beauty in the silent, unseen moments.' },
              { title: 'Cinematic Pacing', desc: 'Films structured with the rhythm of grand cinema.' },
              { title: 'Heirloom Grade', desc: 'Materials and grading designed to last generations.' },
            ].map((item) => (
              <div key={item.title} className="p-8 glass-dark border border-white/5 space-y-4">
                <h4 className="font-serif text-xl text-antiqueGold italic">{item.title}</h4>
                <p className="text-[10px] uppercase tracking-widest text-ivory/40 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 5. Verified Stats */}
      <div className="py-24 px-6 bg-royalGreen/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {[
              { n: '4.8★', l: '203 Verified Reviews', s: 'WedMeGood' },
              { n: '60+', l: 'Years of Legacy', s: 'Est. 1962, Faridabad' },
              { n: '1.56L', l: 'YouTube Subscribers', s: '424 Wedding Films' },
              { n: 'Iconic', l: 'Celebrity Portfolio', s: 'Bachchan · Kapoor' },
            ].map((s) => (
              <div key={s.l}>
                <span className="block font-serif text-5xl text-antiqueGold mb-2">{s.n}</span>
                <span className="text-[9px] uppercase tracking-[0.4em] text-ivory/50 font-bold block">{s.l}</span>
                <span className="text-[8px] uppercase tracking-widest text-antiqueGold/30 mt-1 block">{s.s}</span>
              </div>
            ))}
          </div>
          <div className="mt-16 flex flex-wrap justify-center gap-12 opacity-20 grayscale brightness-200">
            {['Vogue', 'Filmfare', 'WedMeGood', 'Brides Today'].map((b) => (
              <span key={b} className="font-serif text-2xl tracking-[0.3em] uppercase">{b}</span>
            ))}
          </div>
        </div>
      </div>

      {/* 6. Heritage Integrity Notice */}
      <div className="py-16 px-6 bg-black/40 border-t border-antiqueGold/10">
        <div className="max-w-3xl mx-auto flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-12">
          <svg className="w-12 h-12 text-antiqueGold/40 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
          <div>
            <h4 className="font-sans text-[10px] tracking-[0.4em] uppercase text-antiqueGold font-bold mb-2">
              Heritage Integrity Notice
            </h4>
            <p className="text-[10px] text-ivory/30 leading-relaxed uppercase tracking-wider">
              Dipak Studios operates exclusively via our authorized offices in Delhi, Gurgaon, and Faridabad. Please verify all bookings through our official concierge. We maintain no affiliation with unauthorized entities using our name.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
