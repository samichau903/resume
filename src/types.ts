/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface WorkExperience {
  id: string;
  role: string;
  company: string;
  companySuffix?: string;
  period: string;
  location?: string;
  summaryBlock?: string;
  details: string[];
  skillsUsed: string[];
  metrics?: { label: string; value: string; desc?: string }[];
}

export interface SkillCategory {
  title: string;
  iconName: string;
  skills: string[];
}

export interface AcademicPaper {
  title: string;
  journal: string;
  description: string;
  url: string;
}
