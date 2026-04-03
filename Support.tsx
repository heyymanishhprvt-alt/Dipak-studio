import React, { useState } from 'react';
import { SOCIAL, buildWhatsAppURL, buildMailto } from '../constants';

const FAQS = [
  { q: 'How do I book Dipak Studios for my wedding?', a: 'Contact us via WhatsApp (+91 85272 74260) or email (wedding.dipak@gmail.com) with your event date, venue, and service interest. A 50% non-refundable advance secures your date on our calendar.' },
  { q: 'How far in advance should I book?', a: 'We recommend 6–12 months in advance, especially for the peak season (October–February). Destination weddings require a minimum 6-month lead time for logistics and location permits.' },
  { q: 'How long does post-production take?', a: 'Edited photographs are delivered within 4–6 weeks. The cinematic highlight film takes 6–8 weeks. Same-day edits are available on select packages with prior arrangement.' },
  { q: 'Do you travel for destination weddings?', a: 'Yes — we have covered weddings across India (Udaipur, Jaisalmer, Goa, Himachal, Mumbai) and internationally. Outstation travel and accommodation costs are borne by the client.' },
  { q: 'What is your cancellation policy?', a: 'The initial retainer (50% advance) is non-refundable as it secures the date and begins pre-production planning. For cancellations within 30 days of the event, the full contracted amount is due.' },
  { q: 'How do I access my Heritage Vault?', a: 'Your login credentials are sent via WhatsApp and email within 7 days of your event. If you have not received them, contact us immediately via WhatsApp or the support ticket below.' },
];

export const Support: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [ticketMsg, setTicketMsg] = useState('');
  const [ticketSent, setTicketSent] = useState(false);

  const handleTicket = (e: React.FormEvent) => {
    e.preventDefault();
    if (!ticketMsg) return;
    window.open(buildWhatsAppURL(`Support Ticket — Dipak Studios Website\n\n${ticketMsg}`), '_blank');
    setTicketSent(true);
  };

  return (
    <div className="bg-charcoal min-h-screen py-32 text-ivory animate-fadeIn">
      <div className="max-w-4xl mx-auto px-6">
        <header className="text-center mb-20">
          <h3 className="font-sans text-[10px] tracking-[0.6em] uppercase text-antiqueGold mb-6 font-bold">Support</h3>
          <h1 className="font-serif text-6xl mb-4">Client <span className="italic">Advocacy</span></h1>
          <p className="text-ivory/40 text-[10px] uppercase tracking-[0.4em] font-bold">Ensuring your legacy is protected</p>
        </header>

        {/* Quick Contact */}
        <div className="grid md:grid-cols-3 gap-5 mb-20">
          {[
            { label: 'WhatsApp', sub: 'Fastest · Under 2 hrs', href: buildWhatsAppURL('Hello, I need support:'), color: '#25D366' },
            { label: 'Email', sub: 'Within 4 business hours', href: `mailto:${SOCIAL.email}`, color: '#C9A44C' },
            { label: 'Call', sub: '+91 85272 74260', href: 'tel:+918527274260', color: '#C9A44C' },
          ].map((c) => (
            <a key={c.label} href={c.href} target={c.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer"
              className="p-8 border border-antiqueGold/10 bg-royalGreen/20 text-center hover:border-antiqueGold/30 transition-all rounded-sm group">
              <h4 className="font-serif text-lg mb-1 text-antiqueGold">{c.label}</h4>
              <p className="text-[9px] text-ivory/40 uppercase tracking-widest mb-3">{c.sub}</p>
              <span className="text-[9px] uppercase tracking-widest border-b border-antiqueGold/40 text-antiqueGold pb-0.5 font-bold group-hover:border-antiqueGold transition-colors">Contact →</span>
            </a>
          ))}
        </div>

        {/* FAQ */}
        <div className="mb-20">
          <h2 className="font-serif text-4xl mb-10 text-antiqueGold">Frequently Asked <span className="italic font-light">Questions</span></h2>
          <div className="space-y-3">
            {FAQS.map((faq, i) => (
              <div key={i} className="border border-ivory/5 overflow-hidden rounded-sm">
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-8 text-left hover:bg-royalGreen/10 transition-all group">
                  <span className="font-serif text-lg text-ivory group-hover:text-antiqueGold transition-colors pr-6">{faq.q}</span>
                  <svg className={`w-5 h-5 text-antiqueGold flex-shrink-0 transition-transform duration-300 ${openFaq === i ? 'rotate-45' : ''}`}
                    fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </button>
                <div className={`overflow-hidden transition-all duration-500 ${openFaq === i ? 'max-h-48' : 'max-h-0'}`}>
                  <p className="px-8 pb-8 text-sm text-ivory/60 leading-loose font-light">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Legal */}
        <section className="space-y-8 mb-20">
          <div className="morphic-card p-12 rounded-sm border border-antiqueGold/10">
            <h3 className="font-serif text-3xl mb-8 text-antiqueGold">Terms of Service</h3>
            <div className="space-y-5 text-sm text-ivory/60 leading-loose font-light">
              <p><strong className="text-ivory/80">1. Commissions:</strong> All bookings are confirmed only upon receipt of the 50% non-refundable retainer. Dates are secured on a first-come, first-served basis.</p>
              <p><strong className="text-ivory/80">2. Usage Rights:</strong> Dipak Studios retains moral and artistic rights to all captured frames. Clients receive a lifetime personal usage license. Commercial use requires separate licensing.</p>
              <p><strong className="text-ivory/80">3. Archival Guarantee:</strong> Master files are preserved for a minimum of 10 years from the event date in our digital archival systems.</p>
              <p><strong className="text-ivory/80">4. Cancellations:</strong> The advance retainer is non-refundable. Cancellations within 30 days of the event are subject to the full contracted amount.</p>
            </div>
          </div>

          <div className="morphic-card p-12 rounded-sm border border-antiqueGold/10">
            <h3 className="font-serif text-3xl mb-8 text-antiqueGold">Privacy Policy</h3>
            <div className="space-y-5 text-sm text-ivory/60 leading-loose font-light">
              <p>Your privacy is paramount. High-profile and celebrity commissions include an automatic NDA covering all pre-event planning and guest information.</p>
              <p>We do not sell, share, or monetize client data. Portfolio images are shared publicly only with explicit client consent and may be removed on request.</p>
            </div>
          </div>
        </section>

        {/* Support Ticket */}
        <div className="morphic-card p-12 rounded-sm border border-antiqueGold/10">
          <h3 className="font-serif text-3xl mb-3 text-antiqueGold">Open a Support Ticket</h3>
          <p className="text-ivory/40 text-[10px] uppercase tracking-widest mb-8">Portal access · Downloads · Album queries</p>
          {ticketSent ? (
            <div className="text-center py-6">
              <p className="font-serif text-2xl text-antiqueGold mb-2">Ticket Dispatched.</p>
              <p className="text-ivory/40 text-xs uppercase tracking-widest">WhatsApp opened. Send the message to complete your ticket.</p>
              <button onClick={() => { setTicketSent(false); setTicketMsg(''); }}
                className="mt-6 text-[9px] uppercase tracking-widest text-antiqueGold/50 hover:text-antiqueGold transition-colors border-b border-antiqueGold/30 pb-0.5 font-bold">
                Submit Another
              </button>
            </div>
          ) : (
            <form onSubmit={handleTicket} className="space-y-5">
              <textarea value={ticketMsg} onChange={(e) => setTicketMsg(e.target.value)} rows={5} required
                placeholder="Describe your issue — include your name, event date, and what you need help with..."
                className="w-full bg-charcoal/50 border border-ivory/10 px-6 py-4 text-ivory text-sm focus:outline-none focus:border-antiqueGold resize-none rounded-sm placeholder:text-ivory/20 transition-all" />
              <button type="submit"
                className="w-full bg-antiqueGold text-royalGreen py-5 text-[10px] uppercase tracking-[0.4em] font-bold hover:bg-ivory transition-all">
                Send via WhatsApp
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
