import React, { useState } from 'react';
import { DesignTheme } from '../types';
import { REVIEWS } from '../data/reviews';
import { Star, CheckCircle, Shield, RefreshCw, CalendarX } from 'lucide-react';

interface ReviewsSectionProps {
  theme: DesignTheme;
}

export const ReviewsSection: React.FC<ReviewsSectionProps> = ({ theme }) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'anxiety' | 'fractions' | 'aq'>('all');

  const filteredReviews = REVIEWS.filter((r) => {
    if (activeFilter === 'all') return true;
    return r.category === activeFilter;
  });

  return (
    <section
      id="reviews-trust"
      className="w-full py-16 lg:py-24 bg-white relative border-b border-slate-200/60"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        {/* Trustpilot Ribbon Header */}
        <div
          className={`flex flex-col md:flex-row items-center justify-between p-6 sm:p-8 rounded-3xl mb-12 gap-6 shadow-sm border ${
            theme === 'scholastic'
              ? 'bg-[#eaedff]/50 border-slate-200'
              : 'bg-[#fef9c3] border-2 border-amber-300'
          }`}
        >
          <div className="flex items-center gap-4 text-center md:text-left">
            <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center shadow-xs text-3xl">
              ⭐
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xl sm:text-2xl font-black text-slate-900">
                  Rated Excellent 4.9 / 5
                </span>
                <div className="flex text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-500 text-amber-500" />
                  ))}
                </div>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 font-semibold mt-0.5">
                Over 1,240+ verified parent reviews on Trustpilot & Google Reviews
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <span className="px-4 py-2 rounded-full bg-white text-slate-800 text-xs font-bold shadow-xs flex items-center gap-1.5 border border-slate-200">
              <CheckCircle className="w-4 h-4 text-[#006194]" />
              <span>Verified Parents Only</span>
            </span>
            <span className="px-4 py-2 rounded-full bg-[#f4e483] text-amber-950 text-xs font-black shadow-xs border border-amber-300">
              30-Day Happiness Guarantee
            </span>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          <button
            onClick={() => setActiveFilter('all')}
            className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
              activeFilter === 'all'
                ? 'bg-[#006194] text-white shadow-xs'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            All Parent Stories (5)
          </button>
          <button
            onClick={() => setActiveFilter('anxiety')}
            className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
              activeFilter === 'anxiety'
                ? 'bg-[#006194] text-white shadow-xs'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            Ending Math Tears & Anxiety
          </button>
          <button
            onClick={() => setActiveFilter('fractions')}
            className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
              activeFilter === 'fractions'
                ? 'bg-[#006194] text-white shadow-xs'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            Visual Whiteboard & Geometry
          </button>
          <button
            onClick={() => setActiveFilter('aq')}
            className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
              activeFilter === 'aq'
                ? 'bg-[#006194] text-white shadow-xs'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            Adversity Quotient & Olympiad
          </button>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {filteredReviews.slice(0, 3).map((review) => (
            <div
              key={review.id}
              className="rounded-3xl bg-slate-50 border border-slate-200 p-7 flex flex-col justify-between space-y-4 shadow-xs hover:shadow-sm transition-shadow"
            >
              <div className="space-y-3">
                <div className="flex text-amber-500">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
                  ))}
                </div>
                <p className="text-sm font-medium text-slate-800 italic leading-relaxed">
                  {review.text}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                <div>
                  <p className="font-extrabold text-sm text-slate-900">{review.author}</p>
                  <p className="text-xs text-slate-500 font-medium">
                    Parent of {review.studentName} ({review.grade}) • {review.city}
                  </p>
                </div>
                <CheckCircle className="w-5 h-5 text-[#006194] shrink-0" />
              </div>
            </div>
          ))}
        </div>

        {/* Trust Reassurance Banner */}
        <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs sm:text-sm font-bold text-slate-700">
          <span className="flex items-center gap-2">
            <Shield className="w-5 h-5 text-emerald-600" />
            <span>100% Background-Checked Tutors</span>
          </span>
          <span className="flex items-center gap-2">
            <RefreshCw className="w-5 h-5 text-[#006194]" />
            <span>Switch Coaches Anytime</span>
          </span>
          <span className="flex items-center gap-2">
            <CalendarX className="w-5 h-5 text-amber-600" />
            <span>Zero Lock-in Contracts</span>
          </span>
        </div>
      </div>
    </section>
  );
};
