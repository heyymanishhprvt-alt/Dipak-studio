import React from 'react';
import { REAL_REVIEWS } from '../constants';

export const ReviewWall: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-royalGreen border-t border-antiqueGold/10">
      <div className="max-w-7xl mx-auto">
        {/* Header with live rating badge */}
        <div className="text-center mb-16">
          <h3 className="font-sans text-[10px] tracking-[0.5em] uppercase text-antiqueGold font-bold mb-4">
            The Review Wall
          </h3>
          <h2 className="font-serif text-4xl md:text-6xl text-ivory mb-8">
            Community <span className="italic font-light">Gratitude</span>
          </h2>
          {/* WedMeGood verified badge */}
          <a
            href="https://www.wedmegood.com/profile/Dipak-Studios-226/reviews"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-4 px-8 py-4 border border-antiqueGold/20 hover:border-antiqueGold/40 transition-all"
          >
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-4 h-4 text-antiqueGold" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="font-serif text-2xl text-antiqueGold">4.8</span>
            <span className="font-sans text-[9px] uppercase tracking-[0.3em] text-ivory/50 font-bold">
              203 Verified Reviews · WedMeGood
            </span>
            <svg className="w-3 h-3 text-antiqueGold/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>

        {/* Review Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {REAL_REVIEWS.map((review, i) => (
            <div
              key={i}
              className="morphic-card p-10 rounded-sm hover:-translate-y-2 transition-all duration-500 group border border-antiqueGold/5"
            >
              <div className="flex space-x-1 mb-6">
                {[...Array(review.rating)].map((_, j) => (
                  <svg key={j} className="w-3 h-3 text-antiqueGold" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="font-serif text-xl text-ivory/80 leading-relaxed italic mb-10 group-hover:text-ivory transition-colors">
                "{review.quote}"
              </p>
              <div className="pt-6 border-t border-antiqueGold/10 flex justify-between items-end">
                <div>
                  <h4 className="font-serif text-2xl text-antiqueGold">{review.name}</h4>
                  <p className="text-[9px] uppercase tracking-widest text-ivory/30 mt-1">{review.location}</p>
                </div>
                <span className="text-[8px] uppercase tracking-widest text-antiqueGold/40 font-bold">
                  {review.date}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="https://www.wedmegood.com/profile/Dipak-Studios-226/reviews"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[10px] uppercase tracking-[0.4em] text-antiqueGold border-b border-antiqueGold/30 pb-1 hover:border-antiqueGold transition-colors font-bold"
          >
            Read All 203 Reviews on WedMeGood →
          </a>
        </div>
      </div>
    </section>
  );
};
