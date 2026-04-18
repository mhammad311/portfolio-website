/* ============================================
   🖥️ 3D DEVELOPER ILLUSTRATION
   Replaces Unsplash image in About hero
   Pure CSS + Framer Motion 3D scene
   ============================================ */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FiUser, 
  FiBriefcase, 
  FiTarget, 
  FiAward,
  FiCode,
  FiGlobe,
  FiMonitor,
  FiBookOpen,
  FiMapPin,
  FiCalendar,
  FiCheckCircle,
  FiZap,
  FiTrendingUp,
  FiWifi,
  FiTerminal,
} from 'react-icons/fi';
import { 
  SiReact, 
  SiNodedotjs, 
  SiMongodb, 
  SiTailwindcss,
  SiJavascript,
  SiWordpress,
} from 'react-icons/si';

import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';
import Card from '../components/Card';
import { skills, skillCategories } from '../data/skills';
import usePageMeta from '../hooks/usePageMeta';

/* ══════════════════════════════════════════════════
   3D LAPTOP / DEVELOPER SCENE
   Pure CSS 3D transform + animated elements
   ══════════════════════════════════════════════════ */
const Developer3DScene = () => {
  // Floating tech icons around the laptop
  const floatingIcons = [
    { Icon: SiReact,      color: '#61DAFB', top: '8%',  left: '5%',  delay: 0,    duration: 4   },
    { Icon: SiNodedotjs,  color: '#339933', top: '15%', right: '8%', delay: 0.5,  duration: 4.5 },
    { Icon: SiMongodb,    color: '#47A248', top: '55%', left: '2%',  delay: 1,    duration: 3.8 },
    { Icon: SiJavascript, color: '#F7DF1E', top: '70%', right: '5%', delay: 0.8,  duration: 4.2 },
    { Icon: SiTailwindcss,color: '#06B6D4', top: '82%', left: '12%', delay: 1.5,  duration: 5   },
    { Icon: SiWordpress,  color: '#21759B', top: '30%', right: '3%', delay: 0.3,  duration: 3.5 },
  ];

  // Typing lines for code editor simulation
  const codeLines = [
    { text: "const dev = new Developer({",  color: '#61DAFB', width: '85%' },
    { text: "  name: 'Hamad Hussain',",      color: '#98D8A0', width: '70%' },
    { text: "  role: 'Full Stack Dev',",     color: '#98D8A0', width: '72%' },
    { text: "  skills: ['MERN','WP'],",      color: '#98D8A0', width: '68%' },
    { text: "  available: true,",            color: '#64FFDA', width: '55%' },
    { text: "});",                           color: '#61DAFB', width: '22%' },
    { text: "",                              color: 'transparent', width: '0%' },
    { text: "dev.buildAmazing();",           color: '#FFD700', width: '60%' },
  ];

  return (
    <div className="relative w-full max-w-md mx-auto aspect-square flex items-center justify-center">

      {/* ── Ambient glow behind scene ── */}
      <div className="
        absolute inset-0
        bg-gradient-to-br from-accent/8 via-transparent to-blue-500/8
        rounded-full blur-3xl
        animate-pulse
      " />

      {/* ── Floating Tech Icons ── */}
      {floatingIcons.map(({ Icon, color, top, left, right, delay, duration }, i) => (
        <motion.div
          key={i}
          className="absolute z-20"
          style={{ top, left, right }}
          animate={{
            y: [0, -14, 0],
            rotate: [0, 8, -8, 0],
            scale: [1, 1.12, 1],
          }}
          transition={{
            duration,
            delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <div
            className="
              w-10 h-10 flex items-center justify-center
              rounded-xl backdrop-blur-sm
              shadow-lg
              border border-white/10
            "
            style={{
              background: `${color}18`,
              boxShadow: `0 4px 20px ${color}25`,
            }}
          >
            <Icon size={22} style={{ color }} />
          </div>
        </motion.div>
      ))}

      {/* ── 3D Laptop Container ── */}
      <motion.div
        className="relative z-10"
        style={{
          perspective: '1000px',
          perspectiveOrigin: 'center center',
        }}
        animate={{ rotateY: [0, 3, -3, 0] }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        {/* ── Laptop Body Wrapper ── */}
        <div
          style={{
            transform: 'rotateX(8deg) rotateY(-5deg)',
            transformStyle: 'preserve-3d',
          }}
        >
          {/* ════ LAPTOP SCREEN ════ */}
          <div
            className="relative rounded-t-xl overflow-hidden"
            style={{
              width: '320px',
              height: '210px',
              background: 'linear-gradient(145deg, #1a1f2e, #0d1117)',
              border: '3px solid #2d3748',
              borderBottom: 'none',
              boxShadow: `
                inset 0 0 30px rgba(100,255,218,0.03),
                0 -4px 20px rgba(0,0,0,0.5)
              `,
            }}
          >
            {/* Screen inner bezel */}
            <div
              className="absolute inset-2 rounded-lg overflow-hidden"
              style={{ background: '#0d1117' }}
            >
              {/* ── VS Code Editor UI ── */}

              {/* Top bar / title bar */}
              <div
                className="flex items-center gap-2 px-3"
                style={{
                  height: '28px',
                  background: '#1e1e2e',
                  borderBottom: '1px solid #2d3748',
                }}
              >
                {/* Traffic lights */}
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"   />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"/>
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                </div>
                {/* File tab */}
                <div
                  className="flex items-center gap-1.5 px-3 py-0.5 rounded-t text-[10px] font-mono ml-2"
                  style={{
                    background: '#0d1117',
                    color: '#64FFDA',
                    borderTop: '1px solid #64FFDA40',
                  }}
                >
                  <FiCode size={10} />
                  developer.js
                </div>
              </div>

              {/* ── Editor area ── */}
              <div
                className="flex"
                style={{ height: 'calc(100% - 28px)' }}
              >
                {/* Line numbers sidebar */}
                <div
                  className="flex flex-col pt-2 px-2 text-right"
                  style={{
                    width: '28px',
                    background: '#161b27',
                    borderRight: '1px solid #2d3748',
                    color: '#4a5568',
                    fontSize: '9px',
                    fontFamily: 'monospace',
                    lineHeight: '1.8',
                  }}
                >
                  {codeLines.map((_, i) => (
                    <div key={i}>{i + 1}</div>
                  ))}
                </div>

                {/* Code content */}
                <div
                  className="flex-1 pt-2 pl-3 overflow-hidden"
                  style={{
                    fontFamily: 'monospace',
                    fontSize: '9px',
                    lineHeight: '1.8',
                  }}
                >
                  {codeLines.map((line, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: i * 0.15 + 0.5,
                        duration: 0.4,
                      }}
                      className="flex items-center"
                      style={{ color: line.color }}
                    >
                      {/* Animated typing bar */}
                      <motion.span
                        initial={{ width: 0 }}
                        animate={{ width: line.width }}
                        transition={{
                          delay: i * 0.15 + 0.5,
                          duration: 0.6,
                          ease: 'easeOut',
                        }}
                        className="overflow-hidden whitespace-nowrap block"
                      >
                        {line.text}
                      </motion.span>
                    </motion.div>
                  ))}

                  {/* Blinking cursor */}
                  <motion.div
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                    className="inline-block mt-1"
                    style={{
                      width: '7px',
                      height: '13px',
                      background: '#64FFDA',
                      borderRadius: '1px',
                    }}
                  />
                </div>
              </div>
            </div>

            {/* ── Screen reflection glare ── */}
            <div
              className="absolute top-0 left-0 w-1/2 h-full pointer-events-none"
              style={{
                background: 'linear-gradient(135deg, rgba(255,255,255,0.04) 0%, transparent 60%)',
                borderRadius: 'inherit',
              }}
            />

            {/* ── Status bar bottom of screen ── */}
            <div
              className="
                absolute bottom-0 left-0 right-0
                flex items-center justify-between px-3
              "
              style={{
                height: '14px',
                background: '#64FFDA',
              }}
            >
              <span
                className="font-mono flex items-center gap-1"
                style={{ fontSize: '8px', color: '#0d1117', fontWeight: 700 }}
              >
                <FiGlobe size={8} /> main
              </span>
              <span
                className="font-mono flex items-center gap-1"
                style={{ fontSize: '8px', color: '#0d1117' }}
              >
                <FiWifi size={8} /> Connected
              </span>
            </div>
          </div>

          {/* ════ LAPTOP HINGE ════ */}
          <div
            style={{
              width: '320px',
              height: '6px',
              background: 'linear-gradient(180deg, #3d4a5c, #2d3748)',
              borderRadius: '0 0 2px 2px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.6)',
            }}
          />

          {/* ════ LAPTOP BASE / KEYBOARD ════ */}
          <div
            className="relative rounded-b-xl overflow-hidden"
            style={{
              width: '320px',
              height: '130px',
              background: 'linear-gradient(180deg, #2d3748 0%, #1a202c 100%)',
              border: '2px solid #3d4a5c',
              borderTop: 'none',
              boxShadow: '0 15px 40px rgba(0,0,0,0.7)',
            }}
          >
            {/* Keyboard area */}
            <div className="p-3 pt-4">
              {/* Keyboard rows */}
              {[
                { keys: 10, width: '100%' },
                { keys: 9,  width: '95%'  },
                { keys: 8,  width: '88%'  },
                { keys: 6,  width: '75%'  },
              ].map((row, ri) => (
                <div
                  key={ri}
                  className="flex gap-1 mb-1.5 mx-auto"
                  style={{ width: row.width }}
                >
                  {Array.from({ length: row.keys }).map((_, ki) => (
                    <motion.div
                      key={ki}
                      className="flex-1 rounded-sm"
                      style={{
                        height: '10px',
                        background: 'linear-gradient(180deg, #4a5568, #2d3748)',
                        border: '1px solid #4a5568',
                        boxShadow: '0 2px 3px rgba(0,0,0,0.4)',
                      }}
                      whileHover={{ background: '#64FFDA30' }}
                    />
                  ))}
                </div>
              ))}

              {/* Spacebar */}
              <div className="flex justify-center mt-2">
                <div
                  className="rounded-sm"
                  style={{
                    width: '45%',
                    height: '10px',
                    background: 'linear-gradient(180deg, #4a5568, #2d3748)',
                    border: '1px solid #4a5568',
                    boxShadow: '0 2px 3px rgba(0,0,0,0.4)',
                  }}
                />
              </div>
            </div>

            {/* Trackpad */}
            <div
              className="absolute rounded-lg"
              style={{
                width: '70px',
                height: '50px',
                bottom: '12px',
                left: '50%',
                transform: 'translateX(-50%)',
                background: 'linear-gradient(145deg, #3d4a5c, #2d3748)',
                border: '1px solid #4a5568',
                boxShadow: 'inset 0 1px 3px rgba(0,0,0,0.3)',
              }}
            />

            {/* Apple-style logo area */}
            <motion.div
              className="
                absolute top-2 right-4
                w-5 h-5 flex items-center justify-center
                rounded-full
              "
              style={{ background: '#64FFDA20' }}
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 2.5, repeat: Infinity }}
            >
              <div
                className="w-2 h-2 rounded-full"
                style={{ background: '#64FFDA' }}
              />
            </motion.div>

            {/* Bottom reflection */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  'linear-gradient(to bottom, transparent 70%, rgba(100,255,218,0.03) 100%)',
              }}
            />
          </div>
        </div>
      </motion.div>

      {/* ── Ground shadow ── */}
      <div
        className="absolute bottom-6 left-1/2 -translate-x-1/2"
        style={{
          width: '260px',
          height: '20px',
          background: 'radial-gradient(ellipse, rgba(0,0,0,0.5) 0%, transparent 70%)',
          filter: 'blur(8px)',
        }}
      />

      {/* ── Orbiting ring ── */}
      <motion.div
        className="absolute inset-8 rounded-full pointer-events-none"
        style={{
          border: '1px dashed rgba(100,255,218,0.12)',
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      />

      {/* ── Terminal badge bottom right ── */}
      <motion.div
        className="
          absolute bottom-10 right-0 z-30
          flex items-center gap-2
          px-3 py-2 rounded-xl
          backdrop-blur-md
          border border-border/50
        "
        style={{ background: 'rgba(13,17,23,0.85)' }}
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 3, repeat: Infinity, delay: 1 }}
      >
        <FiTerminal size={14} className="text-accent" />
        <span className="text-xs font-mono text-accent">npm run dev</span>
        <motion.span
          animate={{ opacity: [1, 0, 1] }}
          transition={{ duration: 1, repeat: Infinity }}
          className="w-1.5 h-3 bg-accent rounded-sm"
        />
      </motion.div>

      {/* ── Online status badge top right ── */}
      <motion.div
        className="
          absolute top-6 right-0 z-30
          flex items-center gap-2
          px-3 py-2 rounded-xl
          backdrop-blur-md border border-green-500/20
        "
        style={{ background: 'rgba(13,17,23,0.85)' }}
        animate={{ y: [0, -4, 0] }}
        transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
      >
        <span className="relative flex h-2 w-2">
          <span className="
            animate-ping absolute inline-flex h-full w-full
            rounded-full bg-green-400 opacity-75
          " />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
        </span>
        <span className="text-xs font-mono text-green-400">Open to Work</span>
      </motion.div>
    </div>
  );
};

/* ══════════════════════════════════════════════════
   SKILL ICON RENDERER
   ══════════════════════════════════════════════════ */
const SkillIcon = ({ icon: Icon, color, name, size = 20 }) => {
  if (Icon) return <Icon size={size} style={{ color }} />;
  return (
    <span className="font-bold text-xs leading-none" style={{ color }}>
      {name?.slice(0, 2).toUpperCase()}
    </span>
  );
};

/* ══════════════════════════════════════════════════
   SKILL BAR CARD
   ══════════════════════════════════════════════════ */
const SkillBarCard = ({ skill, index }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="
        group flex items-center gap-4
        p-4 rounded-xl
        bg-primary/60 border border-border
        hover:border-accent/40 hover:bg-primary-light/40
        transition-all duration-300 cursor-default
      "
    >
      <div
        className="
          w-10 h-10 flex-shrink-0
          flex items-center justify-center
          rounded-xl transition-all duration-300
          group-hover:scale-110
        "
        style={{
          background: `${skill.color}18`,
          border: `1px solid ${skill.color}35`,
        }}
      >
        <SkillIcon icon={skill.icon} color={skill.color} name={skill.name} size={20} />
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between mb-1.5">
          <span className="
            text-sm font-medium text-text-heading truncate
            group-hover:text-accent transition-colors duration-300
          ">
            {skill.name}
          </span>
          <motion.span
            animate={{ opacity: hovered ? 1 : 0.4 }}
            className="text-xs font-mono ml-2 flex-shrink-0"
            style={{ color: skill.color }}
          >
            {skill.level}%
          </motion.span>
        </div>

        <div className="h-1.5 bg-border rounded-full overflow-hidden">
          <motion.div
            className="h-full rounded-full"
            style={{
              background: `linear-gradient(90deg, ${skill.color}70, ${skill.color})`,
            }}
            initial={{ width: 0 }}
            whileInView={{ width: `${skill.level}%` }}
            viewport={{ once: true }}
            transition={{
              duration: 1.2,
              delay: index * 0.05 + 0.2,
              ease: 'easeOut',
            }}
          />
        </div>
      </div>
    </motion.div>
  );
};

/* ══════════════════════════════════════════════════
   SKILLS SECTION
   ══════════════════════════════════════════════════ */
const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState('frontend');

  const tabCategories = skillCategories.filter((c) => c.id !== 'softSkills');
  const activeSkills  = skills[activeCategory] || [];
  const activeCatInfo = skillCategories.find((c) => c.id === activeCategory);

  const statCards = [
    { label: 'Frontend Skills', count: skills.frontend.length, icon: '🎨', color: '#61DAFB' },
    { label: 'Backend Skills',  count: skills.backend.length,  icon: '⚙️', color: '#339933' },
    { label: 'CMS / Ecommerce', count: skills.cms.length,      icon: '🛒', color: '#21759B' },
    { label: 'DevOps / Tools',  count: skills.tools.length,    icon: '🛠️', color: '#F05032' },
  ];

  return (
    <section className="py-20 bg-primary/50">
      <div className="container mx-auto px-6">
        <SectionTitle
          subtitle="Expertise"
          title="My Skills & Technologies"
          description="Proficient in modern web technologies with 2+ years hands-on experience"
          align="center"
          gradient
        />

        {/* Stat Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="
            grid grid-cols-2 md:grid-cols-4
            gap-4 mt-12 mb-12 max-w-3xl mx-auto
          "
        >
          {statCards.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -4, scale: 1.03 }}
              className="
                text-center p-5
                bg-primary-light/40 border border-border
                hover:border-accent/30 rounded-2xl
                transition-all duration-300 cursor-default
              "
            >
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="font-heading font-bold text-3xl" style={{ color: stat.color }}>
                {stat.count}+
              </div>
              <div className="text-text-body/50 text-xs font-mono uppercase tracking-wider mt-1">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {tabCategories.map((cat) => (
            <motion.button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`
                flex items-center gap-2 px-4 py-2.5
                rounded-xl text-sm font-medium
                transition-all duration-300 border
                ${activeCategory === cat.id
                  ? 'bg-accent text-primary-dark border-accent shadow-lg shadow-accent/20'
                  : 'bg-primary/60 text-text-body border-border hover:border-accent/40 hover:text-text-heading'
                }
              `}
            >
              <span>{cat.icon}</span>
              <span className="hidden sm:inline">{cat.title}</span>
              <span className="sm:hidden">{cat.title.split(' ')[0]}</span>
            </motion.button>
          ))}
        </div>

        {/* Skills Panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
          >
            <div className="
              text-center mb-8 p-4 rounded-2xl
              bg-primary-light/20 border border-border max-w-2xl mx-auto
            ">
              <h3
                className="font-heading font-semibold text-lg mb-1"
                style={{ color: activeCatInfo?.color || '#64FFDA' }}
              >
                {activeCatInfo?.title}
              </h3>
              <p className="text-text-body/60 text-sm">
                {activeCatInfo?.description}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-w-4xl mx-auto">
              {activeSkills.map((skill, index) => (
                <SkillBarCard
                  key={`${activeCategory}-${skill.name}`}
                  skill={skill}
                  index={index}
                />
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Stats Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="
            mt-14 pt-10 border-t border-border
            flex flex-wrap items-center justify-center gap-10 md:gap-16
          "
        >
          {[
            { value: '2+',  label: 'Years Experience',    icon: <FiTrendingUp /> },
            { value: '20+', label: 'Projects Delivered',  icon: <FiZap />        },
            { value: '15+', label: 'Happy Clients',       icon: <FiAward />      },
            { value: '5+',  label: 'Tech Stacks',         icon: <FiCode />       },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center group cursor-default"
            >
              <div className="
                w-10 h-10 mx-auto mb-2
                flex items-center justify-center
                text-accent/60 group-hover:text-accent
                transition-colors duration-300
              ">
                {stat.icon}
              </div>
              <div className="
                font-heading font-bold text-3xl
                bg-gradient-to-r from-accent to-accent-hover
                bg-clip-text text-transparent
              ">
                {stat.value}
              </div>
              <div className="
                text-text-body/50 text-xs font-mono
                uppercase tracking-wider mt-1
              ">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

/* ══════════════════════════════════════════════════
   TIMELINE SECTION
   ══════════════════════════════════════════════════ */
const TimelineSection = () => {
  const timeline = [
    {
      date: 'Jun 2024 – Present',
      duration: 'Full-time · Freelance',
      title: 'Full Stack Web Developer',
      company: 'Self-Employed',
      location: 'Remote · Worldwide',
      type: 'work',
      current: true,
      icon: <FiMonitor size={20} />,
      color: '#64FFDA',
      bullets: [
        'Design and develop full-stack web applications and high-performance websites for agencies and businesses worldwide.',
        'Build scalable MERN stack applications with REST APIs, backend architecture, and admin dashboards with role-based access control.',
        'Develop custom WordPress themes and e-commerce platforms using WooCommerce and Shopify (Liquid).',
        'Deliver end-to-end project implementations covering UI/UX design, API integration, and deployment.',
      ],
      tags: ['MERN Stack', 'WordPress', 'Shopify', 'REST API', 'React.js'],
    },
    {
      date: 'Jan 2026 – Mar 2026',
      duration: '3 months · Internship',
      title: 'MERN Stack Developer',
      company: 'Private Company',
      location: 'Remote',
      type: 'work',
      current: false,
      icon: <FiCode size={20} />,
      color: '#61DAFB',
      bullets: [
        'Developed and optimized MERN stack applications in a production environment.',
        'Collaborated with senior developers on modern JavaScript ecosystem tooling and best practices.',
      ],
      tags: ['MongoDB', 'Express.js', 'React.js', 'Node.js'],
    },
    {
      date: 'Nov 2025 – Dec 2025',
      duration: '2 months · Internship',
      title: 'WordPress Developer',
      company: 'Appverse Technologies',
      location: 'Remote',
      type: 'work',
      current: false,
      icon: <FiGlobe size={20} />,
      color: '#21759B',
      bullets: [
        'Developed custom WordPress themes and plugins using HTML, CSS, JavaScript, and PHP.',
        'Built responsive themes, custom post types, and API-based plugins following WordPress coding standards.',
        'Contributed to performance optimization, debugging, and real-world project implementations.',
      ],
      tags: ['WordPress', 'PHP', 'JavaScript', 'MySQL'],
    },
    {
      date: '2021 – 2025',
      duration: '4 years',
      title: 'Bachelor of Science in Information Technology (BSIT)',
      company: 'University of Jhang',
      location: 'Jhang, Punjab, Pakistan',
      type: 'education',
      current: false,
      icon: <FiBookOpen size={20} />,
      color: '#A78BFA',
      bullets: [
        'Completed final year project on AI-based Phishing Detection using hybrid ML (BERT + CNN).',
        'Strong foundation in web technologies, databases, software engineering, and OOP principles.',
      ],
      tags: ['BSIT', 'AI / ML', 'BERT + CNN', 'Software Engineering'],
    },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <SectionTitle
          subtitle="Professional Journey"
          title="Experience & Education"
          description="Real-world projects, internships, and academic excellence"
          align="center"
          gradient
        />

        {/* Legend */}
        <div className="flex items-center justify-center gap-8 mt-8 mb-16">
          <div className="flex items-center gap-2 text-sm text-text-body/60">
            <div className="w-3 h-3 rounded-full bg-accent" />
            <span>Work Experience</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-text-body/60">
            <div className="w-3 h-3 rounded-full bg-purple-400" />
            <span>Education</span>
          </div>
        </div>

        {/* Items */}
        <div className="max-w-3xl mx-auto space-y-6">
          {timeline.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative flex gap-6 group"
            >
              {/* Icon + line */}
              <div className="flex flex-col items-center">
                <motion.div
                  whileHover={{ scale: 1.15 }}
                  className="
                    w-12 h-12 flex-shrink-0
                    flex items-center justify-center
                    rounded-full border-2 bg-primary z-10
                    transition-all duration-300
                  "
                  style={{
                    borderColor: item.color,
                    boxShadow: `0 0 0 4px ${item.color}12`,
                  }}
                >
                  <span style={{ color: item.color }}>{item.icon}</span>
                </motion.div>

                {index < timeline.length - 1 && (
                  <div
                    className="w-0.5 flex-1 mt-3"
                    style={{
                      background: `linear-gradient(to bottom, ${item.color}40, transparent)`,
                      minHeight: '2rem',
                    }}
                  />
                )}
              </div>

              {/* Card */}
              <div className="
                flex-1 pb-6
                bg-primary-light/30 border border-border
                hover:border-accent/30 rounded-2xl p-6
                transition-all duration-300
                group-hover:shadow-xl group-hover:shadow-black/20
                group-hover:bg-primary-light/50
              ">
                {/* Header */}
                <div className="
                  flex flex-col sm:flex-row
                  sm:items-start justify-between gap-3 mb-5
                ">
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <h3 className="
                        font-heading font-bold text-lg text-text-heading
                        group-hover:text-accent transition-colors duration-300
                      ">
                        {item.title}
                      </h3>
                      {item.current && (
                        <motion.span
                          animate={{ opacity: [1, 0.5, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className="
                            px-2.5 py-0.5 bg-accent/15 text-accent
                            text-[10px] font-mono font-bold
                            uppercase tracking-wider
                            rounded-full border border-accent/30
                          "
                        >
                          🟢 Current
                        </motion.span>
                      )}
                    </div>
                    <p className="font-semibold text-base mb-2" style={{ color: item.color }}>
                      {item.company}
                    </p>
                    <div className="flex flex-wrap gap-x-5 gap-y-1">
                      <span className="flex items-center gap-1.5 text-xs text-text-body/50">
                        <FiCalendar size={12} /> {item.date}
                      </span>
                      <span className="flex items-center gap-1.5 text-xs text-text-body/50">
                        <FiMapPin size={12} /> {item.location}
                      </span>
                    </div>
                  </div>

                  <div className="
                    flex-shrink-0 self-start px-3 py-1.5
                    bg-primary/80 border border-border
                    rounded-lg text-xs font-mono text-text-body/50 whitespace-nowrap
                  ">
                    {item.duration}
                  </div>
                </div>

                <div className="border-t border-border mb-5" />

                {/* Bullets */}
                <ul className="space-y-3 mb-5">
                  {item.bullets.map((bullet, bi) => (
                    <motion.li
                      key={bi}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + bi * 0.06 }}
                      className="flex items-start gap-3 group/item"
                    >
                      <FiCheckCircle
                        size={16}
                        className="
                          mt-0.5 flex-shrink-0 text-text-body/25
                          group-hover/item:text-accent
                          transition-colors duration-300
                        "
                      />
                      <p className="text-text-body text-sm leading-relaxed">
                        {bullet}
                      </p>
                    </motion.li>
                  ))}
                </ul>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <motion.span
                      key={tag}
                      whileHover={{ scale: 1.08, y: -2 }}
                      className="
                        px-3 py-1 text-[11px] font-mono font-medium
                        rounded-lg border cursor-default
                        transition-all duration-200
                      "
                      style={{
                        color: item.color,
                        background: `${item.color}12`,
                        borderColor: `${item.color}30`,
                      }}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ══════════════════════════════════════════════════
   MAIN ABOUT PAGE
   ══════════════════════════════════════════════════ */
const About = () => {
  usePageMeta({
    title: 'About | Hamad Hussain',
    description:
      'Hamad Hussain - Full Stack Web Developer with 2+ years experience in MERN Stack, WordPress, and modern web technologies.',
  });

  const passions = [
    { title: 'Clean Code',          description: 'Writing maintainable, efficient, and well-documented code', icon: <FiCode />      },
    { title: 'User Experience',     description: 'Creating intuitive and delightful user interactions',       icon: <FiUser />      },
    { title: 'Continuous Learning', description: 'Always exploring new technologies and best practices',     icon: <FiTarget />    },
    { title: 'Problem Solving',     description: 'Tackling complex challenges with creative solutions',       icon: <FiBriefcase /> },
  ];

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
          <div className="
            grid grid-cols-1 lg:grid-cols-2
            gap-12 items-center mb-20
          ">
            {/* LEFT: 3D Laptop Scene */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="relative flex items-center justify-center"
            >
              <Developer3DScene />
            </motion.div>

            {/* RIGHT: Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="
                inline-flex items-center gap-2
                px-5 py-2.5 mb-8
                bg-accent/10 border border-accent/20 rounded-full
              ">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span className="font-mono text-xs text-accent uppercase tracking-[0.2em]">
                  About Me
                </span>
              </div>

              <h1 className="
                font-heading font-bold
                text-4xl md:text-5xl
                text-text-heading leading-tight mb-6
              ">
                <span className="
                  bg-gradient-to-r from-accent to-accent-hover
                  bg-clip-text text-transparent
                ">
                  Full Stack Developer
                </span>
                <br />
                with 2+ Years Experience
              </h1>

              <div className="space-y-5 mb-8">
                <p className="text-text-body text-lg leading-relaxed">
                  Passionate Full Stack Developer specializing in MERN Stack,
                  WordPress, and modern web technologies. I build scalable
                  applications, custom e-commerce platforms, and high-performance
                  websites for global clients.
                </p>
                <p className="text-text-body text-lg leading-relaxed">
                  From AI-based phishing detection to production-ready dashboards,
                  I deliver clean, efficient code and exceptional user experiences.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <Button variant="primary" size="lg" href="/portfolio">
                  View Portfolio
                </Button>
                <Button variant="secondary" size="lg" href="/contact">
                  Hire Me
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ SKILLS ═══ */}
      <SkillsSection />

      {/* ═══ TIMELINE ═══ */}
      <TimelineSection />

      {/* ═══ PASSIONS ═══ */}
      <section className="py-20 bg-primary-light/30">
        <div className="container mx-auto px-6">
          <SectionTitle
            subtitle="Philosophy"
            title="What Drives Me"
            description="Core principles guiding my development journey"
            align="center"
            gradient
          />

          <div className="
            grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4
            gap-8 mt-12
          ">
            {passions.map((passion, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card hoverable={true} className="text-center p-8 h-full group">
                  <motion.div
                    whileHover={{ rotate: 6, scale: 1.1 }}
                    className="
                      w-20 h-20 mx-auto mb-6
                      flex items-center justify-center
                      text-3xl text-accent
                      bg-accent/10 border-2 border-accent/20
                      rounded-3xl transition-all duration-300
                      group-hover:bg-accent group-hover:text-primary-dark
                    "
                  >
                    {passion.icon}
                  </motion.div>
                  <h3 className="font-heading font-semibold text-xl text-text-heading mb-4">
                    {passion.title}
                  </h3>
                  <p className="text-text-body text-sm leading-relaxed">
                    {passion.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="
            bg-gradient-to-br from-primary-light to-primary
            border border-border rounded-3xl
            p-12 md:p-16 text-center relative overflow-hidden
          ">
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-0 right-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl" />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative z-10"
            >
              <h2 className="font-heading font-bold text-3xl md:text-5xl text-text-heading mb-6">
                Ready to Start Your
                <span className="
                  bg-gradient-to-r from-accent to-accent-hover
                  bg-clip-text text-transparent block mt-1
                ">
                  Next Project?
                </span>
              </h2>
              <p className="text-text-body text-lg max-w-2xl mx-auto mb-10">
                With 2+ years of real-world experience in MERN, WordPress, and
                full-stack development, let's turn your ideas into reality.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <Button variant="primary" size="lg" href="/contact">
                  Start a Project
                </Button>
                <Button variant="secondary" size="lg" href="/portfolio">
                  View My Work
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default About;