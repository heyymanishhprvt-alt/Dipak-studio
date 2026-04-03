import React, { useState } from 'react';
import { buildWhatsAppURL, SOCIAL } from '../constants';

// NOTE FOR DEPLOYMENT: Replace this with Firebase Auth or Supabase.
// For now, each client gets a unique code sent by the team via WhatsApp.
// Format: email + PIN sent by concierge via WhatsApp on delivery day.
const DEMO_CREDENTIALS = [
  { email: 'aditi@example.com', pin: 'DS2023', name: 'Aditi & Sahil', ref: 'DS-2023-DEL-1120' },
  { email: 'demo@dipakstudios.com', pin: 'LEGACY62', name: 'Demo Client', ref: 'DS-DEMO-001' },
];

interface Asset {
  id: string;
  label: string;
  img: string;
  size: string;
  type: 'Video' | 'Image' | 'Document';
}

export const ClientPortal: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState('');
  const [pin, setPin] = useState('');
  const [error, setError] = useState('');
  const [client, setClient] = useState<(typeof DEMO_CREDENTIALS)[0] | null>(null);

  const assets: Asset[] = [
    { id: 'v1', label: 'Cinematic Feature Film', img: 'https://image.wedmegood.com/resized/800X/uploads/project/292285/1718610659_image6971.jpg', size: '4.2 GB', type: 'Video' },
    { id: 'v2', label: 'The Teaser (Social Edit)', img: 'https://image.wedmegood.com/resized/800X/uploads/project/323518/1774250895_image4782.jpg', size: '450 MB', type: 'Video' },
    { id: 'i1', label: 'Signature Master Portraits', img: 'https://image.wedmegood.com/resized/800X/uploads/member/226/1770793876_image9615.jpg', size: '1.8 GB', type: 'Image' },
    { id: 'd1', label: 'Heirloom Album Proofs', img: 'https://image.wedmegood.com/resized/800X/uploads/member/226/1748694766_image5148.jpg', size: '85 MB', type: 'Document' },
  ];

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const match = DEMO_CREDENTIALS.find(
      c => c.email.toLowerCase() === email.toLowerCase() && c.pin === pin.trim().toUpperCase()
    );
    if (match) {
      setClient(match);
      setIsLoggedIn(true);
      setError('');
    } else {
      setError('Invalid archive email or PIN. Please contact your concierge for access.');
    }
  };

  const requestAccess = () => {
    window.open(
      buildWhatsAppURL('Greetings Dipak Studios, I would like to access my Heritage Vault. Could you please send me my login credentials?'),
      '_blank'
    );
  };

  if (!isLoggedIn) {
    return (
      <div className="bg-charcoal min-h-screen flex items-center justify-center p-6 animate-fadeIn relative">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <img src="https://image.wedmegood.com/resized/800X/uploads/project/290792/1716624036_image5406.jpg" className="w-full h-full object-cover" alt="" />
        </div>

        <div className="max-w-md w-full morphic-card p-12 md:p-16 text-center shadow-[0_50px_100px_rgba(0,0,0,0.5)] border border-antiqueGold/20">
          <div className="mb-10">
            <h3 className="font-sans text-[10px] tracking-[0.6em] uppercase text-antiqueGold mb-4 font-bold">Heritage Vault</h3>
            <span className="font-serif text-4xl text-ivory block mb-2">Private Access</span>
            <p className="text-ivory/30 text-[9px] uppercase tracking-widest">Your cinematic archive, secured for life.</p>
            <div className="w-12 h-px bg-antiqueGold/30 mx-auto mt-6" />
          </div>

          <form onSubmit={handleLogin} className="space-y-5 text-left">
            <div className="space-y-2">
              <label className="text-[9px] uppercase tracking-widest text-ivory/40 font-bold ml-1">Archive Email</label>
              <input type="email" required value={email} onChange={e => setEmail(e.target.value)}
                className="w-full bg-charcoal/50 border border-ivory/10 px-6 py-4 rounded-sm text-ivory text-sm focus:outline-none focus:border-antiqueGold transition-all placeholder:text-ivory/20"
                placeholder="your@email.com" />
            </div>
            <div className="space-y-2">
              <label className="text-[9px] uppercase tracking-widest text-ivory/40 font-bold ml-1">Access PIN (sent by concierge)</label>
              <input type="password" required value={pin} onChange={e => setPin(e.target.value)}
                className="w-full bg-charcoal/50 border border-ivory/10 px-6 py-4 rounded-sm text-ivory text-sm focus:outline-none focus:border-antiqueGold transition-all tracking-[0.3em] placeholder:text-ivory/20"
                placeholder="••••••••" />
            </div>

            {error && <p className="text-red-400 text-[10px] uppercase tracking-wider text-center py-2">{error}</p>}

            <button type="submit" className="w-full bg-antiqueGold text-royalGreen py-5 text-[10px] uppercase tracking-[0.4em] font-bold hover:bg-ivory transition-all duration-500 mt-2">
              Unlock Archive
            </button>
          </form>

          <div className="mt-8 pt-8 border-t border-ivory/5 space-y-4">
            <p className="text-ivory/30 text-[9px] uppercase tracking-widest">Don't have your PIN?</p>
            <button onClick={requestAccess}
              className="w-full flex items-center justify-center gap-3 bg-[#25D366]/10 border border-[#25D366]/20 text-[#25D366] py-4 text-[9px] uppercase tracking-[0.3em] font-bold hover:bg-[#25D366]/20 transition-all rounded-sm">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              Request Access via WhatsApp
            </button>
          </div>

          <p className="mt-10 text-[8px] uppercase tracking-[0.5em] text-ivory/10 font-bold leading-relaxed">
            Secure · Private · Lifetime Access<br />Dipak Studios Heritage Division
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-charcoal min-h-screen py-32 text-ivory animate-fadeIn">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 border-b border-ivory/5 pb-10 gap-8">
          <div>
            <h1 className="font-serif text-4xl md:text-5xl mb-4">
              Welcome Home,<br/>
              <span className="italic font-light text-antiqueGold">{client?.name}</span>
            </h1>
            <div className="flex flex-wrap items-center gap-4">
              <span className="text-ivory/30 text-[9px] uppercase tracking-[0.4em] font-bold">
                Archive Ref: #{client?.ref}
              </span>
              <span className="px-3 py-1 bg-antiqueGold/10 border border-antiqueGold/30 text-antiqueGold text-[8px] uppercase tracking-widest rounded-full">
                Lifetime Heritage Tier
              </span>
            </div>
          </div>
          <div className="flex gap-4">
            <button className="text-[9px] uppercase tracking-[0.4em] text-ivory/40 hover:text-antiqueGold transition-colors font-bold px-6 py-3 border border-ivory/10 rounded-sm">
              Settings
            </button>
            <button onClick={() => { setIsLoggedIn(false); setEmail(''); setPin(''); setClient(null); }}
              className="text-[9px] uppercase tracking-[0.5em] text-antiqueGold border border-antiqueGold/20 px-8 py-3 rounded-sm hover:bg-antiqueGold hover:text-royalGreen transition-all font-bold">
              Secure Logout
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {[
            { label: 'Storage', value: '6.5 GB / Unlimited', sub: 'Global CDN Active' },
            { label: 'Archive Date', value: 'Nov 24, 2023', sub: 'Lifetime Preservation' },
            { label: 'Heirloom Status', value: 'Delivered', sub: 'Italian Leather Album' },
          ].map(s => (
            <div key={s.label} className="morphic-card p-8 border border-antiqueGold/10 rounded-sm">
              <span className="block text-[9px] uppercase tracking-widest text-antiqueGold/60 font-bold mb-4">{s.label}</span>
              <p className="font-serif text-3xl mb-1 text-ivory">{s.value}</p>
              <p className="text-[10px] text-ivory/30 uppercase tracking-widest">{s.sub}</p>
            </div>
          ))}
        </div>

        {/* Assets */}
        <h2 className="font-serif text-3xl mb-10">Your <span className="italic font-light">Heritage Collection</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
          {assets.map(asset => (
            <div key={asset.id} className="group relative overflow-hidden rounded-sm border border-ivory/5 glass-dark flex flex-col md:flex-row">
              <div className="w-full md:w-2/5 aspect-video md:aspect-auto overflow-hidden">
                <img src={asset.img} className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000 group-hover:scale-105" alt={asset.label} loading="lazy" />
              </div>
              <div className="p-8 flex flex-col justify-between flex-1">
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-[8px] uppercase tracking-[0.3em] px-2 py-1 bg-antiqueGold/20 text-antiqueGold font-bold">{asset.type}</span>
                    <span className="text-[9px] text-ivory/20 font-bold">{asset.size}</span>
                  </div>
                  <h3 className="font-serif text-xl mb-3 text-ivory group-hover:text-antiqueGold transition-colors">{asset.label}</h3>
                </div>
                <div className="flex gap-3 mt-5">
                  <button className="flex-1 bg-antiqueGold/10 border border-antiqueGold/30 text-antiqueGold py-3 text-[9px] uppercase tracking-[0.3em] font-bold hover:bg-antiqueGold hover:text-royalGreen transition-all">
                    Stream 4K
                  </button>
                  <button className="flex-1 bg-ivory text-royalGreen py-3 text-[9px] uppercase tracking-[0.3em] font-bold hover:bg-antiqueGold transition-all">
                    Download
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Need help? */}
        <div className="p-10 border border-antiqueGold/10 rounded-sm morphic-card text-center space-y-6">
          <h3 className="font-serif text-2xl text-antiqueGold">Need help with your archive?</h3>
          <p className="text-ivory/50 text-sm">Contact your dedicated concierge via WhatsApp for any access, download, or album queries.</p>
          <a href={buildWhatsAppURL('Hello, I need help with my Heritage Vault access.')} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#25D366] text-white px-10 py-4 text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-[#1ebe5a] transition-all">
            WhatsApp Concierge
          </a>
        </div>
      </div>
    </div>
  );
};
