import React, { useState } from 'react';
import { buildMailto } from '../constants';

const POSTS = [
  {
    title: 'Top 10 Wedding Venues in South Delhi for a Winter Celebration',
    cat: 'Locations',
    date: 'Jan 12, 2024',
    img: 'https://image.wedmegood.com/resized/800X/uploads/project/285213/1712055922_image2807.jpg',
    excerpt: 'From farmhouses in Chattarpur to palace-style venues in Mehrauli, we reveal the most cinematic backdrops our team has ever worked at in the capital.',
    slug: 'top-venues-south-delhi',
  },
  {
    title: 'How to Choose Your Bridal Outfit Colors for Cinematic Photography',
    cat: 'Style Guide',
    date: 'Jan 05, 2024',
    img: 'https://image.wedmegood.com/resized/800X/uploads/member/226/1774255025_image2071.jpg',
    excerpt: 'The right palette makes the difference between a beautiful photograph and an unforgettable cinematic frame. Our creative directors share their insider guide.',
    slug: 'bridal-colors-cinematography',
  },
  {
    title: 'The Legacy of Dipak Studios: 60 Years of Changing Frames',
    cat: 'Heritage',
    date: 'Dec 20, 2023',
    img: '/founder-sunderdipaksir.png',
    excerpt: 'From a modest photo studio at Neelam Chowk, Faridabad in 1962 to covering celebrity weddings across three continents — the untold story of India\'s most trusted photography house.',
    slug: '60-years-of-dipak-studios',
  },
  {
    title: 'Why Candid Photography is the Heart of Every Great Wedding Album',
    cat: 'Photography',
    date: 'Nov 15, 2023',
    img: 'https://image.wedmegood.com/resized/800X/uploads/member/226/1770793876_image9615.jpg',
    excerpt: 'The posed shots tell you what happened. The candid frames tell you how it felt. Our lead photographers on why unscripted moments outlast every perfectly arranged group photo.',
    slug: 'candid-wedding-photography',
  },
  {
    title: 'Destination Wedding Planning: A Guide to Jaipur, Udaipur & Beyond',
    cat: 'Destinations',
    date: 'Oct 30, 2023',
    img: 'https://image.wedmegood.com/resized/800X/uploads/project/292730/1719128143_image5449.jpg',
    excerpt: 'Our team has photographed weddings in over 17 cities. Here is everything we have learned about planning the logistics, lighting, and legacy of a destination wedding in Rajasthan.',
    slug: 'destination-wedding-rajasthan',
  },
  {
    title: '4K Cinematic Wedding Films: What to Expect from the Post-Production Process',
    cat: 'Filmmaking',
    date: 'Oct 10, 2023',
    img: 'https://image.wedmegood.com/resized/800X/uploads/project/323518/1774250895_image4782.jpg',
    excerpt: 'From RAW footage to color-graded masterpiece — Raman Dipak walks you through the 6-week editing journey that transforms hours of footage into a 12-minute cinematic highlight.',
    slug: 'wedding-film-post-production',
  },
];

const CATEGORIES = ['All', 'Locations', 'Style Guide', 'Heritage', 'Photography', 'Destinations', 'Filmmaking'];

export const Blog: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [email, setEmail] = useState('');
  const [subStatus, setSubStatus] = useState<'idle' | 'done'>('idle');

  const filtered = activeCategory === 'All' ? POSTS : POSTS.filter(p => p.cat === activeCategory);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    window.open(buildMailto('Journal Subscription', { Email: email, Source: 'Blog Page' }), '_blank');
    setSubStatus('done');
    setEmail('');
  };

  return (
    <div className="bg-ivory min-h-screen text-royalGreen animate-fadeIn">
      {/* Header */}
      <div className="py-32 px-6 border-b border-royalGreen/5">
        <div className="max-w-7xl mx-auto">
          <h3 className="font-sans text-[10px] tracking-[0.5em] uppercase text-antiqueGold font-bold mb-4">The Studio Journal</h3>
          <h1 className="font-serif text-6xl md:text-8xl mb-6">
            The <span className="italic underline decoration-antiqueGold decoration-2 underline-offset-8">Journal</span>
          </h1>
          <p className="font-sans text-xs tracking-widest uppercase text-royalGreen/50 mb-12">Insights, Trends & Legacy Stories from the Dipak Archive</p>
          {/* Category Filter */}
          <div className="flex flex-wrap gap-x-8 gap-y-3">
            {CATEGORIES.map(cat => (
              <button key={cat} onClick={() => setActiveCategory(cat)}
                className={`text-[10px] uppercase tracking-[0.3em] font-bold pb-2 border-b transition-all ${activeCategory === cat ? 'text-royalGreen border-antiqueGold' : 'text-royalGreen/30 border-transparent hover:text-royalGreen/60'}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Posts Grid */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {filtered.map(post => (
            <article key={post.slug} className="group cursor-pointer">
              <div className="aspect-[4/3] bg-charcoal mb-8 overflow-hidden rounded-sm relative">
                <img src={post.img} className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" alt={post.title} loading="lazy" />
                <div className="absolute inset-0 bg-royalGreen/20 group-hover:bg-transparent transition-colors duration-700" />
              </div>
              <span className="text-antiqueGold text-[9px] uppercase tracking-[0.3em] font-bold mb-3 block">{post.cat} · {post.date}</span>
              <h3 className="font-serif text-2xl group-hover:text-antiqueGold transition-colors leading-snug mb-4">{post.title}</h3>
              <p className="text-royalGreen/60 text-sm leading-relaxed font-light">{post.excerpt}</p>
              <div className="mt-6 flex items-center gap-2 text-[9px] uppercase tracking-widest text-antiqueGold font-bold">
                <span>Read More</span>
                <svg className="w-3 h-3 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Newsletter */}
      <div className="max-w-7xl mx-auto px-6 pb-32">
        <div className="p-12 md:p-16 bg-royalGreen text-ivory rounded-sm flex flex-col md:flex-row items-center justify-between gap-12">
          <div>
            <h4 className="font-serif text-3xl mb-2">Join the Inner Circle</h4>
            <p className="text-ivory/50 text-xs uppercase tracking-widest">Get exclusive planning tips once a month</p>
          </div>
          {subStatus === 'done' ? (
            <p className="text-antiqueGold font-bold uppercase tracking-widest text-sm">Subscribed. Welcome.</p>
          ) : (
            <form className="flex w-full md:w-auto" onSubmit={handleSubscribe}>
              <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Your Email" required
                className="bg-charcoal/50 border border-antiqueGold/20 px-6 py-4 text-sm focus:outline-none focus:border-antiqueGold flex-1 md:w-72 text-ivory placeholder:text-ivory/30" />
              <button type="submit" className="bg-antiqueGold text-royalGreen px-8 py-4 text-[10px] uppercase font-bold tracking-widest hover:bg-ivory transition-all">Subscribe</button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
