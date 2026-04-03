import React, { useState } from 'react';
import { SERVICES } from '../constants';
import { buildWhatsAppURL } from '../constants';
import { Page } from '../types';

interface ServicesProps {
  onNavigate?: (page: Page) => void;
}

const TIERS = [
  {
    name: 'The Heritage',
    desc: 'For the classic narrative.',
    price: 'From ₹4L',
    tag: '',
    features: [
      'Lead Photographer + Assistant',
      'Candid + Traditional Coverage',
      '10-Min Signature Highlight Film',
      '250 Master-Graded Portraits',
      'Global Archival Access (Lifetime)',
    ],
  },
  {
    name: 'The Royal',
    desc: 'Our most requested experience.',
    price: 'From ₹8L',
    tag: 'Most Popular',
    features: [
      '4-Member Multi-Angle Crew',
      '4K Aerial Drone Cinematography',
      'Same-Day Edit Premiere',
      'Hand-Bound Italian Leather Album',
      'Pre-Wedding Film Included',
      'Priority Post-Production (4 weeks)',
    ],
  },
  {
    name: 'The Grandeur',
    desc: 'Uncompromising global scale.',
    price: 'Bespoke',
    tag: 'Celebrity Tier',
    features: [
      'Executive Creative Direction',
      'Feature-Length Documentary Film',
      'Stylized Pre-Wedding Cinematic',
      '24-Hour Social Concierge',
      'Photobooth Setup Included',
      'Legacy Film for Posterity',
    ],
  },
];

export const Services: React.FC<ServicesProps> = ({ onNavigate }) => {
  const [activeService, setActiveService] = useState<string | null>(null);

  return (
    <div className="bg-royalGreen min-h-screen py-32 text-ivory animate-fadeIn">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <header className="text-center mb-24">
          <h3 className="font-sans text-[10px] tracking-[0.6em] uppercase text-antiqueGold mb-6 font-bold">
            Services
          </h3>
          <h1 className="font-serif text-6xl md:text-8xl mb-8 leading-tight">
            The <span className="italic font-light">Curated</span>{' '}
            <br />
            <span className="gold-gradient-text font-bold">Collections</span>
          </h1>
          <p className="text-ivory/40 font-sans text-xs tracking-[0.3em] uppercase max-w-xl mx-auto leading-relaxed">
            Tailored visual narratives designed for the world's most discerning families.
          </p>
        </header>

        {/* Pricing Tiers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-40">
          {TIERS.map((tier, idx) => (
            <div
              key={tier.name}
              className={`morphic-card p-12 rounded-sm flex flex-col group transition-all duration-500 relative ${
                idx === 1
                  ? 'border border-antiqueGold/60 shadow-[0_0_50px_rgba(201,164,76,0.1)] md:scale-105 z-10'
                  : 'border border-antiqueGold/10 hover:border-antiqueGold/30'
              }`}
            >
              {tier.tag && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-antiqueGold text-royalGreen text-[8px] uppercase tracking-[0.4em] font-black px-6 py-2">
                  {tier.tag}
                </div>
              )}
              <h3 className="font-serif text-4xl mb-2 group-hover:text-antiqueGold transition-colors">
                {tier.name}
              </h3>
              <p className="font-sans text-[10px] uppercase tracking-widest text-ivory/40 mb-4">
                {tier.desc}
              </p>
              <p className="text-antiqueGold font-serif text-2xl mb-10 tracking-wider">{tier.price}</p>
              <ul className="space-y-5 flex-1">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start space-x-4 text-xs text-ivory/70 leading-relaxed">
                    <div className="w-1.5 h-1.5 rounded-full bg-antiqueGold mt-1.5 flex-shrink-0" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href={buildWhatsAppURL(
                  `Greetings Dipak Studios, I am interested in the ${tier.name} package (${tier.price}). Could we discuss availability?`
                )}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-12 w-full py-5 text-[10px] uppercase tracking-[0.3em] font-bold transition-all duration-500 text-center block ${
                  idx === 1
                    ? 'bg-antiqueGold text-royalGreen hover:bg-ivory'
                    : 'border border-antiqueGold/30 text-antiqueGold hover:bg-antiqueGold hover:text-royalGreen'
                }`}
              >
                Commission This Story
              </a>
            </div>
          ))}
        </div>

        {/* Service Cards Grid */}
        <div className="mb-40">
          <div className="text-center mb-16">
            <h3 className="font-sans text-[10px] tracking-[0.5em] uppercase text-antiqueGold font-bold mb-4">
              All Services
            </h3>
            <h2 className="font-serif text-4xl md:text-5xl text-ivory">
              What We <span className="italic font-light">Offer</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service) => (
              <div
                key={service.id}
                className="group relative overflow-hidden rounded-sm shadow-2xl cursor-pointer h-[420px]"
                onClick={() => setActiveService(activeService === service.id ? null : service.id)}
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover saturate-[0.8] group-hover:saturate-100 group-hover:scale-105 transition-all duration-1000"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h4 className="font-serif text-2xl text-ivory mb-2">{service.title}</h4>
                  <p className="text-antiqueGold font-sans text-[10px] uppercase tracking-widest font-bold mb-3">
                    {service.price}
                  </p>
                  <p
                    className={`text-ivory/60 text-xs leading-relaxed mb-4 transition-all duration-500 overflow-hidden ${
                      activeService === service.id ? 'max-h-40' : 'max-h-0'
                    }`}
                  >
                    {service.description}
                  </p>
                  <div className="w-8 h-px bg-antiqueGold group-hover:w-full transition-all duration-700" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Process Section */}
        <section className="border-t border-antiqueGold/10 pt-32">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div className="relative group">
              <div className="absolute inset-0 border border-antiqueGold/20 translate-x-4 translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-700" />
              <img
                src="https://image.wedmegood.com/resized/800X/uploads/member/226/1770793876_image9615.jpg"
                className="relative z-10 rounded-sm w-full shadow-2xl group-hover:scale-[1.02] transition-all duration-700"
                alt="Dipak Studios — Process Mastery"
              />
            </div>
            <div className="space-y-10">
              <h3 className="font-sans text-[10px] tracking-[0.5em] uppercase text-antiqueGold font-bold">
                The Process
              </h3>
              <h2 className="font-serif text-5xl md:text-6xl leading-[1.1]">
                Beyond the <br />
                <span className="italic font-light text-antiqueGold">Captured Frame</span>
              </h2>
              <p className="text-ivory/60 text-sm leading-loose font-light tracking-wide">
                Our commitment begins long before the first shutter click. We provide artistic consultancy on venue lighting, color palette coordination, and heritage preservation. Every frame is treated as a masterwork — ensuring your legacy remains vibrant for the next sixty years and beyond.
              </p>
              <div className="space-y-4">
                {[
                  { step: '01', title: 'Consultation', desc: 'Private briefing with our Creative Director' },
                  { step: '02', title: 'Site Recce', desc: 'Venue walkthrough and lighting assessment' },
                  { step: '03', title: 'The Day', desc: 'Full candid + cinematic coverage, unobtrusive' },
                  { step: '04', title: 'Delivery', desc: 'Edited gallery + film within 4–6 weeks' },
                ].map((s) => (
                  <div key={s.step} className="flex items-start gap-6">
                    <span className="font-serif text-2xl text-antiqueGold/30 w-8 flex-shrink-0">{s.step}</span>
                    <div>
                      <span className="font-sans text-[10px] uppercase tracking-widest text-ivory font-bold block">
                        {s.title}
                      </span>
                      <span className="text-[10px] text-ivory/40 tracking-wider">{s.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="pt-4">
                <a
                  href={buildWhatsAppURL('Greetings Dipak Studios, I would like to schedule a consultation to discuss your services.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-4 bg-antiqueGold text-royalGreen px-10 py-5 text-[10px] uppercase tracking-[0.4em] font-bold hover:bg-ivory transition-all"
                >
                  Schedule Consultation
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
