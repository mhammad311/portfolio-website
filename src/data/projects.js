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
  { id: 'saas-products', name: 'SaaS Products', count: 2, icon: 'SaaS' },
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
    title: 'Healthcare Commerce & E-Prescription Platform',
    shortTitle: 'Healthcare Commerce',
    tagline: 'B2B healthcare commerce, prescription management, and administration platform',
    description:
      'Developed a full-stack B2B healthcare commerce and e-prescription platform connecting practitioners, prescribers, patients, and operational administrators.',
    longDescription: `Designed and developed a production-grade healthcare commerce platform connecting practitioners, prescribers, patients, and operational administrators.

The system combines online product ordering with regulated prescription workflows. It supports prescription-required products, patient-level product allocation, BMI validation, secure PDF generation and signing, stock control, payments, order fulfilment, and transactional notifications.

**Key Features:**
- Multi-role authentication for practitioners, prescribers, customers, and administrators
- Professional account registration with document uploads and email verification
- Practitioner-to-prescriber invitation, approval, and relationship management
- Patient profile management with BMI validation and preserved order history
- Product catalogue with categories, promotions, VAT rules, stock levels, and practitioner-specific pricing
- Persistent shopping cart, wishlist, search, filtering, and product availability validation
- Prescription-required product allocation across patients and prescribers
- Per-product and category-level prescription quantity restrictions
- Automatic prescription PDF generation and secure digital signing
- Private AWS S3 document storage with time-limited signed URLs
- Order placement using bank transfer or hosted online payment processing
- Transaction-safe order creation, stock deduction, and prescription generation
- Order history, payment status, shipping, delivery, and fulfilment tracking
- Responsive practitioner and prescriber dashboards
- Secure administrator impersonation with token exchange and audit logging
- Operational dashboards for orders, sales, prescriptions, stock, and active offers

**Administration System:**
- Product, category, promotion, and stock management
- Practitioner and prescriber approval and document review
- Product-specific practitioner pricing
- Order editing, picking quantities, dispatch, cancellation, and payment updates
- Prescription and order PDF generation
- Delivery option and popup management
- System-user administration and password management
- Dashboard reporting and low-stock alerts
- Protected read-only SQL editor with pagination, query timeouts, blocked operations, and saved queries

**Technical Highlights:**
- Next.js 15 App Router, React 19, TypeScript, and Tailwind CSS
- Server and client components with context-based cart and authentication state
- Recharts dashboards, TipTap rich-text editing, and canvas-based digital signatures
- NestJS 11, TypeScript, PostgreSQL with TypeORM, and modular REST APIs
- JWT authentication, role-based guards, Swagger/OpenAPI documentation, and Jest testing
- Redis-backed prescription and cart state with database fallback
- AWS S3 for private images, documents, and prescription PDFs
- AWS SES for transactional email delivery
- AWS ECR and EC2 for container deployment
- Worldpay hosted payment pages and callback processing
- Docker-based frontend and backend services
- GitHub Actions CI/CD for development, UAT, and production environments

**Engineering Contributions:**
- Modernized legacy backend behavior into a modular NestJS and PostgreSQL architecture
- Preserved API compatibility while resolving response-shape and database differences
- Stabilized checkout, VAT, pricing, stock, prescription allocation, and order-summary calculations
- Implemented transaction-safe order processing and post-commit prescriber notifications
- Improved authentication, password recovery, account activation, and impersonation workflows
- Added reliable AWS credential handling and secure signed-document access
- Built regression tests around high-risk prescription, order, user, and administrative workflows
- Diagnosed and resolved production issues across frontend state, backend logic, cloud configuration, and CI/CD pipelines`,
    client: 'Software House Product',
    role: 'Senior Full-Stack Developer',
    teamSize: 1,
    duration: 'Company Product',
    status: 'completed',
    date: '2026-03-01',
    featured: true,
    popular: true,
    category: 'saas-products',
    subcategory: 'healthcare-commerce',
    technologies: ['Next.js', 'React', 'TypeScript', 'NestJS', 'PostgreSQL', 'Redis', 'AWS', 'Docker', 'GitHub Actions'],
    tools: ['VSCode', 'Git', 'AWS S3', 'AWS SES', 'AWS ECR', 'AWS EC2', 'Worldpay', 'Docker'],
    images: [],
    thumbnail: '',
    challenges: [
      'Combining healthcare commerce with regulated prescription workflows',
      'Maintaining accurate VAT, pricing, stock, prescription allocation, and order-summary calculations',
      'Preserving legacy API compatibility while modernizing the backend architecture',
    ],
    solutions: [
      'Built modular NestJS and PostgreSQL services with transaction-safe order and prescription processing',
      'Implemented role-based workflows for practitioners, prescribers, customers, and administrators',
      'Integrated AWS S3, AWS SES, Docker, and GitHub Actions for secure document handling and CI/CD',
    ],
    results: [
      'Delivered a production-grade B2B healthcare commerce and e-prescription platform',
      'Enabled prescription-required ordering, secure PDF signing, payments, stock control, and fulfilment tracking',
      'Strengthened authentication, cloud integrations, regression testing, and production reliability',
    ],
    order: 0,
  },
  {
    id: 'clinic-appointment-saas',
    title: 'Multi-Tenant Clinic Management SaaS',
    shortTitle: 'Clinic Management SaaS',
    tagline: 'Full-stack healthcare SaaS platform for clinics, patients, and platform administrators',
    description:
      'Designed and developed a multi-tenant clinic management SaaS serving clinic teams, practitioners, patients, and platform administrators within a secure branch-aware architecture.',
    longDescription: `A comprehensive multi-tenant clinic management platform designed to centralize clinical operations, patient engagement, appointment scheduling, payments, staff management, and platform administration. The system supports multiple clinics and branches while maintaining strict tenant isolation, role-based permissions, subscription entitlements, and auditable workflows.

The platform consists of three dedicated applications: Clinic Portal for clinic owners, practitioners, receptionists, and staff; Patient Portal for bookings, forms, payments, aftercare, and appointment management; and Super Admin Portal for tenant onboarding, plans, features, billing, risk monitoring, support, and platform governance.

**Core Features:**
- Multi-clinic and multi-branch tenant architecture
- Role-based access for clinic owners, practitioners, staff, patients, and platform administrators
- Subscription plans, feature entitlements, usage limits, and tenant-specific overrides
- Clinic registration, plan selection, Stripe checkout, and approval workflows
- Appointment calendar with location, practitioner, treatment, availability, closures, and rota validation
- Public booking links with guest booking, secure magic-link access, deposits, and confirmation policies
- Staff management with branches, departments, designations, services, rota requests, leave, and availability
- Patient records covering medical history, appointments, notes, forms, invoices, payments, and activity
- Digital medical and consent forms with patient signatures, versioning, secure links, and submission tracking
- Eight-step treatment records containing questionnaires, consent, clinical photos, treatment maps, notes, payments, and review
- Professional treatment-record and invoice PDF generation
- Inventory categories, brands, products, stock batches, stock in/out, adjustments, CSV import, and movement history
- Treatment-linked stock recipes, reservations, consumption, reconciliation, and practitioner usage adjustments
- Invoices, clinic discounts, deposits, refunds, disputes, reconciliation, and payment-attempt tracking
- Stripe subscriptions, webhooks, Customer Portal, Payment Element, and Stripe Connect onboarding
- AWS SES transactional email templates and Amazon S3 clinical file storage
- Support inbox, audit history, platform risk monitoring, analytics, and operational reporting
- Feature-gated marketing, shop, support, and training academy modules
- Integration framework for Stripe, Zoho, Worldpay, and delivery services

**Engineering Highlights:**
- Server-authoritative tenant, clinic, branch, and entitlement validation
- JWT authentication with role and feature-access guards
- Immutable inventory movements with idempotency and stock-conflict protection
- Secure, time-limited tokens for account activation, forms, appointments, and guest access
- Validated DTOs, normalized API errors, security headers, and controlled CORS
- Webhook idempotency and event persistence for reliable payment processing
- Shared branding, UI components, authentication, feature catalogues, and API clients across portals
- Automated database migrations and global default provisioning during deployment
- Extensive API end-to-end coverage across booking, permissions, inventory, forms, plans, and Stripe
- Dockerized CI/CD pipelines using GitHub Actions, Amazon ECR, and EC2 with deployment rollback support

**Technology Stack:**
- Next.js 14, React 18, TypeScript, NestJS, Prisma, and PostgreSQL
- Tailwind CSS for responsive portal interfaces
- Stripe subscriptions, checkout, Payment Element, Customer Portal, webhooks, and Stripe Connect
- AWS SES for transactional emails and Amazon S3 for clinical file storage
- Docker, GitHub Actions, Amazon ECR, and EC2 for CI/CD and deployment
- Jest and Playwright for API and product workflow coverage`,
    client: 'Software House Product',
    role: 'Full-Stack Developer / SaaS Product Engineer',
    teamSize: 1,
    duration: 'Company Product',
    status: 'completed',
    date: '2026-04-01',
    featured: true,
    popular: true,
    category: 'saas-products',
    subcategory: 'clinic-management',
    technologies: ['Next.js', 'React', 'TypeScript', 'NestJS', 'Prisma', 'PostgreSQL', 'Tailwind CSS', 'Stripe', 'AWS SES', 'Amazon S3', 'Docker', 'GitHub Actions', 'Amazon ECR', 'EC2', 'Jest', 'Playwright'],
    tools: ['VSCode', 'Git', 'Stripe', 'AWS SES', 'Amazon S3', 'Docker', 'GitHub Actions', 'Amazon ECR', 'EC2'],
    images: [],
    thumbnail: '',
    challenges: [
      'Supporting multiple clinics and branches while maintaining strict tenant isolation',
      'Coordinating appointments, staff rotas, treatment records, forms, inventory, invoices, and payments across role-specific portals',
      'Keeping subscription entitlements, feature gates, audit history, and payment events reliable at platform scale',
    ],
    solutions: [
      'Implemented server-authoritative tenant, clinic, branch, role, and entitlement validation',
      'Built dedicated Clinic, Patient, and Super Admin portals with shared UI, authentication, feature catalogues, and API clients',
      'Added secure token flows, webhook idempotency, immutable inventory movements, automated migrations, and Dockerized CI/CD pipelines',
    ],
    results: [
      'Delivered a multi-tenant clinic management SaaS for clinic teams, patients, and platform administrators',
      'Centralized appointment scheduling, public booking, staff rota management, clinical records, inventory, invoicing, and Stripe payments',
      'Improved operational reliability through audit logging, AWS communications, secure file storage, and extensive test coverage',
    ],
    order: 0.1,
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
