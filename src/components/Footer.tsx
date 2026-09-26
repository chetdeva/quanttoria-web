import React from 'react';
import { Phone, Mail, MapPin, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-slate-50 border-t-2 border-slate-200/80 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        {/* Academic Standards Alignment Banner */}
        <div className="mb-12 pb-8 border-b border-slate-200 text-center space-y-3">
          <p className="text-xs font-extrabold text-slate-500 uppercase tracking-wider">
            Aligned with Premier U.S. Academic & Competition Standards
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2">
            {[
              'Common Core State Standards',
              'Texas TEKS Aligned',
              'AP Pre-Calculus Foundations',
              'AMC 8 / AMC 10 Prep',
              'SSAT & ISEE Quantitative',
              'Singapore Math Method',
            ].map((standard) => (
              <span
                key={standard}
                className="px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-xs font-bold text-slate-700 shadow-xs"
              >
                {standard}
              </span>
            ))}
          </div>
        </div>

        {/* 4 Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand statement */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-[#006194] flex items-center justify-center text-white font-bold text-lg">
                Q
              </div>
              <span className="text-2xl font-black text-[#006194]">Quanttoria</span>
            </div>
            <p className="text-xs text-slate-600 font-medium leading-relaxed">
              Premier 1:1 online math mentorship built for confidence, genuine academic mastery,
              and psychological joy for Grades 1 through 10.
            </p>
            <div className="inline-block p-2 rounded-xl bg-amber-50 border border-amber-200 text-xs font-bold text-amber-800">
              💛 100% Satisfaction Guarantee • No Lock-in Contracts
            </div>
          </div>

          {/* Curriculum Tracks */}
          <div>
            <h4 className="font-extrabold text-sm text-slate-900 mb-3">Curriculum Tracks</h4>
            <ul className="space-y-2 text-xs font-semibold text-slate-600">
              <li>Elementary Logic & Numeracy (1–5)</li>
              <li>Pre-Algebra & Foundational Ratios (6–7)</li>
              <li>Algebra I & Integrated Math (8–9)</li>
              <li>Geometry & Proof Deconstruction (9–10)</li>
              <li>Competition Math (AMC 8 & MathCounts)</li>
            </ul>
          </div>

          {/* Parent Resources */}
          <div>
            <h4 className="font-extrabold text-sm text-slate-900 mb-3">Parent Resources</h4>
            <ul className="space-y-2 text-xs font-semibold text-slate-600">
              <li>Diagnostic Assessment Framework</li>
              <li>Weekly Tutor Feedback Reports</li>
              <li>Interactive Whiteboard Sandbox</li>
              <li>Parent Consultation Hotline</li>
              <li>Schedule & Reschedule Policy</li>
            </ul>
          </div>

          {/* Direct Support */}
          <div>
            <h4 className="font-extrabold text-sm text-slate-900 mb-3">Direct Support</h4>
            <p className="text-xs text-slate-600 font-medium mb-1">Mon–Sat: 8:00 AM – 9:00 PM EST</p>
            <a
              href="tel:8005126284"
              className="text-sm font-extrabold text-[#006194] flex items-center gap-1.5 mb-1.5 hover:underline"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>(800) 512-MATH</span>
            </a>
            <p className="text-xs text-slate-600 font-medium flex items-center gap-1.5 mb-1">
              <Mail className="w-3.5 h-3.5 text-slate-400" />
              <span>support@quanttoria.com</span>
            </p>
            <p className="text-xs text-slate-500 font-medium flex items-center gap-1.5 mt-2">
              <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              <span>500 Technology Square, Cambridge, MA</span>
            </p>
          </div>
        </div>

        {/* Bottom Disclaimer & Legal */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-slate-200 text-xs font-bold text-slate-500">
          <div>© 2025 Quanttoria Learning Inc. All rights reserved. Zero-commitment trial.</div>
          <div className="flex flex-wrap items-center gap-4">
            <a href="#" className="hover:text-slate-800 transition-colors">
              Student Privacy Pledge (COPPA Compliant)
            </a>
            <span>•</span>
            <a href="#" className="hover:text-slate-800 transition-colors">
              Terms of Academic Service
            </a>
            <span>•</span>
            <a href="#" className="hover:text-slate-800 transition-colors">
              Tutor Safeguarding Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
