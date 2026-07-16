/* ============================================
   💼 PROJECTS DATA
   Portfolio projects and case studies
   ============================================ */

// Import project images helper
import { getProjectImages } from './projectImages';

/**
 * Project categories
 */
export const projectCategories = [
  { id: 'saas-products', name: 'SaaS Products', count: 3, icon: 'SaaS' },
  { id: 'all', name: 'All Projects', count: 0, icon: '📁' },
  { id: 'full-stack', name: 'Full Stack', count: 3, icon: '🚀' },
  { id: 'ai-ml', name: 'AI/ML', count: 1, icon: '🤖' },
  { id: 'web-development', name: 'Web Development', count: 4, icon: '🌐' },
  { id: 'ecommerce', name: 'E-Commerce', count: 2, icon: '🛒' },
  { id: 'design', name: 'UI/UX Design', count: 2, icon: '🎨' },
  { id: 'wordpress', name: 'WordPress', count: 3, icon: '⚙️' },
];

/**
 * Main projects list
 * Note: Images will be added dynamically via getProjectImages function
 */
export const projects = [
  // ============================================
  // COMPANY SAAS PRODUCTS
  // ============================================
  {
    id: 'medical-ecommerce-saas',
    title: 'Medical E-Commerce SaaS Platform',
    shortTitle: 'Medical E-Commerce',
    tagline: 'Full product store with operations-ready admin panel',
    description:
      'A medical-field e-commerce product built for managing a complete product catalog, customer ordering flow, and admin operations from one central system.',
    longDescription: `A full e-commerce product for the medical field, developed as part of a software house team. The platform supports product discovery, product detail flows, ordering workflows, and an admin panel for managing day-to-day store operations.

**Key Features:**
- Complete product catalog for medical products
- Product listing, detail, filtering, and search flows
- Customer-facing e-commerce experience
- Admin panel for product, order, and operational management
- Role-based access for internal users
- Backend APIs for product and order workflows
- Deployment and collaboration through AWS and Git-based workflows

**Technical Highlights:**
- Next.js frontend for fast user-facing screens
- NestJS backend architecture
- PostgreSQL database design
- Secure API structure
- AWS deployment support
- Git workflow for team collaboration`,
    client: 'Software House Product',
    role: 'Full Stack Developer',
    teamSize: 1,
    duration: 'Company Product',
    status: 'completed',
    date: '2026-03-01',
    featured: true,
    popular: true,
    category: 'saas-products',
    subcategory: 'medical-ecommerce',
    technologies: ['Next.js', 'NestJS', 'PostgreSQL', 'AWS', 'Git', 'SaaS'],
    tools: ['VSCode', 'Git', 'AWS', 'PostgreSQL'],
    images: [],
    thumbnail: '',
    challenges: [
      'Structuring a complete e-commerce flow for a medical product catalog',
      'Building admin features that make product and order management practical',
      'Keeping frontend, backend, and database workflows maintainable as features grew',
    ],
    solutions: [
      'Separated customer-facing flows from admin workflows with clear role boundaries',
      'Designed reusable API modules and database models around product and order operations',
      'Used Git-based collaboration and AWS deployment practices for production delivery',
    ],
    results: [
      'Delivered a full e-commerce product experience for medical products',
      'Enabled admin users to manage products, orders, and operations from one panel',
      'Created a scalable foundation for adding future SaaS features',
    ],
    order: 0,
  },

  {
    id: 'clinic-appointment-saas',
    title: 'Clinic Appointment SaaS With Three Portals',
    shortTitle: 'Clinic Appointment System',
    tagline: 'Client, clinic-admin, and super-admin portals',
    description:
      'A medical appointment system with three separate portals for clients, clinic administrators, and super administrators, built for structured healthcare booking workflows.',
    longDescription: `A complete appointment system for the medical field, designed around three clear user portals: client, clinic-admin, and super-admin. The product helps users book appointments while giving clinics and platform administrators the tools they need to manage schedules, users, and operational workflows.

**Key Features:**
- Client portal for appointment booking and account flows
- Clinic-admin portal for clinic-level management
- Super-admin portal for platform-level control
- Role-based access and protected workflows
- Appointment scheduling and management
- Dashboard-style interfaces for administrators
- API-driven architecture for scalable product growth

**Technical Highlights:**
- Next.js interfaces for multiple portals
- NestJS backend services
- PostgreSQL relational data modeling
- Role-based authorization
- AWS deployment workflows
- Git-based collaboration and delivery`,
    client: 'Software House Product',
    role: 'Full Stack Developer',
    teamSize: 1,
    duration: 'Company Product',
    status: 'completed',
    date: '2026-04-01',
    featured: true,
    popular: true,
    category: 'saas-products',
    subcategory: 'medical-appointments',
    technologies: ['Next.js', 'NestJS', 'PostgreSQL', 'AWS', 'Git', 'RBAC'],
    tools: ['VSCode', 'Git', 'AWS', 'PostgreSQL'],
    images: [],
    thumbnail: '',
    challenges: [
      'Managing three different portals without mixing user permissions',
      'Designing appointment workflows that work for clients and clinic admins',
      'Keeping super-admin controls powerful but clear',
    ],
    solutions: [
      'Built role-specific portal structures for client, clinic-admin, and super-admin users',
      'Implemented backend authorization around the actual business roles',
      'Organized appointment and dashboard flows around each user type',
    ],
    results: [
      'Delivered a multi-portal appointment system for healthcare workflows',
      'Improved separation between client actions, clinic operations, and platform controls',
      'Created a scalable architecture for future clinic and booking features',
    ],
    order: 0.1,
  },

  {
    id: 'finance-saas-product',
    title: 'Finance SaaS Product',
    shortTitle: 'Finance SaaS',
    tagline: 'Secure full-stack product work for finance operations',
    description:
      'A finance-related SaaS product focused on secure backend APIs, structured PostgreSQL data, and reliable product workflows for business users.',
    longDescription: `A finance-related SaaS product developed in a professional software house environment. My work focused on building secure, maintainable full-stack features with clean API design, PostgreSQL-backed data flows, and production-oriented development practices.

**Key Features:**
- Finance-domain product workflows
- Secure API-driven backend features
- Structured database design with PostgreSQL
- Dashboard and operational interface support
- Team-based development using Git
- Cloud deployment support through AWS

**Technical Highlights:**
- Next.js frontend implementation
- NestJS backend modules
- PostgreSQL schema and query work
- Authentication and protected API patterns
- AWS deployment workflows
- Git collaboration in a professional team environment`,
    client: 'Software House Product',
    role: 'Full Stack Developer',
    teamSize: 1,
    duration: 'Company Product',
    status: 'completed',
    date: '2026-05-01',
    featured: false,
    popular: true,
    category: 'saas-products',
    subcategory: 'finance',
    technologies: ['Next.js', 'NestJS', 'PostgreSQL', 'AWS', 'Git', 'Finance'],
    tools: ['VSCode', 'Git', 'AWS', 'PostgreSQL'],
    images: [],
    thumbnail: '',
    challenges: [
      'Building finance-related features with security and data accuracy in mind',
      'Designing maintainable backend modules for business workflows',
      'Working within a team codebase while keeping changes clean and reviewable',
    ],
    solutions: [
      'Used NestJS modules and services to keep backend logic organized',
      'Modeled relational data in PostgreSQL for reliable product workflows',
      'Followed Git collaboration practices for production-quality delivery',
    ],
    results: [
      'Contributed full-stack features to a finance SaaS product',
      'Improved backend structure and product workflow reliability',
      'Supported production delivery through AWS and team-based Git workflows',
    ],
    order: 0.2,
  },

  // ============================================
  // MERN & FULL STACK PROJECTS
  // ============================================
  {
    id: 'ecommerce-mern',
    title: 'E-Commerce Website (MERN + Admin Panel)',
    shortTitle: 'MERN E-Commerce',
    tagline: 'Revenue-ready MERN store with admin control',
    description:
      'A production-style MERN commerce platform with secure authentication, product management, cart, wishlist, order workflows, inventory control, and an admin dashboard for day-to-day operations.',
    longDescription: `A business-ready e-commerce solution built with the MERN stack, combining a smooth customer storefront with practical administrative controls.

**Key Features:**
- User authentication with JWT
- Product catalog with search and filtering
- Shopping cart and wishlist functionality
- Order management system
- Secure payment processing
- Admin dashboard for inventory management
- Customer order tracking
- Product reviews and ratings

**Technical Highlights:**
- Full MERN stack implementation
- RESTful API architecture
- JWT-based authentication
- Admin role-based access control
- Responsive design with Tailwind CSS
- Secure payment integration`,
    client: 'Retail Business',
    role: 'Full Stack Developer',
    teamSize: 1,
    duration: '10 weeks',
    status: 'completed',
    date: '2024-03-15',
    launchDate: '2024-06-01',
    featured: true,
    popular: true,
    category: 'full-stack',
    subcategory: 'ecommerce',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT', 'Tailwind'],
    tools: ['VSCode', 'Git', 'Postman', 'MongoDB Compass'],
    caseStudy: '/projects/ecommerce-mern-case-study',
    // Images will be added dynamically by helper functions
    images: [],
    thumbnail: '',
    challenges: [
      'Implementing secure admin authentication',
      'Managing real-time inventory updates',
      'Handling concurrent user sessions',
    ],
    solutions: [
      'Implemented JWT with role-based access control',
      'Used MongoDB transactions for inventory consistency',
      'Optimized API responses with Redis caching',
    ],
    results: [
      'Secure admin panel with full product management',
      'Real-time inventory tracking',
      'Scalable architecture for high traffic',
    ],
    order: 1,
  },

  {
    id: 'hospital-mern',
    title: 'Hospital Website (MERN)',
    shortTitle: 'Hospital Management',
    tagline: 'Appointment and doctor management for healthcare teams',
    description:
      'A healthcare web platform with doctor profiles, department pages, appointment booking, patient-friendly service discovery, and admin tools for managing doctors and appointments.',
    longDescription: `A healthcare management system built with MERN stack to improve appointment intake, doctor visibility, and admin coordination.

**Key Features:**
- Doctor profiles and specialization
- Appointment booking system
- Department listings
- Patient registration
- Admin dashboard for managing appointments
- Doctor schedule management
- Service catalog

**Technical Highlights:**
- MERN stack implementation
- Appointment scheduling system
- Admin and user role management
- Responsive design
- Secure data handling`,
    client: 'Healthcare Provider',
    role: 'Full Stack Developer',
    teamSize: 2,
    duration: '8 weeks',
    status: 'completed',
    date: '2024-01-20',
    featured: true,
    popular: true,
    category: 'full-stack',
    subcategory: 'healthcare',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind'],
    // Images will be added dynamically by helper functions
    images: [],
    thumbnail: '',
    order: 3,
  },

  // ============================================
  // AI / MACHINE LEARNING PROJECTS
  // ============================================
  {
    id: 'phishing-detection',
    title: 'AI-Based Phishing Detection System',
    shortTitle: 'Phishing Detection AI',
    tagline: 'AI-powered URL risk detection for security workflows',
    description:
      'A machine learning phishing detection system using BERT, CNN, URL feature engineering, fuzzy domain similarity, SMOTE balancing, and real-time predictions through a Gradio interface.',
    longDescription: `An AI-powered phishing detection system designed to identify suspicious URLs and support faster security decision-making.

**Key Features:**
- Hybrid BERT + CNN model architecture
- Advanced URL feature extraction
- Fuzzy domain similarity checking
- SMOTE for class balancing
- Real-time prediction interface
- Model performance analytics

**Technical Highlights:**
- Python-based machine learning pipeline
- Transformer models for text analysis
- CNN for pattern recognition
- Gradio for user interface
- Pandas for data processing
- TensorFlow/Keras for model training`,
    client: 'Security Company',
    role: 'AI/ML Engineer',
    teamSize: 1,
    duration: '12 weeks',
    status: 'completed',
    date: '2024-04-05',
    featured: true,
    popular: true,
    category: 'ai-ml',
    subcategory: 'security',
    technologies: ['Python', 'TensorFlow', 'Transformers', 'Pandas', 'Gradio'],
    // Images will be added dynamically by helper functions
    images: [],
    thumbnail: '',
    order: 4,
  },

  // ============================================
  // WORDPRESS PROJECTS
  // ============================================
  {
    id: 'wordpress-business',
    title: 'Real Estate WordPress Platform Built From Scratch',
    shortTitle: 'Real Estate Platform',
    tagline: 'Scalable property CMS for real estate operations',
    description:
      'A custom WordPress real estate platform built with Underscores, custom post types, taxonomies, dedicated templates, and an admin-friendly CMS for managing property listings at scale.',
    longDescription: `A custom real estate WordPress platform built from scratch without page builders, focused on clean architecture, scalable listings, and an efficient admin experience.

**Key Features:**
- 3 Custom Post Types for Properties, Agents, and Locations
- 3 Custom Taxonomies for structured content organization
- Dedicated templates following WordPress template hierarchy
- Admin-friendly CMS for easy property management
- Scalable architecture for large listing volumes

**Technical Highlights:**
- WordPress Underscores starter theme
- Custom Post Types and Taxonomies API
- Template hierarchy implementation
- REST API support for Gutenberg
- Responsive design using CSS variables
- Optimized permalink structure

**Challenges Solved:**
- Fixed 404 issues with proper rewrite rules
- Connected taxonomies across multiple post types
- Maintained design consistency with reusable components

**Result:**
- A professional and scalable real estate platform that makes managing hundreds of property listings efficient and maintainable while following WordPress best practices`,
    client: 'Real Estate Business',
    role: 'WordPress Developer',
    teamSize: 1,
    duration: '3 weeks',
    status: 'completed',
    date: '2024-03-01',
    featured: false,
    popular: true,
    category: 'wordpress',
    subcategory: 'real-estate',
    technologies: ['WordPress', 'PHP', 'Underscores', 'Gutenberg', 'REST API', 'CSS'],
    // Images will be added dynamically by helper functions
    images: [],
    thumbnail: '',
    order: 5,
  },

  {
    id: 'wp-theme-webx',
    title: 'Custom WordPress Theme — WebX',
    shortTitle: 'WebX Theme',
    tagline: 'Fast custom WordPress theme for professional websites',
    description:
      'A lightweight custom WordPress theme with optimized performance, reusable sections, custom widgets, theme options, and a clean structure for easy content management.',
    longDescription: `A custom WordPress theme developed from scratch for fast loading, flexible content control, and maintainable website operations.

**Key Features:**
- Lightweight and fast loading
- Custom theme options panel
- Reusable components
- Custom widgets
- Performance optimization
- SEO friendly structure
- Responsive design

**Technical Highlights:**
- Custom theme development from scratch
- Advanced Custom Fields integration
- Performance optimization techniques
- Clean and maintainable code
- Cross-browser compatibility`,
    client: 'Theme Marketplace',
    role: 'WordPress Developer',
    teamSize: 1,
    duration: '4 weeks',
    status: 'completed',
    date: '2024-02-15',
    featured: true,
    popular: false,
    category: 'wordpress',
    subcategory: 'theme-development',
    technologies: ['WordPress', 'PHP', 'ACF', 'JavaScript', 'CSS'],
    // Images will be added dynamically by helper functions
    images: [],
    thumbnail: '',
    order: 6,
  },

  {
    id: 'wp-theme-codex',
    title: 'Custom WordPress Theme — CodeX',
    shortTitle: 'CodeX Theme',
    tagline: 'Flexible WordPress theme for content-led brands',
    description:
      'A fast WordPress theme with custom post types, dynamic sections, global options, reusable blocks, and a mobile-first structure for professional publishing.',
    longDescription: `A modern WordPress theme built for flexible content teams that need speed, reusable sections, and reliable editing workflows.

**Key Features:**
- Custom post types support
- Dynamic content sections
- Global theme options
- Reusable Gutenberg blocks
- Performance optimized
- Mobile-first design
- Documentation included

**Technical Highlights:**
- Advanced theme architecture
- Gutenberg block development
- Dynamic content handling
- Theme customizer integration
- Security best practices`,
    client: 'Web Development Agency',
    role: 'WordPress Developer',
    teamSize: 1,
    duration: '5 weeks',
    status: 'completed',
    date: '2024-01-30',
    featured: false,
    popular: true,
    category: 'wordpress',
    subcategory: 'theme-development',
    technologies: ['WordPress', 'PHP', 'JavaScript', 'ACF', 'CSS'],
    // Images will be added dynamically by helper functions
    images: [],
    thumbnail: '',
    order: 7,
  },

  {
    id: 'multi-wp-sites',
    title: 'Multi WordPress Websites Collection',
    shortTitle: 'WordPress Collection',
    tagline: 'WordPress websites for multiple business models',
    description:
      'A collection of WordPress builds for clothing, retail, publishing, news, and portfolio use cases, with e-commerce setup, custom themes, SEO basics, and performance improvements.',
    longDescription: `A portfolio of WordPress websites built for different industries and business goals.

**Projects Included:**
1. Clothing Store - E-commerce fashion website
2. E-commerce Shop - Online retail store
3. Personal Blog - Content publishing platform
4. News Portal - News aggregation website
5. Portfolio Site - Creative portfolio showcase

**Technical Highlights:**
- WooCommerce integration for e-commerce
- Custom theme development
- Plugin customization
- Performance optimization
- SEO implementation`,
    client: 'Various Clients',
    role: 'WordPress Developer',
    teamSize: 1,
    duration: '12 weeks',
    status: 'completed',
    date: '2024-03-20',
    featured: false,
    popular: false,
    category: 'wordpress',
    subcategory: 'multi-site',
    technologies: ['WordPress', 'Elementor', 'WooCommerce', 'PHP'],
    // Images will be added dynamically by helper functions
    images: [],
    thumbnail: '',
    order: 8,
  },

  // ============================================
  // SHOPIFY PROJECTS
  // ============================================
  {
    id: 'shopify-store',
    title: 'Professional Shopify Store',
    shortTitle: 'Shopify Store',
    tagline: 'Shopify store optimized for trust and checkout flow',
    description:
      'A conversion-focused Shopify store with custom theme work, optimized product pages, payment setup, app configuration, speed improvements, SEO basics, and analytics tracking.',
    longDescription: `A professional Shopify store built to improve buyer trust, product discovery, and checkout completion.

**Key Features:**
- Custom theme customization
- Optimized product pages
- Payment gateway integration
- Shopify apps configuration
- Speed optimization
- Mobile-responsive design
- SEO implementation
- Analytics setup

**Technical Highlights:**
- Shopify Liquid templating
- Custom CSS/JavaScript
- App integration
- Performance optimization
- Conversion rate optimization techniques`,
    client: 'E-commerce Business',
    role: 'Shopify Developer',
    teamSize: 1,
    duration: '3 weeks',
    status: 'completed',
    date: '2024-01-15',
    featured: false,
    popular: true,
    category: 'ecommerce',
    subcategory: 'shopify',
    technologies: ['Shopify', 'Liquid', 'Theme Customization'],
    // Images will be added dynamically by helper functions
    images: [],
    thumbnail: '',
    order: 9,
  },

  {
    id: 'shopify-custom',
    title: 'Shopify Store From Scratch',
    shortTitle: 'Custom Shopify',
    tagline: 'Custom Shopify experience for a growing store',
    description:
      'A from-scratch Shopify build with custom UI enhancements, organized product structure, store automation, optimized checkout flow, and performance-focused frontend work.',
    longDescription: `A Shopify store developed from the ground up with custom implementation choices that support better merchandising and smoother operations.

**Key Features:**
- Custom UI/UX design
- Product structure optimization
- Store automation setup
- Optimized checkout flow
- Custom functionality
- Performance optimization
- Security implementation

**Technical Highlights:**
- Custom theme development
- Liquid template customization
- JavaScript enhancements
- Checkout customization
- API integrations`,
    client: 'Startup E-commerce',
    role: 'Shopify Developer',
    teamSize: 1,
    duration: '4 weeks',
    status: 'completed',
    date: '2024-02-01',
    featured: false,
    popular: true,
    category: 'ecommerce',
    subcategory: 'shopify',
    technologies: ['Shopify', 'Liquid', 'Custom CSS/JS'],
    // Images will be added dynamically by helper functions
    images: [],
    thumbnail: '',
    order: 10,
  },
];

// ============================================
// HELPER FUNCTIONS - Updated with image handling
// ============================================

/**
 * Get project by ID with images
 * @param {string} id - Project ID
 * @returns {Object|null} - Project object with images
 */
export const getProjectById = (id) => {
  const project = projects.find((project) => project.id === id);
  if (!project) return null;
  
  const projectMedia = getProjectImages(id);
  return {
    ...project,
    ...projectMedia,
    imageAlt: projectMedia.alt,
  };
};

/**
 * Get projects by category with images
 * @param {string} category - Category ID
 * @returns {Array} - Filtered projects with images
 */
export const getProjectsByCategory = (category) => {
  let filteredProjects;
  if (category === 'all') {
    filteredProjects = projects;
  } else {
    filteredProjects = projects.filter((project) => project.category === category);
  }
  
  // Add images to each project
  return filteredProjects.map(project => ({
    ...project,
    ...getProjectImages(project.id)
  }));
};

/**
 * Get featured projects with images
 * @returns {Array} - Featured projects with images
 */
export const getFeaturedProjects = () => {
  return projects
    .filter((project) => project.featured)
    .map(project => ({
      ...project,
      ...getProjectImages(project.id)
    }));
};

/**
 * Get popular projects with images
 * @returns {Array} - Popular projects with images
 */
export const getPopularProjects = () => {
  return projects
    .filter((project) => project.popular)
    .map(project => ({
      ...project,
      ...getProjectImages(project.id)
    }));
};

/**
 * Get all projects with images
 * @returns {Array} - All projects with images
 */
export const getAllProjectsWithImages = () => {
  return projects.map(project => ({
    ...project,
    ...getProjectImages(project.id)
  }));
};

/**
 * Get related projects with images
 * @param {string} projectId - Current project ID
 * @param {number} count - Number of related projects
 * @returns {Array} - Related projects with images
 */
export const getRelatedProjects = (projectId, count = 3) => {
  const currentProject = getProjectById(projectId);
  if (!currentProject) return [];

  return projects
    .filter(
      (project) =>
        project.id !== projectId &&
        project.category === currentProject.category
    )
    .slice(0, count)
    .map(project => ({
      ...project,
      ...getProjectImages(project.id)
    }));
};

/**
 * Search projects with images
 * @param {string} query - Search query
 * @returns {Array} - Matching projects with images
 */
export const searchProjects = (query) => {
  const lowerQuery = query.toLowerCase();
  const filteredProjects = projects.filter(
    (project) =>
      project.title.toLowerCase().includes(lowerQuery) ||
      project.description.toLowerCase().includes(lowerQuery) ||
      project.tagline.toLowerCase().includes(lowerQuery) ||
      project.technologies.some((tech) => tech.toLowerCase().includes(lowerQuery))
  );
  
  return filteredProjects.map(project => ({
    ...project,
    ...getProjectImages(project.id)
  }));
};

/**
 * Get projects sorted by date with images
 * @param {string} order - 'asc' or 'desc'
 * @returns {Array} - Sorted projects with images
 */
export const getProjectsByDate = (order = 'desc') => {
  return [...projects].sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return order === 'desc' ? dateB - dateA : dateA - dateB;
  }).map(project => ({
    ...project,
    ...getProjectImages(project.id)
  }));
};

/**
 * Get projects sorted by order with images
 * @returns {Array} - Sorted projects with images
 */
export const getSortedProjects = () => {
  return [...projects].sort((a, b) => a.order - b.order)
    .map(project => ({
      ...project,
      ...getProjectImages(project.id)
    }));
};

/**
 * Get all technologies used
 * @returns {Array} - Unique technologies
 */
export const getAllTechnologies = () => {
  const allTech = projects.flatMap((project) => project.technologies);
  return [...new Set(allTech)].sort();
};

/**
 * Get projects by technology with images
 * @param {string} tech - Technology name
 * @returns {Array} - Projects using the technology with images
 */
export const getProjectsByTech = (tech) => {
  const filteredProjects = projects.filter((project) =>
    project.technologies.some((t) => t.toLowerCase() === tech.toLowerCase())
  );
  
  return filteredProjects.map(project => ({
    ...project,
    ...getProjectImages(project.id)
  }));
};

/**
 * Project statistics
 */
export const projectStats = {
  total: projects.length,
  featured: projects.filter((p) => p.featured).length,
  popular: projects.filter((p) => p.popular).length,
  categories: projectCategories.length - 1,
  technologies: getAllTechnologies().length,
  byStatus: {
    completed: projects.filter((p) => p.status === 'completed').length,
    inProgress: projects.filter((p) => p.status === 'in-progress').length,
    planned: projects.filter((p) => p.status === 'planned').length,
  },
};

/**
 * Featured projects for homepage
 */
export const homePageProjects = getFeaturedProjects().slice(0, 4);

export default projects;
