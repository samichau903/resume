/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { Play, HelpCircle, AlertCircle, RefreshCw, Layers } from "lucide-react";

export default function ABTestingSimulator() {
  // Simulator inputs
  const [controlTraffic, setControlTraffic] = useState(10000);
  const [controlConversions, setControlConversions] = useState(500);

  const [variantTraffic, setVariantTraffic] = useState(10000);
  const [variantConversions, setVariantConversions] = useState(570);

  // Computed results
  const [controlRate, setControlRate] = useState(5.0);
  const [variantRate, setVariantRate] = useState(5.7);
  const [relativeLift, setRelativeLift] = useState(14.0);
  const [zScore, setZScore] = useState(2.18);
  const [pValue, setPValue] = useState(0.029);
  const [confidence, setConfidence] = useState(97.1);
  const [isSignificant, setIsSignificant] = useState(true);

  // Handle computation when inputs change
  useEffect(() => {
    const p1 = controlConversions / controlTraffic;
    const p2 = variantConversions / variantTraffic;

    const rate1 = p1 * 100;
    const rate2 = p2 * 100;
    setControlRate(rate1);
    setVariantRate(rate2);

    // Relative lift
    const lift = rate1 > 0 ? ((rate2 - rate1) / rate1) * 100 : 0;
    setRelativeLift(lift);

    // Z-Score computation
    // Pooled variance formula
    const pooledP = (controlConversions + variantConversions) / (controlTraffic + variantTraffic);
    const standardError = Math.sqrt(
      pooledP * (1 - pooledP) * (1 / controlTraffic + 1 / variantTraffic)
    );

    if (standardError > 0) {
      const z = (p2 - p1) / standardError;
      setZScore(z);

      // P-Value computation (two-tailed normal approximation)
      const pVal = 2 * (1 - normalCDF(Math.abs(z)));
      setPValue(pVal);
      setConfidence((1 - pVal) * 100);
      setIsSignificant(pVal < 0.05); // Standard 95% threshold
    } else {
      setZScore(0);
      setPValue(1);
      setConfidence(0);
      setIsSignificant(false);
    }
  }, [controlTraffic, controlConversions, variantTraffic, variantConversions]);

  // High-accuracy error function approximation for standard normal cumulative distribution
  function normalCDF(z: number): number {
    const t = 1 / (1 + 0.2316419 * Math.abs(z));
    const d = 0.3989423 * Math.exp((-z * z) / 2);
    const p =
      d *
      (t *
        (0.3193815 +
          t * (-0.3565638 + t * (1.781478 + t * (-1.821256 + t * 1.330274)))));
    if (z >= 0) {
      return 1 - p;
    } else {
      return p;
    }
  }

  // Pre-seed controls for presets
  const applyPreset = (presetName: string) => {
    if (presetName === "seek-recommendation") {
      setControlTraffic(25000);
      setControlConversions(1250); // 5.0%
      setVariantTraffic(25000);
      setVariantConversions(1345); // 5.38% (High confidence recommendation result)
    } else if (presetName === "jobsdb-llm-search") {
      setControlTraffic(8000);
      setControlConversions(400); // 5.0%
      setVariantTraffic(8000);
      setVariantConversions(468); // 5.85% (Strong significance for low-volume product rollout)
    } else if (presetName === "unification-test") {
      setControlTraffic(15000);
      setControlConversions(750); // 5.0%
      setVariantTraffic(15000);
      setVariantConversions(765); // 5.1% (Low lift, inconclusive result)
    }
  };

  return (
    <section id="ab-playground" className="py-20 bg-slate-50 dark:bg-slate-900/20 border-t border-b border-slate-150 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="md:flex md:items-end md:justify-between mb-10">
          <div className="space-y-2">
            <div className="text-xs font-mono text-indigo-600 dark:text-indigo-400 uppercase tracking-widest flex items-center gap-2">
              <Layers className="w-3.5 h-3.5" />
              <span>Interactive Utility Block</span>
            </div>
            <h2 className="text-3xl font-display font-extrabold text-slate-850 dark:text-white">
              Sami's Experimentation Playground
            </h2>
            <p className="text-sm text-slate-505 dark:text-slate-400 max-w-2xl">
              As a lead of 60+ experiments at SEEK, I evaluate features through strict stats. Test ideas below with real-time confidence calculations & significance models.
            </p>
          </div>

          <div className="mt-4 md:mt-0 flex gap-2 overflow-x-auto pb-2 md:pb-0" id="ab-presets-group">
            <span className="text-xs font-mono text-slate-400 dark:text-slate-500 self-center hidden sm:block mr-2">PRESETS:</span>
            <button
              onClick={() => applyPreset("seek-recommendation")}
              className="text-xs font-mono bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-805 hover:border-indigo-500 text-slate-700 dark:text-slate-300 py-1.5 px-3 rounded whitespace-nowrap transition-colors"
            >
              SEEK Recommend (+7.6% lift)
            </button>
            <button
              onClick={() => applyPreset("jobsdb-llm-search")}
              className="text-xs font-mono bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-805 hover:border-indigo-500 text-slate-700 dark:text-slate-300 py-1.5 px-3 rounded whitespace-nowrap transition-colors"
            >
              LLM Search Engine (+17.0% lift)
            </button>
            <button
              onClick={() => applyPreset("unification-test")}
              className="text-xs font-mono bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 hover:border-indigo-400 text-slate-300 py-1.5 px-3 rounded whitespace-nowrap transition-colors"
            >
              Inconclusive Unification
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Form Side */}
          <div className="lg:col-span-5 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-805 rounded-xl p-6 space-y-6">
            <h3 className="font-display font-medium text-slate-800 dark:text-slate-100 text-sm tracking-wider uppercase border-b border-slate-100 dark:border-slate-800 pb-3">
              Configure Sample Cohorts
            </h3>

            {/* Control Form Block */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-slate-700 dark:text-slate-305 font-bold flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-slate-400"></span>
                  COHORT A: CONTROL (Baseline)
                </span>
                <span className="text-xs font-mono text-indigo-600 dark:text-indigo-400 font-semibold">
                  Rate: {controlRate.toFixed(2)}%
                </span>
              </div>

              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-[11px] font-mono text-slate-400 dark:text-slate-500 mb-1">
                    <span>Sample Size (Visitors)</span>
                    <span className="text-slate-705 dark:text-slate-300">{controlTraffic.toLocaleString()}</span>
                  </div>
                  <input
                    type="range"
                    min="500"
                    max="50000"
                    step="500"
                    value={controlTraffic}
                    onChange={(e) => {
                      const val = Number(e.target.value);
                      setControlTraffic(val);
                      // Adjust conversions if they exceed new traffic
                      if (controlConversions > val) setControlConversions(val);
                    }}
                    className="w-full h-1 bg-slate-100 dark:bg-slate-800 rounded-lg appearance-none cursor-pointer accent-indigo-650 dark:accent-indigo-500"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-[11px] font-mono text-slate-405 dark:text-slate-500 mb-1">
                    <span>Successful Conversions</span>
                    <span className="text-slate-705 dark:text-slate-300">{controlConversions.toLocaleString()}</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max={Math.min(10000, controlTraffic)}
                    step="1"
                    value={controlConversions}
                    onChange={(e) => setControlConversions(Number(e.target.value))}
                    className="w-full h-1 bg-slate-100 dark:bg-slate-800 rounded-lg appearance-none cursor-pointer accent-indigo-650 dark:accent-indigo-500"
                  />
                </div>
              </div>
            </div>

            {/* Variant Form Block */}
            <div className="space-y-4 pt-4 border-t border-slate-100 dark:border-slate-800/80">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-indigo-600 dark:text-indigo-400 font-bold flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-indigo-505 dark:bg-indigo-400"></span>
                  COHORT B: VARIANT (Product Feature)
                </span>
                <span className="text-xs font-mono text-indigo-600 dark:text-indigo-400 font-semibold">
                  Rate: {variantRate.toFixed(2)}%
                </span>
              </div>

              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-[11px] font-mono text-slate-400 dark:text-slate-500 mb-1">
                    <span>Sample Size (Visitors)</span>
                    <span className="text-slate-700 dark:text-slate-300">{variantTraffic.toLocaleString()}</span>
                  </div>
                  <input
                    type="range"
                    min="500"
                    max="50000"
                    step="500"
                    value={variantTraffic}
                    onChange={(e) => {
                      const val = Number(e.target.value);
                      setVariantTraffic(val);
                      if (variantConversions > val) setVariantConversions(val);
                    }}
                    className="w-full h-1 bg-slate-100 dark:bg-slate-800 rounded-lg appearance-none cursor-pointer accent-indigo-600 dark:accent-indigo-400"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-[11px] font-mono text-slate-450 dark:text-slate-500 mb-1">
                    <span>Successful Conversions</span>
                    <span className="text-slate-700 dark:text-slate-300">{variantConversions.toLocaleString()}</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max={Math.min(10000, variantTraffic)}
                    step="1"
                    value={variantConversions}
                    onChange={(e) => setVariantConversions(Number(e.target.value))}
                    className="w-full h-1 bg-slate-100 dark:bg-slate-800 rounded-lg appearance-none cursor-pointer accent-indigo-600 dark:accent-indigo-400"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Solution metrics Display (Visual Hierarchy) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Visual Gauge of significance */}
            <div className={`p-6 border rounded-xl flex flex-col sm:flex-row items-center justify-between gap-6 transition-all duration-300 ${
              isSignificant
                ? "bg-indigo-50/50 dark:bg-indigo-500/5 border-indigo-150 dark:border-indigo-500/20 text-indigo-700 dark:text-indigo-405"
                : "bg-white dark:bg-slate-950 border-slate-200 dark:border-slate-805 text-slate-500 dark:text-slate-400"
            }`}>
              <div className="space-y-2 text-center sm:text-left">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400 dark:text-slate-505">Experiment Outcome</span>
                <h4 className="text-2xl font-display font-extrabold text-slate-800 dark:text-white">
                  {isSignificant ? "Statistically Significant!" : "Inconclusive Outcome"}
                </h4>
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  {isSignificant
                    ? "The conversion increase has a less than 5% probability of occurring by pure random chance. You are safe to roll out this variant."
                    : "The confidence level is below the required 95% threshold. We recommend accumulating more tracking samples to avoid false positives."}
                </p>
              </div>

              <div className="flex flex-col items-center justify-center shrink-0">
                <div className={`w-24 h-24 rounded-full border-4 flex flex-col items-center justify-center font-display font-bold relative ${
                  isSignificant ? "border-indigo-550 dark:border-indigo-400 text-indigo-700 dark:text-indigo-400" : "border-slate-200 dark:border-slate-800 text-slate-400 dark:text-slate-505"
                }`}>
                  <span className="text-xs font-mono text-slate-400 dark:text-slate-500">Confidence</span>
                  <span className="text-lg">{confidence.toFixed(1)}%</span>
                </div>
              </div>
            </div>

            {/* Metric Metrics Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 bg-white dark:bg-slate-955 border border-slate-200 dark:border-slate-800 rounded-lg">
                <div className="text-[10px] font-mono text-slate-400 dark:text-slate-500 uppercase">P-VALUE</div>
                <div className="text-xl font-mono font-bold text-slate-805 dark:text-slate-200 mt-1">
                  {pValue.toFixed(5)}
                </div>
                <span className="text-[9px] font-mono text-slate-505 dark:text-slate-400">
                  {pValue < 0.05 ? "p < 0.05 (Target)" : "p >= 0.05"}
                </span>
              </div>

              <div className="p-4 bg-white dark:bg-slate-955 border border-slate-200 dark:border-slate-800 rounded-lg">
                <div className="text-[10px] font-mono text-slate-400 dark:text-slate-500 uppercase">RELATIVE LIFT</div>
                <div className={`text-xl font-mono font-bold mt-1 ${relativeLift >= 0 ? "text-indigo-650 dark:text-indigo-400" : "text-slate-550 dark:text-slate-400"}`}>
                  {relativeLift > 0 ? "+" : ""}{relativeLift.toFixed(2)}%
                </div>
                <span className="text-[9px] font-mono text-slate-505 dark:text-slate-400">Variant over Control</span>
              </div>

              <div className="p-4 bg-white dark:bg-slate-955 border border-slate-200 dark:border-slate-800 rounded-lg">
                <div className="text-[10px] font-mono text-slate-400 dark:text-slate-500 uppercase">STANDARD ERROR</div>
                <div className="text-xl font-mono font-bold text-slate-805 dark:text-slate-200 mt-1">
                  {(100 * Math.sqrt(
                    (controlRate / 100 * (1 - controlRate / 100)) / controlTraffic +
                    (variantRate / 100 * (1 - variantRate / 100)) / variantTraffic
                  )).toFixed(4)}%
                </div>
                <span className="text-[9px] font-mono text-slate-505 dark:text-slate-400">Pooled standard dev</span>
              </div>
            </div>

            {/* Dynamic Comparison Distribution (Pure inline SVG) */}
            <div className="p-4 bg-white dark:bg-slate-955 border border-slate-200 dark:border-slate-800 rounded-lg space-y-2">
              <span className="text-xs font-mono text-slate-450 dark:text-slate-400 block font-semibold">Dynamic Normal Probability Density Distribution</span>
              <div className="h-28 w-full relative">
                {/* Visualizer showing the overlap of bell curves using elegant SVG pathing */}
                <svg viewBox="0 0 400 100" className="w-full h-full text-slate-400">
                  {/* Grid Lines */}
                  <line x1="200" y1="0" x2="200" y2="90" stroke="currentColor" strokeOpacity="0.1" strokeDasharray="3,3" />
                  <line x1="0" y1="90" x2="400" y2="90" stroke="currentColor" strokeOpacity="0.1" />

                  {/* Draw curve for Control Group (Centered around 160) */}
                  <path
                    d={`M 20,90 
                        C 100,90 120,20 160,20 
                        C 200,20 220,90 300,90`}
                    fill="rgba(100, 116, 139, 0.05)"
                    stroke="#94a3b8"
                    strokeWidth="1.5"
                  />

                  {/* Draw curve for Variant Group (Shifted right based on conversion lift, center is 160 + lift * multiplier) */}
                  {/* Keep within reasonable bounding boxes */}
                  {(() => {
                    const shift = Math.min(60, Math.max(-50, relativeLift * 2.2));
                    const center = 160 + shift;
                    return (
                      <path
                        d={`M ${10 + shift},90 
                            C ${90 + shift},90 ${110 + shift},20 ${center},20 
                            C ${210 + shift},20 ${230 + shift},90 ${310 + shift},90`}
                        fill={isSignificant ? "rgba(79, 70, 229, 0.08)" : "rgba(100, 116, 139, 0.05)"}
                        stroke={isSignificant ? "#4f46e5" : "#94a3b8"}
                        strokeWidth="2"
                      />
                    );
                  })()}

                  {/* Labels */}
                  <text x="140" y="55" fontSize="7" fill="#94a3b8" fontFamily="monospace">Control</text>
                  <text x="240" y="55" fontSize="7" fill={isSignificant ? "#4f46e5" : "#94a3b8"} fontFamily="monospace" fontWeight="bold">Variant</text>
                </svg>
              </div>
              <div className="flex justify-between items-center text-[10px] font-mono text-slate-450 dark:text-slate-400">
                <span>← Fail (Control baseline)</span>
                <span>Success Lift (Variant target) →</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
