import React, { useState } from 'react';
import { Coach, DesignTheme } from '../types';
import { COACHES } from '../data/coaches';
import { Star, GraduationCap, Award, CheckCircle, Sparkles } from 'lucide-react';

interface CoachesSectionProps {
  theme: DesignTheme;
  onSelectCoachForDemo: (coach: Coach) => void;
}

export const CoachesSection: React.FC<CoachesSectionProps> = ({
  theme,
  onSelectCoachForDemo,
}) => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [modalCoach, setModalCoach] = useState<Coach | null>(null);

  const leadCoach = COACHES[0]; // Coach Pprincy Sugandhh
  const otherCoaches = COACHES.slice(1);

  const filteredOtherCoaches = otherCoaches.filter((coach) => {
    if (selectedFilter === 'all') return true;
    if (selectedFilter === 'elementary') return coach.gradeBand.includes('1–5');
    if (selectedFilter === 'middle') return coach.gradeBand.includes('6–8') || coach.gradeBand.includes('5–9');
    if (selectedFilter === 'high') return coach.gradeBand.includes('8–10');
    return true;
  });

  return (
    <section
      id="meet-the-coaches"
      className={`w-full py-16 lg:py-24 transition-colors ${
        theme === 'scholastic'
          ? 'bg-[#f4e483]/25 border-b border-slate-200/60'
          : 'bg-gradient-to-b from-[#FFEE8C]/35 to-[#fffdf5] border-b-2 border-amber-200/60'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span
            className={`inline-block px-4 py-1.5 rounded-full font-bold text-xs uppercase tracking-wider ${
              theme === 'scholastic'
                ? 'bg-white text-slate-800 border border-slate-200 shadow-sm'
                : 'bg-white text-amber-900 border-2 border-amber-300 shadow-sm'
            }`}
          >
            🍎 Academic Rigor & Warmth
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Meet Our Elite Coaches: The Top 2% of US Math Mentors
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-medium leading-relaxed">
            Over 20,000+ hours of dedicated 1:1 teaching across Grades 1–10. Background-checked,
            university-accredited, and trained in empathy & AQ coaching.
          </p>
        </div>

        {/* Spotlight Hero Coach: Coach Pprincy Sugandhh */}
        <div className="rounded-3xl bg-white p-7 lg:p-10 border border-slate-200 shadow-xl mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Coach Photo with High Rating Stamp */}
            <div className="lg:col-span-5 relative">
              <div className="rounded-3xl overflow-hidden border-4 border-amber-100 shadow-md">
                <img
                  src={leadCoach.image}
                  alt="Coach Pprincy Sugandhh - Lead Mathematics Coach"
                  className="w-full h-[400px] object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-3 right-4 bg-white px-4 py-1.5 rounded-full border-2 border-amber-300 shadow-md flex items-center gap-1.5">
                <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
                <span className="text-slate-900 font-extrabold text-sm">
                  {leadCoach.rating} / 5.0 Rating
                </span>
              </div>
            </div>

            {/* Coach Bio & Highlights */}
            <div className="lg:col-span-7 space-y-5">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3.5 py-1 rounded-full bg-sky-100 text-[#006194] font-bold text-xs border border-sky-200">
                  Lead Mathematics Coach
                </span>
                <span className="px-3.5 py-1 rounded-full bg-amber-100 text-amber-900 font-bold text-xs border border-amber-200">
                  Curriculum Architect
                </span>
                <span className="px-3.5 py-1 rounded-full bg-purple-100 text-purple-800 font-bold text-xs">
                  AQ Certified Trainer
                </span>
              </div>

              <div>
                <h3 className="text-3xl font-extrabold text-slate-900">
                  {leadCoach.name}
                </h3>
                <p className="text-sm font-bold text-[#006194] mt-1">
                  {leadCoach.sessionsCount} • {leadCoach.credentials}
                </p>
                <p className="text-xs sm:text-sm text-slate-600 font-medium mt-1">
                  Specialization: {leadCoach.gradeSpecialty || leadCoach.focus}
                </p>
              </div>

              {/* Quote Bubble */}
              <div className="p-5 rounded-2xl bg-amber-50/80 border-l-4 border-[#006194] shadow-xs">
                <p className="text-sm sm:text-base text-slate-800 font-medium italic leading-relaxed">
                  &ldquo;{leadCoach.quote}&rdquo;
                </p>
              </div>

              {/* 3 Metric Pillars */}
              <div className="grid grid-cols-3 gap-3 pt-1 text-center">
                <div className="p-3 rounded-2xl bg-slate-50 border border-slate-100">
                  <span className="text-xl sm:text-2xl font-black text-[#006194]">
                    {leadCoach.improvementRate}
                  </span>
                  <p className="text-xs font-semibold text-slate-500 mt-0.5">
                    Grade Improvement Rate
                  </p>
                </div>
                <div className="p-3 rounded-2xl bg-slate-50 border border-slate-100">
                  <span className="text-xl sm:text-2xl font-black text-[#f59e0b]">
                    {leadCoach.pedagogyExperience}
                  </span>
                  <p className="text-xs font-semibold text-slate-500 mt-0.5">
                    Pedagogy Experience
                  </p>
                </div>
                <div className="p-3 rounded-2xl bg-slate-50 border border-slate-100">
                  <span className="text-xl sm:text-2xl font-black text-purple-700">
                    {leadCoach.gradeBand}
                  </span>
                  <p className="text-xs font-semibold text-slate-500 mt-0.5">
                    Core Grade Band
                  </p>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-2">
                <button
                  onClick={() => onSelectCoachForDemo(leadCoach)}
                  className="px-6 py-3 rounded-full bg-[#006194] hover:bg-[#007bb9] text-white font-bold text-sm shadow-md transition-all hover:scale-105 flex items-center gap-2"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Request Coach Pprincy for 1st Live Demo (Free)</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Filter Bar for Additional Coaches */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <h3 className="text-xl font-extrabold text-slate-900">
            More Specialists in Our Vetted Collective
          </h3>
          <div className="flex items-center gap-1.5 p-1 bg-white rounded-full border border-slate-200 shadow-xs text-xs font-bold">
            <button
              onClick={() => setSelectedFilter('all')}
              className={`px-3 py-1.5 rounded-full transition-colors ${
                selectedFilter === 'all'
                  ? 'bg-[#006194] text-white'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              All Bands
            </button>
            <button
              onClick={() => setSelectedFilter('elementary')}
              className={`px-3 py-1.5 rounded-full transition-colors ${
                selectedFilter === 'elementary'
                  ? 'bg-[#006194] text-white'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Grades 1–5
            </button>
            <button
              onClick={() => setSelectedFilter('middle')}
              className={`px-3 py-1.5 rounded-full transition-colors ${
                selectedFilter === 'middle'
                  ? 'bg-[#006194] text-white'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Grades 6–8
            </button>
            <button
              onClick={() => setSelectedFilter('high')}
              className={`px-3 py-1.5 rounded-full transition-colors ${
                selectedFilter === 'high'
                  ? 'bg-[#006194] text-white'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Grades 9–10 & AMC
            </button>
          </div>
        </div>

        {/* Additional Coach Mini-Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredOtherCoaches.map((coach) => (
            <div
              key={coach.id}
              className="rounded-3xl bg-white p-6 border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-3.5">
                  <div className="w-14 h-14 rounded-2xl bg-sky-50 border border-sky-100 flex items-center justify-center shrink-0 overflow-hidden text-[#006194] font-bold text-xl">
                    <GraduationCap className="w-7 h-7 text-[#006194]" />
                  </div>
                  <div className="space-y-0.5">
                    <div className="flex items-center gap-2">
                      <h4 className="font-extrabold text-slate-900 text-base">
                        {coach.name}
                      </h4>
                      <span className="text-xs font-black text-amber-700 bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200">
                        ★ {coach.rating}
                      </span>
                    </div>
                    <p className="text-xs font-bold text-[#006194]">
                      {coach.title} • {coach.university}
                    </p>
                  </div>
                </div>

                <p className="text-xs text-slate-600 font-medium leading-relaxed">
                  {coach.focus}
                </p>

                <div className="p-3 rounded-xl bg-slate-50 text-xs italic text-slate-700 border border-slate-100">
                  &ldquo;{coach.quote}&rdquo;
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-bold text-slate-500">
                  Band: {coach.gradeBand}
                </span>
                <button
                  onClick={() => onSelectCoachForDemo(coach)}
                  className="px-3.5 py-1.5 rounded-full bg-slate-100 hover:bg-[#006194] hover:text-white text-slate-800 font-bold text-xs transition-colors"
                >
                  Match with Coach →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
