import React from 'react';
import { BRANCHES, SOCIAL } from '../constants';
import { Page } from '../types';
import { Logo } from './Logo';

interface FooterProps {
  onNavigate: (page: Page) => void;
}

const SOCIAL_LINKS = [
  {
    id: 'insta',
    url: SOCIAL.instagram,
    label: 'Instagram',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    id: 'yt',
    url: SOCIAL.youtube,
    label: 'YouTube',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 4-8 4z" />
      </svg>
    ),
  },
  {
    id: 'fb',
    url: SOCIAL.facebook,
    label: 'Facebook',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
      </svg>
    ),
  },
];

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-charcoal text-ivory/60 py-24 px-6 border-t border-antiqueGold/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">

          {/* Brand + Contact */}
          <div className="col-span-1">
            <button onClick={() => onNavigate('home')} className="mb-8 block text-left group">
              <Logo className="h-10 mb-2" />
              <span className="font-sans text-[8px] tracking-[0.4em] uppercase mt-1">Legacy Est. 1962</span>
            </button>

            <div className="space-y-6">
              <h5 className="font-sans text-[10px] tracking-[0.4em] uppercase text-antiqueGold font-bold">Contact</h5>
              <div className="space-y-5">
                <div>
                  <a href={`mailto:${SOCIAL.email}`} className="block font-serif text-lg text-ivory hover:text-antiqueGold transition-colors">
                    {SOCIAL.email}
                  </a>
                  <p className="font-sans text-[9px] uppercase tracking-widest text-ivory/30 mt-1">Appointments & Enquiries</p>
                </div>
                <div>
                  <a href={`mailto:${SOCIAL.supportEmail}`} className="block font-serif text-lg text-ivory hover:text-antiqueGold transition-colors">
                    {SOCIAL.supportEmail}
                  </a>
                  <p className="font-sans text-[9px] uppercase tracking-widest text-ivory/30 mt-1">Business & Support</p>
                </div>
                <div>
                  <a href="tel:+918527274260" className="block font-serif text-lg text-ivory hover:text-antiqueGold transition-colors">
                    +91 85272 74260
                  </a>
                  <p className="font-sans text-[9px] uppercase tracking-widest text-ivory/30 mt-1">WhatsApp Concierge</p>
                </div>
              </div>
            </div>
          </div>

          {/* Locations */}
          <div className="lg:col-span-2">
            <h5 className="font-sans text-[10px] tracking-[0.4em] uppercase text-antiqueGold mb-8 font-bold">Locations</h5>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {BRANCHES.map((branch) => (
                <a
                  key={branch.city}
                  href={branch.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="space-y-4 group block p-4 border border-transparent hover:border-antiqueGold/10 hover:bg-royalGreen/5 transition-all duration-500 rounded-sm"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-9 h-9 rounded-full border border-antiqueGold/20 flex items-center justify-center text-antiqueGold group-hover:bg-antiqueGold group-hover:text-royalGreen transition-all duration-500">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="font-serif text-xl text-ivory group-hover:text-antiqueGold transition-colors">{branch.city}</p>
                  </div>
                  <div className="space-y-1">
                    <p className="font-sans text-[9px] leading-relaxed uppercase group-hover:text-ivory transition-colors">
                      {branch.address}
                      {branch.isHeadOffice && (
                        <span className="text-antiqueGold font-bold ml-1 tracking-widest"> (HQ)</span>
                      )}
                    </p>
                    <p className="font-sans text-[10px] text-antiqueGold/40 font-bold">{branch.phone}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Navigation + Social */}
          <div className="flex flex-col space-y-12">
            <div className="space-y-6">
              <h5 className="font-sans text-[10px] tracking-[0.4em] uppercase text-antiqueGold font-bold">The Studio</h5>
              <ul className="space-y-3">
                {([
                  { label: 'Films', id: 'films' },
                  { label: 'Services', id: 'services' },
                  { label: 'Heritage', id: 'about' },
                  { label: 'Journal', id: 'blog' },
                  { label: 'Booking', id: 'booking' },
                  { label: 'Reviews', id: 'reviews' },
                ] as { label: string; id: Page }[]).map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => onNavigate(item.id)}
                      className="font-sans text-[10px] uppercase tracking-[0.2em] hover:text-ivory transition-colors text-ivory/40"
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-6">
              <h5 className="font-sans text-[10px] tracking-[0.4em] uppercase text-antiqueGold font-bold">Social</h5>
              <div className="flex space-x-5 items-center">
                {SOCIAL_LINKS.map((link) => (
                  <a
                    key={link.id}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                    className="text-ivory/40 hover:text-antiqueGold transition-all transform hover:scale-110"
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
              <a
                href={SOCIAL.google}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[9px] uppercase tracking-widest text-antiqueGold/50 hover:text-antiqueGold transition-colors font-bold"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 11h8.533c.044.385.067.78.067 1.184 0 3.37-1.167 6.22-3.1 8.124C15.79 22.17 14.013 23 12 23 6.477 23 2 18.523 2 13S6.477 3 12 3c2.69 0 5.132 1.03 6.963 2.727l-2.64 2.638C15.196 7.272 13.673 6.6 12 6.6c-3.535 0-6.4 2.865-6.4 6.4s2.865 6.4 6.4 6.4c3.19 0 5.538-1.92 6.213-4.6H12V11z"/>
                </svg>
                Google Business
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-ivory/5 flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0 text-[8px] tracking-[0.3em] uppercase font-bold">
          <p className="text-ivory/30">
            &copy; {new Date().getFullYear()} Dipak Studios. Preservation through the Golden Hour.
          </p>
          <div className="flex flex-wrap justify-center gap-8">
            <button onClick={() => onNavigate('support')} className="hover:text-antiqueGold transition-colors">
              Terms & Conditions
            </button>
            <button onClick={() => onNavigate('support')} className="hover:text-antiqueGold transition-colors">
              Privacy Policy
            </button>
            <a
              href="https://www.wedmegood.com/profile/Dipak-Studios-226"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-antiqueGold transition-colors"
            >
              WedMeGood Profile
            </a>
          </div>
          <p className="text-antiqueGold/30 hidden lg:block">Crafted for the Eternal Frame</p>
        </div>
      </div>
    </footer>
  );
};
