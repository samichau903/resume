/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ACADEMIC_PAPERS } from "../data";
import { BookOpen, ExternalLink, GraduationCap } from "lucide-react";

export default function PapersSection() {
  return (
    <section id="publications" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-2 mb-12">
          <div className="text-xs font-mono text-indigo-600 dark:text-indigo-400 uppercase tracking-widest flex items-center gap-2 font-semibold">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>ACADEMIC FOUNDATION & PAPERS</span>
          </div>
          <h2 className="text-3xl font-display font-extrabold text-slate-800 dark:text-white">
            Published Research & Citations
          </h2>
          <p className="text-sm text-slate-505 dark:text-slate-400 max-w-2xl">
            Sami's analytical foundations began early, leading to 2 academic peer-reviewed publications regarding directional image-matching databases during research tenure.
          </p>
        </div>

        {/* Paper Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6" id="publications-cards-grid">
          {ACADEMIC_PAPERS.map((paper) => (
            <div
              key={paper.title}
              className="p-6 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-805 rounded-xl relative group flex flex-col justify-between hover:border-indigo-500/60 dark:hover:border-indigo-500/55 transition-all duration-300 shadow-xs"
            >
              <div className="space-y-3">
                <div className="inline-flex p-2 bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-400/20 rounded">
                  <BookOpen className="w-4 h-4" />
                </div>
                <h4 className="text-base font-display font-bold text-slate-800 dark:text-slate-200 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  {paper.title}
                </h4>
                <p className="text-xs font-mono text-slate-400 dark:text-slate-500">{paper.journal}</p>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{paper.description}</p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-900/80 flex items-center justify-between">
                <span className="text-[10px] font-mono text-slate-450 dark:text-slate-500">PEER REVIEWED RESEARCH</span>
                <a
                  href={paper.url}
                  target="_blank"
                  rel="no-referrer"
                  referrerPolicy="no-referrer"
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-indigo-600 dark:text-indigo-400 hover:text-indigo-750 dark:hover:text-indigo-300 transition-all font-semibold"
                  id={`paper-link-${paper.title.toLowerCase().substring(0, 10).replace(/[^a-z0-0]/g, "")}`}
                >
                  <span>View Journal</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
