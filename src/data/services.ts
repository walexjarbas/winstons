import type { Service } from '@/types';

export const services: Service[] = [
  {
    id: 'web-development',
    title: 'Web Development',
    description: 'Custom web applications built with modern technologies for optimal performance and user experience.',
    icon: '🌐',
    features: [
      'Responsive Design',
      'SEO Optimization',
      'Performance Tuning',
      'CMS Integration',
    ],
  },
  {
    id: 'mobile-apps',
    title: 'Mobile Applications',
    description: 'Native and cross-platform mobile apps that deliver seamless experiences across all devices.',
    icon: '📱',
    features: [
      'iOS & Android',
      'Cross-platform',
      'Push Notifications',
      'Offline Support',
    ],
  },
  {
    id: 'ui-ux-design',
    title: 'UI/UX Design',
    description: 'User-centered design that creates intuitive interfaces and memorable brand experiences.',
    icon: '🎨',
    features: [
      'User Research',
      'Wireframing',
      'Prototyping',
      'Design Systems',
    ],
  },
  {
    id: 'consulting',
    title: 'Technical Consulting',
    description: 'Expert guidance to help you make informed technology decisions and optimize your systems.',
    icon: '💡',
    features: [
      'Architecture Review',
      'Tech Stack Selection',
      'Performance Audits',
      'Security Assessment',
    ],
  },
  {
    id: 'cloud-services',
    title: 'Cloud Services',
    description: 'Scalable cloud infrastructure and deployment solutions for modern applications.',
    icon: '☁️',
    features: [
      'AWS & GCP',
      'DevOps',
      'CI/CD Pipelines',
      'Monitoring',
    ],
  },
  {
    id: 'maintenance',
    title: 'Support & Maintenance',
    description: 'Ongoing support to keep your applications running smoothly and up to date.',
    icon: '🔧',
    features: [
      '24/7 Monitoring',
      'Bug Fixes',
      'Updates & Patches',
      'Performance Optimization',
    ],
  },
];
