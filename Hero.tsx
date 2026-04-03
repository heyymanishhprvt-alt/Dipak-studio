import React from 'react';
import { Page } from '../types';
import { buildWhatsAppURL } from '../constants';

interface HeroProps {
  onNavigate: (page: Page) => void;
}

const TRUST_STATS = [
  { value: '4.8★', label: '203 Verified Reviews', sub: 'WedMeGood' },
  { value: '60+', label: 'Years of Legacy', sub: 'Est. 1962' },
  { value: '1.56L', label: 'YouTube Subscribers', sub: '@DipakStudiosdelhi' },
  { value: '7254+', label: 'Portfolio Images', sub: 'Published Works' },
];

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const waUrl = buildWhatsAppURL(
    'Greetings Dipak Studios, I am interested in commissioning your cinematic services for an upcoming celebration. Could we discuss availability and pricing?'
  );

  return (
    <section className="relative min-h-screen w-full overflow-hidden flex flex-col items-center justify-center bg-charcoal">
      {/* Cinematic Background */}
      <div className="absolute inset-0 z-0 scale-110">
        <img
          src="https://image.wedmegood.com/resized/1000X/uploads/project/323518/1774250895_image4782.jpg"
          className="w-full h-full object-cover brightness-[0.22] saturate-[0.7]"
          alt="Dipak Studios — Luxury Wedding Cinematography"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-royalGreen/80 via-transparent to-royalGreen" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(14,42,36,0.7)_100%)]" />
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 text-center px-6 max-w-7xl mx-auto mt-20 flex flex-col items-center">
        <div className="overflow-hidden mb-8">
          <h2
            className="font-sans text-[10px] md:text-xs tracking-[1em] uppercase text-antiqueGold font-bold opacity-0 animate-fadeIn"
            style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}
          >
            Visionaries of the Eternal Union · Est. 1962 · Delhi NCR
          </h2>
        </div>

        <h1
          className="font-serif text-6xl md:text-9xl mb-10 leading-[0.85] tracking-tighter opacity-0 animate-fadeIn"
          style={{ animationDelay: '0.7s', animationFillMode: 'forwards' }}
        >
          Legacy{' '}
          <span className="italic font-light">Cinema.</span>
          <br />
          <span className="gold-gradient-text font-bold">Est. 1962.</span>
        </h1>

        <p
          className="max-w-md font-sans text-[11px] text-ivory/60 uppercase tracking-[0.3em] leading-relaxed text-center font-medium border-l-2 border-antiqueGold/30 pl-6 mb-12 opacity-0 animate-fadeIn"
          style={{ animationDelay: '1s', animationFillMode: 'forwards' }}
        >
          Preserving the silent promises of India's most celebrated families — loved by Amitabh Bachchan, Rishi Kapoor & beyond.
        </p>

        {/* CTA Buttons */}
        <div
          className="flex flex-col sm:flex-row gap-5 opacity-0 animate-fadeIn"
          style={{ animationDelay: '1.2s', animationFillMode: 'forwards' }}
        >
          <button
            onClick={() => onNavigate('booking')}
            className="group relative overflow-hidden px-14 py-6 bg-antiqueGold text-royalGreen tracking-[0.4em] uppercase text-[10px] font-bold transition-all hover:bg-ivory shadow-2xl cta-glow"
          >
            Reserve Your Date
          </button>
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-12 py-6 border border-antiqueGold/40 text-antiqueGold tracking-[0.4em] uppercase text-[10px] font-bold hover:bg-antiqueGold hover:text-royalGreen transition-all backdrop-blur-md flex items-center justify-center gap-3"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Instant WhatsApp Quote
          </a>
        </div>
      </div>

      {/* Trust Stats Bar */}
      <div
        className="relative z-10 w-full mt-16 opacity-0 animate-fadeIn"
        style={{ animationDelay: '1.5s', animationFillMode: 'forwards' }}
      >
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-antiqueGold/10 border border-antiqueGold/10 backdrop-blur-md">
            {TRUST_STATS.map((stat) => (
              <div
                key={stat.label}
                className="bg-royalGreen/60 backdrop-blur-md px-6 py-6 text-center"
              >
                <span className="block font-serif text-3xl text-antiqueGold leading-none mb-1">
                  {stat.value}
                </span>
                <span className="block font-sans text-[9px] uppercase tracking-[0.3em] text-ivory/70 font-bold">
                  {stat.label}
                </span>
                <span className="block font-sans text-[8px] uppercase tracking-widest text-antiqueGold/40 mt-1">
                  {stat.sub}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-30">
        <div className="w-px h-10 bg-gradient-to-b from-antiqueGold to-transparent animate-pulse" />
      </div>
    </section>
  );
};
