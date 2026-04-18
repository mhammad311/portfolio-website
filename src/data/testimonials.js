/* ============================================
   ⭐ TESTIMONIALS DATA
   Client testimonials and reviews
   Avatars: Unsplash real person photos
   ============================================ */

/**
 * Testimonial categories
 */
export const testimonialCategories = [
  { id: 'all',            name: 'All Testimonials', count: 0 },
  { id: 'web-development', name: 'Web Development', count: 5 },
  { id: 'mobile-apps',    name: 'Mobile Apps',      count: 3 },
  { id: 'ecommerce',      name: 'E-Commerce',       count: 4 },
  { id: 'design',         name: 'UI/UX Design',     count: 2 },
  { id: 'wordpress',      name: 'WordPress',        count: 3 },
];

/**
 * Main testimonials list
 */
export const testimonials = [
  {
    id: 'testimonial-1',
    name: 'Sarah Johnson',
    position: 'CEO, TechStart Inc.',
    company: 'TechStart Inc.',

    // ✅ Unsplash — professional woman, CEO look
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',

    rating: 5,
    quote: 'Working with this team was an absolute pleasure. They delivered our e-commerce platform ahead of schedule and exceeded all our expectations. The attention to detail and technical expertise is remarkable.',
    fullQuote: `I had the pleasure of working with this talented team on our e-commerce platform, and I couldn't be happier with the results. From the initial consultation to the final delivery, their professionalism and expertise were evident at every step.

They not only delivered a beautiful, functional platform but also provided valuable insights that improved our business processes. The platform has been running smoothly for months, and our conversion rates have increased significantly.

What impressed me most was their commitment to quality and their willingness to go above and beyond. They were always available to answer questions and make adjustments, even after the project was completed.`,
    project: 'E-Commerce Platform',
    projectId: 'ecommerce-platform',
    category: 'web-development',
    date: '2024-05-15',
    featured: true,
    verified: true,
    social: {
      linkedin: 'https://linkedin.com/in/sarahjohnson',
      twitter: 'https://twitter.com/sarahj',
    },
    order: 1,
  },

  {
    id: 'testimonial-2',
    name: 'Michael Chen',
    position: 'Product Manager, InnovateLabs',
    company: 'InnovateLabs',

    // ✅ Unsplash — Asian professional man
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',

    rating: 5,
    quote: 'The mobile app they developed for us has been a game-changer. User engagement increased by 60% and we\'ve received nothing but positive feedback from our users.',
    fullQuote: `As the Product Manager at InnovateLabs, I oversaw the development of our mobile application, and I must say, working with this team was one of the best decisions we made.

They took our vague ideas and turned them into a beautiful, intuitive app that our users love. The development process was smooth, with regular updates and excellent communication throughout.

The app has been live for six months now, and we've seen a 60% increase in user engagement. The code quality is excellent, making future updates and maintenance much easier than we anticipated.`,
    project: 'Fitness Tracking App',
    projectId: 'fitness-tracking-app',
    category: 'mobile-apps',
    date: '2024-04-22',
    featured: true,
    verified: true,
    social: {
      linkedin: 'https://linkedin.com/in/michaelchen',
    },
    order: 2,
  },

  {
    id: 'testimonial-3',
    name: 'Alex Rodriguez',
    position: 'Marketing Director, CreativeMinds',
    company: 'CreativeMinds',

    // ✅ Unsplash — Latino professional man
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',

    rating: 5,
    quote: 'Their AI content generator has revolutionized our marketing department. We\'re producing 3x more content with higher quality in less time.',
    fullQuote: `When we first considered implementing an AI content generation tool, we were skeptical about the quality and usefulness. However, this team proved all our concerns wrong.

They developed a custom AI content generator that perfectly fits our needs. The tool has been instrumental in scaling our content production without compromising quality. Our team can now produce three times more content while maintaining consistently high standards.

The implementation was smooth, and their support team has been incredibly responsive whenever we've had questions or needed adjustments. This has been one of the best investments we've made in our marketing technology stack.`,
    project: 'AI Content Generator',
    projectId: 'ai-content-generator',
    category: 'ai-ml',
    date: '2024-06-10',
    featured: true,
    verified: true,
    social: {
      linkedin: 'https://linkedin.com/in/alexrodriguez',
      twitter: 'https://twitter.com/alexrod',
    },
    order: 3,
  },

  {
    id: 'testimonial-4',
    name: 'Jessica Williams',
    position: 'Founder, LuxeFashion',
    company: 'LuxeFashion',

    // ✅ Unsplash — stylish professional woman, fashion vibe
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',

    rating: 5,
    quote: 'Our Shopify store conversion rate increased by 45% after the redesign. The team understood our brand perfectly and delivered exactly what we needed.',
    fullQuote: `As a luxury fashion brand, we needed a Shopify store that reflected our premium positioning while providing an exceptional shopping experience. This team delivered exactly that and more.

They took the time to understand our brand, our products, and our customers. The result was a stunning store that not only looks beautiful but also performs exceptionally well. Our conversion rate increased by 45% in the first month, and we continue to see improvements.

The attention to detail, from product photography optimization to checkout flow refinement, was impressive. They were true partners throughout the process, always available and responsive to our needs.`,
    project: 'Premium Shopify Store',
    projectId: 'shopify-store',
    category: 'ecommerce',
    date: '2024-03-18',
    featured: true,
    verified: true,
    social: {
      linkedin: 'https://linkedin.com/in/jessicawilliams',
      instagram: 'https://instagram.com/jessicaw',
    },
    order: 4,
  },

  {
    id: 'testimonial-5',
    name: 'David Miller',
    position: 'CTO, SecureTech Solutions',
    company: 'SecureTech Solutions',

    // ✅ Unsplash — serious tech professional man
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',

    rating: 5,
    quote: 'The corporate website they built for us is fast, secure, and perfectly represents our brand. Maintenance has been minimal thanks to their excellent coding practices.',
    fullQuote: `As the CTO of a technology company, I have high standards for any digital product we use. This team exceeded all expectations with our corporate website.

They delivered a website that not only looks professional but also performs exceptionally well. The code is clean, well-documented, and follows best practices, making maintenance much easier for our team.

Security was a major concern for us, and they implemented robust security measures that give us confidence in our online presence. The website has been running flawlessly for over a year with minimal downtime.`,
    project: 'Corporate Business Website',
    projectId: 'corporate-website',
    category: 'wordpress',
    date: '2024-04-05',
    featured: false,
    verified: true,
    social: {
      linkedin: 'https://linkedin.com/in/davidmiller',
    },
    order: 5,
  },

  {
    id: 'testimonial-6',
    name: 'Emma Thompson',
    position: 'Head of Design, PixelPerfect',
    company: 'PixelPerfect',

    // ✅ Unsplash — creative professional woman
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',

    rating: 5,
    quote: 'The design system they created has streamlined our entire development process. Our team\'s productivity has increased by 30% since implementation.',
    fullQuote: `As a design agency, we needed a comprehensive design system to ensure consistency across all our projects. This team delivered a design system that has transformed how we work.

The system is comprehensive, well-documented, and easy to use. It includes everything from color palettes and typography to complex component interactions. Our development team has been able to work 30% faster since implementing this system, and the consistency across projects has improved dramatically.

They worked closely with us to understand our needs and preferences, and the final product perfectly reflects our design philosophy while being practical and efficient to use.`,
    project: 'UI Design System',
    projectId: 'ui-design-system',
    category: 'design',
    date: '2024-05-30',
    featured: false,
    verified: true,
    social: {
      linkedin: 'https://linkedin.com/in/emmathompson',
      dribbble: 'https://dribbble.com/emmat',
    },
    order: 6,
  },

  {
    id: 'testimonial-7',
    name: 'Robert Kim',
    position: 'Operations Manager, FoodieGood',
    company: 'FoodieGood',

    // ✅ Unsplash — friendly Asian professional man
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',

    rating: 4,
    quote: 'The recipe app has been incredibly popular with our users. The development process was smooth, and the final product exceeded our expectations.',
    fullQuote: `Developing a recipe app came with its unique challenges, particularly around user experience and performance. This team handled these challenges expertly.

They developed an app that is not only beautiful and intuitive but also performs exceptionally well, even with large recipe databases. User feedback has been overwhelmingly positive, with particular praise for the app's design and ease of use.

The development process was well-managed, with regular updates and excellent communication. They were always willing to listen to our ideas and provide their expert input.`,
    project: 'Recipe Discovery App',
    projectId: 'recipe-app',
    category: 'mobile-apps',
    date: '2024-06-25',
    featured: false,
    verified: true,
    social: {
      linkedin: 'https://linkedin.com/in/robertkim',
    },
    order: 7,
  },

  {
    id: 'testimonial-8',
    name: 'Lisa Wang',
    position: 'Project Lead, TaskFlow',
    company: 'TaskFlow',

    // ✅ Unsplash — confident Asian professional woman
    avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',

    rating: 5,
    quote: 'Their task management dashboard has transformed how our team collaborates. The real-time features and intuitive interface have boosted our productivity significantly.',
    fullQuote: `We needed a custom task management solution that could handle our team's complex workflows. This team delivered a solution that has exceeded all our expectations.

The dashboard is intuitive, powerful, and beautifully designed. The real-time collaboration features have eliminated communication gaps, and our team's productivity has seen a noticeable increase.

What I appreciated most was their attention to detail and willingness to understand our specific needs. They didn't just deliver a generic solution; they created something perfectly tailored to our workflow.`,
    project: 'Task Management Dashboard',
    projectId: 'task-management-app',
    category: 'web-development',
    date: '2024-03-10',
    featured: false,
    verified: true,
    social: {
      linkedin: 'https://linkedin.com/in/lisawang',
      twitter: 'https://twitter.com/lisaw',
    },
    order: 8,
  },
];

/**
 * Get testimonial by ID
 */
export const getTestimonialById = (id) =>
  testimonials.find((t) => t.id === id) || null;

/**
 * Get testimonials by category
 */
export const getTestimonialsByCategory = (category) => {
  if (category === 'all') return testimonials;
  return testimonials.filter((t) => t.category === category);
};

/**
 * Get featured testimonials
 */
export const getFeaturedTestimonials = () =>
  testimonials.filter((t) => t.featured);

/**
 * Get verified testimonials
 */
export const getVerifiedTestimonials = () =>
  testimonials.filter((t) => t.verified);

/**
 * Get testimonials by rating
 */
export const getTestimonialsByRating = (minRating = 4) =>
  testimonials.filter((t) => t.rating >= minRating);

/**
 * Get testimonials for project
 */
export const getTestimonialsForProject = (projectId) =>
  testimonials.filter((t) => t.projectId === projectId);

/**
 * Search testimonials
 */
export const searchTestimonials = (query) => {
  const lowerQuery = query.toLowerCase();
  return testimonials.filter(
    (t) =>
      t.name.toLowerCase().includes(lowerQuery) ||
      t.company.toLowerCase().includes(lowerQuery) ||
      t.quote.toLowerCase().includes(lowerQuery) ||
      t.project.toLowerCase().includes(lowerQuery)
  );
};

/**
 * Get testimonials sorted by date
 */
export const getTestimonialsByDate = (order = 'desc') =>
  [...testimonials].sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return order === 'desc' ? dateB - dateA : dateA - dateB;
  });

/**
 * Get average rating
 */
export const getAverageRating = () => {
  const total = testimonials.reduce((sum, t) => sum + t.rating, 0);
  return (total / testimonials.length).toFixed(1);
};

/**
 * Testimonial statistics
 */
export const testimonialStats = {
  total: testimonials.length,
  featured: testimonials.filter((t) => t.featured).length,
  verified: testimonials.filter((t) => t.verified).length,
  averageRating: getAverageRating(),
  fiveStar: testimonials.filter((t) => t.rating === 5).length,
  byCategory: testimonialCategories
    .filter((cat) => cat.id !== 'all')
    .map((cat) => ({
      ...cat,
      count: getTestimonialsByCategory(cat.id).length,
    })),
};

/**
 * Featured testimonials for homepage
 */
export const homePageTestimonials = getFeaturedTestimonials().slice(0, 3);

export default testimonials;