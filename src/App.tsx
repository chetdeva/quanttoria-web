import React, { useState } from 'react';
import { BookingData, Coach, DesignTheme } from './types';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { PhilosophySection } from './components/PhilosophySection';
import { HowItWorksSection } from './components/HowItWorksSection';
import { ClassroomSandbox } from './components/ClassroomSandbox';
import { CoachesSection } from './components/CoachesSection';
import { ReviewsSection } from './components/ReviewsSection';
import { BookingSection } from './components/BookingSection';
import { DemoModal } from './components/DemoModal';
import { RoadmapModal } from './components/RoadmapModal';
import { Footer } from './components/Footer';
import { Sparkles } from 'lucide-react';

export default function App() {
  const [theme, setTheme] = useState<DesignTheme>('scholastic');
  const [demoModalOpen, setDemoModalOpen] = useState(false);
  const [roadmapModalOpen, setRoadmapModalOpen] = useState(false);
  const [selectedCoach, setSelectedCoach] = useState<Coach | null>(null);
  const [bookingConfirmation, setBookingConfirmation] = useState<BookingData | null>(null);

  const handleToggleTheme = () => {
    setTheme((prev) => (prev === 'scholastic' ? 'playful' : 'scholastic'));
  };

  const handleOpenDemoModal = (coach?: Coach) => {
    if (coach) {
      setSelectedCoach(coach);
    } else {
      setSelectedCoach(null);
    }
    setDemoModalOpen(true);
  };

  const handleBookingSuccess = (data: BookingData) => {
    setBookingConfirmation(data);
    setRoadmapModalOpen(true);
  };

  const handleScrollToSandbox = () => {
    const sandboxElem = document.getElementById('learning-experience');
    if (sandboxElem) {
      sandboxElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      className={`min-h-screen font-['Plus_Jakarta_Sans',sans-serif] selection:bg-[#f4e483] selection:text-slate-900 ${
        theme === 'scholastic' ? 'bg-[#faf8ff] text-[#131b2e]' : 'bg-[#fffdf5] text-slate-900'
      }`}
    >
      {/* Fixed Header */}
      <Header
        theme={theme}
        onToggleTheme={handleToggleTheme}
        onOpenDemoModal={() => handleOpenDemoModal()}
      />

      {/* Main Page Layout */}
      <main className="w-full pt-20">
        {/* Hero Section */}
        <HeroSection
          theme={theme}
          onBookDemo={() => handleOpenDemoModal()}
        />

        {/* Section 2: Core Philosophy & AQ Framework */}
        <PhilosophySection
          theme={theme}
          onBookDemo={() => handleOpenDemoModal()}
        />

        {/* Section 3: How Quanttoria Works */}
        <HowItWorksSection
          theme={theme}
          onBookDemo={() => handleOpenDemoModal()}
        />

        {/* Section 4: The Live Digital Classroom & Interactive Sandbox */}
        <ClassroomSandbox
          theme={theme}
          onBookDemo={() => handleOpenDemoModal()}
        />

        {/* Section 5: Meet Elite Coaches (Spotlight: Pprincy Sugandhh) */}
        <CoachesSection
          theme={theme}
          onSelectCoachForDemo={(coach) => handleOpenDemoModal(coach)}
        />

        {/* Section 6: Social Proof & Trustpilot Reviews */}
        <ReviewsSection theme={theme} />

        {/* Section 7: Inline Interactive Booking Form */}
        <BookingSection
          theme={theme}
          onBookingSuccess={handleBookingSuccess}
        />
      </main>

      {/* Persistent Floating Bottom-Right CTA Pill */}
      <div className="fixed bottom-6 right-6 z-40">
        <button
          onClick={() => handleOpenDemoModal()}
          className={`flex items-center gap-2 px-6 py-3.5 rounded-full text-white font-extrabold text-sm shadow-[0_12px_32px_rgba(0,97,148,0.35)] transition-all hover:-translate-y-1 active:translate-y-0 ${
            theme === 'scholastic'
              ? 'bg-[#006194] hover:bg-[#007bb9]'
              : 'bg-[#0284c7] hover:bg-sky-600 border-2 border-white'
          }`}
        >
          <Sparkles className="w-4 h-4" />
          <span>🎯 Register for a Demo — Free Live Session</span>
        </button>
      </div>

      {/* Booking Form Modal */}
      <DemoModal
        isOpen={demoModalOpen}
        onClose={() => setDemoModalOpen(false)}
        onBookingSuccess={handleBookingSuccess}
        selectedCoach={selectedCoach}
        theme={theme}
      />

      {/* Post-Booking Personalized Roadmap Modal */}
      <RoadmapModal
        booking={bookingConfirmation}
        coach={selectedCoach}
        onClose={() => setRoadmapModalOpen(false)}
        onOpenSandbox={handleScrollToSandbox}
      />

      {/* Comprehensive Academic Standards Footer */}
      <Footer />
    </div>
  );
}
