import React, { useState } from 'react';
import { BookingData, Coach, DesignTheme } from '../types';
import { X, Sparkles, CheckCircle, Shield } from 'lucide-react';

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
  onBookingSuccess: (data: BookingData) => void;
  selectedCoach?: Coach | null;
  theme: DesignTheme;
}

export const DemoModal: React.FC<DemoModalProps> = ({
  isOpen,
  onClose,
  onBookingSuccess,
  selectedCoach,
  theme,
}) => {
  const [grade, setGrade] = useState('middle');
  const [parentName, setParentName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('After School (4:00 PM EST)');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!parentName || !email) {
      alert('Please fill out your name and email.');
      return;
    }
    onBookingSuccess({
      grade,
      goal: 'confidence',
      parentName,
      email,
      phone,
      preferredDate: date || 'Upcoming Weekday',
      preferredTime: time,
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl rounded-3xl bg-white p-6 sm:p-8 shadow-2xl border-4 border-slate-100 max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:bg-slate-100 hover:text-slate-800 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-6 space-y-1.5">
          <span className="inline-block px-3 py-1 rounded-full bg-amber-100 text-amber-900 font-extrabold text-xs">
            {selectedCoach ? `Matched with ${selectedCoach.name}` : 'Zero Risk 1:1 Live Evaluation'}
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            Book Your Free 1:1 Math Demo 🚀
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 font-medium">
            First session 100% free • No credit card required • 45-min live diagnostic
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Grade selection */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-800">
              Student&apos;s Current Grade Band
            </label>
            <div className="grid grid-cols-3 gap-2">
              {[
                { id: 'elementary', label: 'Grades 1–5', sub: 'Elementary' },
                { id: 'middle', label: 'Grades 6–8', sub: 'Middle School' },
                { id: 'high', label: 'Grades 9–10', sub: 'Algebra & Geometry' },
              ].map((g) => (
                <button
                  key={g.id}
                  type="button"
                  onClick={() => setGrade(g.id)}
                  className={`p-2.5 rounded-xl border text-center transition-all ${
                    grade === g.id
                      ? 'bg-sky-50 border-[#006194] text-[#006194] shadow-xs'
                      : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  <span className="block text-xs font-extrabold">{g.label}</span>
                  <span className="text-[10px] text-slate-500 font-medium">{g.sub}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Schedule Date & Time */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-800">Preferred Date</label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-medium outline-none focus:border-[#006194]"
              />
            </div>
            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-800">Preferred Time</label>
              <select
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-medium outline-none focus:border-[#006194]"
              >
                <option>After School (4:00 PM EST)</option>
                <option>Evening (6:30 PM EST)</option>
                <option>Weekend Morning (10:00 AM EST)</option>
                <option>Weekend Afternoon (2:00 PM EST)</option>
              </select>
            </div>
          </div>

          {/* Parent Name */}
          <div className="space-y-1">
            <label className="text-xs font-bold text-slate-800">Parent Full Name</label>
            <input
              type="text"
              required
              value={parentName}
              onChange={(e) => setParentName(e.target.value)}
              placeholder="e.g. Sarah Jenkins"
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-medium outline-none focus:border-[#006194]"
            />
          </div>

          {/* Contact Details */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-800">Parent Email</label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="sarah@example.com"
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-medium outline-none focus:border-[#006194]"
              />
            </div>
            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-800">Phone Number</label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="(555) 000-0000"
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-medium outline-none focus:border-[#006194]"
              />
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className={`w-full py-3.5 rounded-full font-bold text-sm text-white transition-all shadow-md flex items-center justify-center gap-2 mt-2 ${
              theme === 'scholastic'
                ? 'bg-[#006194] hover:bg-[#007bb9]'
                : 'bg-[#0284c7] hover:bg-sky-600 shadow-[0_4px_0px_#0369a1]'
            }`}
          >
            <Sparkles className="w-4 h-4" />
            <span>Confirm Free 1:1 Live Session</span>
          </button>

          <p className="text-[11px] text-center text-slate-500 font-semibold pt-1">
            🔒 Safe & Secure • No payment info needed • Instant email invite
          </p>
        </form>
      </div>
    </div>
  );
};
