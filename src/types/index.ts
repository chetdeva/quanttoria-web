export type DesignTheme = 'scholastic' | 'playful';

export type GradeBand = 'grades-1-3' | 'grades-4-5' | 'grades-6-8' | 'grades-9-10';

export interface Coach {
  id: string;
  name: string;
  title: string;
  roleTag: string;
  university: string;
  credentials: string;
  rating: number;
  sessionsCount: string;
  gradeSpecialty: string;
  gradeBand: string;
  focus: string;
  quote: string;
  image: string;
  badges: string[];
  improvementRate: string;
  pedagogyExperience: string;
}

export interface Review {
  id: string;
  author: string;
  studentName: string;
  grade: string;
  city: string;
  rating: number;
  text: string;
  category: 'anxiety' | 'fractions' | 'geometry' | 'aq';
}

export interface BookingData {
  grade: string;
  goal: string;
  parentName: string;
  email: string;
  phone: string;
  preferredDate?: string;
  preferredTime?: string;
}
