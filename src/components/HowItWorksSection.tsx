import React, { useState } from 'react';
import { DesignTheme } from '../types';
import { Compass, Dna, Palette, RefreshCw, ChevronRight } from 'lucide-react';

interface HowItWorksSectionProps {
  theme: DesignTheme;
  onBookDemo: () => void;
}

export const HowItWorksSection: React.FC<HowItWorksSectionProps> = ({
  theme,
  onBookDemo,
}) => {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  const steps = [
    {
      num: '01',
      title: 'The Diagnostic Deep-Dive',
      emoji: '🧭',
      color: 'bg-sky-100 text-sky-700',
      borderColor: 'border-sky-200',
      badge: 'Pinpoints exact micro-concepts',
      description:
        'Not a stressful exam — an enjoyable 30-minute discovery conversation that detects hidden gaps from prior grade levels before building up.',
      detail:
        'Instead of grading right/wrong, our diagnostic specialist evaluates how your child reasons through unfamiliar problems, mapping cognitive bottlenecks to targeted concepts.',
    },
    {
      num: '02',
      title: 'Bespoke Coach DNA Match',
      emoji: '🧬',
      color: 'bg-amber-100 text-amber-800',
      borderColor: 'border-amber-200',
      badge: 'Top 2% mentor acceptance rate',
      description:
        "We match your student with a vetted coach whose pacing, personality, and encouragement style align directly with your child's temperament.",
      detail:
        'Whether your student responds best to quiet patient structure, bubbly high-energy cheerleading, or competitive challenge logic, we handpick their perfect match.',
    },
    {
      num: '03',
      title: 'Live Hands-On Breakthroughs',
      emoji: '🎨',
      color: 'bg-purple-100 text-purple-700',
      borderColor: 'border-purple-200',
      badge: 'Zero passive listening lectures',
      description:
        'Real-time 1:1 collaborative whiteboard with GeoGebra dynamic tools and tailored reps where your child drives the digital stylus.',
      detail:
        'The student does 80% of the talking and drawing. Mentors act as Socratic guides, nudging intuition until the breakthrough clicks naturally.',
    },
    {
      num: '04',
      title: 'Repractice Loop & Parent Sync',
      emoji: '🔁',
      color: 'bg-emerald-100 text-emerald-800',
      borderColor: 'border-emerald-200',
      badge: 'Total curriculum transparency',
      description:
        'Targeted 15-minute reinforcement exercises delivered after every class, plus weekly structured SMS/WhatsApp progress digests for parents.',
      detail:
        'Parents receive concrete video clips of breakthroughs, topic mastery reports, and upcoming syllabus targets — never left wondering what was taught.',
    },
  ];

  return (
    <section
      id="how-it-works"
      className={`w-full py-16 lg:py-24 transition-colors ${
        theme === 'scholastic'
          ? 'bg-[#eaedff]/40 border-b border-slate-200/60'
          : 'bg-gradient-to-b from-[#fffdf5] to-[#FFEE8C]/25 border-b-2 border-amber-200/60'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span
            className={`inline-block px-4 py-1.5 rounded-full font-bold text-xs uppercase tracking-wider ${
              theme === 'scholastic'
                ? 'bg-white text-[#006194] border border-slate-200 shadow-sm'
                : 'bg-white text-primary font-bold border-2 border-sky-200 shadow-sm'
            }`}
          >
            🗺️ Predictable, Tailored Growth
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            How Quanttoria Works 🚀
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-medium">
            Zero guesswork. 100% tailored to your child&apos;s brain wiring and learning pace.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => (
            <div
              key={step.num}
              onClick={() => setActiveStep(activeStep === idx ? null : idx)}
              className={`rounded-3xl bg-white p-7 border-2 ${
                step.borderColor
              } shadow-sm hover:shadow-md transition-all cursor-pointer flex flex-col justify-between ${
                activeStep === idx ? 'ring-2 ring-[#006194]' : ''
              }`}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div
                    className={`w-14 h-14 rounded-2xl ${step.color} flex items-center justify-center text-3xl shadow-xs`}
                  >
                    <span>{step.emoji}</span>
                  </div>
                  <span className="font-extrabold text-xs text-slate-400 tracking-wider">
                    STEP {step.num}
                  </span>
                </div>
                <h3 className="text-lg font-extrabold text-slate-900 leading-snug">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
                  {step.description}
                </p>

                {activeStep === idx && (
                  <div className="pt-2 text-xs text-slate-700 bg-slate-50 p-3 rounded-xl border border-slate-200">
                    <p className="font-semibold text-[#006194] mb-1">What Happens:</p>
                    <p>{step.detail}</p>
                  </div>
                )}
              </div>

              <div className="mt-6 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-600">
                <span>{step.badge}</span>
                <ChevronRight
                  className={`w-4 h-4 text-slate-400 transition-transform ${
                    activeStep === idx ? 'rotate-90 text-[#006194]' : ''
                  }`}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Callout */}
        <div className="mt-12 text-center">
          <p className="text-sm font-semibold text-slate-600 mb-3">
            Want to see how your child connects with our mentors?
          </p>
          <button
            onClick={onBookDemo}
            className="px-6 py-3 rounded-full bg-[#006194] hover:bg-[#007bb9] text-white font-bold text-sm shadow-md transition-all hover:scale-105"
          >
            Start with Step 01: Free Diagnostic Class 🧭
          </button>
        </div>
      </div>
    </section>
  );
};
