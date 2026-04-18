/* ============================================
   🛠️ SERVICES DATA
   Professional services offered
   ============================================ */

import {
  FiCode,
  FiLayout,
  FiSmartphone,
  FiShoppingCart,
  FiServer,
  FiDatabase,
  FiGlobe,
  FiTrendingUp,
  FiZap,
  FiLayers,
  FiBox,
  FiSettings,
  FiPenTool,
  FiMonitor,
  FiCloud,
} from 'react-icons/fi';
import {
  SiWordpress,
  SiShopify,
  SiReact,
  SiFlutter,
  SiMongodb,
  SiNodedotjs,
  SiVuedotjs,
  SiAngular,
  SiPython,
  SiDocker,
  SiAmazonaws,
  SiGooglecloud,
  SiFigma,
} from 'react-icons/si';

/**
 * Main services categories
 */
export const serviceCategories = [
  { id: 'all', name: 'All Services', count: 8 },
  { id: 'development', name: 'Web Development', count: 4 },
  { id: 'mobile', name: 'Mobile Apps', count: 2 },
  { id: 'ecommerce', name: 'E-Commerce', count: 2 },
  { id: 'design', name: 'UI/UX Design', count: 1 },
  { id: 'devops', name: 'DevOps', count: 1 },
];

/**
 * Main services list
 */
export const services = [
  {
    id: 'web-development',
    title: 'Custom Web Development',
    shortTitle: 'Web Development',
    tagline: 'Building modern, responsive web applications',
    description:
      'Full-stack web development using modern technologies like React, Node.js, and MongoDB. From simple websites to complex web applications.',
    longDescription: `I specialize in building complete web applications using the latest technologies. This includes:
    
    • Custom web applications from scratch
    • Single Page Applications (SPA) with React
    • Progressive Web Apps (PWA)
    • RESTful & GraphQL API development
    • Database design and optimization
    • User authentication & authorization
    • Third-party API integrations
    • Performance optimization
    • SEO implementation`,
    icon: FiCode,
    gradient: 'from-blue-500 to-cyan-500',
    color: '#2196F3',
    featured: true,
    popular: true,
    category: 'development',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind', 'Vite'],
    features: [
      'Custom Web Applications',
      'RESTful API Development',
      'Database Architecture',
      'Authentication Systems',
      'Performance Optimization',
      'SEO Implementation',
    ],
    deliveryTime: '2-6 weeks',
    startingPrice: 1500,
    highlight: true,
    order: 1,
  },
  {
    id: 'frontend-development',
    title: 'Frontend Development',
    shortTitle: 'Frontend',
    tagline: 'Creating beautiful, interactive user interfaces',
    description:
      'Modern UI development using React, Vue.js, or Angular with animations, responsive design, and exceptional user experience.',
    longDescription: `I create stunning, responsive frontend experiences that captivate users:
    
    • React.js / Vue.js / Angular development
    • Component-based architecture
    • Responsive & mobile-first design
    • Smooth animations with Framer Motion
    • State management (Redux, Vuex, NgRx)
    • Performance optimization
    • Accessibility (WCAG) compliance
    • Cross-browser compatibility
    • Design system implementation`,
    icon: FiLayout,
    gradient: 'from-purple-500 to-pink-500',
    color: '#9C27B0',
    featured: true,
    popular: true,
    category: 'development',
    technologies: ['React', 'Vue.js', 'Angular', 'Tailwind', 'Framer Motion', 'TypeScript'],
    features: [
      'Component Development',
      'Responsive Design',
      'Animations & Interactions',
      'Performance Optimization',
      'Accessibility',
      'Design Implementation',
    ],
    deliveryTime: '1-4 weeks',
    startingPrice: 800,
    highlight: true,
    order: 2,
  },
  {
    id: 'mobile-app-development',
    title: 'Mobile App Development',
    shortTitle: 'Mobile Apps',
    tagline: 'Cross-platform mobile applications',
    description:
      'Building beautiful, high-performance mobile applications for iOS and Android using React Native and Flutter.',
    longDescription: `I develop high-quality mobile applications using modern frameworks:
    
    • Cross-platform iOS & Android apps
    • React Native development
    • Flutter development
    • Native module integration
    • Push notifications
    • Offline functionality
    • App Store & Play Store deployment
    • Performance optimization
    • Security implementation`,
    icon: FiSmartphone,
    gradient: 'from-green-500 to-emerald-500',
    color: '#4CAF50',
    featured: true,
    popular: true,
    category: 'mobile',
    technologies: ['React Native', 'Flutter', 'Firebase', 'Redux', 'TypeScript'],
    features: [
      'iOS & Android Apps',
      'Cross-platform Development',
      'Push Notifications',
      'Offline Support',
      'App Store Deployment',
      'Performance Tuning',
    ],
    deliveryTime: '4-8 weeks',
    startingPrice: 2000,
    highlight: true,
    order: 3,
  },
  {
    id: 'ecommerce-development',
    title: 'E-Commerce Development',
    shortTitle: 'E-Commerce',
    tagline: 'Complete online store solutions',
    description:
      'Building feature-rich e-commerce platforms with shopping cart, payment integration, inventory management, and admin panel.',
    longDescription: `End-to-end e-commerce development solutions:
    
    • Custom e-commerce platforms
    • Shopify store development
    • WooCommerce setup & customization
    • Payment gateway integration
    • Inventory management
    • Order processing system
    • Customer management
    • Analytics & reporting
    • SEO optimization
    • Mobile-responsive design`,
    icon: FiShoppingCart,
    gradient: 'from-orange-500 to-red-500',
    color: '#FF5722',
    featured: true,
    popular: true,
    category: 'ecommerce',
    technologies: ['Shopify', 'WooCommerce', 'MERN', 'Stripe', 'PayPal'],
    features: [
      'Custom E-Commerce',
      'Payment Integration',
      'Inventory Management',
      'Order Processing',
      'Customer Portal',
      'Analytics Dashboard',
    ],
    deliveryTime: '3-6 weeks',
    startingPrice: 1200,
    highlight: true,
    order: 4,
  },
  {
    id: 'wordpress-development',
    title: 'WordPress Development',
    shortTitle: 'WordPress',
    tagline: 'Custom WordPress websites',
    description:
      'Building custom WordPress themes and plugins, speed optimization, security hardening, and complete website solutions.',
    longDescription: `Complete WordPress solutions for businesses:
    
    • Custom theme development
    • Plugin development
    • WooCommerce integration
    • Performance optimization
    • Security hardening
    • SEO optimization
    • Migration services
    • Maintenance & support
    • Multilingual websites
    • Membership sites`,
    icon: FiGlobe,
    gradient: 'from-blue-600 to-cyan-500',
    color: '#21759B',
    featured: false,
    popular: true,
    category: 'development',
    technologies: ['WordPress', 'PHP', 'MySQL', 'WooCommerce', 'Elementor'],
    features: [
      'Custom Theme Development',
      'Plugin Development',
      'Performance Optimization',
      'Security Hardening',
      'SEO Setup',
      'Maintenance & Support',
    ],
    deliveryTime: '2-4 weeks',
    startingPrice: 600,
    highlight: false,
    order: 5,
  },
  {
    id: 'api-development',
    title: 'API Development',
    shortTitle: 'API Development',
    tagline: 'Robust backend APIs and microservices',
    description:
      'Building scalable RESTful APIs, GraphQL endpoints, and microservices architecture for web and mobile applications.',
    longDescription: `Building scalable backend infrastructure:
    
    • RESTful API design & development
    • GraphQL API development
    • Microservices architecture
    • Database design & optimization
    • Authentication & authorization
    • Third-party API integrations
    • WebSocket/real-time APIs
    • API documentation (Swagger/OpenAPI)
    • Load testing & optimization`,
    icon: FiServer,
    gradient: 'from-green-600 to-lime-500',
    color: '#8BC34A',
    featured: false,
    popular: false,
    category: 'development',
    technologies: ['Node.js', 'Express', 'GraphQL', 'MongoDB', 'PostgreSQL', 'Docker'],
    features: [
      'RESTful APIs',
      'GraphQL APIs',
      'Microservices',
      'Authentication',
      'Database Design',
      'API Documentation',
    ],
    deliveryTime: '2-5 weeks',
    startingPrice: 1000,
    highlight: false,
    order: 6,
  },
  {
    id: 'ui-ux-design',
    title: 'UI/UX Design',
    shortTitle: 'UI/UX Design',
    tagline: 'Beautiful and intuitive user experiences',
    description:
      'Creating user-centered designs with wireframes, prototypes, and design systems that enhance user engagement and satisfaction.',
    longDescription: `Comprehensive UI/UX design services:
    
    • User research & analysis
    • Wireframing & prototyping
    • UI design & visual identity
    • Design system creation
    • User testing & feedback
    • Responsive design
    • Accessibility compliance
    • Design-to-development handoff
    • Design audits & improvements`,
    icon: FiPenTool,
    gradient: 'from-pink-500 to-rose-500',
    color: '#E91E63',
    featured: false,
    popular: false,
    category: 'design',
    technologies: ['Figma', 'Adobe XD', 'Sketch', 'Photoshop', 'Illustrator'],
    features: [
      'User Research',
      'Wireframing',
      'UI Design',
      'Prototyping',
      'Design Systems',
      'User Testing',
    ],
    deliveryTime: '1-3 weeks',
    startingPrice: 500,
    highlight: false,
    order: 7,
  },
  {
    id: 'devops-cloud',
    title: 'DevOps & Cloud Services',
    shortTitle: 'DevOps',
    tagline: 'Deployment, scaling, and monitoring',
    description:
      'Setting up CI/CD pipelines, cloud infrastructure, containerization, and monitoring solutions for optimal performance.',
    longDescription: `DevOps and cloud infrastructure services:
    
    • CI/CD pipeline setup
    • Docker containerization
    • Kubernetes orchestration
    • Cloud infrastructure (AWS, GCP, Azure)
    • Serverless architecture
    • Monitoring & logging
    • Security & compliance
    • Backup & disaster recovery
    • Performance optimization`,
    icon: FiCloud,
    gradient: 'from-gray-600 to-slate-500',
    color: '#607D8B',
    featured: false,
    popular: false,
    category: 'devops',
    technologies: ['Docker', 'Kubernetes', 'AWS', 'GitHub Actions', 'Jenkins'],
    features: [
      'CI/CD Pipelines',
      'Containerization',
      'Cloud Infrastructure',
      'Monitoring',
      'Security',
      'Performance Tuning',
    ],
    deliveryTime: '2-4 weeks',
    startingPrice: 800,
    highlight: false,
    order: 8,
  },
];

/**
 * Service packages
 */
export const servicePackages = [
  {
    id: 'basic',
    name: 'Basic',
    description: 'Perfect for small projects or startups',
    features: [
      'Responsive Design',
      'Basic Functionality',
      'Contact Form',
      'SEO Setup',
      '1 Month Support',
      '3 Revisions',
    ],
    recommended: false,
  },
  {
    id: 'standard',
    name: 'Standard',
    description: 'Ideal for growing businesses',
    features: [
      'Everything in Basic',
      'Advanced Functionality',
      'CMS Integration',
      'Analytics Setup',
      '3 Months Support',
      '6 Revisions',
      'Performance Optimization',
    ],
    recommended: true,
  },
  {
    id: 'premium',
    name: 'Premium',
    description: 'Complete solution for enterprises',
    features: [
      'Everything in Standard',
      'Custom Features',
      'E-Commerce Integration',
      'Priority Support',
      '6 Months Support',
      'Unlimited Revisions',
      'Security Audit',
      'Performance Monitoring',
    ],
    recommended: false,
  },
];

/**
 * Process steps
 */
export const processSteps = [
  {
    step: 1,
    title: 'Discovery',
    description: 'Understanding your requirements, goals, and vision',
    icon: '🔍',
    duration: '1-2 days',
  },
  {
    step: 2,
    title: 'Planning',
    description: 'Creating detailed specifications and project plan',
    icon: '📋',
    duration: '2-3 days',
  },
  {
    step: 3,
    title: 'Design',
    description: 'Wireframing, prototyping, and visual design',
    icon: '🎨',
    duration: '3-7 days',
  },
  {
    step: 4,
    title: 'Development',
    description: 'Building the application with clean, efficient code',
    icon: '💻',
    duration: '2-6 weeks',
  },
  {
    step: 5,
    title: 'Testing',
    description: 'Quality assurance and bug fixing',
    icon: '🧪',
    duration: '3-7 days',
  },
  {
    step: 6,
    title: 'Launch',
    description: 'Deployment, training, and support',
    icon: '🚀',
    duration: '2-3 days',
  },
];

/**
 * Why choose us points
 */
export const whyChooseUs = [
  {
    id: 'quality',
    title: 'Quality Code',
    description: 'Clean, maintainable, and well-documented code following best practices',
    icon: FiZap,
  },
  {
    id: 'communication',
    title: 'Clear Communication',
    description: 'Regular updates and transparent communication throughout the project',
    icon: FiTrendingUp,
  },
  {
    id: 'delivery',
    title: 'On-Time Delivery',
    description: 'Committed to meeting deadlines without compromising quality',
    icon: FiLayers,
  },
  {
    id: 'support',
    title: 'Post-Launch Support',
    description: 'Continued support and maintenance after project completion',
    icon: FiBox,
  },
  {
    id: 'experience',
    title: 'Proven Experience',
    description: 'Years of experience delivering successful projects',
    icon: FiMonitor,
  },
  {
    id: 'innovation',
    title: 'Innovation',
    description: 'Using the latest technologies and industry best practices',
    icon: FiSettings,
  },
];

/**
 * Get service by ID
 * @param {string} id - Service ID
 * @returns {Object|null} - Service object
 */
export const getServiceById = (id) => {
  return services.find((service) => service.id === id) || null;
};

/**
 * Get services by category
 * @param {string} category - Category ID
 * @returns {Array} - Filtered services
 */
export const getServicesByCategory = (category) => {
  if (category === 'all') return services;
  return services.filter((service) => service.category === category);
};

/**
 * Get featured services
 * @returns {Array} - Featured services
 */
export const getFeaturedServices = () => {
  return services.filter((service) => service.featured);
};

/**
 * Get popular services
 * @returns {Array} - Popular services
 */
export const getPopularServices = () => {
  return services.filter((service) => service.popular);
};

/**
 * Get highlighted services
 * @returns {Array} - Highlighted services
 */
export const getHighlightedServices = () => {
  return services.filter((service) => service.highlight);
};

/**
 * Search services
 * @param {string} query - Search query
 * @returns {Array} - Matching services
 */
export const searchServices = (query) => {
  const lowerQuery = query.toLowerCase();
  return services.filter(
    (service) =>
      service.title.toLowerCase().includes(lowerQuery) ||
      service.description.toLowerCase().includes(lowerQuery) ||
      service.technologies.some((tech) => tech.toLowerCase().includes(lowerQuery)) ||
      service.tagline.toLowerCase().includes(lowerQuery)
  );
};

/**
 * Get related services
 * @param {string} serviceId - Current service ID
 * @param {number} count - Number of related services
 * @returns {Array} - Related services
 */
export const getRelatedServices = (serviceId, count = 3) => {
  const currentService = getServiceById(serviceId);
  if (!currentService) return [];

  return services
    .filter(
      (service) =>
        service.id !== serviceId &&
        service.category === currentService.category
    )
    .slice(0, count);
};

/**
 * Service statistics
 */
export const serviceStats = {
  total: services.length,
  featured: services.filter((s) => s.featured).length,
  popular: services.filter((s) => s.popular).length,
  categories: serviceCategories.length - 1,
  averageDeliveryTime: '3-4 weeks',
  clientSatisfaction: '98%',
  repeatClients: '75%',
};

/**
 * Featured services for homepage
 */
export const homePageServices = getFeaturedServices().slice(0, 4);

export default services;