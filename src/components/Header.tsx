import React, { useState } from 'react';
import { DesignTheme } from '../types';
import { Phone, Sparkles, User, Menu, X, Palette } from 'lucide-react';

interface HeaderProps {
  theme: DesignTheme;
  onToggleTheme: () => void;
  onOpenDemoModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  theme,
  onToggleTheme,
  onOpenDemoModal,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-xl transition-all duration-200 ${
        theme === 'scholastic'
          ? 'bg-white/95 border-b border-slate-100 shadow-[0_1px_8px_rgba(0,0,0,0.04)]'
          : 'bg-white/95 border-b-2 border-amber-200/80 shadow-sm'
      }`}
    >
      <div className="h-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 flex items-center justify-between gap-4">
        {/* Brand Logo & Grade Badge */}
        <div className="flex items-center gap-3">
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#006194] to-[#007bb9] flex items-center justify-center text-white font-bold text-xl shadow-sm">
              <span className="font-['Fredoka']">Q</span>
            </div>
            <span
              className={`text-2xl font-extrabold tracking-tight ${
                theme === 'scholastic'
                  ? 'text-[#006194] font-["Plus_Jakarta_Sans"]'
                  : 'text-[#0284c7] font-["Fredoka"]'
              }`}
            >
              Quanttoria
            </span>
          </a>
          <span
            className={`hidden sm:inline-flex items-center px-3 py-1 rounded-full text-xs font-bold ${
              theme === 'scholastic'
                ? 'bg-[#f4e483]/80 text-[#71650f] border border-[#71650f]/20'
                : 'bg-amber-100 text-amber-900 border border-amber-300'
            }`}
          >
            🎒 Grades 1–10
          </span>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden xl:flex items-center gap-7 text-sm font-semibold text-slate-700">
          <a
            href="#our-mission"
            className="hover:text-[#006194] transition-colors flex items-center gap-1.5"
          >
            <span>🎯</span> Our Mission
          </a>
          <a
            href="#how-it-works"
            className="hover:text-[#006194] transition-colors flex items-center gap-1.5"
          >
            <span>🚀</span> How It Works
          </a>
          <a
            href="#learning-experience"
            className="hover:text-[#006194] transition-colors flex items-center gap-1.5"
          >
            <span>📐</span> Interactive Lab
          </a>
          <a
            href="#meet-the-coaches"
            className="hover:text-[#006194] transition-colors flex items-center gap-1.5"
          >
            <span>👩‍🏫</span> Meet Mentors
          </a>
          <a
            href="#reviews-trust"
            className="hover:text-[#006194] transition-colors flex items-center gap-1.5"
          >
            <span>⭐</span> Reviews & Trust
          </a>
        </nav>

        {/* Right Action Hub */}
        <div className="flex items-center gap-3">
          {/* Design Switcher Button */}
          <button
            onClick={onToggleTheme}
            className={`px-3 py-1.5 rounded-full text-xs font-bold flex items-center gap-1.5 transition-all border ${
              theme === 'scholastic'
                ? 'bg-slate-100 text-slate-800 border-slate-200 hover:bg-slate-200'
                : 'bg-amber-100 text-amber-900 border-amber-300 hover:bg-amber-200'
            }`}
            title="Switch between Warm Scholastic and Playful Neo-Pop screens"
          >
            <Palette className="w-3.5 h-3.5" />
            <span className="hidden md:inline">Style:</span>
            <span>
              {theme === 'scholastic' ? 'Warm Scholastic' : 'Playful Neo-Pop'}
            </span>
          </button>

          {/* Phone Call Hotline */}
          <a
            href="tel:8005126284"
            className="hidden lg:flex items-center gap-1.5 text-xs font-bold text-slate-700 hover:text-[#006194] bg-slate-50 hover:bg-slate-100 px-3 py-2 rounded-full border border-slate-200 transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-[#006194]" />
            <span>(800) 512-MATH</span>
          </a>

          {/* Book Free Demo Button */}
          <button
            onClick={onOpenDemoModal}
            className={`px-4 sm:px-5 py-2.5 rounded-full font-bold text-xs sm:text-sm text-white transition-all flex items-center gap-1.5 ${
              theme === 'scholastic'
                ? 'bg-[#006194] hover:bg-[#007bb9] shadow-[0_4px_14px_rgba(0,97,148,0.25)] hover:scale-[1.02] active:scale-[0.98]'
                : 'bg-[#0284c7] hover:bg-sky-600 shadow-[0_4px_0px_#0369a1] hover:translate-y-0.5 hover:shadow-[0_2px_0px_#0369a1] active:translate-y-1'
            }`}
          >
            <Sparkles className="w-4 h-4" />
            <span>Book Free Demo</span>
            <span className="hidden sm:inline bg-white/20 text-white px-2 py-0.5 rounded-full text-[11px]">
              100% Free
            </span>
          </button>

          {/* Profile / Account Placeholder Icon */}
          <div className="w-8 h-8 rounded-full bg-[#006194] text-white flex items-center justify-center shadow-xs">
            <User className="w-4 h-4" />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-b border-slate-200 px-6 py-4 space-y-3">
          <nav className="flex flex-col gap-3 font-semibold text-slate-700 text-sm">
            <a
              href="#our-mission"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 flex items-center gap-2 hover:text-[#006194]"
            >
              <span>🎯</span> Our Mission
            </a>
            <a
              href="#how-it-works"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 flex items-center gap-2 hover:text-[#006194]"
            >
              <span>🚀</span> How It Works
            </a>
            <a
              href="#learning-experience"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 flex items-center gap-2 hover:text-[#006194]"
            >
              <span>📐</span> Interactive Lab
            </a>
            <a
              href="#meet-the-coaches"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 flex items-center gap-2 hover:text-[#006194]"
            >
              <span>👩‍🏫</span> Meet Mentors
            </a>
            <a
              href="#reviews-trust"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 flex items-center gap-2 hover:text-[#006194]"
            >
              <span>⭐</span> Reviews & Trust
            </a>
            <a
              href="tel:8005126284"
              className="py-1.5 flex items-center gap-2 text-[#006194]"
            >
              <Phone className="w-4 h-4" /> (800) 512-MATH
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};
