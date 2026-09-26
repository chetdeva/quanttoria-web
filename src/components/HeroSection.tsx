import React from 'react';
import { DesignTheme } from '../types';
import { Star, CheckCircle, ShieldCheck, Clock, TrendingUp } from 'lucide-react';

interface HeroSectionProps {
  theme: DesignTheme;
  onBookDemo: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  theme,
  onBookDemo,
}) => {
  return (
    <section
      className={`relative w-full overflow-hidden pt-10 pb-16 lg:pt-14 lg:pb-24 transition-colors duration-300 ${
        theme === 'scholastic'
          ? 'bg-gradient-to-b from-[#f4e483]/35 via-[#eaedff]/30 to-[#faf8ff] border-b border-slate-200/50'
          : 'bg-gradient-to-b from-[#FFEE8C]/50 via-[#FFEE8C]/25 to-[#fffdf5] border-b-2 border-amber-200/60'
      }`}
    >
      {/* Playful Floating Doodles (Only in Playful Mode or subtle in Scholastic) */}
      <div
        aria-hidden="true"
        className={`absolute inset-0 pointer-events-none select-none overflow-hidden transition-opacity ${
          theme === 'playful' ? 'opacity-40' : 'opacity-15'
        }`}
      >
        <span className="absolute top-10 left-[7%] text-3xl font-black text-amber-400 rotate-12">
          ➕
        </span>
        <span className="absolute top-36 left-[3%] text-4xl text-sky-400 rotate-[-15deg]">
          ✨
        </span>
        <span className="absolute bottom-16 left-[12%] text-2xl font-black text-pink-400">
          ✖️
        </span>
        <span className="absolute top-12 right-[8%] text-4xl text-amber-500 rotate-45">
          📐
        </span>
        <span className="absolute bottom-20 right-[5%] text-4xl text-sky-400 rotate-12">
          🌟
        </span>
        <span className="absolute top-1/2 right-[2%] text-3xl font-black text-purple-300">
          ➗
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        {/* Top Enrollment Banner */}
        <div className="flex justify-center mb-6">
          <div
            className={`inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs sm:text-sm font-bold shadow-sm transition-transform hover:scale-105 ${
              theme === 'scholastic'
                ? 'bg-white border border-slate-200 text-slate-800'
                : 'bg-white/95 border-2 border-amber-300 text-slate-900'
            }`}
          >
            <span className="w-2.5 h-2.5 rounded-full bg-[#f59e0b] animate-ping" />
            <span className="text-[#006194] font-extrabold">
              Fall & Spring Enrollment Open
            </span>
            <span className="text-slate-300">•</span>
            <span className="text-slate-600">Tailored 1:1 Math for Grades 1–10</span>
            <span className="text-slate-300">•</span>
            <span
              className={`px-2.5 py-0.5 rounded-full font-bold ${
                theme === 'scholastic'
                  ? 'bg-amber-100 text-[#994100]'
                  : 'bg-pink-100 text-pink-700 border border-pink-200'
              }`}
            >
              1st Live Session 100% Free! ✨
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Hero Left Column */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="space-y-3">
              <span className="inline-block px-3.5 py-1 rounded-full bg-sky-100 text-[#006194] font-bold text-xs uppercase tracking-wider">
                🚀 Premier 1:1 Mathematical Mentorship
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.12]">
                Confidence{' '}
                <span className="relative inline-block text-[#006194] italic font-['Plus_Jakarta_Sans']">
                  unlocked.
                  {/* Playful hand-drawn doodle underline */}
                  <svg
                    className="absolute -bottom-2 left-0 w-full h-3 text-[#f59e0b] fill-current"
                    preserveAspectRatio="none"
                    viewBox="0 0 250 20"
                  >
                    <path
                      d="M3 14 Q 70 2, 130 13 T 247 11"
                      fill="none"
                      stroke="#f59e0b"
                      strokeLinecap="round"
                      strokeWidth="5"
                    />
                  </svg>
                </span>
              </h1>
              <p className="text-lg md:text-xl text-slate-700 font-medium leading-relaxed max-w-2xl mx-auto lg:mx-0 pt-1">
                Children aren't &ldquo;bad at math&rdquo; — they simply haven't had their{' '}
                <span className="bg-[#f4e483]/60 px-2 py-0.5 rounded-md font-bold text-slate-900">
                  aha! breakthrough 💡
                </span>
                . Tailored 1:1 online coaching that bridges foundational gaps, decodes
                the &ldquo;why&rdquo;, and turns math anxiety into unstoppable mastery.
              </p>
            </div>

            {/* Trust & Alignment Badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5">
              <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm text-xs font-semibold text-slate-800">
                <div className="flex text-amber-500">
                  <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
                </div>
                <span>
                  <strong>4.9/5</strong> on Trustpilot (1,240+ Parent Reviews)
                </span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm text-xs font-semibold text-slate-800">
                <ShieldCheck className="w-4 h-4 text-[#006194]" />
                <span>100% US Curriculum Aligned (Grades 1–10)</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm text-xs font-semibold text-slate-800">
                <Clock className="w-4 h-4 text-emerald-600" />
                <span>20,000+ Coaching Hours</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-2 space-y-3">
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <button
                  onClick={onBookDemo}
                  className={`w-full sm:w-auto px-8 py-4 rounded-full font-bold text-base sm:text-lg text-white transition-all flex items-center justify-center gap-2 ${
                    theme === 'scholastic'
                      ? 'bg-[#006194] hover:bg-[#007bb9] shadow-[0_6px_20px_rgba(0,97,148,0.3)] hover:scale-[1.02] active:scale-[0.98]'
                      : 'bg-[#0284c7] hover:bg-sky-600 shadow-[0_6px_0px_#0369a1] hover:translate-y-1 hover:shadow-[0_2px_0px_#0369a1] active:translate-y-1'
                  }`}
                >
                  <span>Book Your Free 1:1 Demo 🚀</span>
                </button>
                <a
                  href="#how-it-works"
                  className="w-full sm:w-auto px-7 py-4 rounded-full bg-white hover:bg-slate-50 text-slate-800 font-bold text-base border-2 border-slate-200 hover:border-amber-400 shadow-sm transition-all flex items-center justify-center gap-2"
                >
                  <span>See How It Works ⚡</span>
                </a>
              </div>
              <p className="text-xs text-slate-500 font-medium flex items-center justify-center lg:justify-start gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-600" />
                <span>Takes 60 seconds • No credit card required • Live 45-min diagnostic session</span>
              </p>
            </div>
          </div>

          {/* Hero Right Column: Student Media Card */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-md lg:max-w-none">
              {/* Outer decorative ring in playful mode */}
              <div
                className={`absolute -inset-3 rounded-[2.5rem] transition-all ${
                  theme === 'playful'
                    ? 'bg-gradient-to-tr from-amber-300 via-sky-300 to-pink-300 rotate-2 opacity-70'
                    : 'bg-[#006194]/10 rounded-2xl rotate-1'
                }`}
              />

              {/* Main Photo Container */}
              <div className="relative rounded-3xl overflow-hidden bg-white p-2.5 shadow-2xl border-4 border-white">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBlcW1WnMPxmnveBspyS1QB0w0b0yBK9QScE87i9Ei5WA1NK6_9oPIDyCInCQZmVaC_8irXzVMw04Lr-e7zstk_TiwEb29ei8TiFPga1PQhVCDP7FVwvffxDj68ucEg3Buia2Jt35sJEbNPsyydSrqhGbB_wAdJUzlEeyNUNhKTZBDGSjqVgyk0dL6zcH34nd5wXlJgl0hwANqDY-xUYVaEkRzxyEw8HJ2dHm2kgwMxbPv6jmidC8hjKA"
                  alt="Happy student engaged in a 1:1 online math mentoring session"
                  className="w-full h-[440px] object-cover rounded-2xl"
                  referrerPolicy="no-referrer"
                />

                {/* Live GeoGebra Discovery Floating Chip */}
                <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full shadow-md border border-slate-200 flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-xs font-bold text-slate-800">
                    Live GeoGebra Discovery
                  </span>
                </div>

                {/* +42% Math Fluency Card */}
                <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl shadow-lg border border-slate-100 max-w-[210px] transform -rotate-1 hover:rotate-0 transition-transform">
                  <div className="flex items-center gap-1.5 text-[#006194] font-black text-xl">
                    <span>+42%</span>
                    <TrendingUp className="w-5 h-5 text-emerald-600" />
                  </div>
                  <p className="text-xs font-bold text-slate-900 mt-0.5">
                    Math Fluency in 90 Days
                  </p>
                  <p className="text-[11px] text-slate-500 font-medium leading-tight">
                    Based on diagnostic milestone assessments
                  </p>
                </div>

                {/* 1:1 Matched Coach Badge */}
                <div className="absolute bottom-6 right-6 bg-white/95 backdrop-blur-md px-4 py-2 rounded-2xl shadow-lg border border-slate-100 flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-full bg-sky-100 text-[#006194] font-black text-sm flex items-center justify-center">
                    1:1
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-900 leading-tight">
                      Matched Coach
                    </p>
                    <p className="text-[11px] text-slate-500">
                      Top 2% STEM Mentors
                    </p>
                  </div>
                </div>

                {/* Extra playful sticker in playful mode */}
                {theme === 'playful' && (
                  <div className="absolute top-6 right-6 bg-amber-300 text-amber-950 px-3.5 py-1.5 rounded-2xl shadow-md border-2 border-white flex items-center gap-1.5 rotate-3">
                    <span className="text-sm">⚡</span>
                    <span className="text-xs font-black">From tears to A&apos;s! 🎓</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
