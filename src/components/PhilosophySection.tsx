import React from 'react';
import { DesignTheme } from '../types';
import { ShieldCheck, X, Check, Brain, Sparkles, Smile } from 'lucide-react';

interface PhilosophySectionProps {
  theme: DesignTheme;
  onBookDemo: () => void;
}

export const PhilosophySection: React.FC<PhilosophySectionProps> = ({
  theme,
  onBookDemo,
}) => {
  return (
    <section
      id="our-mission"
      className="w-full py-16 lg:py-24 bg-white relative border-b border-slate-200/60"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span
            className={`inline-block px-4 py-1.5 rounded-full font-bold text-xs uppercase tracking-wider ${
              theme === 'scholastic'
                ? 'bg-[#f4e483]/80 text-[#71650f] border border-[#71650f]/20'
                : 'bg-amber-100 text-amber-900 border border-amber-300'
            }`}
          >
            💡 Our Core Philosophy
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Children Aren't Bad at Math; They Just Need Their &ldquo;Why&rdquo;
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-medium leading-relaxed">
            Math dread stems from mechanical rote memorization without conceptual anchor points.
            When formulas feel arbitrary, confidence shatters at the first obstacle. We rewire
            how students perceive problem-solving from the inside out.
          </p>
        </div>

        {/* Comparison: The Old Rote Way vs The Quanttoria Visual Way */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {/* Old Rote Way */}
          <div className="rounded-3xl bg-slate-50 border-2 border-slate-200 p-7 shadow-xs">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">😴</span>
              <div>
                <h3 className="font-extrabold text-slate-700 text-lg">The Old Rote Way</h3>
                <p className="text-xs text-slate-500 font-medium">
                  Mechanical drills, blind memorization & test panic
                </p>
              </div>
            </div>
            <ul className="space-y-3 text-sm font-semibold text-slate-600">
              <li className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-red-100 text-red-600 flex items-center justify-center shrink-0 mt-0.5">
                  <X className="w-3.5 h-3.5 stroke-[3]" />
                </span>
                <span>&ldquo;Just memorize formula #14 for tomorrow&apos;s quiz or fail.&rdquo;</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-red-100 text-red-600 flex items-center justify-center shrink-0 mt-0.5">
                  <X className="w-3.5 h-3.5 stroke-[3]" />
                </span>
                <span>
                  Mistakes feel like personal failure, causing math shutdown, tears, and avoidance.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-red-100 text-red-600 flex items-center justify-center shrink-0 mt-0.5">
                  <X className="w-3.5 h-3.5 stroke-[3]" />
                </span>
                <span>Forgotten 2 days after the test because zero mental picture was built.</span>
              </li>
            </ul>
          </div>

          {/* Quanttoria Visual Way */}
          <div className="rounded-3xl bg-gradient-to-br from-sky-50 via-sky-50/60 to-amber-50/70 border-2 border-[#006194]/30 p-7 shadow-sm relative overflow-hidden">
            <div className="absolute top-4 right-4 bg-[#f59e0b] text-white font-extrabold text-[11px] px-3 py-1 rounded-full shadow-xs">
              SUPERCHARGED ⚡
            </div>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">🧠✨</span>
              <div>
                <h3 className="font-extrabold text-[#006194] text-lg">
                  The Quanttoria Visual Way
                </h3>
                <p className="text-xs text-sky-800 font-medium">
                  Intuitive discovery, spatial geometry & genuine pride
                </p>
              </div>
            </div>
            <ul className="space-y-3 text-sm font-bold text-slate-800">
              <li className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </span>
                <span>
                  Visual interactive proofs (GeoGebra) decode the <em>why</em> before the formula.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </span>
                <span>
                  Mistakes are treated like fun detective clues — building high Adversity Quotient
                  (AQ).
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </span>
                <span>
                  Lifelong intuitive mastery that lasts through middle school, high school &
                  beyond.
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Adversity Quotient (AQ) Master Banner */}
        <div className="rounded-3xl bg-slate-50 border border-slate-200/80 p-8 lg:p-10 shadow-sm mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* AQ Description & Metrics */}
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 text-[#006194] font-bold text-xs">
                <Brain className="w-4 h-4" />
                <span>Cognitive Resilience Framework</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
                Beyond IQ: Cultivating Your Child&apos;s Adversity Quotient (AQ)
              </h3>
              <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed">
                When encountering an unfamiliar or multistep problem, the default response for
                anxious students is paralysis or avoidance. Quanttoria coaches train students to
                pause, systematically dissect cognitive friction, formulate hypotheses, and view
                mistakes as mathematical data rather than personal failure.
              </p>
              <div className="flex flex-wrap items-center gap-6 pt-2">
                <div className="space-y-0.5">
                  <span className="text-3xl font-extrabold text-[#006194]">89%</span>
                  <p className="text-xs font-semibold text-slate-500">Reduction in test anxiety</p>
                </div>
                <div className="w-px h-10 bg-slate-200" />
                <div className="space-y-0.5">
                  <span className="text-3xl font-extrabold text-[#f59e0b]">3.4x</span>
                  <p className="text-xs font-semibold text-slate-500">
                    Higher persistence on challenge tasks
                  </p>
                </div>
                <div className="w-px h-10 bg-slate-200" />
                <div className="space-y-0.5">
                  <span className="text-3xl font-extrabold text-emerald-600">100%</span>
                  <p className="text-xs font-semibold text-slate-500">
                    Psychologically safe 1:1 space
                  </p>
                </div>
              </div>
            </div>

            {/* 3 Pillars of Mathematical Tenacity */}
            <div className="lg:col-span-5 bg-white p-6 rounded-2xl border border-slate-200 shadow-md space-y-4">
              <h4 className="font-extrabold text-slate-900 text-sm flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-[#f59e0b]" />
                <span>The 3 Pillars of Mathematical Tenacity</span>
              </h4>
              <div className="space-y-3 text-xs sm:text-sm">
                <div className="p-3 rounded-xl bg-slate-50 space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-[#006194] text-white text-[11px] font-bold flex items-center justify-center">
                      1
                    </span>
                    <span className="font-bold text-slate-900">The &ldquo;Why&rdquo; Over Rote</span>
                  </div>
                  <p className="text-slate-600 font-medium pl-7">
                    Intuitive visual representations and spatial proofs precede every formula so
                    logic is crystal clear.
                  </p>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-[#006194] text-white text-[11px] font-bold flex items-center justify-center">
                      2
                    </span>
                    <span className="font-bold text-slate-900">AQ & Productive Struggle</span>
                  </div>
                  <p className="text-slate-600 font-medium pl-7">
                    Reframing challenging steps as stimulating puzzles, eliminating shame around
                    preliminary errors.
                  </p>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-[#006194] text-white text-[11px] font-bold flex items-center justify-center">
                      3
                    </span>
                    <span className="font-bold text-slate-900">Micro-Milestone High Fives</span>
                  </div>
                  <p className="text-slate-600 font-medium pl-7">
                    Dopamine-backed validation for logical reasoning and effort, establishing genuine
                    intrinsic confidence.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section Quick CTA */}
        <div className="text-center pt-2">
          <button
            onClick={onBookDemo}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#006194] hover:bg-[#007bb9] text-white font-bold text-sm shadow-md transition-all hover:scale-105"
          >
            <Sparkles className="w-4 h-4" />
            <span>Register for a Demo — Free Live Session</span>
          </button>
        </div>
      </div>
    </section>
  );
};
