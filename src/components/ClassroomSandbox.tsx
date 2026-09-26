import React, { useState, useRef, useEffect } from 'react';
import { DesignTheme } from '../types';
import {
  PenTool,
  Square,
  Sparkles,
  RotateCcw,
  Check,
  Shapes,
  Calculator,
  Eye,
  Maximize2,
  Volume2,
} from 'lucide-react';

interface ClassroomSandboxProps {
  theme: DesignTheme;
  onBookDemo: () => void;
}

export const ClassroomSandbox: React.FC<ClassroomSandboxProps> = ({
  theme,
  onBookDemo,
}) => {
  // Coordinate Geometry points A and B
  const [pointA, setPointA] = useState<{ x: number; y: number }>({ x: 2, y: 3 });
  const [pointB, setPointB] = useState<{ x: number; y: number }>({ x: 6, y: 11 });
  const [activeTool, setActiveTool] = useState<'pen' | 'geogebra' | 'shapes' | 'formulas'>('geogebra');
  const [showFormulaDetails, setShowFormulaDetails] = useState(false);
  const [praiseTriggered, setPraiseTriggered] = useState(true);

  // Freehand drawing support on whiteboard
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [drawingStrokes, setDrawingStrokes] = useState<number>(0);

  // Calculate delta X, delta Y, and slope m
  const deltaX = pointB.x - pointA.x;
  const deltaY = pointB.y - pointA.y;
  const slope = deltaX !== 0 ? (deltaY / deltaX).toFixed(2) : 'Undefined';
  const simplifiedSlope =
    deltaX !== 0 && deltaY % deltaX === 0 ? (deltaY / deltaX).toString() : slope;

  // Handle Presets
  const applyPreset = (preset: 'standard' | 'negative' | 'fraction' | 'steep') => {
    if (preset === 'standard') {
      setPointA({ x: 2, y: 3 });
      setPointB({ x: 6, y: 11 });
    } else if (preset === 'negative') {
      setPointA({ x: 1, y: 9 });
      setPointB({ x: 7, y: 3 });
    } else if (preset === 'fraction') {
      setPointA({ x: 2, y: 2 });
      setPointB({ x: 8, y: 5 });
    } else if (preset === 'steep') {
      setPointA({ x: 1, y: 1 });
      setPointB({ x: 4, y: 10 });
    }
    setPraiseTriggered(true);
  };

  // Canvas drawing handlers
  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (activeTool !== 'pen') return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.strokeStyle = '#006194';
    ctx.lineWidth = 3;
    ctx.lineCap = 'round';
    setIsDrawing(true);
  };

  const draw = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!isDrawing || activeTool !== 'pen') return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    ctx.lineTo(x, y);
    ctx.stroke();
    setDrawingStrokes((prev) => prev + 1);
  };

  const stopDrawing = () => {
    setIsDrawing(false);
  };

  const clearDrawing = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    setDrawingStrokes(0);
  };

  // Convert coordinate points (0-10, 0-12) to SVG viewbox (0-280, 0-180)
  const svgWidth = 280;
  const svgHeight = 180;
  const padding = 30;

  const toSvgX = (x: number) => {
    return padding + (x / 10) * (svgWidth - 2 * padding);
  };

  const toSvgY = (y: number) => {
    // Invert Y axis for mathematical Cartesian coordinate system
    return svgHeight - padding - (y / 12) * (svgHeight - 2 * padding);
  };

  const svgA = { x: toSvgX(pointA.x), y: toSvgY(pointA.y) };
  const svgB = { x: toSvgX(pointB.x), y: toSvgY(pointB.y) };

  return (
    <section
      id="learning-experience"
      className="w-full py-16 lg:py-24 bg-white relative border-b border-slate-200/60"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Descriptive Features */}
          <div className="lg:col-span-5 space-y-6">
            <span className="inline-block px-4 py-1 rounded-full bg-sky-100 text-[#006194] font-bold text-xs uppercase tracking-wider">
              🎨 The Digital Atelier
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              The Live Classroom: Where Math Becomes Tangible & Visual
            </h2>
            <p className="text-base text-slate-600 font-medium leading-relaxed">
              Standard video tutoring is boring talking heads with static PDFs. Quanttoria transforms
              the screen into a live mathematics playground equipped with dynamic spatial
              manipulatives.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3.5 p-3 rounded-2xl bg-slate-50/70 border border-slate-100">
                <div className="w-11 h-11 rounded-2xl bg-sky-100 text-[#006194] flex items-center justify-center shrink-0 text-xl font-bold">
                  📐
                </div>
                <div>
                  <h4 className="font-extrabold text-slate-900 text-sm">
                    GeoGebra Dynamic Visualizers
                  </h4>
                  <p className="text-xs text-slate-600 font-medium mt-0.5">
                    Angles, coordinate planes, and quadratic curves flex dynamically so variables
                    become spatial intuition.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-3 rounded-2xl bg-slate-50/70 border border-slate-100">
                <div className="w-11 h-11 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center shrink-0 text-xl font-bold">
                  ✏️
                </div>
                <div>
                  <h4 className="font-extrabold text-slate-900 text-sm">
                    Shared Dual-Control Whiteboard
                  </h4>
                  <p className="text-xs text-slate-600 font-medium mt-0.5">
                    Student and coach sketch, calculate, and highlight steps simultaneously with
                    ultra-low latency stylus sync.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-3 rounded-2xl bg-slate-50/70 border border-slate-100">
                <div className="w-11 h-11 rounded-2xl bg-purple-100 text-purple-700 flex items-center justify-center shrink-0 text-xl font-bold">
                  🏆
                </div>
                <div>
                  <h4 className="font-extrabold text-slate-900 text-sm">
                    Standard Practice Alignment
                  </h4>
                  <p className="text-xs text-slate-600 font-medium mt-0.5">
                    Aligned with Khan Academy, Common Core, Texas TEKS, AMC 8, and pre-AP
                    foundations for school synergy.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-3 rounded-2xl bg-slate-50/70 border border-slate-100">
                <div className="w-11 h-11 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 text-xl font-bold">
                  📦
                </div>
                <div>
                  <h4 className="font-extrabold text-slate-900 text-sm">
                    Post-Session Activity Pack
                  </h4>
                  <p className="text-xs text-slate-600 font-medium mt-0.5">
                    Bite-sized 15-minute reinforcement tasks verify retention within 48 hours
                    without overwhelming homework stress.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Live Interactive Whiteboard Sandbox */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-slate-900 p-4 sm:p-6 shadow-2xl border-4 border-slate-800 space-y-4">
              {/* Whiteboard Top Window Title Bar */}
              <div className="flex items-center justify-between bg-slate-800/90 px-4 py-2.5 rounded-2xl">
                <div className="flex items-center gap-2">
                  <span className="w-3.5 h-3.5 rounded-full bg-red-500" />
                  <span className="w-3.5 h-3.5 rounded-full bg-amber-400" />
                  <span className="w-3.5 h-3.5 rounded-full bg-emerald-400" />
                  <span className="text-xs font-bold text-slate-300 ml-2 hidden sm:inline">
                    Quanttoria Interactive Sandbox — Lesson: Coordinate Geometry
                  </span>
                  <span className="text-xs font-bold text-slate-300 ml-1 sm:hidden">
                    Coordinate Sandbox
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold border border-emerald-500/30 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Coach Live</span>
                  </span>
                  <span className="px-2 py-0.5 rounded bg-slate-700 text-slate-300 text-[11px] font-bold">
                    Zoom: 100%
                  </span>
                </div>
              </div>

              {/* Whiteboard Canvas Stage Area */}
              <div className="rounded-2xl bg-white p-5 sm:p-6 shadow-inner relative overflow-hidden min-h-[360px] flex flex-col justify-between">
                {/* Freehand drawing canvas layer */}
                <canvas
                  ref={canvasRef}
                  width={600}
                  height={340}
                  onMouseDown={startDrawing}
                  onMouseMove={draw}
                  onMouseUp={stopDrawing}
                  onMouseLeave={stopDrawing}
                  className={`absolute inset-0 z-20 w-full h-full ${
                    activeTool === 'pen' ? 'cursor-crosshair' : 'pointer-events-none'
                  }`}
                />

                {/* Top Challenge Prompt & Point Coordinates */}
                <div className="relative z-10 flex flex-col sm:flex-row justify-between items-start gap-4">
                  <div className="space-y-1.5">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-extrabold border border-amber-300">
                      <span>✨ Challenge:</span>
                      <span className="font-mono">Find the Slope (m) = (y₂ - y₁) / (x₂ - x₁)</span>
                    </div>
                    <div className="text-base sm:text-lg font-extrabold text-slate-900">
                      Points:{' '}
                      <span className="text-[#006194] bg-sky-50 px-2 py-0.5 rounded-md border border-sky-200">
                        A({pointA.x}, {pointA.y})
                      </span>{' '}
                      and{' '}
                      <span className="text-pink-600 bg-pink-50 px-2 py-0.5 rounded-md border border-pink-200">
                        B({pointB.x}, {pointB.y})
                      </span>
                    </div>
                  </div>

                  {/* Interactive Preset Buttons */}
                  <div className="flex flex-wrap items-center gap-1.5 text-xs font-bold">
                    <span className="text-slate-400 text-[11px]">Presets:</span>
                    <button
                      onClick={() => applyPreset('standard')}
                      className={`px-2.5 py-1 rounded-lg border transition-all ${
                        pointA.x === 2 && pointB.x === 6 && pointB.y === 11
                          ? 'bg-[#006194] text-white border-[#006194]'
                          : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border-slate-200'
                      }`}
                    >
                      m = 2
                    </button>
                    <button
                      onClick={() => applyPreset('fraction')}
                      className={`px-2.5 py-1 rounded-lg border transition-all ${
                        pointA.x === 2 && pointB.x === 8 && pointB.y === 5
                          ? 'bg-[#006194] text-white border-[#006194]'
                          : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border-slate-200'
                      }`}
                    >
                      m = 1/2
                    </button>
                    <button
                      onClick={() => applyPreset('negative')}
                      className={`px-2.5 py-1 rounded-lg border transition-all ${
                        pointA.x === 1 && pointB.x === 7 && pointB.y === 3
                          ? 'bg-[#006194] text-white border-[#006194]'
                          : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border-slate-200'
                      }`}
                    >
                      m = -1
                    </button>
                    <button
                      onClick={() => applyPreset('steep')}
                      className={`px-2.5 py-1 rounded-lg border transition-all ${
                        pointA.x === 1 && pointB.x === 4 && pointB.y === 10
                          ? 'bg-[#006194] text-white border-[#006194]'
                          : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border-slate-200'
                      }`}
                    >
                      m = 3
                    </button>
                  </div>
                </div>

                {/* SVG Coordinate Visualization Board */}
                <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-4 my-2">
                  <div className="w-full max-w-[340px] bg-slate-50/70 p-3 rounded-2xl border border-slate-200">
                    <svg
                      viewBox={`0 0 ${svgWidth} ${svgHeight}`}
                      className="w-full h-auto overflow-visible select-none"
                    >
                      {/* Grid background lines */}
                      <g className="opacity-15 stroke-slate-400" strokeWidth="0.75">
                        {[0, 2, 4, 6, 8, 10].map((val) => (
                          <line
                            key={`grid-x-${val}`}
                            x1={toSvgX(val)}
                            y1={padding}
                            x2={toSvgX(val)}
                            y2={svgHeight - padding}
                          />
                        ))}
                        {[0, 3, 6, 9, 12].map((val) => (
                          <line
                            key={`grid-y-${val}`}
                            x1={padding}
                            y1={toSvgY(val)}
                            x2={svgWidth - padding}
                            y2={toSvgY(val)}
                          />
                        ))}
                      </g>

                      {/* Coordinate Axes */}
                      <line
                        x1={padding}
                        y1={svgHeight - padding}
                        x2={svgWidth - padding + 15}
                        y2={svgHeight - padding}
                        stroke="#334155"
                        strokeWidth="1.5"
                      />
                      <line
                        x1={padding}
                        y1={svgHeight - padding}
                        x2={padding}
                        y2={padding - 10}
                        stroke="#334155"
                        strokeWidth="1.5"
                      />
                      <text
                        x={svgWidth - padding + 18}
                        y={svgHeight - padding + 4}
                        className="text-[10px] font-bold fill-slate-500"
                      >
                        x
                      </text>
                      <text
                        x={padding - 3}
                        y={padding - 15}
                        className="text-[10px] font-bold fill-slate-500"
                      >
                        y
                      </text>

                      {/* Right-triangle projection for slope (Delta X and Delta Y) */}
                      <line
                        x1={svgA.x}
                        y1={svgA.y}
                        x2={svgB.x}
                        y2={svgA.y}
                        stroke="#006194"
                        strokeDasharray="4,4"
                        strokeWidth="1.5"
                        className="opacity-50"
                      />
                      <line
                        x1={svgB.x}
                        y1={svgA.y}
                        x2={svgB.x}
                        y2={svgB.y}
                        stroke="#ec4899"
                        strokeDasharray="4,4"
                        strokeWidth="1.5"
                        className="opacity-50"
                      />

                      {/* Hypotenuse Slope Line */}
                      <line
                        x1={svgA.x}
                        y1={svgA.y}
                        x2={svgB.x}
                        y2={svgB.y}
                        stroke="#006194"
                        strokeWidth="3.5"
                        strokeLinecap="round"
                      />

                      {/* Point A Circle */}
                      <circle cx={svgA.x} cy={svgA.y} r="6" className="fill-[#006194]" />
                      <circle cx={svgA.x} cy={svgA.y} r="3" className="fill-white" />
                      <text
                        x={svgA.x - 12}
                        y={svgA.y + 18}
                        className="text-[10px] font-extrabold fill-[#006194]"
                      >
                        A({pointA.x},{pointA.y})
                      </text>

                      {/* Point B Circle */}
                      <circle cx={svgB.x} cy={svgB.y} r="6" className="fill-[#ec4899]" />
                      <circle cx={svgB.x} cy={svgB.y} r="3" className="fill-white" />
                      <text
                        x={svgB.x + 8}
                        y={svgB.y + 4}
                        className="text-[10px] font-extrabold fill-[#ec4899]"
                      >
                        B({pointB.x},{pointB.y})
                      </text>

                      {/* Delta X and Delta Y Labels */}
                      <text
                        x={(svgA.x + svgB.x) / 2}
                        y={svgA.y + (svgB.y < svgA.y ? 14 : -6)}
                        textAnchor="middle"
                        className="text-[11px] font-black fill-[#006194]"
                      >
                        Δx = {deltaX}
                      </text>
                      <text
                        x={svgB.x + (deltaX >= 0 ? 8 : -18)}
                        y={(svgA.y + svgB.y) / 2}
                        className="text-[11px] font-black fill-[#ec4899]"
                      >
                        Δy = {deltaY}
                      </text>
                    </svg>
                  </div>

                  {/* Interactive Sliders for Adjusting Points Live */}
                  <div className="flex-1 space-y-3 bg-slate-50 p-3.5 rounded-2xl border border-slate-200 text-xs">
                    <div className="flex items-center justify-between font-bold text-slate-800">
                      <span>Adjust Point A:</span>
                      <span className="text-[#006194]">
                        ({pointA.x}, {pointA.y})
                      </span>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <label className="text-[10px] text-slate-500 font-semibold">x₁:</label>
                        <input
                          type="range"
                          min="0"
                          max="5"
                          value={pointA.x}
                          onChange={(e) =>
                            setPointA({ ...pointA, x: parseInt(e.target.value) || 0 })
                          }
                          className="w-full accent-[#006194]"
                        />
                      </div>
                      <div>
                        <label className="text-[10px] text-slate-500 font-semibold">y₁:</label>
                        <input
                          type="range"
                          min="0"
                          max="6"
                          value={pointA.y}
                          onChange={(e) =>
                            setPointA({ ...pointA, y: parseInt(e.target.value) || 0 })
                          }
                          className="w-full accent-[#006194]"
                        />
                      </div>
                    </div>

                    <div className="flex items-center justify-between font-bold text-slate-800 pt-1">
                      <span>Adjust Point B:</span>
                      <span className="text-pink-600">
                        ({pointB.x}, {pointB.y})
                      </span>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <label className="text-[10px] text-slate-500 font-semibold">x₂:</label>
                        <input
                          type="range"
                          min="3"
                          max="10"
                          value={pointB.x}
                          onChange={(e) =>
                            setPointB({ ...pointB, x: parseInt(e.target.value) || 3 })
                          }
                          className="w-full accent-pink-500"
                        />
                      </div>
                      <div>
                        <label className="text-[10px] text-slate-500 font-semibold">y₂:</label>
                        <input
                          type="range"
                          min="2"
                          max="12"
                          value={pointB.y}
                          onChange={(e) =>
                            setPointB({ ...pointB, y: parseInt(e.target.value) || 2 })
                          }
                          className="w-full accent-pink-500"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Live Student Action & Verified Feedback Stamp */}
                <div className="relative z-10 bg-amber-50/90 border-2 border-amber-200 p-3 sm:p-3.5 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mt-3">
                  <div className="flex items-center gap-2.5">
                    <span className="text-2xl">✍️</span>
                    <div>
                      <span className="text-[11px] font-bold text-slate-500 block">
                        Student Stylus Action (Verified by Coach Pprincy Sugandhh):
                      </span>
                      <span className="text-sm sm:text-base font-extrabold text-[#006194]">
                        m = ({pointB.y} - {pointA.y}) / ({pointB.x} - {pointA.x}) = {deltaY} /{' '}
                        {deltaX} = <strong className="text-slate-900 underline">{simplifiedSlope}</strong>
                      </span>
                    </div>
                  </div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-600 text-white text-xs font-black shadow-sm shrink-0">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Perfect Logic! High Five! ✨</span>
                  </div>
                </div>
              </div>

              {/* Bottom Whiteboard Toolbar & Affordances */}
              <div className="flex flex-wrap items-center justify-between gap-2 pt-1 text-slate-400 text-xs">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setActiveTool('pen')}
                    className={`px-3 py-1.5 rounded-xl font-bold flex items-center gap-1.5 transition-all ${
                      activeTool === 'pen'
                        ? 'bg-[#006194] text-white shadow-sm'
                        : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                    }`}
                  >
                    <PenTool className="w-3.5 h-3.5" />
                    <span>Pen (Draw on Board)</span>
                  </button>
                  <button
                    onClick={() => setActiveTool('geogebra')}
                    className={`px-3 py-1.5 rounded-xl font-bold flex items-center gap-1.5 transition-all ${
                      activeTool === 'geogebra'
                        ? 'bg-[#006194] text-white shadow-sm'
                        : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                    }`}
                  >
                    <Shapes className="w-3.5 h-3.5 text-amber-400" />
                    <span>GeoGebra Grid</span>
                  </button>
                  {drawingStrokes > 0 && (
                    <button
                      onClick={clearDrawing}
                      className="px-2.5 py-1.5 rounded-xl bg-slate-800 text-slate-300 hover:text-white flex items-center gap-1"
                    >
                      <RotateCcw className="w-3 h-3" /> Clear Ink
                    </button>
                  )}
                </div>

                <div className="flex items-center gap-3 font-semibold text-slate-400 text-[11px]">
                  <span className="flex items-center gap-1">
                    <Volume2 className="w-3.5 h-3.5 text-emerald-400" /> Active Audio
                  </span>
                  <span>•</span>
                  <span>HD Stylus 60fps</span>
                  <span>•</span>
                  <span>1:1 Latency 12ms</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
