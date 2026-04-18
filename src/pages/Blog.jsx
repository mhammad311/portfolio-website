/* ============================================
   📝 BLOG PAGE - UPDATED
   Author: Hamad everywhere
   Added: Tech posts, Project posts, Business posts
   Theme: Midnight Tech
   ============================================ */

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';                    // ← ADDED
import { 
  FiCalendar, 
  FiUser, 
  FiClock,
  FiSearch,
  FiTrendingUp,
  FiBookOpen,
  FiCode,
  FiGlobe,
  FiShoppingCart,
  FiCpu,
  FiLayers,
  FiZap,
  FiArrowRight,
  FiTag,
} from 'react-icons/fi';
import {
  SiReact,
  SiNodedotjs,
  SiWordpress,
  SiMongodb,
  SiShopify,
  SiNextdotjs,
} from 'react-icons/si';

import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';
import Card from '../components/Card';
import { blogPosts as blogPostsData } from '../data/blogPosts';  // ← ADDED

/* ── Category color map ── */
const CATEGORY_COLORS = {
  'React':          { bg: 'bg-cyan-500/10',    text: 'text-cyan-400',    border: 'border-cyan-500/20'    },
  'Backend':        { bg: 'bg-green-500/10',   text: 'text-green-400',   border: 'border-green-500/20'   },
  'CSS':            { bg: 'bg-pink-500/10',    text: 'text-pink-400',    border: 'border-pink-500/20'    },
  'Performance':    { bg: 'bg-yellow-500/10',  text: 'text-yellow-400',  border: 'border-yellow-500/20'  },
  'TypeScript':     { bg: 'bg-blue-500/10',    text: 'text-blue-400',    border: 'border-blue-500/20'    },
  'WordPress':      { bg: 'bg-indigo-500/10',  text: 'text-indigo-400',  border: 'border-indigo-500/20'  },
  'Next.js':        { bg: 'bg-white/10',       text: 'text-white/80',    border: 'border-white/20'       },
  'MongoDB':        { bg: 'bg-emerald-500/10', text: 'text-emerald-400', border: 'border-emerald-500/20' },
  'Project':        { bg: 'bg-accent/10',      text: 'text-accent',      border: 'border-accent/20'      },
  'Business':       { bg: 'bg-orange-500/10',  text: 'text-orange-400',  border: 'border-orange-500/20'  },
  'Accessibility':  { bg: 'bg-purple-500/10',  text: 'text-purple-400',  border: 'border-purple-500/20'  },
  'AI/ML':          { bg: 'bg-red-500/10',     text: 'text-red-400',     border: 'border-red-500/20'     },
};

const getCategoryStyle = (cat) =>
  CATEGORY_COLORS[cat] || { bg: 'bg-accent/10', text: 'text-accent', border: 'border-accent/20' };

/* ── Blog post cover icons (no broken images) ── */
const COVER_ICONS = {
  'React':       <SiReact size={56}     className="text-cyan-400/40"    />,
  'Backend':     <SiNodedotjs size={56} className="text-green-400/40"   />,
  'CSS':         <FiLayers size={56}    className="text-pink-400/40"    />,
  'Performance': <FiZap size={56}       className="text-yellow-400/40"  />,
  'TypeScript':  <FiCode size={56}      className="text-blue-400/40"    />,
  'WordPress':   <SiWordpress size={56} className="text-indigo-400/40"  />,
  'Next.js':     <SiNextdotjs size={56} className="text-white/30"       />,
  'MongoDB':     <SiMongodb size={56}   className="text-emerald-400/40" />,
  'Project':     <FiGlobe size={56}     className="text-accent/40"      />,
  'Business':    <FiShoppingCart size={56} className="text-orange-400/40"/>,
  'Accessibility':<FiGlobe size={56}   className="text-purple-400/40"  />,
  'AI/ML':       <FiCpu size={56}       className="text-red-400/40"     />,
  'Shopify':     <SiShopify size={56}   className="text-green-400/40"   />,
};

/**
 * Helper: Get slug for a post
 * If post has slug from data file → use it
 * If local post without slug → generate from title
 */
const getPostSlug = (post) => {
  if (post.slug) return post.slug;
  return post.title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
};

/**
 * Blog Page Component
 */
const Blog = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery]       = useState('');

  /* ════════════════════════════════════════════
     BLOG POSTS DATA
     Uses data file posts if available,
     falls back to local posts for ones
     not yet in data file
     ════════════════════════════════════════════ */
  const blogPosts = [

    /* ── FEATURED TECH ── */
    {
      id: 1,
      slug: 'react-2025',
      title: 'The Future of React in 2025: What Every Developer Must Know',
      excerpt: 'Exploring React 19, Server Components, concurrent rendering, and the compiler — why React is still the king of frontend.',
      author: 'Hamad',
      date: 'Jan 15, 2025',
      readTime: '8 min read',
      category: 'React',
      tags: ['React', 'JavaScript', 'Frontend', 'React 19'],
      featured: true,
    },
    {
      id: 2,
      slug: 'nodejs-rest-api-guide',
      title: 'Building Scalable REST APIs with Node.js & Express',
      excerpt: 'A complete guide to structuring production-ready APIs — error handling, authentication, rate limiting, and deployment.',
      author: 'Hamad',
      date: 'Jan 10, 2025',
      readTime: '10 min read',
      category: 'Backend',
      tags: ['Node.js', 'Express', 'API', 'Backend'],
      featured: true,
    },

    /* ── TECH POSTS ── */
    {
      id: 3,
      slug: 'tailwind-css-v4-migration',
      title: 'Tailwind CSS v4: What Changed and How to Migrate',
      excerpt: 'Tailwind v4 brings a new engine, CSS-first config, and major performance improvements. Here is everything you need to upgrade.',
      author: 'Hamad',
      date: 'Dec 28, 2024',
      readTime: '7 min read',
      category: 'CSS',
      tags: ['Tailwind CSS', 'CSS', 'Frontend'],
      featured: false,
    },
    {
      id: 4,
      slug: 'mern-jwt-authentication',
      title: 'MERN Stack Authentication: JWT + Refresh Tokens Done Right',
      excerpt: 'Implement secure authentication in your MERN app using access tokens, refresh tokens, HTTP-only cookies, and role-based access control.',
      author: 'Hamad',
      date: 'Dec 20, 2024',
      readTime: '12 min read',
      category: 'Backend',
      tags: ['MERN', 'JWT', 'Authentication', 'Security'],
      featured: false,
    },
    {
      id: 5,
      slug: 'nextjs-15-app-router',
      title: 'Next.js 15 App Router: From Pages to Full-Stack App',
      excerpt: 'A hands-on guide to the Next.js App Router — server actions, streaming, nested layouts, and how to build full-stack apps with ease.',
      author: 'Hamad',
      date: 'Dec 10, 2024',
      readTime: '11 min read',
      category: 'Next.js',
      tags: ['Next.js', 'React', 'Full Stack'],
      featured: false,
    },
    {
      id: 6,
      slug: 'mongodb-aggregation-pipelines',
      title: 'MongoDB Aggregation Pipelines: A Developer\'s Deep Dive',
      excerpt: 'Master MongoDB aggregation — $match, $group, $lookup, $project and build complex data queries that would take SQL 3x as long.',
      author: 'Hamad',
      date: 'Nov 30, 2024',
      readTime: '9 min read',
      category: 'MongoDB',
      tags: ['MongoDB', 'Database', 'Backend', 'NoSQL'],
      featured: false,
    },
    {
      id: 7,
      slug: 'typescript-for-react-developers',
      title: 'TypeScript for React Developers: From Beginner to Confident',
      excerpt: 'Stop fighting TypeScript and start using it productively. Props, hooks, API types, generics — all explained with real React examples.',
      author: 'Hamad',
      date: 'Nov 20, 2024',
      readTime: '8 min read',
      category: 'TypeScript',
      tags: ['TypeScript', 'React', 'JavaScript'],
      featured: false,
    },
    {
      id: 8,
      slug: 'wordpress-custom-theme-2025',
      title: 'WordPress Custom Theme Development from Scratch in 2025',
      excerpt: 'Build a professional WordPress theme using PHP, ACF, custom post types, and the block editor without page builders.',
      author: 'Hamad',
      date: 'Nov 10, 2024',
      readTime: '13 min read',
      category: 'WordPress',
      tags: ['WordPress', 'PHP', 'Theme Development'],
      featured: false,
    },
    {
      id: 9,
      slug: 'web-performance-lighthouse-100',
      title: 'Web Performance Optimization: Hitting 100 on Lighthouse',
      excerpt: 'Lazy loading, code splitting, image optimization, caching strategies, and Core Web Vitals — the complete performance checklist.',
      author: 'Hamad',
      date: 'Oct 25, 2024',
      readTime: '10 min read',
      category: 'Performance',
      tags: ['Performance', 'Lighthouse', 'Core Web Vitals', 'SEO'],
      featured: false,
    },
    {
      id: 10,
      slug: 'ai-phishing-detection-bert-cnn',
      title: 'AI-Based Phishing Detection: How I Built It with BERT + CNN',
      excerpt: 'A behind-the-scenes look at my final year project — combining NLP transformers and convolutional neural networks to detect phishing URLs.',
      author: 'Hamad',
      date: 'Oct 15, 2024',
      readTime: '14 min read',
      category: 'AI/ML',
      tags: ['AI', 'Machine Learning', 'BERT', 'Python', 'NLP'],
      featured: false,
    },
    {
      id: 11,
      slug: 'web-accessibility-2025',
      title: 'Web Accessibility in 2025: The Complete Developer Checklist',
      excerpt: 'WCAG 2.2, ARIA roles, keyboard navigation, screen readers — build apps every user can access, not just some.',
      author: 'Hamad',
      date: 'Oct 5, 2024',
      readTime: '9 min read',
      category: 'Accessibility',
      tags: ['Accessibility', 'WCAG', 'Inclusive Design'],
      featured: false,
    },

    /* ── PROJECT CASE STUDIES ── */
    {
      id: 12,
      slug: 'mern-ecommerce-case-study',
      title: 'Case Study: Building a Multi-Vendor E-Commerce Platform with MERN',
      excerpt: 'How I designed and built a full multi-vendor marketplace — seller dashboards, Stripe payments, order management, and admin panel with role-based access.',
      author: 'Hamad',
      date: 'Sep 20, 2024',
      readTime: '15 min read',
      category: 'Project',
      tags: ['MERN', 'E-Commerce', 'Stripe', 'Case Study'],
      featured: false,
    },
    {
      id: 13,
      slug: 'shopify-custom-theme-case-study',
      title: 'Case Study: Custom Shopify Theme from Liquid to Launch',
      excerpt: 'A real client project — building a high-converting Shopify store with custom Liquid templates, section schema, and performance optimization.',
      author: 'Hamad',
      date: 'Sep 5, 2024',
      readTime: '11 min read',
      category: 'Project',
      tags: ['Shopify', 'Liquid', 'E-Commerce', 'Case Study'],
      featured: false,
    },
    {
      id: 14,
      slug: 'realtime-chat-app-socketio',
      title: 'Case Study: Real-Time Chat App with Socket.io & React',
      excerpt: 'How I built a WhatsApp-style chat application with real-time messaging, typing indicators, read receipts, and online status using Socket.io.',
      author: 'Hamad',
      date: 'Aug 25, 2024',
      readTime: '12 min read',
      category: 'Project',
      tags: ['Socket.io', 'React', 'Node.js', 'Real-Time', 'Case Study'],
      featured: false,
    },
    {
      id: 15,
      slug: 'wordpress-agency-custom-plugin',
      title: 'Case Study: WordPress Agency Website with Custom Plugin',
      excerpt: 'Built a full agency website on WordPress with a custom quote calculator plugin, custom post types, and ACF-powered portfolio section.',
      author: 'Hamad',
      date: 'Aug 10, 2024',
      readTime: '9 min read',
      category: 'Project',
      tags: ['WordPress', 'PHP', 'Plugin Development', 'Case Study'],
      featured: false,
    },

    /* ── BUSINESS SOFTWARE GUIDES ── */
    {
      id: 16,
      slug: 'what-website-does-your-business-need',
      title: 'What Type of Website Does Your Business Actually Need?',
      excerpt: 'Landing page, portfolio, e-commerce, or web app? A clear guide for business owners to understand which solution fits their goals and budget.',
      author: 'Hamad',
      date: 'Jul 28, 2024',
      readTime: '7 min read',
      category: 'Business',
      tags: ['Business', 'Web Strategy', 'Startups', 'Digital'],
      featured: false,
    },
    {
      id: 17,
      slug: 'restaurant-online-ordering-system',
      title: 'Why Every Restaurant Needs an Online Ordering System in 2025',
      excerpt: 'How a custom ordering platform beats Uber Eats commissions, builds direct customer relationships, and increases profit margins significantly.',
      author: 'Hamad',
      date: 'Jul 15, 2024',
      readTime: '6 min read',
      category: 'Business',
      tags: ['Restaurant', 'E-Commerce', 'Business', 'Ordering System'],
      featured: false,
    },
    {
      id: 18,
      slug: 'real-estate-custom-platform',
      title: 'Real Estate Agencies: Why You Need a Custom Property Platform',
      excerpt: 'MLS-style property search, map integration, agent dashboards, lead management — why generic templates fail and custom software wins.',
      author: 'Hamad',
      date: 'Jul 5, 2024',
      readTime: '8 min read',
      category: 'Business',
      tags: ['Real Estate', 'Business', 'Custom Software', 'Web App'],
      featured: false,
    },
    {
      id: 19,
      slug: 'school-education-software-guide',
      title: 'School & Education Platforms: What Software Do You Really Need?',
      excerpt: 'From student portals and fee management to quiz systems and attendance tracking — the complete software checklist for modern schools.',
      author: 'Hamad',
      date: 'Jun 22, 2024',
      readTime: '8 min read',
      category: 'Business',
      tags: ['Education', 'Business', 'LMS', 'Web App'],
      featured: false,
    },
    {
      id: 20,
      slug: 'saas-vs-custom-software',
      title: 'SaaS vs Custom Software: Which Should Your Business Build?',
      excerpt: 'Shopify vs custom store, Notion vs custom CRM, Calendly vs booking system — when off-the-shelf hurts growth and when to go custom.',
      author: 'Hamad',
      date: 'Jun 10, 2024',
      readTime: '9 min read',
      category: 'Business',
      tags: ['SaaS', 'Business', 'Strategy', 'Custom Software'],
      featured: false,
    },
  ];

  /* ── Categories (dynamic count) ── */
  const allCategories = ['All', ...new Set(blogPosts.map((p) => p.category))];

  const categories = allCategories.map((cat) => ({
    id: cat,
    name: cat,
    count: cat === 'All' ? blogPosts.length : blogPosts.filter((p) => p.category === cat).length,
  }));

  /* ── Filtering + Search ── */
  const filteredPosts = useMemo(() => {
    let posts = activeCategory === 'All'
      ? blogPosts
      : blogPosts.filter((p) => p.category === activeCategory);

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      posts = posts.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.excerpt.toLowerCase().includes(q) ||
          p.tags.some((t) => t.toLowerCase().includes(q))
      );
    }
    return posts;
  }, [activeCategory, searchQuery]);

  const featuredPosts = blogPosts.filter((p) => p.featured);

  /* ── Blog Card Cover ── */
  const CoverImage = ({ category, featured = false }) => {
    const style = getCategoryStyle(category);
    return (
      <div className={`
        relative flex items-center justify-center
        ${featured ? 'h-52' : 'h-40'}
        bg-primary/60 overflow-hidden rounded-t-xl
        border-b border-border
      `}>
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(rgba(100,255,218,0.15) 1px, transparent 1px),
              linear-gradient(90deg, rgba(100,255,218,0.15) 1px, transparent 1px)
            `,
            backgroundSize: '30px 30px',
          }}
        />
        {/* Glow */}
        <div className={`
          absolute inset-0
          bg-gradient-to-br
          ${featured ? 'from-accent/8 to-transparent' : 'from-accent/5 to-transparent'}
        `} />
        {/* Icon */}
        {COVER_ICONS[category] || <FiBookOpen size={56} className="text-accent/30" />}

        {/* Featured ribbon */}
        {featured && (
          <div className="
            absolute top-4 left-4
            px-3 py-1
            bg-accent text-primary-dark
            text-xs font-bold rounded-full
            shadow-lg
          ">
            ⭐ Featured
          </div>
        )}
      </div>
    );
  };

  /* ── Category Pill ── */
  const CategoryPill = ({ category }) => {
    const s = getCategoryStyle(category);
    return (
      <span className={`
        inline-flex items-center gap-1.5
        px-3 py-1 rounded-full text-xs font-medium border
        ${s.bg} ${s.text} ${s.border}
      `}>
        <FiTag size={10} />
        {category}
      </span>
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-24 pb-20"
    >
      {/* ═══ HERO ═══ */}
      <section className="relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center py-16 md:py-24">

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="
                inline-flex items-center gap-2
                px-4 py-2 mb-6
                bg-accent/10 border border-accent/20
                rounded-full
              "
            >
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="font-mono text-xs text-accent uppercase tracking-widest">
                Insights & Tutorials
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="
                font-heading font-bold
                text-4xl md:text-5xl lg:text-6xl
                text-text-heading leading-tight mb-6
              "
            >
              <span className="
                bg-gradient-to-r from-accent to-accent-hover
                bg-clip-text text-transparent
              ">
                Developer Blog
              </span>
              <br />
              by Hamad
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-text-body text-xl max-w-3xl mx-auto leading-relaxed mb-10"
            >
              Real-world insights on MERN Stack, WordPress, project case studies,
              and business software guides — written from experience, not theory.
            </motion.p>

            {/* Stats Row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap items-center justify-center gap-8 mb-10"
            >
              {[
                { value: `${blogPosts.length}+`, label: 'Articles' },
                { value: '6+', label: 'Categories' },
                { value: '2+', label: 'Years Writing' },
              ].map((s) => (
                <div key={s.label} className="text-center">
                  <div className="font-heading font-bold text-2xl text-accent">{s.value}</div>
                  <div className="text-text-body/50 text-xs font-mono uppercase tracking-wider">{s.label}</div>
                </div>
              ))}
            </motion.div>

            {/* Search Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              className="max-w-2xl mx-auto"
            >
              <div className="relative group">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search articles, topics, tags..."
                  className="
                    w-full pl-12 pr-4 py-4
                    bg-primary border border-border
                    text-text-heading rounded-xl
                    placeholder:text-text-body/40
                    focus:outline-none focus:border-accent
                    focus:ring-2 focus:ring-accent/20
                    transition-all duration-300
                  "
                />
                <FiSearch className="
                  absolute left-4 top-1/2 -translate-y-1/2
                  text-text-body/40 group-focus-within:text-accent
                  transition-colors duration-300
                  size-5
                " />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="
                      absolute right-4 top-1/2 -translate-y-1/2
                      text-text-body/40 hover:text-accent
                      transition-colors duration-300
                      text-sm font-mono
                    "
                  >
                    clear
                  </button>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ FEATURED POSTS ═══ */}
      {featuredPosts.length > 0 && !searchQuery && activeCategory === 'All' && (
        <section className="py-16 bg-primary/50">
          <div className="container mx-auto px-6">
            <SectionTitle
              subtitle="Featured"
              title="Popular Articles"
              description="Most read and recommended articles by Hamad"
              align="center"
              gradient
            />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
              {featuredPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {/* ✅ CHANGED: Wrapped Card in Link */}
                  <Link to={`/blog/${getPostSlug(post)}`} className="block h-full">
                    <Card
                      hoverable={true}
                      padding="sm"
                      className="overflow-hidden group h-full"
                    >
                      <CoverImage category={post.category} featured={true} />

                      <div className="p-6">
                        {/* Meta */}
                        <div className="flex flex-wrap items-center gap-4 text-xs text-text-body/60 mb-4">
                          <span className="flex items-center gap-1.5">
                            <FiCalendar size={12} /> {post.date}
                          </span>
                          <span className="flex items-center gap-1.5">
                            <FiClock size={12} /> {post.readTime}
                          </span>
                          <span className="flex items-center gap-1.5 text-accent font-medium">
                            <FiUser size={12} /> Hamad
                          </span>
                        </div>

                        <CategoryPill category={post.category} />

                        <h3 className="
                          font-heading font-bold text-xl text-text-heading
                          mt-3 mb-3 leading-snug
                          group-hover:text-accent transition-colors duration-300
                        ">
                          {post.title}
                        </h3>

                        <p className="text-text-body text-sm leading-relaxed mb-5 line-clamp-3">
                          {post.excerpt}
                        </p>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-1.5 mb-5">
                          {post.tags.map((tag) => (
                            <span
                              key={tag}
                              className="
                                px-2 py-0.5 text-[11px] font-mono
                                text-text-body/60 bg-primary/50
                                rounded border border-border/50
                              "
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        {/* ✅ CHANGED: button → span (inside Link now) */}
                        <span className="
                          inline-flex items-center gap-2
                          text-sm font-medium text-accent
                          group-hover:gap-3 transition-all duration-300
                        ">
                          Read Article
                          <FiArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                        </span>
                      </div>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ═══ ALL ARTICLES ═══ */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <SectionTitle
            subtitle="Archive"
            title={searchQuery ? `Results for "${searchQuery}"` : 'All Articles'}
            description={
              searchQuery
                ? `${filteredPosts.length} article${filteredPosts.length !== 1 ? 's' : ''} found`
                : 'Browse all blog posts by category'
            }
            align="center"
          />

          {/* Category Filter Tabs */}
          {!searchQuery && (
            <div className="flex flex-wrap justify-center gap-2 mt-10 mb-12">
              {categories.map((cat) => {
                const s = getCategoryStyle(cat.id);
                return (
                  <motion.button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`
                      flex items-center gap-2
                      px-4 py-2.5 rounded-xl text-sm font-medium
                      transition-all duration-300 border
                      ${activeCategory === cat.id
                        ? 'bg-accent text-primary-dark border-accent shadow-lg shadow-accent/20'
                        : `bg-primary/60 border-border hover:border-accent/30 ${s.text}`
                      }
                    `}
                  >
                    <span>{cat.name}</span>
                    <span className={`
                      px-1.5 py-0.5 text-[10px] rounded-full font-mono
                      ${activeCategory === cat.id
                        ? 'bg-primary-dark/20 text-primary-dark'
                        : 'bg-border text-text-body/60'
                      }
                    `}>
                      {cat.count}
                    </span>
                  </motion.button>
                );
              })}
            </div>
          )}

          {/* Articles Grid */}
          <AnimatePresence mode="wait">
            {filteredPosts.length > 0 ? (
              <motion.div
                key={`${activeCategory}-${searchQuery}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {filteredPosts.map((post, index) => (
                  <motion.div
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                  >
                    {/* ✅ CHANGED: Wrapped Card in Link */}
                    <Link to={`/blog/${getPostSlug(post)}`} className="h-full block">
                      <Card
                        hoverable={true}
                        padding="sm"
                        className="h-full group overflow-hidden flex flex-col"
                      >
                        <CoverImage category={post.category} />

                        <div className="p-5 flex flex-col flex-1">
                          {/* Top: category + featured icon */}
                          <div className="flex items-center justify-between mb-3">
                            <CategoryPill category={post.category} />
                            {post.featured && (
                              <FiTrendingUp
                                size={16}
                                className="text-accent group-hover:scale-110 transition-transform"
                              />
                            )}
                          </div>

                          {/* Title */}
                          <h3 className="
                            font-heading font-semibold text-base text-text-heading
                            mb-2 leading-snug flex-1
                            group-hover:text-accent transition-colors duration-300
                            line-clamp-2
                          ">
                            {post.title}
                          </h3>

                          {/* Excerpt */}
                          <p className="text-text-body/70 text-sm leading-relaxed mb-4 line-clamp-2">
                            {post.excerpt}
                          </p>

                          {/* Tags */}
                          <div className="flex flex-wrap gap-1.5 mb-4">
                            {post.tags.slice(0, 3).map((tag) => (
                              <span
                                key={tag}
                                className="
                                  px-2 py-0.5 text-[10px] font-mono
                                  text-text-body/50 bg-primary/50
                                  rounded border border-border/50
                                "
                              >
                                {tag}
                              </span>
                            ))}
                          </div>

                          {/* Meta + CTA */}
                          <div className="
                            flex items-center justify-between
                            pt-4 border-t border-border mt-auto
                          ">
                            <div className="flex items-center gap-3 text-[11px] text-text-body/50">
                              <span className="flex items-center gap-1">
                                <FiCalendar size={10} /> {post.date}
                              </span>
                              <span className="flex items-center gap-1">
                                <FiClock size={10} /> {post.readTime}
                              </span>
                            </div>

                            {/* ✅ CHANGED: button → span (inside Link now) */}
                            <span className="
                              inline-flex items-center gap-1.5
                              text-xs font-medium text-accent
                              group-hover:gap-2.5 transition-all duration-300
                            ">
                              Read
                              <FiArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
                            </span>
                          </div>

                          {/* Author */}
                          <div className="
                            flex items-center gap-2 mt-3 pt-3
                            border-t border-border/50
                          ">
                            <div className="
                              w-6 h-6 rounded-full bg-accent/20 border border-accent/30
                              flex items-center justify-center
                              text-[10px] font-bold text-accent
                            ">
                              H
                            </div>
                            <span className="text-[11px] text-text-body/50 font-mono">
                              Hamad
                            </span>
                          </div>
                        </div>
                      </Card>
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="
                  text-center py-20
                  bg-primary/30 border border-border
                  rounded-2xl
                "
              >
                <div className="text-6xl mb-6">🔍</div>
                <h3 className="font-heading font-semibold text-xl text-text-heading mb-3">
                  No articles found
                </h3>
                <p className="text-text-body mb-6">
                  Try a different search term or browse all categories.
                </p>
                <div className="flex items-center justify-center gap-4">
                  <Button variant="secondary" onClick={() => setSearchQuery('')}>
                    Clear Search
                  </Button>
                  <Button variant="ghost" onClick={() => { setActiveCategory('All'); setSearchQuery(''); }}>
                    View All
                  </Button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* ═══ NEWSLETTER ═══ */}
      <section className="py-20 bg-primary-light/30">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="
                w-16 h-16 flex items-center justify-center
                bg-accent/10 text-accent rounded-2xl
                mx-auto mb-6
              ">
                <FiBookOpen size={24} />
              </div>

              <h2 className="font-heading font-bold text-3xl text-text-heading mb-4">
                Stay Updated
              </h2>

              <p className="text-text-body text-lg mb-2">
                Subscribe to get the latest articles by <span className="text-accent font-semibold">Hamad</span> — 
                tutorials, case studies, and business software insights.
              </p>
              <p className="text-text-body/50 text-sm mb-8">
                No spam. No fluff. Just real developer insights.
              </p>

              <form
                className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
                onSubmit={(e) => e.preventDefault()}
              >
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="
                    flex-grow px-4 py-3
                    bg-primary border border-border
                    text-text-heading rounded-xl
                    placeholder:text-text-body/40
                    focus:outline-none focus:border-accent
                    focus:ring-2 focus:ring-accent/20
                    transition-all duration-300
                  "
                  required
                />
                <Button type="submit" variant="primary" className="flex-shrink-0">
                  Subscribe
                </Button>
              </form>

              <p className="text-xs text-text-body/40 mt-4">
                No spam — unsubscribe at any time.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Blog;