import React, { useState } from 'react';
import { BookingData, DesignTheme } from '../types';
import { Lock, Clock, FileText, CheckCircle, Sparkles } from 'lucide-react';

interface BookingSectionProps {
  theme: DesignTheme;
  onBookingSuccess: (data: BookingData) => void;
}

export const BookingSection: React.FC<BookingSectionProps> = ({
  theme,
  onBookingSuccess,
}) => {
  const [grade, setGrade] = useState('6-8');
  const [goal, setGoal] = useState('confidence');
  const [parentName, setParentName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('4:00 PM EST');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!parentName || !email) {
      alert('Please provide your name and email address.');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      onBookingSuccess({
        grade,
        goal,
        parentName,
        email,
        phone,
        preferredDate: date || 'Tomorrow',
        preferredTime: time,
      });
    }, 600);
  };

  return (
    <section
      id="book-demo"
      className={`w-full py-16 lg:py-24 transition-colors ${
        theme === 'scholastic'
          ? 'bg-[#f4e483]/35 border-b border-slate-200/60'
          : 'bg-gradient-to-b from-[#fef9c3]/50 via-[#fffdf5] to-[#FFEE8C]/40 border-b-2 border-amber-200/60'
      }`}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="rounded-3xl bg-white p-7 sm:p-12 border-2 border-slate-200 shadow-xl space-y-8">
          {/* Header */}
          <div className="text-center space-y-2 max-w-xl mx-auto">
            <span
              className={`inline-block px-4 py-1 rounded-full font-bold text-xs uppercase tracking-wider ${
                theme === 'scholastic'
                  ? 'bg-[#f4e483] text-[#71650f] border border-[#71650f]/20'
                  : 'bg-amber-100 text-amber-900 border border-amber-300'
              }`}
            >
              100% Risk Free • 45-Minute Live Evaluation
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Experience the Difference in 45 Minutes. Zero Cost, Zero Pressure.
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-medium">
              Book a complimentary session with an elite mentor. Receive an immediate
              customized diagnosis of your child&apos;s conceptual foundations.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Grade Level Selector */}
            <div className="space-y-2">
              <label className="font-extrabold text-xs sm:text-sm text-slate-900 block">
                1. Select Child&apos;s Grade Level 🎒
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {[
                  { id: '1-3', label: 'Grades 1–3', desc: 'Early Math', emoji: '🐣' },
                  { id: '4-5', label: 'Grades 4–5', desc: 'Fractions & Decimals', emoji: '🧩' },
                  { id: '6-8', label: 'Grades 6–8', desc: 'Pre-Algebra', emoji: '📐' },
                  { id: '9-10', label: 'Grades 9–10', desc: 'Algebra & Geometry', emoji: '🚀' },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setGrade(item.id)}
                    className={`p-3.5 rounded-2xl flex flex-col items-center justify-center text-center transition-all border-2 ${
                      grade === item.id
                        ? 'bg-sky-50 border-[#006194] text-[#006194] shadow-xs'
                        : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    <span className="text-xl mb-1">{item.emoji}</span>
                    <span className="font-extrabold text-xs sm:text-sm">{item.label}</span>
                    <span className="text-[11px] font-semibold text-slate-500">{item.desc}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Goal Selector */}
            <div className="space-y-2">
              <label className="font-extrabold text-xs sm:text-sm text-slate-900 block">
                2. Primary Mathematical Priority 🎯
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {[
                  { id: 'gaps', label: 'Bridging Gaps' },
                  { id: 'confidence', label: 'Building Confidence' },
                  { id: 'competition', label: 'Olympiad & AMC Prep' },
                  { id: 'homework', label: 'School Homework Help' },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setGoal(item.id)}
                    className={`py-3 px-2 rounded-xl text-xs font-bold text-center transition-all border ${
                      goal === item.id
                        ? 'bg-[#006194] text-white border-[#006194] shadow-xs'
                        : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Parent Contact Inputs */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-800">Parent Full Name</label>
                <input
                  type="text"
                  required
                  value={parentName}
                  onChange={(e) => setParentName(e.target.value)}
                  placeholder="e.g. Sarah Jenkins"
                  className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 focus:border-[#006194] focus:bg-white text-xs sm:text-sm font-medium outline-none transition-all"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-800">Email Address</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="sarah@example.com"
                  className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 focus:border-[#006194] focus:bg-white text-xs sm:text-sm font-medium outline-none transition-all"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-800">Phone Number</label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="(555) 000-0000"
                  className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 focus:border-[#006194] focus:bg-white text-xs sm:text-sm font-medium outline-none transition-all"
                />
              </div>
            </div>

            {/* Schedule Slot Selection */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-800">Preferred Date</label>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-2xl bg-slate-50 border border-slate-200 text-xs sm:text-sm font-medium outline-none"
                />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-800">Preferred Time Window</label>
                <select
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-2xl bg-slate-50 border border-slate-200 text-xs sm:text-sm font-medium outline-none"
                >
                  <option>After School (4:00 PM EST)</option>
                  <option>Evening (6:30 PM EST)</option>
                  <option>Weekend Morning (10:00 AM EST)</option>
                  <option>Weekend Afternoon (2:00 PM EST)</option>
                </select>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-4 rounded-full font-extrabold text-base sm:text-lg text-white transition-all flex items-center justify-center gap-2 ${
                theme === 'scholastic'
                  ? 'bg-[#006194] hover:bg-[#007bb9] shadow-md hover:scale-[1.01] active:scale-[0.99]'
                  : 'bg-[#0284c7] hover:bg-sky-600 shadow-[0_6px_0px_#0369a1] hover:translate-y-1 active:translate-y-1'
              }`}
            >
              <Sparkles className="w-5 h-5" />
              <span>
                {isSubmitting
                  ? 'Generating Personalized Diagnosis...'
                  : "Claim Your Child's Free 1:1 Live Demo"}
              </span>
            </button>

            {/* Reassurance Footer Row */}
            <div className="flex flex-wrap items-center justify-center gap-4 text-slate-500 text-xs font-bold pt-2">
              <span className="flex items-center gap-1.5">
                <Lock className="w-4 h-4 text-emerald-600" /> No credit card required
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-emerald-600" /> 100% Free 45-min live session
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <FileText className="w-4 h-4 text-emerald-600" /> Personalized learning roadmap included
              </span>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
