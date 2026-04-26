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
    tagline: 'Scalable web platforms for real business workflows',
    description:
      'Custom websites and full-stack applications built with React, Node.js, and MongoDB for speed, reliability, and measurable business impact.',
    longDescription: `I build complete web applications that support real users, internal teams, and business growth. This includes:
    
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
    tagline: 'Polished interfaces that turn visitors into users',
    description:
      'Responsive frontend development using React, Vue.js, or Angular with clean components, smooth interactions, and conversion-focused UX.',
    longDescription: `I create responsive frontend experiences that make products feel fast, clear, and easy to use:
    
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
    tagline: 'Cross-platform apps that feel fast and dependable',
    description:
      'iOS and Android app development with React Native and Flutter, focused on performance, usability, offline flows, and store-ready delivery.',
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
    tagline: 'Online stores built for trust, speed, and sales',
    description:
      'Conversion-focused e-commerce platforms with product management, secure checkout, inventory workflows, analytics, and easy admin control.',
    longDescription: `End-to-end e-commerce development focused on smooth buying experiences and efficient store operations:
    
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
    tagline: 'Professional WordPress sites without template limitations',
    description:
      'Custom WordPress themes, plugins, WooCommerce builds, speed optimization, security hardening, and maintainable CMS workflows.',
    longDescription: `Complete WordPress solutions for businesses that need control, speed, and long-term maintainability:
    
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
    tagline: 'Reliable backends for products, teams, and integrations',
    description:
      'REST APIs, GraphQL endpoints, authentication, database design, and integrations built for secure, scalable product operations.',
    longDescription: `Backend infrastructure built to keep products secure, connected, and ready to scale:
    
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
    tagline: 'User flows designed around clarity and conversion',
    description:
      'Wireframes, prototypes, and design systems that make products easier to understand, navigate, and trust.',
    longDescription: `UI/UX design services focused on clarity, usability, and business outcomes:
    
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
    tagline: 'Deployment systems that keep products stable',
    description:
      'CI/CD pipelines, cloud deployment, containerization, monitoring, backups, and performance tuning for production-ready releases.',
    longDescription: `DevOps and cloud infrastructure services for smoother launches and more reliable operations:
    
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
    description: 'Best for lean launches, MVP pages, and focused business needs',
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
    description: 'Best for growing businesses that need stronger features and polish',
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
    description: 'Best for teams that need a complete, scalable digital system',
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
    description: 'Clarifying business goals, users, scope, and success metrics',
    icon: '🔍',
    duration: '1-2 days',
  },
  {
    step: 2,
    title: 'Planning',
    description: 'Defining features, milestones, technical direction, and delivery plan',
    icon: '📋',
    duration: '2-3 days',
  },
  {
    step: 3,
    title: 'Design',
    description: 'Designing clear screens, user flows, and responsive layouts',
    icon: '🎨',
    duration: '3-7 days',
  },
  {
    step: 4,
    title: 'Development',
    description: 'Building the product with maintainable code and practical architecture',
    icon: '💻',
    duration: '2-6 weeks',
  },
  {
    step: 5,
    title: 'Testing',
    description: 'Checking responsiveness, performance, edge cases, and key workflows',
    icon: '🧪',
    duration: '3-7 days',
  },
  {
    step: 6,
    title: 'Launch',
    description: 'Deploying the product, handing over access, and supporting go-live',
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
    title: 'Maintainable Code',
    description: 'Clean architecture and readable code that can grow with your business',
    icon: FiZap,
  },
  {
    id: 'communication',
    title: 'Clear Communication',
    description: 'Regular progress updates, direct answers, and no confusing technical fog',
    icon: FiTrendingUp,
  },
  {
    id: 'delivery',
    title: 'On-Time Delivery',
    description: 'Realistic timelines, organized milestones, and dependable execution',
    icon: FiLayers,
  },
  {
    id: 'support',
    title: 'Post-Launch Support',
    description: 'Launch support, fixes, improvements, and maintenance after delivery',
    icon: FiBox,
  },
  {
    id: 'experience',
    title: 'Proven Experience',
    description: 'Hands-on delivery across business websites, stores, dashboards, and apps',
    icon: FiMonitor,
  },
  {
    id: 'innovation',
    title: 'Practical Technology',
    description: 'Modern tools chosen for speed, reliability, and long-term value',
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
