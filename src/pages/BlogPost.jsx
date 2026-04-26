/* ============================================
   📖 BLOG POST READER PAGE
   Full reading experience with all features
   Theme: Midnight Tech
   ============================================ */

import React, { useEffect, useState, useRef, useCallback } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FiArrowLeft,
  FiCalendar,
  FiClock,
  FiUser,
  FiTag,
  FiCopy,
  FiCheck,
  FiTwitter,
  FiLinkedin,
  FiList,
  FiChevronRight,
  FiAlertCircle,
  FiInfo,
  FiCheckCircle,
  FiZap,
  FiArrowRight,
  FiBookOpen,
  FiShare2,
} from 'react-icons/fi';
import { FaWhatsapp, FaGithub, FaLinkedin } from 'react-icons/fa';

import { getPostBySlug, getRelatedPosts, getPrevNextPosts } from '../data/blogPosts';
import usePageMeta from '../hooks/usePageMeta';

/* ══════════════════════════════════════════════
   READING PROGRESS BAR
   ══════════════════════════════════════════════ */
const ReadingProgressBar = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop    = window.scrollY;
      const docHeight    = document.documentElement.scrollHeight - window.innerHeight;
      const pct          = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setProgress(Math.min(100, Math.max(0, pct)));
    };

    window.addEventListener('scroll', updateProgress, { passive: true });
    return () => window.removeEventListener('scroll', updateProgress);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-1 bg-border/30">
      <motion.div
        className="h-full bg-gradient-to-r from-accent to-accent-hover origin-left"
        style={{ scaleX: progress / 100 }}
        transition={{ duration: 0.1 }}
      />
    </div>
  );
};

/* ══════════════════════════════════════════════
   TABLE OF CONTENTS
   ══════════════════════════════════════════════ */
const TableOfContents = ({ toc, activeId }) => {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 100;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <div className="
      bg-primary-light/30 border border-border
      rounded-2xl p-5 sticky top-28
    ">
      <div className="flex items-center gap-2 mb-4 pb-3 border-b border-border">
        <FiList size={16} className="text-accent" />
        <h3 className="font-mono text-xs text-accent uppercase tracking-wider font-semibold">
          Table of Contents
        </h3>
      </div>

      <nav className="space-y-1">
        {toc.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className={`
              w-full text-left flex items-center gap-2
              px-3 py-2 rounded-lg text-sm
              transition-all duration-200
              group
              ${activeId === item.id
                ? 'bg-accent/10 text-accent border-l-2 border-accent pl-2'
                : 'text-text-body/60 hover:text-text-heading hover:bg-primary/50'
              }
            `}
          >
            <FiChevronRight
              size={12}
              className={`
                flex-shrink-0 transition-transform duration-200
                ${activeId === item.id ? 'text-accent rotate-90' : 'text-text-body/30 group-hover:text-accent'}
              `}
            />
            <span className="leading-tight">{item.title}</span>
          </button>
        ))}
      </nav>
    </div>
  );
};

/* ══════════════════════════════════════════════
   CODE BLOCK
   Syntax highlighted code with copy button
   ══════════════════════════════════════════════ */
const CodeBlock = ({ code, language, filename }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Simple syntax highlighting tokens
  const highlight = (code, lang) => {
    if (!lang) return code;

    const lines = code.split('\n');
    return lines.map((line, i) => (
      <span key={i} className="block">
        {highlightLine(line, lang)}
        {'\n'}
      </span>
    ));
  };

  const highlightLine = (line, lang) => {
    // Keywords
    const jsKeywords = /\b(const|let|var|function|return|import|export|from|default|async|await|class|new|if|else|try|catch|for|of|in|typeof|null|undefined|true|false)\b/g;
    const phpKeywords = /\b(function|return|if|else|foreach|class|new|public|private|protected|static|echo|require|include|use|namespace|extends|implements)\b/g;
    const pyKeywords  = /\b(def|return|import|from|if|else|elif|for|in|class|self|True|False|None|async|await|with|as|try|except)\b/g;

    // Simple color replacement — returns the line with spans
    return <SyntaxLine line={line} lang={lang} />;
  };

  return (
    <div className="my-8 rounded-2xl overflow-hidden border border-border/60 shadow-xl shadow-black/20">
      {/* Header */}
      <div className="
        flex items-center justify-between
        px-5 py-3
        bg-primary-light border-b border-border/60
      ">
        <div className="flex items-center gap-3">
          {/* Traffic lights */}
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500/70"    />
            <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
            <div className="w-3 h-3 rounded-full bg-green-500/70"  />
          </div>
          {filename && (
            <span className="font-mono text-xs text-text-body/50">
              {filename}
            </span>
          )}
        </div>

        <div className="flex items-center gap-3">
          {language && (
            <span className="
              font-mono text-[10px] uppercase tracking-wider
              text-accent/60 bg-accent/10
              px-2 py-0.5 rounded
            ">
              {language}
            </span>
          )}
          <motion.button
            onClick={handleCopy}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="
              flex items-center gap-1.5
              text-xs text-text-body/50 hover:text-accent
              transition-colors duration-200
            "
          >
            <AnimatePresence mode="wait">
              {copied ? (
                <motion.span
                  key="check"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex items-center gap-1 text-green-400"
                >
                  <FiCheck size={14} /> Copied!
                </motion.span>
              ) : (
                <motion.span
                  key="copy"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex items-center gap-1"
                >
                  <FiCopy size={14} /> Copy
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      {/* Code */}
      <div className="
        relative overflow-x-auto
        bg-[#0d1117]
      ">
        <pre className="
          p-5 text-sm leading-relaxed
          font-mono text-gray-300
          min-w-full
        ">
          <code>{code}</code>
        </pre>
      </div>
    </div>
  );
};

// Simple line renderer with basic coloring
const SyntaxLine = ({ line, lang }) => {
  return <span className="text-gray-300">{line}</span>;
};

/* ══════════════════════════════════════════════
   CALLOUT BLOCK
   Info / Tip / Warning / Success boxes
   ══════════════════════════════════════════════ */
const Callout = ({ variant = 'info', text }) => {
  const variants = {
    info: {
      bg: 'bg-blue-500/8',
      border: 'border-blue-500/25',
      icon: <FiInfo size={18} className="text-blue-400 flex-shrink-0 mt-0.5" />,
      label: 'Note',
      labelColor: 'text-blue-400',
    },
    tip: {
      bg: 'bg-accent/8',
      border: 'border-accent/25',
      icon: <FiZap size={18} className="text-accent flex-shrink-0 mt-0.5" />,
      label: 'Pro Tip',
      labelColor: 'text-accent',
    },
    warning: {
      bg: 'bg-yellow-500/8',
      border: 'border-yellow-500/25',
      icon: <FiAlertCircle size={18} className="text-yellow-400 flex-shrink-0 mt-0.5" />,
      label: 'Warning',
      labelColor: 'text-yellow-400',
    },
    success: {
      bg: 'bg-green-500/8',
      border: 'border-green-500/25',
      icon: <FiCheckCircle size={18} className="text-green-400 flex-shrink-0 mt-0.5" />,
      label: 'Key Insight',
      labelColor: 'text-green-400',
    },
  };

  const v = variants[variant] || variants.info;

  return (
    <div className={`
      my-6 flex gap-4 p-5 rounded-xl
      border ${v.bg} ${v.border}
    `}>
      {v.icon}
      <div>
        <span className={`font-semibold text-sm ${v.labelColor} block mb-1`}>
          {v.label}
        </span>
        <p className="text-text-body text-sm leading-relaxed">{text}</p>
      </div>
    </div>
  );
};

/* ══════════════════════════════════════════════
   CONTENT RENDERER
   Renders all content block types
   ══════════════════════════════════════════════ */
const ContentRenderer = ({ blocks }) => {
  return (
    <div className="prose-content">
      {blocks.map((block, index) => {
        switch (block.type) {

          case 'heading':
            const Tag = `h${block.level}`;
            const headingClasses = {
              2: 'font-heading font-bold text-2xl md:text-3xl text-text-heading mt-12 mb-5 pb-3 border-b border-border/50',
              3: 'font-heading font-semibold text-xl text-text-heading mt-8 mb-4',
              4: 'font-heading font-semibold text-lg text-accent mt-6 mb-3',
            };
            return (
              <Tag
                key={index}
                id={block.id}
                className={headingClasses[block.level] || headingClasses[2]}
              >
                {block.text}
              </Tag>
            );

          case 'paragraph':
            return (
              <p
                key={index}
                className="text-text-body leading-relaxed text-base mb-5"
              >
                {block.text}
              </p>
            );

          case 'list':
            return (
              <ul key={index} className="my-5 space-y-2.5 pl-4">
                {block.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-text-body text-sm leading-relaxed">
                    <span className="
                      flex-shrink-0 mt-1.5
                      w-5 h-5 flex items-center justify-center
                    ">
                      {block.style === 'numbered' ? (
                        <span className="
                          w-5 h-5 rounded-full bg-accent/20
                          text-accent text-[10px] font-bold
                          flex items-center justify-center
                          flex-shrink-0
                        ">
                          {i + 1}
                        </span>
                      ) : (
                        <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0 mt-1" />
                      )}
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            );

          case 'code':
            return (
              <CodeBlock
                key={index}
                code={block.code}
                language={block.language}
                filename={block.filename}
              />
            );

          case 'callout':
            return (
              <Callout
                key={index}
                variant={block.variant}
                text={block.text}
              />
            );

          default:
            return null;
        }
      })}
    </div>
  );
};

/* ══════════════════════════════════════════════
   SHARE BUTTONS
   ══════════════════════════════════════════════ */
const ShareButtons = ({ post }) => {
  const [copied, setCopied] = useState(false);
  const url = window.location.href;

  const copyLink = async () => {
    await navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const shareLinks = [
    {
      name: 'WhatsApp',
      icon: <FaWhatsapp size={18} />,
      color: 'hover:bg-green-500/20 hover:border-green-500/40 hover:text-green-400',
      href: `https://wa.me/?text=${encodeURIComponent(`${post.title}\n${url}`)}`,
    },
    {
      name: 'Twitter / X',
      icon: <FiTwitter size={18} />,
      color: 'hover:bg-sky-500/20 hover:border-sky-500/40 hover:text-sky-400',
      href: `https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(url)}`,
    },
    {
      name: 'LinkedIn',
      icon: <FiLinkedin size={18} />,
      color: 'hover:bg-blue-500/20 hover:border-blue-500/40 hover:text-blue-400',
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
    },
  ];

  return (
    <div className="
      flex flex-col sm:flex-row items-start sm:items-center
      gap-3
    ">
      <div className="flex items-center gap-1.5 text-xs text-text-body/50 font-mono uppercase tracking-wider">
        <FiShare2 size={12} />
        <span>Share</span>
      </div>

      <div className="flex items-center gap-2">
        {shareLinks.map((s) => (
          <motion.a
            key={s.name}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            title={s.name}
            className={`
              w-9 h-9 flex items-center justify-center
              rounded-lg border border-border
              text-text-body/60
              transition-all duration-300
              ${s.color}
            `}
          >
            {s.icon}
          </motion.a>
        ))}

        {/* Copy link */}
        <motion.button
          onClick={copyLink}
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.95 }}
          title="Copy link"
          className="
            w-9 h-9 flex items-center justify-center
            rounded-lg border border-border
            text-text-body/60
            hover:bg-accent/20 hover:border-accent/40 hover:text-accent
            transition-all duration-300
          "
        >
          <AnimatePresence mode="wait">
            {copied ? (
              <motion.span
                key="check"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
              >
                <FiCheck size={16} className="text-green-400" />
              </motion.span>
            ) : (
              <motion.span key="copy" initial={{ scale: 1 }}>
                <FiCopy size={16} />
              </motion.span>
            )}
          </AnimatePresence>
        </motion.button>
      </div>
    </div>
  );
};

/* ══════════════════════════════════════════════
   AUTHOR CARD
   ══════════════════════════════════════════════ */
const AuthorCard = ({ author, bio }) => (
  <div className="
    flex flex-col sm:flex-row items-start gap-5
    p-6 rounded-2xl
    bg-primary-light/30 border border-border
    hover:border-accent/30 transition-colors duration-300
  ">
    {/* Avatar */}
    <div className="
      w-16 h-16 flex-shrink-0
      rounded-2xl bg-gradient-to-br from-accent/30 to-accent/10
      border-2 border-accent/30
      flex items-center justify-center
      text-2xl font-bold text-accent
    ">
      H
    </div>

    <div className="flex-1">
      <div className="flex flex-wrap items-center gap-3 mb-2">
        <h3 className="font-heading font-bold text-text-heading text-lg">
          {author}
        </h3>
        <span className="
          px-2.5 py-0.5
          bg-accent/10 text-accent
          text-xs font-mono rounded-full border border-accent/20
        ">
          Full Stack Developer
        </span>
      </div>

      <p className="text-text-body text-sm leading-relaxed mb-4">
        {bio}
      </p>

      {/* Social links */}
      <div className="flex items-center gap-3">
        {[
          { icon: <FaGithub size={16} />,   href: 'https://github.com',    label: 'GitHub'   },
          { icon: <FaLinkedin size={16} />, href: 'https://linkedin.com',  label: 'LinkedIn' },
          { icon: <FiTwitter size={16} />,  href: 'https://twitter.com',   label: 'Twitter'  },
        ].map((s) => (
          <motion.a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, y: -2 }}
            className="
              w-8 h-8 flex items-center justify-center
              rounded-lg border border-border
              text-text-body/50 hover:text-accent
              hover:border-accent/40 hover:bg-accent/10
              transition-all duration-300
            "
            aria-label={s.label}
          >
            {s.icon}
          </motion.a>
        ))}
        <Link
          to="/contact"
          className="
            px-4 py-1.5 ml-2
            bg-accent/10 hover:bg-accent
            text-accent hover:text-primary-dark
            border border-accent/30 hover:border-accent
            rounded-lg text-xs font-medium
            transition-all duration-300
          "
        >
          Hire Hamad
        </Link>
      </div>
    </div>
  </div>
);

/* ══════════════════════════════════════════════
   RELATED POST CARD
   ══════════════════════════════════════════════ */
const RelatedPostCard = ({ post }) => {
  const CATEGORY_COLORS = {
    'React':    'text-cyan-400',
    'Backend':  'text-green-400',
    'Project':  'text-accent',
    'Business': 'text-orange-400',
    'WordPress':'text-indigo-400',
    'AI/ML':    'text-red-400',
  };

  return (
    <Link to={`/blog/${post.slug}`} className="group block">
      <motion.div
        whileHover={{ y: -4 }}
        className="
          p-5 rounded-xl
          bg-primary-light/30 border border-border
          hover:border-accent/30
          transition-all duration-300
          h-full
        "
      >
        <div className="flex items-center gap-2 mb-3">
          <span className={`text-xs font-mono ${CATEGORY_COLORS[post.category] || 'text-accent'}`}>
            {post.category}
          </span>
          <span className="text-text-body/30 text-xs">·</span>
          <span className="text-text-body/40 text-xs flex items-center gap-1">
            <FiClock size={10} /> {post.readTime}
          </span>
        </div>

        <h4 className="
          font-heading font-semibold text-sm text-text-heading
          group-hover:text-accent transition-colors duration-300
          line-clamp-2 mb-2 leading-snug
        ">
          {post.title}
        </h4>

        <p className="text-text-body/60 text-xs line-clamp-2 leading-relaxed mb-3">
          {post.excerpt}
        </p>

        <span className="
          inline-flex items-center gap-1
          text-xs font-medium text-accent/70
          group-hover:text-accent group-hover:gap-2
          transition-all duration-300
        ">
          Read article <FiArrowRight size={12} />
        </span>
      </motion.div>
    </Link>
  );
};

/* ══════════════════════════════════════════════
   PREV / NEXT NAVIGATION
   ══════════════════════════════════════════════ */
const PostNavigation = ({ prev, next }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-12">
    {prev ? (
      <Link to={`/blog/${prev.slug}`} className="group">
        <motion.div
          whileHover={{ x: -4 }}
          className="
            flex items-start gap-3 p-4
            bg-primary-light/30 border border-border
            hover:border-accent/30 rounded-xl
            transition-all duration-300
          "
        >
          <FiArrowLeft size={18} className="text-accent flex-shrink-0 mt-1" />
          <div>
            <div className="text-[10px] font-mono text-text-body/40 uppercase tracking-wider mb-1">
              Previous
            </div>
            <div className="text-sm font-medium text-text-heading group-hover:text-accent transition-colors line-clamp-2">
              {prev.title}
            </div>
          </div>
        </motion.div>
      </Link>
    ) : <div />}

    {next && (
      <Link to={`/blog/${next.slug}`} className="group sm:justify-self-end w-full">
        <motion.div
          whileHover={{ x: 4 }}
          className="
            flex items-start justify-end gap-3 p-4
            bg-primary-light/30 border border-border
            hover:border-accent/30 rounded-xl
            transition-all duration-300 text-right
          "
        >
          <div>
            <div className="text-[10px] font-mono text-text-body/40 uppercase tracking-wider mb-1">
              Next
            </div>
            <div className="text-sm font-medium text-text-heading group-hover:text-accent transition-colors line-clamp-2">
              {next.title}
            </div>
          </div>
          <FiArrowRight size={18} className="text-accent flex-shrink-0 mt-1" />
        </motion.div>
      </Link>
    )}
  </div>
);

/* ══════════════════════════════════════════════
   MAIN BLOG POST PAGE
   ══════════════════════════════════════════════ */
const BlogPost = () => {
  const { slug }        = useParams();
  const navigate        = useNavigate();
  const [activeId, setActiveId] = useState('');
  const contentRef      = useRef(null);

  const post         = getPostBySlug(slug);
  const relatedPosts = post ? getRelatedPosts(post) : [];
  const { prev, next } = post ? getPrevNextPosts(post) : { prev: null, next: null };

  usePageMeta({
    title: post ? `${post.title} | Hamad Hussain` : 'Blog Post | Hamad Hussain',
    description: post?.excerpt || 'Read development articles, case studies, and business software insights by Hamad Hussain.',
    robots: post ? 'index, follow' : 'noindex, follow',
  });

  /* ── Active TOC section on scroll ── */
  useEffect(() => {
    if (!post?.toc) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: '-20% 0px -70% 0px' }
    );

    post.toc.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [post]);

  /* ── 404 if post not found ── */
  if (!post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center pt-24 pb-20 text-center px-6">
        <div className="text-8xl mb-6">📭</div>
        <h1 className="font-heading font-bold text-3xl text-text-heading mb-4">
          Post Not Found
        </h1>
        <p className="text-text-body mb-8 max-w-md">
          This article doesn't exist or may have been moved.
        </p>
        <button
          onClick={() => navigate('/blog')}
          className="
            inline-flex items-center gap-2
            px-6 py-3
            bg-accent text-primary-dark
            font-semibold rounded-xl
            hover:bg-accent-hover transition-colors
          "
        >
          <FiArrowLeft size={18} />
          Back to Blog
        </button>
      </div>
    );
  }

  const categoryColors = {
    'React':    '#61DAFB',
    'Backend':  '#339933',
    'Project':  '#64FFDA',
    'Business': '#F97316',
    'WordPress':'#818CF8',
    'AI/ML':    '#F87171',
    'CSS':      '#EC4899',
  };
  const catColor = categoryColors[post.category] || '#64FFDA';

  return (
    <>
      {/* Reading progress bar */}
      <ReadingProgressBar />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="pt-24 pb-20"
      >
        {/* ═══ HERO ═══ */}
        <section className="relative overflow-hidden mb-12">
          {/* BG decoration */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-10"
              style={{ background: catColor }} />
            <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full blur-3xl opacity-5"
              style={{ background: catColor }} />
          </div>

          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto pt-8">

              {/* Back button */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="mb-8"
              >
                <Link
                  to="/blog"
                  className="
                    inline-flex items-center gap-2
                    text-sm text-text-body/60 hover:text-accent
                    transition-colors duration-300
                    group
                  "
                >
                  <FiArrowLeft
                    size={16}
                    className="group-hover:-translate-x-1 transition-transform duration-300"
                  />
                  Back to Blog
                </Link>
              </motion.div>

              {/* Category + tags row */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-wrap items-center gap-3 mb-6"
              >
                <span
                  className="px-3 py-1.5 rounded-full text-xs font-mono font-semibold border"
                  style={{
                    color: catColor,
                    background: `${catColor}15`,
                    borderColor: `${catColor}30`,
                  }}
                >
                  {post.category}
                </span>
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="
                      flex items-center gap-1
                      px-2.5 py-1 rounded-lg text-[11px] font-mono
                      text-text-body/50 bg-primary/60 border border-border/60
                    "
                  >
                    <FiTag size={9} /> {tag}
                  </span>
                ))}
              </motion.div>

              {/* Title */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="
                  font-heading font-bold
                  text-3xl md:text-4xl lg:text-5xl
                  text-text-heading leading-tight mb-6
                "
              >
                {post.title}
              </motion.h1>

              {/* Excerpt */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
                className="text-text-body text-lg leading-relaxed mb-8"
              >
                {post.excerpt}
              </motion.p>

              {/* Meta row */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="
                  flex flex-wrap items-center justify-between
                  gap-4 pb-8 border-b border-border
                "
              >
                {/* Author + date + read time */}
                <div className="flex flex-wrap items-center gap-5">
                  <div className="flex items-center gap-2.5">
                    <div className="
                      w-9 h-9 rounded-full
                      bg-gradient-to-br from-accent/30 to-accent/10
                      border border-accent/30
                      flex items-center justify-center
                      text-sm font-bold text-accent
                    ">
                      H
                    </div>
                    <div>
                      <div className="text-text-heading text-sm font-semibold">
                        Hamad
                      </div>
                      <div className="text-text-body/50 text-[11px]">
                        Full Stack Developer
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 text-xs text-text-body/50">
                    <span className="flex items-center gap-1.5">
                      <FiCalendar size={12} /> {post.date}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <FiClock size={12} /> {post.readTime}
                    </span>
                  </div>
                </div>

                {/* Share */}
                <ShareButtons post={post} />
              </motion.div>
            </div>
          </div>
        </section>

        {/* ═══ MAIN CONTENT AREA ═══ */}
        <div className="container mx-auto px-6">
          <div className="
            flex gap-10 items-start
            max-w-6xl mx-auto
          ">
            {/* ── LEFT: TOC (desktop) ── */}
            {post.toc?.length > 0 && (
              <aside className="hidden xl:block w-64 flex-shrink-0">
                <TableOfContents toc={post.toc} activeId={activeId} />
              </aside>
            )}

            {/* ── CENTER: Article content ── */}
            <article
              ref={contentRef}
              className="flex-1 min-w-0 max-w-3xl mx-auto"
            >
              {/* Mobile TOC */}
              {post.toc?.length > 0 && (
                <div className="xl:hidden mb-8">
                  <details className="
                    bg-primary-light/30 border border-border
                    rounded-xl overflow-hidden
                  ">
                    <summary className="
                      flex items-center gap-2 px-5 py-4
                      cursor-pointer text-sm font-medium text-text-heading
                      hover:text-accent transition-colors
                    ">
                      <FiList size={16} className="text-accent" />
                      Table of Contents
                    </summary>
                    <div className="px-5 pb-4 space-y-1">
                      {post.toc.map((item) => (
                        <button
                          key={item.id}
                          onClick={() => {
                            const el = document.getElementById(item.id);
                            if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                          }}
                          className="
                            w-full text-left flex items-center gap-2
                            px-3 py-2 rounded-lg text-sm
                            text-text-body/70 hover:text-accent hover:bg-accent/5
                            transition-all duration-200
                          "
                        >
                          <FiChevronRight size={12} className="text-accent/50" />
                          {item.title}
                        </button>
                      ))}
                    </div>
                  </details>
                </div>
              )}

              {/* Article Body */}
              <ContentRenderer blocks={post.content} />

              {/* Divider */}
              <div className="mt-16 mb-8 border-t border-border" />

              {/* Share + Tags footer */}
              <div className="
                flex flex-col sm:flex-row items-start sm:items-center
                justify-between gap-5 mb-12
              ">
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="
                        px-3 py-1.5 rounded-lg text-xs font-mono
                        text-text-body/60 bg-primary/60 border border-border/60
                        hover:border-accent/30 hover:text-accent
                        transition-colors duration-200 cursor-default
                      "
                    >
                      # {tag}
                    </span>
                  ))}
                </div>
                <ShareButtons post={post} />
              </div>

              {/* Author Card */}
              <AuthorCard author={post.author} bio={post.authorBio} />

              {/* Prev / Next */}
              <PostNavigation prev={prev} next={next} />

              {/* Related Posts */}
              {relatedPosts.length > 0 && (
                <div className="mt-16">
                  <div className="flex items-center gap-3 mb-6">
                    <FiBookOpen size={18} className="text-accent" />
                    <h2 className="font-heading font-bold text-xl text-text-heading">
                      Related Articles
                    </h2>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {relatedPosts.map((rp) => (
                      <RelatedPostCard key={rp.id} post={rp} />
                    ))}
                  </div>
                </div>
              )}
            </article>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default BlogPost;
