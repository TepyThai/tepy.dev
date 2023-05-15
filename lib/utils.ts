import clsx, { ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export interface Frontmatter {
  title: string;
  description?: string;
  date?: string;
  tags?: string[];
  coverImage?: string;
  [key: string]: any;
}
