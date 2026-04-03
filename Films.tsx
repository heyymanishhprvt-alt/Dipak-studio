import React, { useState } from 'react';

const CATEGORIES = ['All Films', 'Grand Weddings', 'Pre-Weddings', 'Celebrity', 'Cinematic Shorts'];

// Real YouTube channel: @DipakStudiosdelhi (1.56L subs, 424 videos)
// Using YouTube search/playlist embed for the channel
const FILMS = [
  {
    id: 'f1',
    title: 'Ritesh & Swati',
    subtitle: 'Delhi NCR · Grand Wedding Film',
    thumbnail: 'https://image.wedmegood.com/resized/800X/uploads/project/292285/1718610659_image6971.jpg',
    youtubeSearch: 'Ritesh Swati Dipak Studios',
    category: 'Grand Weddings',
    duration: '14:32',
  },
  {
    id: 'f2',
    title: 'Pranav & Mahi',
    subtitle: 'Gurgaon · Cinematic Highlight',
    thumbnail: 'https://image.wedmegood.com/resized/800X/uploads/project/323518/1774250895_image4782.jpg',
    youtubeSearch: 'Pranav Mahi Dipak Studios',
    category: 'Grand Weddings',
    duration: '11:20',
  },
  {
    id: 'f3',
    title: 'Keshav & Anulika',
    subtitle: 'Jaipur Destination · Feature Film',
    thumbnail: 'https://image.wedmegood.com/resized/800X/uploads/project/292730/1719128143_image5449.jpg',
    youtubeSearch: 'Keshav Anulika Dipak Studios',
    category: 'Grand Weddings',
    duration: '16:05',
  },
  {
    id: 'f4',
    title: 'Muskan & Dhruv',
    subtitle: 'Delhi NCR · Cinematic Edit',
    thumbnail: 'https://image.wedmegood.com/resized/800X/uploads/project/290792/1716624036_image5406.jpg',
    youtubeSearch: 'Muskan Dhruv Dipak Studios',
    category: 'Cinematic Shorts',
    duration: '8:47',
  },
];

export const Films: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All Films');

  const filtered = activeCategory === 'All Films'
    ? FILMS
    : FILMS.filter((f) => f.category === activeCategory);

  return (
    <div className="bg-charcoal min-h-screen py-24 animate-fadeIn">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <header className="mb-16 text-center">
          <h3 className="font-sans text-[10px] tracking-[0.5em] uppercase text-antiqueGold font-bold mb-4">
            Cinematic Archive
          </h3>
          <h1 className="font-serif text-6xl md:text-8xl text-ivory mb-4">
            Wedding <span className="italic font-light">Films</span>
          </h1>
          <p className="text-ivory/40 text-[10px] uppercase tracking-[0.4em] font-bold mb-10">
            424 Films · 4K HDR · @DipakStudiosdelhi
          </p>
          <div className="flex flex-wrap justify-center gap-6 mt-6">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-[10px] uppercase tracking-[0.3em] font-bold pb-2 border-b transition-all ${
                  activeCategory === cat
                    ? 'text-antiqueGold border-antiqueGold'
                    : 'text-ivory/40 border-transparent hover:text-antiqueGold/60'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </header>

        {/* Films Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {filtered.map((film) => (
            <a
              key={film.id}
              href={`https://www.youtube.com/@DipakStudiosdelhi/search?query=${encodeURIComponent(film.title)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative cursor-pointer block"
            >
              <div className="aspect-video bg-royalGreen overflow-hidden rounded-sm relative shadow-2xl">
                <img
                  src={film.thumbnail}
                  className="w-full h-full object-cover opacity-70 group-hover:scale-105 group-hover:opacity-50 transition-all duration-700"
                  alt={film.title}
                  loading="lazy"
                />
                {/* Play Button */}
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <div className="w-16 h-16 rounded-full border-2 border-ivory/40 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-antiqueGold group-hover:border-antiqueGold group-hover:text-royalGreen transition-all duration-500">
                    <svg className="w-6 h-6 ml-1 text-ivory group-hover:text-royalGreen" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <div className="text-center transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                    <h3 className="font-serif text-3xl text-ivory opacity-0 group-hover:opacity-100 transition-all duration-500">
                      {film.title}
                    </h3>
                    <p className="text-antiqueGold text-[10px] uppercase tracking-widest mt-2 opacity-0 group-hover:opacity-100 transition-all duration-700">
                      {film.subtitle}
                    </p>
                  </div>
                </div>
                {/* Duration badge */}
                <div className="absolute bottom-4 right-4 bg-black/70 text-ivory text-[9px] font-bold px-3 py-1 rounded tracking-widest">
                  {film.duration}
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* YouTube Channel CTA */}
        <div className="mt-24 text-center space-y-6">
          <p className="text-ivory/40 font-sans text-xs">
            1.56 Lakh subscribers · 424 cinematic wedding films published
          </p>
          <a
            href="https://www.youtube.com/@DipakStudiosdelhi"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-4 border border-antiqueGold/40 text-antiqueGold px-12 py-5 text-[10px] uppercase tracking-[0.4em] hover:bg-antiqueGold hover:text-royalGreen transition-all font-bold"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 4-8 4z" />
            </svg>
            Watch Full Archive on YouTube
          </a>
        </div>
      </div>
    </div>
  );
};
