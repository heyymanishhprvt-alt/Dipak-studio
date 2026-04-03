import React, { useState } from 'react';
import { buildMailto } from '../constants';

export const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    window.open(
      buildMailto('Newsletter Subscription — Dipak Studios', {
        'Subscriber Email': email,
        'Source': 'Website Newsletter Section',
      }),
      '_blank'
    );
    setStatus('success');
    setEmail('');
  };

  return (
    <section className="py-24 bg-charcoal relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none flex items-center justify-center">
        <div className="w-[800px] h-[800px] bg-antiqueGold rounded-full blur-[160px]" />
      </div>
      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        <div className="max-w-2xl mx-auto space-y-8">
          <h3 className="font-sans text-[10px] tracking-[0.5em] uppercase text-antiqueGold font-bold">The Archive Journal</h3>
          <h2 className="font-serif text-4xl md:text-6xl text-ivory">Join our <span className="italic font-light">Inner Circle</span></h2>
          <p className="text-ivory/50 text-sm leading-relaxed font-light tracking-wide">
            Exclusive wedding planning narratives, cinematic trends, and early access to our limited commission dates.
          </p>
          {status === 'success' ? (
            <div className="py-8 space-y-4 animate-fadeIn">
              <div className="w-12 h-12 rounded-full bg-antiqueGold/20 flex items-center justify-center mx-auto border border-antiqueGold/30">
                <svg className="w-6 h-6 text-antiqueGold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              </div>
              <p className="text-antiqueGold font-bold uppercase tracking-widest text-sm">Welcome to the Inner Circle</p>
              <button onClick={() => setStatus('idle')} className="text-antiqueGold/50 text-[9px] uppercase tracking-widest border-b border-antiqueGold/20 pb-0.5 hover:text-antiqueGold transition-colors">
                Subscribe another email
              </button>
            </div>
          ) : (
            <form className="flex flex-col md:flex-row gap-4 mt-10" onSubmit={handleSubmit}>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Your Email Address" required
                className="flex-1 bg-royalGreen/30 border border-antiqueGold/20 px-8 py-5 text-ivory text-sm focus:outline-none focus:border-antiqueGold transition-all rounded-sm placeholder:text-ivory/30" />
              <button type="submit" className="bg-antiqueGold text-royalGreen px-12 py-5 text-[10px] uppercase tracking-[0.4em] font-bold hover:bg-ivory transition-all shadow-xl whitespace-nowrap">
                Subscribe
              </button>
            </form>
          )}
          <p className="text-[8px] uppercase tracking-widest text-ivory/20 mt-4">Protected by our Legacy Privacy Standards · No spam, ever.</p>
        </div>
      </div>
    </section>
  );
};
