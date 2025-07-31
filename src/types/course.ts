export interface Course {
  course_index: number;
  title: string;
  skills_clean: string;
  skills_clean_list: string[];
  rating: number;
  reviews: string | null;
  level: string;
  duration: string;
  certificate_type: string;
  course_link: string;
  score: number | null;
}

export type CourseCategory = {
  [subcategory: string]: Course[];
};

export type CourseData = {
  beginner_course: CourseCategory;
  beginner_specialization: CourseCategory;
  beginner_professional_certificate: CourseCategory;
  intermediate_course: CourseCategory;
  intermediate_specialization: CourseCategory;
  intermediate_professional_certificate: CourseCategory;
  advanced_course: CourseCategory;
  advanced_specialization: CourseCategory;
  advanced_professional_certificate: CourseCategory;
};

export interface CourseWithMeta extends Course {
  category: string;
  subcategory: string;
}