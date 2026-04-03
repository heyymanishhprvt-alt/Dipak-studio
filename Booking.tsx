import React, { useState } from 'react';
import { buildWhatsAppURL, buildMailto } from '../constants';

interface BookingFormData {
  fullName: string;
  email: string;
  phone: string;
  commissionType: string;
  venue: string;
  weddingDate: string;
  guestCount: string;
  vision: string;
}

export const Booking: React.FC = () => {
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState<BookingFormData>({
    fullName: '', email: '', phone: '', commissionType: '',
    venue: '', weddingDate: '', guestCount: '', vision: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const buildMsg = () =>
    `New Commission Request\nName: ${formData.fullName}\nPhone: ${formData.phone}\nEmail: ${formData.email}\nType: ${formData.commissionType}\nVenue: ${formData.venue || 'TBD'}\nDate: ${formData.weddingDate}\nGuests: ${formData.guestCount || 'N/A'}\nVision: ${formData.vision || 'None'}`;

  const handleWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    window.open(buildWhatsAppURL(buildMsg()), '_blank');
    setIsSuccess(true);
  };

  const handleEmail = (e: React.FormEvent) => {
    e.preventDefault();
    window.open(
      buildMailto(`Commission Request: ${formData.fullName}`, {
        'Full Name': formData.fullName, 'Email': formData.email,
        'Phone': formData.phone, 'Commission Type': formData.commissionType,
        'Venue': formData.venue || 'TBD', 'Wedding Date': formData.weddingDate,
        'Guest Count': formData.guestCount || 'N/A', 'Vision': formData.vision || 'None',
      }),
      '_blank'
    );
    setIsSuccess(true);
  };

  const inputClass =
    'w-full bg-transparent border-b border-royalGreen/10 py-3 focus:outline-none focus:border-antiqueGold text-sm transition-colors text-charcoal';
  const labelClass = 'text-[10px] uppercase tracking-widest text-royalGreen/40 font-bold';

  if (isSuccess) {
    return (
      <div className="bg-ivory min-h-screen py-32 flex items-center justify-center animate-fadeIn">
        <div className="max-w-3xl w-full px-6 text-center space-y-12">
          <div className="space-y-4">
            <div className="w-20 h-20 bg-royalGreen rounded-full flex items-center justify-center mx-auto text-antiqueGold shadow-xl">
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h1 className="font-serif text-5xl text-charcoal leading-tight">
              Commission <br /><span className="italic font-light">Received.</span>
            </h1>
          </div>

          <div className="bg-white border border-antiqueGold/20 shadow-2xl p-10 text-left">
            <h3 className="font-sans text-[10px] tracking-[0.4em] uppercase text-antiqueGold font-bold mb-8 border-b border-royalGreen/5 pb-4 text-center">
              Commission Summary
            </h3>
            <table className="w-full border-collapse font-sans text-xs">
              <tbody>
                {[
                  ['Full Name', formData.fullName], ['Email', formData.email],
                  ['Phone', formData.phone], ['Commission Type', formData.commissionType],
                  ['Venue', formData.venue || 'TBD'], ['Wedding Date', formData.weddingDate],
                  ['Guest Count', formData.guestCount || 'N/A'],
                ].map(([label, value], idx) => (
                  <tr key={idx} className="border-b border-royalGreen/5">
                    <td className="py-4 font-bold uppercase tracking-widest text-royalGreen/40 w-1/3">{label}</td>
                    <td className="py-4 text-charcoal">{value}</td>
                  </tr>
                ))}
                <tr>
                  <td className="py-4 font-bold uppercase tracking-widest text-royalGreen/40 align-top">Vision</td>
                  <td className="py-4 text-charcoal italic">"{formData.vision || 'None provided.'}"</td>
                </tr>
              </tbody>
            </table>

            <p className="mt-8 text-charcoal/40 font-sans text-[10px] tracking-widest uppercase leading-loose text-center">
              Our Senior Creative Director will review your commission within 4 business hours.
            </p>
          </div>

          <button
            onClick={() => setIsSuccess(false)}
            className="border border-royalGreen/20 text-royalGreen/60 px-10 py-4 text-[10px] uppercase tracking-[0.4em] font-bold hover:text-royalGreen hover:border-royalGreen transition-all"
          >
            Submit Another Request
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-ivory min-h-screen py-32 text-royalGreen animate-fadeIn">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-24 items-start mb-32">

          {/* Left: Info Panel */}
          <div className="lg:sticky lg:top-32 space-y-12">
            <div>
              <h3 className="font-sans text-[10px] tracking-[0.6em] uppercase text-antiqueGold mb-6 font-bold">
                Commission
              </h3>
              <h1 className="font-serif text-6xl md:text-8xl mb-8 leading-tight text-charcoal">
                Reserve the <br /><span className="italic font-light">Narrative</span>
              </h1>
              <p className="text-charcoal/60 text-base leading-relaxed max-w-md font-light">
                Secure your date for a cinematic legacy. Each commission is handled personally by our creative directors to ensure the Dipak standard of excellence.
              </p>
            </div>

            <div className="space-y-6">
              <div className="p-8 border border-antiqueGold/20 bg-royalGreen/5 rounded-sm">
                <p className="font-sans text-[9px] uppercase tracking-[0.3em] text-antiqueGold font-bold mb-3">
                  Availability Notice
                </p>
                <p className="text-charcoal/70 text-sm leading-relaxed">
                  Currently accepting high-profile commissions for the 2025–26 season. Destination weddings require a minimum 6-month lead time. 50% advance secures your date.
                </p>
              </div>

              <div className="flex items-center space-x-5">
                <div className="w-12 h-12 rounded-full bg-royalGreen flex items-center justify-center text-antiqueGold flex-shrink-0">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </div>
                <div>
                  <p className="font-serif text-xl text-charcoal">Global Concierge</p>
                  <a href="tel:+918527274260" className="text-[10px] uppercase tracking-widest text-antiqueGold font-bold">
                    +91 85272 74260
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-5">
                <div className="w-12 h-12 rounded-full bg-royalGreen flex items-center justify-center text-antiqueGold flex-shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="font-serif text-xl text-charcoal">Email Concierge</p>
                  <a href="mailto:wedding.dipak@gmail.com" className="text-[10px] uppercase tracking-widest text-antiqueGold font-bold">
                    wedding.dipak@gmail.com
                  </a>
                </div>
              </div>

              {/* WedMeGood rating */}
              <a
                href="https://www.wedmegood.com/profile/Dipak-Studios-226"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-6 border border-antiqueGold/10 bg-royalGreen/5 hover:border-antiqueGold/30 transition-all"
              >
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-antiqueGold" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <div>
                  <p className="font-sans text-xs font-bold text-royalGreen">4.8 · 203 Reviews</p>
                  <p className="text-[9px] uppercase tracking-widest text-royalGreen/40">Verified on WedMeGood</p>
                </div>
              </a>
            </div>
          </div>

          {/* Right: Form */}
          <div className="bg-white p-12 md:p-16 shadow-2xl rounded-sm border border-royalGreen/5">
            <h4 className="font-serif text-3xl mb-10 text-charcoal">Event Intelligence</h4>
            <form className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className={labelClass}>Full Name</label>
                  <input name="fullName" type="text" required value={formData.fullName} onChange={handleChange} className={inputClass} />
                </div>
                <div className="space-y-2">
                  <label className={labelClass}>Email Address</label>
                  <input name="email" type="email" required value={formData.email} onChange={handleChange} className={inputClass} />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className={labelClass}>Contact Number</label>
                  <input name="phone" type="tel" required value={formData.phone} onChange={handleChange} placeholder="+91 XXXXX XXXXX" className={inputClass} />
                </div>
                <div className="space-y-2">
                  <label className={labelClass}>Commission Type</label>
                  <select name="commissionType" required value={formData.commissionType} onChange={handleChange} className={`${inputClass} cursor-pointer`}>
                    <option value="">Select Experience</option>
                    <option>Heritage Wedding (Single Venue)</option>
                    <option>Grand Destination Union</option>
                    <option>Cinematic Pre-Wedding Film</option>
                    <option>Portrait Masterclass Session</option>
                    <option>Corporate / Brand Event</option>
                    <option>Maternity / Fashion Shoot</option>
                    <option>Photobooth Rental</option>
                  </select>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className={labelClass}>Primary Venue</label>
                  <input name="venue" type="text" placeholder="e.g. Taj Mansingh, Delhi" value={formData.venue} onChange={handleChange} className={inputClass} />
                </div>
                <div className="space-y-2">
                  <label className={labelClass}>Wedding / Event Date</label>
                  <input name="weddingDate" type="date" required value={formData.weddingDate} onChange={handleChange} className={inputClass} />
                </div>
              </div>

              <div className="space-y-2">
                <label className={labelClass}>Estimated Guest Count</label>
                <input name="guestCount" type="number" placeholder="e.g. 200–2000+" value={formData.guestCount} onChange={handleChange} className={inputClass} />
              </div>

              <div className="space-y-2">
                <label className={labelClass}>Specific Vision or Requirements</label>
                <textarea
                  name="vision"
                  rows={4}
                  value={formData.vision}
                  onChange={handleChange}
                  className="w-full bg-transparent border border-royalGreen/10 p-4 focus:outline-none focus:border-antiqueGold text-sm transition-colors resize-none text-charcoal"
                  placeholder="Tell us about the mood, cultural nuances, or any specific moments you want captured..."
                />
              </div>

              {/* Dual Submit */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <button
                  type="submit"
                  onClick={handleWhatsApp}
                  className="w-full bg-[#25D366] text-white py-5 text-[10px] uppercase tracking-[0.4em] font-bold hover:bg-[#1ebe5a] transition-all shadow-lg flex items-center justify-center gap-3"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Send via WhatsApp
                </button>
                <button
                  type="submit"
                  onClick={handleEmail}
                  className="w-full bg-royalGreen text-antiqueGold py-5 text-[10px] uppercase tracking-[0.4em] font-bold hover:bg-antiqueGold hover:text-royalGreen transition-all duration-500 shadow-xl"
                >
                  Send via Email
                </button>
              </div>
              <p className="text-[8px] text-royalGreen/30 uppercase tracking-widest text-center">
                50% advance required to secure your date · Response within 4 hours
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
