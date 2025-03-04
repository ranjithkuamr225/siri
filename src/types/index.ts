export type UserRole = 'student' | 'faculty' | 'admin';

export interface User {
  id: string;
  email: string;
  role: UserRole;
  name: string;
  department?: string;
}

export interface Department {
  id: string;
  name: string;
  description: string;
}

export interface Subject {
  id: string;
  name: string;
  departmentId: string;
  description: string;
}

export interface Material {
  id: string;
  title: string;
  description: string;
  fileUrl: string;
  fileType: string;
  departmentId: string;
  subjectId: string;
  uploadedBy: string;
  uploadedAt: Date;
  tags: string[];
}