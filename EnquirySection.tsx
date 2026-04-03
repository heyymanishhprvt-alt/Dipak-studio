import React, { useState } from 'react';
import { Send, Calendar, MapPin, User, Phone } from 'lucide-react';
import { buildWhatsAppURL, buildMailto } from '../constants';

interface FormData {
  name: string;
  phone: string;
  date: string;
  venue: string;
}

export const EnquirySection: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [form, setForm] = useState<FormData>({ name: '', phone: '', date: '', venue: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent, method: 'whatsapp' | 'email') => {
    e.preventDefault();
    setStatus('submitting');

    const msg = `New Enquiry from Website\nName: ${form.name}\nPhone: ${form.phone}\nCelebration Date: ${form.date}\nVenue: ${form.venue || 'TBD'}`;

    if (method === 'whatsapp') {
      window.open(buildWhatsAppURL(msg), '_blank');
    } else {
      window.open(
        buildMailto('New Quote Request — Dipak Studios Website', {
          'Client Name': form.name,
          'Phone': form.phone,
          'Celebration Date': form.date,
          'Venue': form.venue || 'TBD',
        }),
        '_blank'
      );
    }

    setTimeout(() => setStatus('success'), 600);
  };

  return (
    <section id="enquiry" className="py-32 bg-ivory overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-0 shadow-2xl rounded-sm overflow-hidden bg-white border border-antiqueGold/10">

          {/* Left: Real Portfolio Image */}
          <div className="relative hidden lg:block h-full min-h-[600px]">
            <img
              src="https://image.wedmegood.com/resized/800X/uploads/project/292285/1718610659_image6971.jpg"
              className="absolute inset-0 w-full h-full object-cover"
              alt="Dipak Studios Wedding Moment"
            />
            <div className="absolute inset-0 bg-royalGreen/40" />
            <div className="absolute inset-0 flex items-center justify-center p-20 text-center">
              <div className="border border-white/30 backdrop-blur-md p-10">
                <h3 className="font-serif text-4xl text-white mb-4 italic">The Heritage Frame</h3>
                <p className="font-sans text-[10px] tracking-[0.4em] uppercase text-white/70 font-bold">
                  Your legacy begins with a single frame.
                </p>
                <div className="mt-8 flex items-center justify-center gap-2">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-3 h-3 text-antiqueGold" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-white/80 text-[9px] uppercase tracking-widest font-bold">
                    4.8 · 203 Reviews
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="p-12 md:p-20 flex flex-col justify-center bg-white">
            {status === 'success' ? (
              <div className="text-center space-y-6 animate-fadeIn">
                <div className="w-16 h-16 bg-royalGreen text-antiqueGold rounded-full flex items-center justify-center mx-auto">
                  <Send className="w-8 h-8" />
                </div>
                <h2 className="font-serif text-4xl text-charcoal">Enquiry Sent.</h2>
                <p className="text-charcoal/50 font-sans text-xs uppercase tracking-widest leading-loose">
                  Our Senior Creative Lead will contact you shortly to discuss your vision.
                </p>
                <button
                  onClick={() => { setStatus('idle'); setForm({ name: '', phone: '', date: '', venue: '' }); }}
                  className="text-antiqueGold font-bold text-[10px] uppercase tracking-[0.3em] border-b border-antiqueGold pb-1"
                >
                  Send another request
                </button>
              </div>
            ) : (
              <div className="space-y-10 animate-fadeIn">
                <div className="space-y-4">
                  <h3 className="font-sans text-[10px] tracking-[0.6em] uppercase text-antiqueGold font-bold">The Consultation</h3>
                  <h2 className="font-serif text-5xl text-charcoal leading-tight">
                    Request a <br /><span className="italic font-light">Custom Quote</span>
                  </h2>
                  <p className="text-charcoal/40 text-[10px] uppercase tracking-widest font-bold">
                    Secure your date · 2024–25 Season
                  </p>
                </div>

                <form className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="relative group">
                      <User className="absolute left-0 bottom-3 w-4 h-4 text-antiqueGold/40 group-focus-within:text-antiqueGold transition-colors" />
                      <input
                        name="name"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Full Name"
                        className="w-full bg-transparent border-b border-charcoal/10 pl-8 py-3 text-sm focus:outline-none focus:border-antiqueGold transition-all placeholder:text-charcoal/20"
                      />
                    </div>
                    <div className="relative group">
                      <Phone className="absolute left-0 bottom-3 w-4 h-4 text-antiqueGold/40 group-focus-within:text-antiqueGold transition-colors" />
                      <input
                        name="phone"
                        required
                        type="tel"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="Contact Number"
                        className="w-full bg-transparent border-b border-charcoal/10 pl-8 py-3 text-sm focus:outline-none focus:border-antiqueGold transition-all placeholder:text-charcoal/20"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="relative group">
                      <Calendar className="absolute left-0 bottom-3 w-4 h-4 text-antiqueGold/40 group-focus-within:text-antiqueGold transition-colors" />
                      <input
                        name="date"
                        required
                        type="date"
                        value={form.date}
                        onChange={handleChange}
                        className="w-full bg-transparent border-b border-charcoal/10 pl-8 py-3 text-sm focus:outline-none focus:border-antiqueGold transition-all placeholder:text-charcoal/20"
                      />
                    </div>
                    <div className="relative group">
                      <MapPin className="absolute left-0 bottom-3 w-4 h-4 text-antiqueGold/40 group-focus-within:text-antiqueGold transition-colors" />
                      <input
                        name="venue"
                        value={form.venue}
                        onChange={handleChange}
                        placeholder="Venue (e.g. Taj Delhi)"
                        className="w-full bg-transparent border-b border-charcoal/10 pl-8 py-3 text-sm focus:outline-none focus:border-antiqueGold transition-all placeholder:text-charcoal/20"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <button
                      type="submit"
                      onClick={(e) => handleSubmit(e, 'whatsapp')}
                      disabled={status === 'submitting'}
                      className="w-full py-5 bg-[#25D366] text-white text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-[#1ebe5a] transition-all duration-500 shadow-lg flex items-center justify-center gap-3 disabled:opacity-50"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                      WhatsApp
                    </button>
                    <button
                      type="submit"
                      onClick={(e) => handleSubmit(e, 'email')}
                      disabled={status === 'submitting'}
                      className="w-full py-5 bg-royalGreen text-antiqueGold text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-antiqueGold hover:text-royalGreen transition-all duration-500 shadow-xl disabled:opacity-50"
                    >
                      Email Quote
                    </button>
                  </div>
                  <p className="text-[8px] text-charcoal/30 uppercase tracking-widest text-center">
                    We respond within 4 business hours
                  </p>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
