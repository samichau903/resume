/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { WORK_EXPERIENCES, MENTORSHIP_EXPERIENCE, PERSONAL_DETAILS } from "../data.js";
import { Briefcase, Calendar, MapPin, Sparkles, Award } from "lucide-react";

export default function ExperienceSection({ selectedSkill, onSkillClick }) {
  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-2 mb-16">
          <div className="text-xs font-mono text-indigo-600 dark:text-indigo-400 uppercase tracking-widest font-semibold">
            PROFESSIONAL TIMELINE
          </div>
          <h2 className="text-3xl font-display font-extrabold text-slate-800 dark:text-white">
            Lead Experience & Milestones
          </h2>
          <p className="text-sm text-slate-505 dark:text-slate-400 max-w-2xl">
            Sustained track record of building and managing analytics teams across the APAC region, delivering high-impact product solutions for multi-million user marketplaces.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Main Experience Flow */}
          <div className="lg:col-span-8 space-y-10" id="experience-list-container">
            {/* Mentorship Section */}
            <div className="space-y-4">
              <h3 className="font-display font-bold text-xs tracking-wider uppercase text-slate-400 border-b border-slate-100 dark:border-slate-900 pb-2">
                MENTORSHIP SERVICES
              </h3>
              {MENTORSHIP_EXPERIENCE.map((exp) => {
                const usesActiveSkill = selectedSkill ? exp.skillsUsed.includes(selectedSkill) : false;
                const isDimmed = selectedSkill && !usesActiveSkill;

                return (
                   <div
                    key={exp.id}
                    className={`p-6 bg-white dark:bg-slate-955 border rounded-xl transition-all duration-300 ${
                      usesActiveSkill
                        ? "border-indigo-500 shadow-md shadow-indigo-505/5 bg-indigo-50/50 dark:bg-indigo-500/[0.02]"
                        : "border-slate-200 dark:border-slate-805"
                    } ${isDimmed ? "opacity-40" : "opacity-100"}`}
                    id={`experience-card-${exp.id}`}
                  >
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-4">
                      <div>
                        <h4 className="font-display font-bold text-slate-800 dark:text-slate-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                          {exp.role}
                        </h4>
                        <p className="text-sm font-mono text-indigo-650 dark:text-indigo-400">{exp.company}</p>
                      </div>
                      <div className="flex items-center gap-1.5 text-xs font-mono text-slate-505 dark:text-slate-400 bg-slate-50 dark:bg-slate-950 border border-slate-200/60 dark:border-slate-850 px-2 py-1 rounded">
                        <Calendar className="w-3.5 h-3.5 text-indigo-500 dark:text-indigo-400" />
                        <span>{exp.period}</span>
                      </div>
                    </div>

                    <ul className="space-y-2 list-disc list-outside pl-4 text-sm text-slate-600 dark:text-slate-350 marker:text-indigo-500">
                      {exp.details.map((point, index) => (
                        <li key={index}>{point}</li>
                      ))}
                    </ul>

                    {/* Skill Tags */}
                    <div className="flex flex-wrap gap-1.5 mt-5 pt-4 border-t border-slate-100 dark:border-slate-900">
                      {exp.skillsUsed.map((skill) => {
                        const isSkillActive = selectedSkill === skill;
                        return (
                          <span
                            key={skill}
                            onClick={() => onSkillClick(skill)}
                            className={`cursor-pointer px-2 py-0.5 rounded text-[10px] font-mono transition-all border ${
                              isSkillActive
                                ? "bg-indigo-600 text-white font-bold border-indigo-500 shadow-xs"
                                : "bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-slate-100/40 dark:hover:bg-slate-800"
                            }`}
                          >
                            {skill}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Core Work Experience */}
            <div className="space-y-8">
              <h3 className="font-display font-bold text-xs tracking-wider uppercase text-slate-400 border-b border-slate-100 dark:border-slate-900 pb-2">
                WORK ROLES
              </h3>

              {WORK_EXPERIENCES.map((exp) => {
                const usesActiveSkill = selectedSkill ? exp.skillsUsed.includes(selectedSkill) : false;
                const isDimmed = selectedSkill && !usesActiveSkill;

                return (
                  <div
                    key={exp.id}
                    className={`p-6 bg-white dark:bg-slate-955 border rounded-xl transition-all duration-300 relative ${
                      usesActiveSkill
                        ? "border-indigo-500 shadow-md shadow-indigo-505/5 bg-indigo-50/50 dark:bg-indigo-500/[0.01]"
                        : "border-slate-200 dark:border-slate-805"
                    } ${isDimmed ? "opacity-30 scale-[0.99]" : "opacity-100"}`}
                    id={`experience-card-${exp.id}`}
                  >
                    {/* Hot label for current Principal position */}
                    {exp.period.includes("Current") && (
                      <span className="absolute -top-2.5 left-6 px-2.5 py-0.5 bg-indigo-600 text-white text-[9px] font-mono font-black uppercase rounded-full tracking-wider border border-indigo-500">
                        ACTIVE ROLE
                      </span>
                    )}

                    <div className="flex flex-wrap items-start justify-between gap-y-2 mb-4">
                      <div>
                        <h4 className="text-lg font-display font-bold text-slate-800 dark:text-slate-100 flex items-center gap-1.5">
                          {exp.role}
                        </h4>
                        <p className="text-sm font-mono text-indigo-600 dark:text-indigo-400">
                          {exp.company} <span className="text-slate-500 font-normal">{exp.companySuffix}</span>
                        </p>
                      </div>
                      <div className="flex items-center gap-1.5 text-xs font-mono text-slate-505 dark:text-slate-400 bg-slate-50 dark:bg-slate-900 px-2.5 py-1 rounded border border-slate-200 dark:border-slate-800">
                        <Calendar className="w-3.5 h-3.5 text-indigo-500 dark:text-indigo-400" />
                        <span>{exp.period}</span>
                      </div>
                    </div>

                    {exp.summaryBlock && (
                      <p className="text-xs font-mono italic text-slate-505 dark:text-slate-400 bg-slate-50 dark:bg-slate-900 p-3 rounded-lg border-l-2 border-indigo-500 mb-4">
                        {exp.summaryBlock}
                      </p>
                    )}

                    {/* Metrics Dashboard for current heavy role */}
                    {exp.metrics && (
                      <div className="grid grid-cols-3 gap-3 bg-slate-50 dark:bg-slate-900/60 p-3 rounded-lg border border-slate-150 dark:border-slate-805 mb-4">
                        {exp.metrics.map((metric) => (
                          <div key={metric.label} className="text-center">
                            <div className="text-base font-display font-black text-indigo-600 dark:text-indigo-400">{metric.label}</div>
                            <div className="text-[10px] font-mono text-slate-700 dark:text-slate-200 tracking-tight font-semibold">{metric.value}</div>
                            <div className="text-[8px] font-mono text-slate-400 dark:text-slate-550 leading-none mt-1 scale-95">{metric.desc}</div>
                          </div>
                        ))}
                      </div>
                    )}

                    <ul className="space-y-2.5 list-disc list-outside pl-4 text-sm text-slate-600 dark:text-slate-300 marker:text-indigo-500">
                      {exp.details.map((point, index) => (
                        <li key={index} className="leading-relaxed">{point}</li>
                      ))}
                    </ul>

                    {/* Skill Tags */}
                    <div className="flex flex-wrap gap-1.5 mt-6 pt-4 border-t border-slate-100 dark:border-slate-900">
                      {exp.skillsUsed.map((skill) => {
                        const isSkillActive = selectedSkill === skill;
                        return (
                          <span
                            key={skill}
                            onClick={() => onSkillClick(skill)}
                            className={`cursor-pointer px-2 py-0.5 rounded text-[10px] font-mono transition-all border ${
                              isSkillActive
                                ? "bg-indigo-600 text-white font-bold border-indigo-500 shadow-xs"
                                : "bg-slate-55 dark:bg-slate-900 text-slate-500 dark:text-slate-400 hover:text-indigo-650 dark:hover:text-indigo-400 hover:bg-slate-50 dark:hover:bg-slate-800 border-slate-200 dark:border-slate-800"
                            }`}
                          >
                            {skill}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Sidebar Section (Visual hierarchy and Education credentials) */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Education Board (Pareto 80/20 detail) */}
            <div className="p-6 bg-white dark:bg-slate-955 border border-slate-200 dark:border-slate-800 rounded-xl space-y-4 shadow-xs">
              <div className="flex items-center gap-2 border-b border-slate-100 dark:border-slate-900 pb-3">
                <Award className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                <h3 className="font-display font-bold text-slate-805 dark:text-slate-300 text-xs tracking-wider uppercase">
                  EDUCATION
                </h3>
              </div>

              <div className="space-y-3">
                <div className="space-y-1">
                  <span className="inline-flex px-2 py-0.5 bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-400/20 rounded text-[9px] font-mono font-bold">
                    FIRST CLASS HONOURS
                  </span>
                  <h4 className="text-sm font-display font-bold text-slate-800 dark:text-slate-200">
                    {PERSONAL_DETAILS.education.degree}
                  </h4>
                  <p className="text-xs text-slate-505 dark:text-slate-400">{PERSONAL_DETAILS.education.school}</p>
                </div>
                <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400 dark:text-slate-505">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{PERSONAL_DETAILS.education.period}</span>
                </div>
              </div>
            </div>

            {/* Certifications Card */}
            <div className="p-6 bg-white dark:bg-slate-955 border border-slate-200 dark:border-slate-800 rounded-xl space-y-3 shadow-xs">
              <h3 className="font-display font-bold text-slate-400 text-xs tracking-wider uppercase border-b border-slate-100 dark:border-slate-900 pb-2">
                ACCREDITATION
              </h3>

              <div className="flex items-center gap-2.5 text-sm font-display text-slate-700 dark:text-slate-300">
                <Sparkles className="w-4 h-4 text-indigo-600 dark:text-indigo-400 shrink-0" />
                <span>{PERSONAL_DETAILS.certification}</span>
              </div>
            </div>

            {/* Languages Card */}
            <div className="p-6 bg-white dark:bg-slate-955 border border-slate-200 dark:border-slate-800 rounded-xl space-y-3 shadow-xs">
              <h3 className="font-display font-bold text-slate-400 text-xs tracking-wider uppercase border-b border-slate-100 dark:border-slate-900 pb-2">
                LANGUAGES
              </h3>

              <div className="space-y-2">
                {PERSONAL_DETAILS.languages.map((lang) => (
                  <div key={lang} className="flex justify-between items-center text-xs font-mono">
                    <span className="text-slate-550 dark:text-slate-400">{lang.split(" ")[0]}</span>
                    <span className="text-indigo-600 dark:text-indigo-400 font-bold">{lang.split(" ")[1] || "Native"}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
