/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { ArrowDown, Mail, Phone, ExternalLink, Award, FileText, CheckCircle2, Github } from "lucide-react";
import { PERSONAL_DETAILS } from "../data.js";

export default function Spotlight({ onExploreExperiments, onExploreExperience }) {
  return (
    <section
      id="spotlight"
      className="relative pt-32 pb-20 overflow-hidden flex flex-col justify-center min-h-[90vh]"
    >
      {/* Visual Analytics Grid Background (Procedural SVG to avoid image load completely) */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.05]" id="procedural-bg">
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
          <defs>
            <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-pattern)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* Core Profile Summary (The 20% that delivers 80% impact) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20 rounded-full text-xs font-mono tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 dark:bg-indigo-400 animate-pulse"></span>
              Principal Analytics Lead Solutions
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-slate-900 dark:text-white leading-tight tracking-tight">
              Leveraging Data to Drive Product{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-indigo-400 dark:from-indigo-400 dark:to-indigo-300">
                Decisions & Growth
              </span>
            </h1>

            <p className="text-lg text-slate-600 dark:text-slate-350 font-sans max-w-2xl leading-relaxed">
              With over 6 years of tenure at **SEEK**, I spearhead teams of 4–6 high-performing product analysts across KL & New Zealand. We specialize in candidate job discovery, executing large-scale tagging architectures, and evaluating 60+ core product initiatives through deep statistical experimentation.
            </p>

            {/* Quick Contact & Action Buttons */}
            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href={PERSONAL_DETAILS.aboutMeUrl}
                target="_blank"
                rel="no-referrer"
                referrerPolicy="no-referrer"
                className="flex items-center gap-2 px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-mono font-bold text-sm rounded shadow-xs transition-all duration-300 border border-indigo-500"
                id="cta-about-link"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Connect with Sami</span>
              </a>
              <button
                onClick={onExploreExperience}
                className="flex items-center gap-2 px-5 py-2.5 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-850 text-slate-750 dark:text-slate-205 hover:border-indigo-500 dark:hover:border-indigo-400 hover:text-indigo-600 dark:hover:text-indigo-300 font-mono font-medium text-sm rounded transition-all duration-300"
                id="cta-experience-btn"
              >
                <span>Read Career History</span>
                <ArrowDown className="w-4 h-4 animate-bounce" />
              </button>
            </div>

            {/* Verification & Socials */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 pt-4 text-xs font-mono text-slate-500 dark:text-slate-400">
              <a
                href={PERSONAL_DETAILS.aboutMeUrl}
                target="_blank"
                rel="no-referrer"
                referrerPolicy="no-referrer"
                className="flex items-center gap-1 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                id="about-me-link"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>about.me/chausami</span>
              </a>
              <a
                href={PERSONAL_DETAILS.githubUrl}
                target="_blank"
                rel="no-referrer"
                referrerPolicy="no-referrer"
                className="flex items-center gap-1 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                id="github-profile-link"
              >
                <Github className="w-3.5 h-3.5" />
                <span>samichau903.github.io</span>
              </a>
            </div>
          </div>

          {/* Minimalist 80/20 Interactive Resume Poster Profile (The remaining 30% visual canvas) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-[340px] lg:max-w-none p-6 bg-slate-55 dark:bg-slate-950/40 border border-slate-200 dark:border-slate-800/80 rounded-2xl shadow-xs backdrop-blur-xs">
              <div className="absolute top-3 right-3 text-[10px] font-mono text-slate-400 dark:text-slate-500">
                ACTIVE STATUS: OPEN TO COLLABORATIONS
              </div>

              <div className="space-y-5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded bg-indigo-505/15 border border-indigo-500/30 flex items-center justify-center text-indigo-600 dark:text-indigo-405 font-mono font-bold text-lg">
                    SY
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-slate-850 dark:text-slate-200">Sami Chau</h3>
                    <p className="text-xs font-mono text-slate-500 dark:text-slate-400">Warwick CS Graduate | first class</p>
                  </div>
                </div>

                <div className="border-t border-slate-200 dark:border-slate-800/80 pt-4 space-y-3 font-mono text-xs text-slate-650 dark:text-slate-300">
                  <div className="flex justify-between">
                    <span className="text-slate-400 dark:text-slate-505">EXPERIENCE:</span>
                    <span className="text-slate-800 dark:text-slate-200 font-bold">12+ Years Total</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400 dark:text-slate-505">SEEK TENURE:</span>
                    <span className="text-indigo-600 dark:text-indigo-400 font-bold">6 Years (Principal)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400 dark:text-slate-500">LOCATIONS:</span>
                    <span className="text-slate-800 dark:text-slate-200">Hong Kong, KL, APAC</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400 dark:text-slate-500">LANGUAGES:</span>
                    <span className="text-slate-805 dark:text-slate-202">En, Ca, Zh</span>
                  </div>
                </div>

                <div className="pt-2">
                  <div className="bg-white dark:bg-slate-950/80 border border-slate-150 dark:border-slate-800 p-3 rounded space-y-2">
                    <div className="flex items-center justify-between text-[11px] font-mono text-slate-500 dark:text-slate-400">
                      <span>Core Skill Focus</span>
                      <span className="text-indigo-600 dark:text-indigo-405 font-bold">80:20 Rule</span>
                    </div>
                    {/* Visual bar chart */}
                    <div className="space-y-1.5">
                      <div className="space-y-0.5">
                        <div className="flex justify-between text-[10px] text-slate-700 dark:text-slate-300">
                          <span>Product Experimentation</span>
                          <span className="text-indigo-600 dark:text-indigo-404 font-bold">95%</span>
                        </div>
                        <div className="w-full bg-slate-100 dark:bg-slate-900 rounded-full h-1.5 overflow-hidden">
                          <div className="bg-indigo-650 dark:bg-indigo-500 h-1.5 rounded-full" style={{ width: "95%" }}></div>
                        </div>
                      </div>
                      <div className="space-y-0.5">
                        <div className="flex justify-between text-[10px] text-slate-700 dark:text-slate-300">
                          <span>Modern Data Architecture</span>
                          <span className="text-indigo-605 dark:text-indigo-404 font-bold">90%</span>
                        </div>
                        <div className="w-full bg-slate-100 dark:bg-slate-900 rounded-full h-1.5 overflow-hidden">
                          <div className="bg-indigo-400 dark:bg-indigo-300 h-1.5 rounded-full" style={{ width: "90%" }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Visual Impact Dashboard (Pareto 80/20 Metric Highlights) */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6" id="spotlight-metrics-dashboard">
          {/* Card 1: Experiments */}
          <div
            onClick={onExploreExperiments}
            className="group cursor-pointer p-6 bg-white dark:bg-slate-900/30 hover:shadow-lg hover:shadow-indigo-500/5 hover:-translate-y-0.5 border border-slate-150 dark:border-slate-800 hover:border-indigo-400/80 rounded-xl transition-all duration-300 flex flex-col justify-between"
            id="spotlight-experiment-card"
          >
            <div className="space-y-3">
              <div className="inline-flex p-2.5 bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20 rounded-lg group-hover:bg-indigo-500/15 group-hover:scale-105 transition-all">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-display font-bold text-slate-850 dark:text-slate-200 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                60+ Product Experiments
              </h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                Spearheaded structured split-testing (A/B testing, multivariate releases) on candidate job discovery platforms across APAC. Click to load the Experiment Sandbox simulator below.
              </p>
            </div>
            <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-805 flex items-center justify-between text-xs font-mono text-indigo-600 dark:text-indigo-400">
              <span>Test Statistical Models</span>
              <span className="opacity-0 group-hover:opacity-100 transition-opacity">Launch Solver →</span>
            </div>
          </div>

          {/* Card 2: Tech Unification */}
          <div
            className="p-6 bg-white dark:bg-slate-900/30 border border-slate-150 dark:border-slate-800 rounded-xl flex flex-col justify-between"
            id="spotlight-unification-card"
          >
            <div className="space-y-3">
              <div className="inline-flex p-2.5 bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20 rounded-lg">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-display font-bold text-slate-805 dark:text-slate-200">
                $180M Tech Unification
              </h3>
              <p className="text-sm text-slate-505 dark:text-slate-400 leading-relaxed">
                Primary candidate metrics supervisor across 8 massive APAC marketplaces (including JobsDB, Jobstreet, and SEEK) aligning product delivery telemetries.
              </p>
            </div>
            <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-805 flex items-center justify-between text-xs font-mono text-slate-500">
              <span>Impact Segment: APAC wide</span>
              <span className="text-indigo-600 dark:text-indigo-400 font-bold">Completed</span>
            </div>
          </div>

          {/* Card 3: Stack Redesign */}
          <div
            className="p-6 bg-white dark:bg-slate-900/30 border border-slate-150 dark:border-slate-800 rounded-xl flex flex-col justify-between"
            id="spotlight-stack-card"
          >
            <div className="space-y-3">
              <div className="inline-flex p-2.5 bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20 rounded-lg">
                <FileText className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-display font-bold text-slate-805 dark:text-slate-200">
                Tooling Transformations
              </h3>
              <p className="text-sm text-slate-505 dark:text-slate-400 leading-relaxed">
                Migrated tracker frameworks from Adobe Analytics to Amplitude, upgraded web tag management to Tealium, and migrated heavy BI dashboards to Tableau Cloud & Databricks.
              </p>
            </div>
            <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-805 flex items-center justify-between text-xs font-mono text-slate-500">
              <span>Stack: Databricks, Amplitude, Tealium</span>
              <span className="text-indigo-600 dark:text-indigo-400 font-bold">100% Native</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
