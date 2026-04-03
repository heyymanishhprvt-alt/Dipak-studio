import React, { useState, useMemo } from 'react';
import { PORTFOLIO } from '../constants';

const CATEGORIES = ['All', 'Wedding', 'Cinematic', 'Destination', 'Portrait', 'Celebrity'];

export const PortfolioGrid: React.FC = () => {
  const [active, setActive] = useState('All');

  const filtered = useMemo(() => {
    if (active === 'All') return PORTFOLIO;
    return PORTFOLIO.filter((p) => p.category === active);
  }, [active]);

  return (
    <section id="portfolio" className="py-32 px-6 bg-charcoal">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-xl">
            <h3 className="font-sans text-[10px] tracking-[0.5em] uppercase text-antiqueGold mb-4 font-bold">
              Curated Moments
            </h3>
            <h2 className="font-serif text-5xl md:text-7xl text-ivory leading-tight">
              The <span className="italic font-light">Archive</span>
            </h2>
          </div>
          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-x-8 gap-y-3 font-sans text-[10px] tracking-[0.3em] uppercase font-bold pb-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`relative pb-2 transition-all whitespace-nowrap ${
                  active === cat
                    ? 'text-antiqueGold'
                    : 'text-ivory/30 hover:text-ivory/60'
                }`}
              >
                {cat}
                <span
                  className={`absolute bottom-0 left-0 h-px bg-antiqueGold transition-all duration-300 ${
                    active === cat ? 'w-full' : 'w-0'
                  }`}
                />
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="group relative h-[580px] overflow-hidden rounded-sm cursor-pointer shadow-2xl"
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 saturate-[0.85] group-hover:saturate-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-royalGreen via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-700" />

              <div className="absolute inset-0 flex flex-col justify-end p-10 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-700">
                <span className="font-sans text-[9px] tracking-[0.4em] uppercase text-antiqueGold mb-3 font-bold">
                  {item.category}
                </span>
                <h4 className="font-serif text-3xl text-ivory mb-5 tracking-tight">{item.title}</h4>
                <div className="w-12 h-px bg-antiqueGold group-hover:w-full transition-all duration-700 ease-in-out" />
              </div>

              {item.isCelebrity && (
                <div className="absolute top-5 right-5 glass-dark border border-antiqueGold/30 text-antiqueGold px-4 py-2 rounded-full font-sans text-[8px] tracking-widest uppercase font-black">
                  Elite Production
                </div>
              )}
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-24 text-ivory/30 font-serif text-2xl italic">
            More works in this category coming soon.
          </div>
        )}

        <div className="mt-20 text-center">
          <a
            href="https://www.wedmegood.com/profile/Dipak-Studios-226"
            target="_blank"
            rel="noopener noreferrer"
            className="px-16 py-6 border border-antiqueGold/20 text-antiqueGold tracking-[0.5em] uppercase text-[10px] font-bold hover:bg-antiqueGold hover:text-royalGreen transition-all duration-700 inline-block"
          >
            View Full Collection on WedMeGood
          </a>
        </div>
      </div>
    </section>
  );
};
