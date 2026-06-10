/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { SKILL_CATEGORIES } from "../data";
import { BarChart3, Database, LineChart, Tag, Megaphone, Brain } from "lucide-react";

interface SkillsBentoProps {
  selectedSkill: string | null;
  setSelectedSkill: (skill: string | null) => void;
}

export default function SkillsBento({ selectedSkill, setSelectedSkill }: SkillsBentoProps) {
  // Mapper for Lucide icons
  const getIcon = (name: string) => {
    switch (name) {
      case "BarChart3":
        return <BarChart3 className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />;
      case "Database":
        return <Database className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />;
      case "LineChart":
        return <LineChart className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />;
      case "Tag":
        return <Tag className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />;
      case "Megaphone":
        return <Megaphone className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />;
      case "Brain":
        return <Brain className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />;
      default:
        return <Database className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />;
    }
  };

  return (
    <section id="skills" className="py-20 bg-slate-50 dark:bg-slate-900/10 border-b border-slate-150 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="space-y-2 mb-12">
          <div className="text-xs font-mono text-indigo-650 dark:text-indigo-400 uppercase tracking-widest font-semibold">
            SKILLS & TOOLS MATRIX
          </div>
          <h2 className="text-3xl font-display font-extrabold text-slate-800 dark:text-white">
            Interactive Technical Stack
          </h2>
          <p className="text-sm text-slate-505 dark:text-slate-400 max-w-2xl">
            Click on any tool or skill below to dynamically filter and highlight matching segments of my career where those capabilities were applied.
          </p>
        </div>

        {/* Selected Skill Alert Ribbon */}
        {selectedSkill && (
          <div className="mb-6 px-4 py-2 bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-150 dark:border-indigo-500/20 text-indigo-700 dark:text-indigo-300 rounded flex justify-between items-center text-xs font-mono">
            <span>
              FILTER ACTIVE: Highlighting experiences incorporating <strong>"{selectedSkill}"</strong>
            </span>
            <button
              onClick={() => setSelectedSkill(null)}
              className="px-2 py-0.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 hover:border-indigo-500 dark:hover:border-indigo-400 text-slate-600 dark:text-slate-400 hover:text-indigo-700 dark:hover:text-indigo-300 rounded transition-colors"
            >
              Clear Filter [×]
            </button>
          </div>
        )}

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id="skills-bento-grid">
          {SKILL_CATEGORIES.map((category) => (
            <div
              key={category.title}
              className="bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-805 hover:border-indigo-500 dark:hover:border-indigo-500/60 p-6 rounded-xl space-y-4 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="flex items-center gap-2 border-b border-slate-100 dark:border-slate-900 pb-3">
                {getIcon(category.iconName)}
                <h3 className="font-display font-bold text-slate-800 dark:text-slate-200 text-sm tracking-wider uppercase">
                  {category.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => {
                  const isActive = selectedSkill === skill;
                  return (
                    <button
                      key={skill}
                      onClick={() => setSelectedSkill(isActive ? null : skill)}
                      className={`px-3 py-1.5 rounded text-xs font-mono font-medium transition-all duration-200 border ${
                        isActive
                          ? "bg-indigo-650 dark:bg-indigo-600 text-white border-indigo-500 shadow-md shadow-indigo-500/10 scale-105"
                          : "bg-slate-50 dark:bg-slate-900 text-slate-750 dark:text-slate-300 border-slate-200 dark:border-slate-800 hover:border-indigo-400 dark:hover:border-indigo-400 hover:text-indigo-600 dark:hover:text-indigo-400"
                      }`}
                      id={`skill-btn-${skill.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                    >
                      {skill}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Informative Footer */}
        <div className="mt-8 flex justify-end text-[11px] font-mono text-slate-500">
          <span>80:20 Data Priority: Focusing on modern product analytics stacks</span>
        </div>
      </div>
    </section>
  );
}
