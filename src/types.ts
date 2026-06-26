/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Education {
  id: string;
  institution: string;
  period: string;
  degree: string;
  major: string;
  details?: string[];
  logo?: string;
}

export interface Experience {
  id: string;
  role: string;
  organization: string;
  period: string;
  type: 'internship' | 'organization' | 'academic';
  location?: string;
  description: string;
  achievements: string[];
}

export interface Publication {
  id: string;
  title: string;
  year: string;
  publisher: string;
  type: 'Jurnal' | 'HKI';
  description: string;
  link?: string;
}

export interface Project {
  id: string;
  title: string;
  type: string;
  period: string;
  role: string;
  description: string;
  details: string[];
  tech: string[];
  link?: string;
  image?: string;
  achievements?: string[];
}

export interface SkillCategory {
  title: string;
  skills: {
    name: string;
    level: 'Advanced' | 'Intermediate' | 'Basic';
    description?: string;
  }[];
}
