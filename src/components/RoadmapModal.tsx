import React from 'react';
import { BookingData, Coach } from '../types';
import { CheckCircle, Calendar, Clock, Download, ArrowRight, UserCheck } from 'lucide-react';

interface RoadmapModalProps {
  booking: BookingData | null;
  coach?: Coach | null;
  onClose: () => void;
  onOpenSandbox: () => void;
}

export const RoadmapModal: React.FC<RoadmapModalProps> = ({
  booking,
  coach,
  onClose,
  onOpenSandbox,
}) => {
  if (!booking) return null;

  const assignedCoach = coach || {
    name: 'Pprincy Sugandhh',
    title: 'Lead Mathematics Coach & Curriculum Architect',
    rating: 4.98,
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDXUnZ6U9OPeZ_y8Gva_3j6uDRT7ZUSQ0ji9lpTSQWuGWkjpik3qP6wsgTbYLtfaneB-ohWOrxCUCJD9YXCutOtloF-d8ii0DPS_A38EwBGRxDM3Rn9GW203ye_s5_s9nxzC9R4YZyzK1l_viE_3pJqnI2SeW1tqELMpHOqNXfKJhwshZRXiC86i-osOZXEMykrHCRcpTsQDKBVQHAhD_QyIMbDAl2BN1b5ufNACL93FyWjYw7430vsVA',
  };

  const handleDownloadCalendar = () => {
    alert(
      `Calendar invitation file downloaded for ${booking.parentName}! Meeting link has been dispatched to ${booking.email}.`
    );
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl rounded-3xl bg-white p-6 sm:p-8 shadow-2xl border-4 border-amber-200 max-h-[90vh] overflow-y-auto">
        {/* Celebration Header */}
        <div className="text-center space-y-2 mb-6">
          <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center text-3xl shadow-xs">
            🎉
          </div>
          <span className="inline-block px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 font-extrabold text-xs">
            Session Confirmed • 100% Free
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            You&apos;re All Set, {booking.parentName}!
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 font-medium max-w-lg mx-auto">
            A confirmation email and secure live video link have been dispatched to{' '}
            <strong className="text-slate-900">{booking.email}</strong>.
          </p>
        </div>

        {/* Assigned Mentor & Schedule Summary */}
        <div className="rounded-2xl bg-slate-50 border border-slate-200 p-4 sm:p-5 mb-6 space-y-4">
          <div className="flex items-center justify-between flex-wrap gap-3">
            <div className="flex items-center gap-3">
              <img
                src={assignedCoach.image}
                alt={assignedCoach.name}
                className="w-14 h-14 rounded-2xl object-cover border-2 border-[#006194]"
                referrerPolicy="no-referrer"
              />
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="font-extrabold text-slate-900 text-base">
                    {assignedCoach.name}
                  </span>
                  <span className="text-xs font-black text-amber-600 bg-amber-100 px-2 py-0.5 rounded-full">
                    ★ {assignedCoach.rating}
                  </span>
                </div>
                <p className="text-xs text-[#006194] font-semibold">{assignedCoach.title}</p>
                <p className="text-[11px] text-slate-500 font-medium">
                  Matched via Quanttoria 1:1 Chemistry Algorithm
                </p>
              </div>
            </div>
            <div className="text-right text-xs">
              <span className="inline-flex items-center gap-1 text-slate-600 font-bold bg-white px-3 py-1.5 rounded-xl border border-slate-200">
                <Clock className="w-3.5 h-3.5 text-[#006194]" /> 45 Minutes Live
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 pt-2 border-t border-slate-200 text-xs">
            <div>
              <span className="text-slate-400 block font-semibold text-[11px]">Scheduled For:</span>
              <strong className="text-slate-800 text-xs sm:text-sm">
                {booking.preferredDate || 'Tomorrow'} • {booking.preferredTime || '4:00 PM EST'}
              </strong>
            </div>
            <div>
              <span className="text-slate-400 block font-semibold text-[11px]">Selected Band:</span>
              <strong className="text-slate-800 text-xs sm:text-sm capitalize">
                Grade {booking.grade} (Diagnostic Evaluation)
              </strong>
            </div>
          </div>
        </div>

        {/* Personalized Diagnostic Roadmap Preview */}
        <div className="space-y-3 mb-6">
          <h4 className="font-extrabold text-slate-900 text-sm flex items-center gap-2">
            <span>🗺️</span>
            <span>Your Child&apos;s 45-Minute Diagnostic Session Blueprint</span>
          </h4>
          <div className="space-y-2 text-xs">
            <div className="p-3 rounded-xl bg-sky-50 border border-sky-100 flex items-start gap-3">
              <span className="font-extrabold text-[#006194] text-sm">01</span>
              <div>
                <strong className="text-slate-900 block font-bold">
                  Warmup & Conceptual Bottleneck Scan (10 mins)
                </strong>
                <span className="text-slate-600 font-medium">
                  Friendly logic puzzle that pinpoints prior grade-level gaps without pressure or test anxiety.
                </span>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-amber-50 border border-amber-100 flex items-start gap-3">
              <span className="font-extrabold text-[#f59e0b] text-sm">02</span>
              <div>
                <strong className="text-slate-900 block font-bold">
                  GeoGebra Dynamic Discovery & Stylus Work (20 mins)
                </strong>
                <span className="text-slate-600 font-medium">
                  Your child holds the stylus on our interactive dual whiteboard to discover the &ldquo;why&rdquo; behind the formulas.
                </span>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-purple-50 border border-purple-100 flex items-start gap-3">
              <span className="font-extrabold text-purple-700 text-sm">03</span>
              <div>
                <strong className="text-slate-900 block font-bold">
                  Adversity Quotient (AQ) Reflection & Parent Debrief (15 mins)
                </strong>
                <span className="text-slate-600 font-medium">
                  Coach explains the exact cognitive growth areas and delivers a custom semester roadmap.
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
          <button
            onClick={handleDownloadCalendar}
            className="w-full sm:flex-1 py-3 px-4 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-colors"
          >
            <Download className="w-4 h-4" />
            <span>Add to Calendar (.ics)</span>
          </button>
          <button
            onClick={() => {
              onClose();
              onOpenSandbox();
            }}
            className="w-full sm:flex-1 py-3 px-4 rounded-full bg-[#006194] hover:bg-[#007bb9] text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md transition-all"
          >
            <span>Try Interactive Sandbox Now</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
