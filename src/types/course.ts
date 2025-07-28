export interface Course {
  Title: string;
  Rating: number;
  Reviews: string | null;
  Level: string;
  Duration: string;
  Certificate_Type: string;
  weighted_score: number | null;
}

export type CourseCategory = {
  [subcategory: string]: Course[];
};

export type CourseData = {
  Beginner_Course: CourseCategory;
  Beginner_Specialization: CourseCategory;
  Beginner_Professional_Certificate: CourseCategory;
  Intermediate_Course: CourseCategory;
  Intermediate_Specialization: CourseCategory;
  Intermediate_Professional_Certificate: CourseCategory;
  Advanced_Course: CourseCategory;
  Advanced_Specialization: CourseCategory;
  Advanced_Professional_Certificate: CourseCategory;
};

export interface CourseWithMeta extends Course {
  category: string;
  subcategory: string;
}