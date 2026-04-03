import React, { useState, useEffect, Suspense, lazy } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ShutterLoader } from './components/ShutterLoader';
import { WhatsAppButton } from './components/WhatsAppButton';
import { LeadPopup } from './components/LeadPopup';
import { Page } from './types';

const Home = lazy(() => import('./pages/Home').then((m) => ({ default: m.Home })));
const Films = lazy(() => import('./pages/Films').then((m) => ({ default: m.Films })));
const Services = lazy(() => import('./pages/Services').then((m) => ({ default: m.Services })));
const About = lazy(() => import('./pages/About').then((m) => ({ default: m.About })));
const Booking = lazy(() => import('./pages/Booking').then((m) => ({ default: m.Booking })));
const Blog = lazy(() => import('./pages/Blog').then((m) => ({ default: m.Blog })));
const ClientPortal = lazy(() => import('./pages/ClientPortal').then((m) => ({ default: m.ClientPortal })));
const Reviews = lazy(() => import('./pages/Reviews').then((m) => ({ default: m.Reviews })));
const Support = lazy(() => import('./pages/Support').then((m) => ({ default: m.Support })));

const PageLoader = () => (
  <div className="h-screen bg-royalGreen flex items-center justify-center">
    <div className="w-px h-16 bg-gradient-to-b from-antiqueGold to-transparent animate-pulse" />
  </div>
);

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const handleNavigate = (page: Page) => setCurrentPage(page);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':     return <Home onNavigate={handleNavigate} />;
      case 'films':    return <Films />;
      case 'services': return <Services onNavigate={handleNavigate} />;
      case 'about':    return <About />;
      case 'booking':  return <Booking />;
      case 'blog':     return <Blog />;
      case 'portal':   return <ClientPortal />;
      case 'reviews':  return <Reviews />;
      case 'support':  return <Support />;
      default:         return <Home onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-royalGreen text-ivory font-sans selection:bg-antiqueGold selection:text-royalGreen antialiased">
      {isInitialLoad && <ShutterLoader onComplete={() => setIsInitialLoad(false)} />}
      {!isInitialLoad && (
        <>
          <Navbar currentPage={currentPage} onNavigate={handleNavigate} />
          <main className="pt-0">
            <Suspense fallback={<PageLoader />}>{renderPage()}</Suspense>
          </main>
          <Footer onNavigate={handleNavigate} />
          <WhatsAppButton />
          <LeadPopup />
          <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden">
            <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-antiqueGold/5 rounded-full blur-[120px] animate-pulse-slow" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-antiqueGold/5 rounded-full blur-[120px] animate-pulse-slow" style={{ animationDelay: '2s' }} />
          </div>
        </>
      )}
    </div>
  );
};

export default App;
