export interface NavLink {
  href: string;
  label: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon?: string;
  features?: string[];
}

export interface Testimonial {
  id: string;
  content: string;
  author: string;
  role: string;
  company: string;
  avatar?: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image?: string;
  social?: {
    twitter?: string;
    linkedin?: string;
    github?: string;
  };
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  publishedAt: string;
  image?: string;
  tags?: string[];
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface DosageStrength {
  label: string;
  value: string;
}

export interface ProductOverviewSection {
  id: string;
  title: string;
  content: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  badge?: string;
  images: string[];
  dosageStrengths: DosageStrength[];
  overview: ProductOverviewSection[];
  relatedProductIds: string[];
  faqs: FAQItem[];
}

export interface SiteConfig {
  name: string;
  description: string;
  url: string;
  author: string;
  keywords: string[];
  links: {
    twitter?: string;
    github?: string;
    linkedin?: string;
  };
  contact: {
    email: string;
    phone: string;
    address: string;
  };
}

// Drug Code Validation Types
export type ValidationState = 'no-code' | 'loading' | 'valid' | 'invalid' | 'technical-error';

export interface ValidationProductInfo {
  id: string;
  name: string;
  dosageStrengths: DosageStrength[];
}

export interface ValidationResult {
  status: 'valid' | 'invalid';
  code: string;
  message: string;
  product?: ValidationProductInfo;
}
