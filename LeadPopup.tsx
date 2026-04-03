import React, { useState, useEffect } from 'react';
import { X, Camera, Calendar, Phone, Mail, User } from 'lucide-react';
import { buildWhatsAppURL, buildMailto } from '../constants';

interface LeadForm {
  name: string;
  email: string;
  phone: string;
  date: string;
}

export const LeadPopup: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [form, setForm] = useState<LeadForm>({ name: '', email: '', phone: '', date: '' });

  useEffect(() => {
    const timer = setTimeout(() => {
      const seen = localStorage.getItem('dipak_lead_popup_seen');
      if (!seen) setIsOpen(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    localStorage.setItem('dipak_lead_popup_seen', 'true');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const submit = (method: 'whatsapp' | 'email') => {
    const msg = `New Lead from Website Popup\nName: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nWedding Date: ${form.date}`;

    if (method === 'whatsapp') {
      window.open(buildWhatsAppURL(msg), '_blank');
    } else {
      window.open(
        buildMailto('New Consultation Request', {
          Name: form.name, Email: form.email,
          Phone: form.phone, 'Wedding Date': form.date,
        }),
        '_blank'
      );
    }
    setHasSubmitted(true);
    setTimeout(handleClose, 3500);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300">
      <div className="relative w-full max-w-md overflow-hidden bg-royalGreen border border-antiqueGold/30 rounded-2xl shadow-2xl shadow-black/50 animate-in zoom-in-95 duration-300">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-antiqueGold/20 via-antiqueGold to-antiqueGold/20" />
        <button onClick={handleClose} className="absolute top-4 right-4 p-2 text-ivory/60 hover:text-antiqueGold transition-colors rounded-full hover:bg-white/5">
          <X className="w-5 h-5" />
        </button>

        <div className="p-8">
          {!hasSubmitted ? (
            <>
              <div className="flex justify-center mb-5">
                <div className="w-12 h-12 rounded-full bg-antiqueGold/10 flex items-center justify-center border border-antiqueGold/20">
                  <Camera className="w-6 h-6 text-antiqueGold" />
                </div>
              </div>
              <h2 className="text-2xl font-serif text-center text-ivory mb-1">Capture Your Legacy</h2>
              <p className="text-sm text-center text-ivory/60 mb-6">
                Share your details and let's craft a cinematic masterpiece together.
              </p>

              <div className="space-y-4">
                {[
                  { name: 'name', type: 'text', placeholder: 'Your Name', Icon: User },
                  { name: 'email', type: 'email', placeholder: 'Email Address', Icon: Mail },
                  { name: 'phone', type: 'tel', placeholder: 'Phone Number', Icon: Phone },
                  { name: 'date', type: 'date', placeholder: 'Wedding Date', Icon: Calendar },
                ].map(({ name, type, placeholder, Icon }) => (
                  <div key={name} className="relative">
                    <Icon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-ivory/40" />
                    <input
                      type={type}
                      name={name}
                      required
                      value={form[name as keyof LeadForm]}
                      onChange={handleChange}
                      placeholder={placeholder}
                      className="w-full bg-black/20 border border-ivory/10 rounded-lg py-3 pl-10 pr-4 text-ivory placeholder:text-ivory/40 focus:outline-none focus:border-antiqueGold/50 transition-colors text-sm [color-scheme:dark]"
                    />
                  </div>
                ))}

                <div className="grid grid-cols-2 gap-3 mt-2">
                  <button
                    onClick={() => submit('whatsapp')}
                    className="bg-[#25D366] text-white font-medium py-3 rounded-lg hover:bg-[#1ebe5a] transition-colors text-xs uppercase tracking-widest flex items-center justify-center gap-2"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    WhatsApp
                  </button>
                  <button
                    onClick={() => submit('email')}
                    className="bg-antiqueGold text-royalGreen font-medium py-3 rounded-lg hover:bg-ivory transition-colors text-xs uppercase tracking-widest"
                  >
                    Send Email
                  </button>
                </div>
              </div>
            </>
          ) : (
            <div className="py-12 text-center">
              <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-6 border border-green-500/30">
                <svg className="w-8 h-8 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-serif text-ivory mb-3">Thank You</h3>
              <p className="text-ivory/60 text-sm">
                We've received your details. Our team will contact you within 4 hours.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
