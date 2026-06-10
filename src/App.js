/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { Mail, Phone, ExternalLink, Github, FileText, ArrowLeft, Printer, CheckCircle } from "lucide-react";
import Header from "./components/Header.js";
import Spotlight from "./components/Spotlight.js";
import ABTestingSimulator from "./components/ABTestingSimulator.js";
import SkillsBento from "./components/SkillsBento.js";
import ExperienceSection from "./components/ExperienceSection.js";
import PapersSection from "./components/PapersSection.js";
import { PERSONAL_DETAILS, WORK_EXPERIENCES, MENTORSHIP_EXPERIENCE } from "./data.js";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [printMode, setPrintMode] = useState(false);
  const [selectedSkill, setSelectedSkill] = useState(null);

  // Synchronize top-level dark class for any outer elements (e.g. scrollbars)
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  // Command handlers to scroll smoothly to sections
  const scrollToSection = (id) => {
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Plain HTML / JS Resume layout optimal for printable rendering (Ctrl+P friendly)
  if (printMode) {
    return (
      <div className="bg-white text-slate-900 min-h-screen py-10 px-8 font-sans transition-all duration-300 select-all" id="print-view-mode">
        {/* Print Warning Floating Header */}
        <div className="fixed top-0 left-0 right-0 bg-slate-900 text-slate-100 py-3 px-6 z-50 flex items-center justify-between shadow-md print:hidden">
          <div className="flex items-center gap-2">
            <Printer className="w-4 h-4 text-indigo-400" />
            <span className="text-sm font-mono">Print Friendly Ready. Use <strong>Ctrl + P</strong> (Cmd+P) to save as PDF.</span>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => window.print()}
              className="px-3 py-1 bg-indigo-600 hover:bg-indigo-500 text-white font-mono text-xs font-bold rounded transition-colors"
            >
              Print Now
            </button>
            <button
              onClick={() => setPrintMode(false)}
              className="flex items-center gap-1.5 px-3 py-1 bg-slate-800 hover:bg-slate-700 text-slate-200 font-mono text-xs rounded transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Return Dashboard</span>
            </button>
          </div>
        </div>

        {/* Paper Container */}
        <div className="max-w-4xl mx-auto pt-16 print:pt-0 space-y-8 font-serif">
          {/* Header */}
          <div className="text-center border-b-2 border-slate-900 pb-5 space-y-1.5">
            <h1 className="text-3xl font-extrabold tracking-tight font-sans text-slate-900">
              {PERSONAL_DETAILS.name}
            </h1>
            <p className="text-sm font-mono tracking-wide text-slate-600 font-semibold">
              {PERSONAL_DETAILS.title}
            </p>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-1 pt-1.5 text-xs text-slate-700 font-mono">
              <a href={PERSONAL_DETAILS.aboutMeUrl} target="_blank" rel="no-referrer" referrerPolicy="no-referrer" className="hover:underline">
                about.me/chausami
              </a>
              <span>•</span>
              <a href={PERSONAL_DETAILS.githubUrl} target="_blank" rel="no-referrer" referrerPolicy="no-referrer" className="hover:underline">
                GitHub: samichau903.github.io
              </a>
            </div>
          </div>

          {/* Core Info Row */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start font-sans text-xs">
            <div className="md:col-span-8 space-y-1 bg-slate-50 p-3 rounded border border-slate-200">
              <span className="font-bold text-slate-800 block text-[10px] uppercase font-mono tracking-wider">Expert Profile Focus</span>
              <p className="text-slate-600 leading-relaxed font-serif text-[11.5px]">
                Experienced lead analyst with first-class CS foundations from Warwick (UK). Specialized in digital tags governance and programmatic telemetry transformations, organizing data pipelines, and evaluating 60+ product variants across international marketplaces.
              </p>
            </div>
            <div className="md:col-span-4 bg-slate-50 p-3 rounded border border-slate-200 space-y-1 font-serif text-[11px]">
              <div><strong className="font-sans text-[9px] uppercase tracking-wider block text-slate-500">Education</strong> First Class Honours CS, Univ. of Warwick</div>
              <div><strong className="font-sans text-[9px] uppercase tracking-wider block text-slate-500">Certification</strong> {PERSONAL_DETAILS.certification}</div>
              <div><strong className="font-sans text-[9px] uppercase tracking-wider block text-slate-500">Languages</strong> English, Cantonese, Mandarin (Fluent)</div>
            </div>
          </div>

          {/* Interactive highlight metrics on print style */}
          <div className="grid grid-cols-3 gap-4 border border-slate-300 rounded p-4 text-center bg-slate-50/50">
            <div>
              <div className="text-xl font-sans font-black text-slate-900">60+</div>
              <div className="text-xs font-mono text-slate-600 font-semibold uppercase">Key Experiments</div>
            </div>
            <div>
              <div className="text-xl font-sans font-black text-slate-900">$180M</div>
              <div className="text-xs font-mono text-slate-600 font-semibold uppercase">Tech Unification</div>
            </div>
            <div>
              <div className="text-xl font-sans font-black text-slate-900">4-6</div>
              <div className="text-xs font-mono text-slate-600 font-semibold uppercase">Analysts Led</div>
            </div>
          </div>

          {/* Mentorship Experience */}
          <div className="space-y-4">
            <h2 className="text-sm font-sans font-bold uppercase tracking-widest text-slate-900 border-b border-slate-900 pb-1">
              Mentorship Experience
            </h2>
            {MENTORSHIP_EXPERIENCE.map((exp, idx) => (
              <div key={idx} className="space-y-1.5 text-xs">
                <div className="flex justify-between font-sans font-bold text-slate-900">
                  <span>{exp.role} — {exp.company}</span>
                  <span className="font-mono">{exp.period}</span>
                </div>
                <ul className="list-disc list-outside pl-4 space-y-1 text-slate-700">
                  {exp.details.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Work History */}
          <div className="space-y-6">
            <h2 className="text-sm font-sans font-bold uppercase tracking-widest text-slate-900 border-b border-slate-900 pb-1">
              Work Experience History
            </h2>
            {WORK_EXPERIENCES.map((exp, idx) => (
              <div key={idx} className="space-y-2 text-xs">
                <div className="flex justify-between font-sans font-bold text-slate-900">
                  <span>{exp.role} — {exp.company} {exp.companySuffix || ""}</span>
                  <span className="font-mono text-slate-600">{exp.period}</span>
                </div>
                {exp.summaryBlock && (
                  <p className="italic text-slate-500 font-mono text-[11px] bg-slate-50 p-2 rounded border-l-2 border-slate-400">
                    {exp.summaryBlock}
                  </p>
                )}
                <ul className="list-disc list-outside pl-4 space-y-1 text-slate-700">
                  {exp.details.map((point, index) => (
                    <li key={index} className="leading-relaxed">{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Academic Papers */}
          <div className="space-y-4">
            <h2 className="text-sm font-sans font-bold uppercase tracking-widest text-slate-900 border-b border-slate-900 pb-1">
              Published Papers & Studies
            </h2>
            <div className="space-y-3 text-xs">
              <div>
                <strong className="text-slate-900 text-xs">Trademark image retrieval using multi-resolution and directional details</strong>
                <p className="text-slate-600">Published in Pattern Recognition Journal (Elsevier/ScienceDirect)</p>
                <a href="https://www.sciencedirect.com/science/article/abs/pii/S0031320308003324" target="_blank" rel="no-referrer" referrerPolicy="no-referrer" className="text-slate-800 hover:underline font-mono text-[10px] block mt-0.5">
                  URL: https://www.sciencedirect.com/science/article/abs/pii/S0031320308003324
                </a>
              </div>
              <div>
                <strong className="text-slate-900 text-xs">Trademarks Image Retrieval Systems & Databases</strong>
                <p className="text-slate-600">Computer Science & Information Technology Chapter (IGI Global)</p>
                <a href="https://www.igi-global.com/chapter/trademark-image-retrieval/49105" target="_blank" rel="no-referrer" referrerPolicy="no-referrer" className="text-slate-800 hover:underline font-mono text-[10px] block mt-0.5">
                  URL: https://www.igi-global.com/chapter/trademark-image-retrieval/49105
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`min-h-screen transition-all duration-300 font-sans selection:bg-indigo-500 selection:text-white ${
        darkMode ? "bg-slate-950 text-slate-200" : "bg-slate-50 text-slate-800"
      }`}
    >
      {/* Dynamic Back-to-Top and Status Overlay */}
      <Header
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        printMode={printMode}
        setPrintMode={setPrintMode}
      />

      {/* Main Container */}
      <main className="relative">
        
        {/* Spotlight / Hero Area */}
        <Spotlight
          onExploreExperiments={() => scrollToSection("#ab-playground")}
          onExploreExperience={() => scrollToSection("#experience")}
        />

        {/* Interactive Experiment Sandbox (data showpiece tool) */}
        <ABTestingSimulator />

        {/* Skills Bento Grid Filter Engine */}
        <SkillsBento
          selectedSkill={selectedSkill}
          setSelectedSkill={setSelectedSkill}
        />

        {/* Experience Timeline (synchronized with skills selection) */}
        <ExperienceSection
          selectedSkill={selectedSkill}
          onSkillClick={(skill) => setSelectedSkill(skill)}
        />

        {/* Publications section */}
        <PapersSection />

        {/* Contact CTA segment */}
        <section className="py-20 bg-slate-100/50 dark:bg-slate-950 border-t border-slate-150 dark:border-slate-900" id="contact">
          <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
            <h3 className="font-display font-black text-2xl text-slate-800 dark:text-white">
              Let's Discuss Insights & Solutions
            </h3>
            <p className="text-slate-505 dark:text-slate-400 text-sm max-w-lg mx-auto">
              Open to regional and global consulting, program telemetry auditing, split testing mentoring, and strategic business collaborations.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <a
                href={PERSONAL_DETAILS.aboutMeUrl}
                target="_blank"
                rel="no-referrer"
                referrerPolicy="no-referrer"
                className="inline-flex items-center gap-2 px-5 py-3 bg-indigo-600 text-white font-mono font-bold text-xs rounded hover:bg-indigo-700 transition-all border border-indigo-500 shadow-sm shadow-indigo-500/10"
                id="footer-about-lnk"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Connect on About.me</span>
              </a>

              <a
                href={PERSONAL_DETAILS.githubUrl}
                target="_blank"
                rel="no-referrer"
                referrerPolicy="no-referrer"
                className="inline-flex items-center gap-2 px-5 py-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-indigo-500 dark:hover:border-indigo-500 text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 font-mono font-bold text-xs rounded transition-all shadow-xs"
                id="footer-github-lnk"
              >
                <Github className="w-4 h-4" />
                <span>Visit GitHub Profile</span>
              </a>
            </div>

            <div className="pt-8 border-t border-slate-200 dark:border-slate-900 text-center text-xs font-mono text-slate-400 dark:text-slate-500 space-y-1">
              <div>© 2026 {PERSONAL_DETAILS.name}. Built for direct GitHub.io deployment.</div>
              <div>Leveraging visual hierarchy, maximum 3-color palette rules, and the Pareto index.</div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
