import React from 'react';
import { Hero } from '../components/Hero';
import { LegacyFounders } from '../components/LegacyFounders';
import { PortfolioGrid } from '../components/PortfolioGrid';
import { TestimonialsSlider } from '../components/TestimonialsSlider';
import { ReviewWall } from '../components/ReviewWall';
import { Newsletter } from '../components/Newsletter';
import { EnquirySection } from '../components/EnquirySection';
import { Page } from '../types';
import { SOCIAL } from '../constants';

interface HomeProps {
  onNavigate: (page: Page) => void;
}

// Real WedMeGood portfolio images for scroll strip
const SCROLL_STRIP = [
  'https://image.wedmegood.com/resized/800X/uploads/member/226/1670446613_avmx19a.jpg',
  'https://image.wedmegood.com/resized/800X/uploads/member/226/1774255025_image2071.jpg',
  'https://image.wedmegood.com/resized/800X/uploads/member/226/1773826222_image4839.jpg',
  'https://image.wedmegood.com/resized/800X/uploads/member/226/1748694675_image4833.jpg',
  'https://image.wedmegood.com/resized/800X/uploads/member/226/1771327653_image4343.jpg',
  'https://image.wedmegood.com/resized/800X/uploads/member/226/1772882489_image8740.jpg',
  'https://image.wedmegood.com/resized/800X/uploads/member/226/1771327659_image7429.jpg',
  'https://image.wedmegood.com/resized/800X/uploads/member/226/1770114691_image5413.jpg',
];

// Real Instagram archive links + matched WedMeGood images
const INSTAGRAM_GRID = [
  { id: '1', url: SOCIAL.instagram, img: 'https://image.wedmegood.com/resized/800X/uploads/project/292285/1718610659_image6971.jpg', label: 'Ritesh & Swati' },
  { id: '2', url: SOCIAL.instagram, img: 'https://image.wedmegood.com/resized/800X/uploads/project/323518/1774250895_image4782.jpg', label: 'Pranav & Mahi' },
  { id: '3', url: SOCIAL.instagram, img: 'https://image.wedmegood.com/resized/800X/uploads/project/292730/1719128143_image5449.jpg', label: 'Keshav & Anulika' },
  { id: '4', url: SOCIAL.instagram, img: 'https://image.wedmegood.com/resized/800X/uploads/project/290792/1716624036_image5406.jpg', label: 'Muskan & Dhruv' },
  { id: '5', url: SOCIAL.instagram, img: 'https://image.wedmegood.com/resized/800X/uploads/member/226/1770793876_image9615.jpg', label: 'Heritage Moment' },
  { id: '6', url: SOCIAL.instagram, img: 'https://image.wedmegood.com/resized/800X/uploads/member/226/1748694766_image5148.jpg', label: 'Bridal Elegance' },
  { id: '7', url: SOCIAL.instagram, img: 'https://image.wedmegood.com/resized/800X/uploads/member/226/1748694573_image8102.jpg', label: 'Sacred Rites' },
  { id: '8', url: SOCIAL.instagram, img: 'https://image.wedmegood.com/resized/800X/uploads/member/226/1748694774_image3299.jpg', label: 'Candid Grace' },
  { id: '9', url: SOCIAL.instagram, img: 'https://image.wedmegood.com/resized/800X/uploads/member/226/1770114691_image5413.jpg', label: 'Golden Hour' },
  { id: '10', url: SOCIAL.instagram, img: 'https://image.wedmegood.com/resized/800X/uploads/member/226/1774255025_image2071.jpg', label: 'Portrait Session' },
];

const SOCIAL_LINKS = [
  { name: 'Instagram', url: SOCIAL.instagram, icon: <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg> },
  { name: 'YouTube', url: SOCIAL.youtube, icon: <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 4-8 4z"/></svg> },
  { name: 'Facebook', url: SOCIAL.facebook, icon: <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg> },
];

export const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  return (
    <article className="animate-fadeIn">
      <h1 className="sr-only">Dipak Studios — Luxury Wedding Photography & Cinematic Films since 1962, Delhi NCR</h1>

      {/* Hero — now receives onNavigate to fix broken CTA */}
      <Hero onNavigate={onNavigate} />

      <LegacyFounders />

      {/* Scroll Strip — Real portfolio images */}
      <section className="py-16 bg-charcoal overflow-hidden">
        <div className="flex space-x-6 no-scrollbar overflow-x-auto px-6">
          {SCROLL_STRIP.map((src, i) => (
            <div
              key={i}
              className="min-w-[280px] md:min-w-[420px] aspect-[3/4] overflow-hidden rounded-sm relative group flex-shrink-0"
            >
              <img
                src={src}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
                alt="Dipak Studios Legacy Frame"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-royalGreen/20 group-hover:bg-transparent transition-colors" />
            </div>
          ))}
        </div>
      </section>

      <PortfolioGrid />

      {/* Featured Film Spotlight — links to YouTube */}
      <section className="py-32 bg-royalGreen relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-24 items-center">
            <div className="space-y-10">
              <h3 className="text-antiqueGold uppercase tracking-[0.5em] text-[10px] font-bold">
                Latest Release
              </h3>
              <h2 className="font-serif text-5xl md:text-7xl text-ivory leading-tight">
                The <span className="italic font-light">Symphony</span> of Vows
              </h2>
              <p className="text-ivory/50 text-sm leading-loose max-w-md font-light tracking-wide">
                Over 424 wedding films published and counting. Experience cinematic storytelling that has earned 1.56 lakh subscribers and the trust of India's most celebrated families.
              </p>
              <a
                href={SOCIAL.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center space-x-6 text-antiqueGold"
              >
                <div className="w-20 h-20 rounded-full border border-antiqueGold/30 flex items-center justify-center group-hover:bg-antiqueGold group-hover:text-royalGreen transition-all duration-700">
                  <svg className="w-6 h-6 ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] uppercase tracking-[0.4em] font-bold block">Watch on YouTube</span>
                  <span className="text-[8px] uppercase tracking-[0.2em] text-ivory/30 block">424 Films · 4K HDR · @DipakStudiosdelhi</span>
                </div>
              </a>
            </div>
            <a
              href={SOCIAL.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="relative group cursor-pointer overflow-hidden rounded-sm shadow-2xl glass-dark p-2 block"
            >
              <img
                src="https://image.wedmegood.com/resized/800X/uploads/project/323518/1774250895_image4782.jpg"
                className="w-full aspect-video object-cover brightness-75 group-hover:scale-105 transition-all duration-1000"
                alt="Latest Dipak Studios Wedding Film"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-black/40 backdrop-blur-sm">
                <span className="font-serif text-3xl italic text-antiqueGold">Watch on YouTube</span>
              </div>
            </a>
          </div>
        </div>
      </section>

      <TestimonialsSlider />

      <EnquirySection />

      <ReviewWall />

      {/* Social Hub */}
      <section className="py-24 bg-charcoal border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="mb-16">
            <h3 className="font-sans text-[10px] tracking-[0.8em] uppercase text-antiqueGold font-bold mb-4">
              Digital Archive
            </h3>
            <h2 className="font-serif text-4xl md:text-6xl text-ivory italic">Social Hub</h2>
          </div>

          <div className="flex flex-wrap justify-center gap-12 mb-16 items-center">
            {SOCIAL_LINKS.map((s) => (
              <a
                key={s.name}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 font-sans text-[10px] uppercase tracking-[0.5em] text-ivory/40 hover:text-antiqueGold transition-all font-bold group"
              >
                <span className="group-hover:scale-110 transition-transform">{s.icon}</span>
                <span className="hidden sm:inline">{s.name}</span>
              </a>
            ))}
          </div>

          {/* Real Instagram Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
            {INSTAGRAM_GRID.map((post) => (
              <a
                key={post.id}
                href={post.url}
                target="_blank"
                rel="noopener noreferrer"
                className="aspect-square overflow-hidden relative group rounded-sm block"
              >
                <img
                  src={post.img}
                  alt={post.label}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-charcoal/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <span className="font-sans text-[8px] uppercase tracking-[0.3em] text-antiqueGold text-center px-2">
                    {post.label}
                  </span>
                </div>
              </a>
            ))}
            {/* Follow CTA tile */}
            <a
              href={SOCIAL.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="aspect-square bg-antiqueGold flex flex-col items-center justify-center text-royalGreen space-y-3 group hover:bg-ivory transition-colors duration-700 p-6 rounded-sm"
            >
              <svg className="w-8 h-8 animate-float" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              <div className="text-center">
                <span className="font-sans text-[9px] tracking-[0.3em] font-black uppercase block">Follow</span>
                <span className="text-[8px] opacity-60">@dipak_studios</span>
              </div>
            </a>
          </div>
        </div>
      </section>

      <Newsletter />
    </article>
  );
};
