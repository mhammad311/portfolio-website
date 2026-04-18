/* ============================================
   💼 PROJECTS SECTION
   Portfolio showcase
   Theme: Midnight Tech
   ============================================ */

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import { ProjectCard } from '../components/Card';
import Button from '../components/Button';
import { FiFilter, FiGrid, FiList, FiExternalLink, FiGithub } from 'react-icons/fi';
import { projects, getFeaturedProjects, projectCategories } from '../data/projects';
import { isVideoAsset } from '../data/projectImages';

/**
 * Projects Section Component
 */
const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [viewMode, setViewMode] = useState('grid');
  const [visibleCount, setVisibleCount] = useState(6);
  
  const featuredProjects = getFeaturedProjects();
  const categories = projectCategories.filter(cat => cat.id !== 'all');
  
  // Filter projects by category
  const filteredProjects = activeCategory === 'all'
    ? featuredProjects
    : featuredProjects.filter(project => project.category === activeCategory);
  
  // Projects to display
  const displayProjects = filteredProjects.slice(0, visibleCount);
  
  // Get category stats
  const categoryStats = categories.map(cat => ({
    ...cat,
    count: featuredProjects.filter(p => p.category === cat.id).length
  }));
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.07,
        delayChildren: 0.1,
      },
    },
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
    hover: {
      y: -8,
      scale: 1.02,
      transition: {
        duration: 0.2,
        ease: "easeOut"
      }
    }
  };
  
  const loadMore = () => {
    setVisibleCount(prev => prev + 6);
  };
  
  const resetFilters = () => {
    setActiveCategory('all');
    setVisibleCount(6);
  };

  const renderProjectPreview = (project, className = '') => {
    const previewSrc = project.thumbnail || project.primaryMedia?.poster || project.primaryMedia?.src || project.image;
    const previewType = project.primaryMedia?.type || (isVideoAsset(previewSrc) ? 'video' : 'image');

    if (previewType === 'video') {
      return (
        <video
          src={project.primaryMedia?.src || previewSrc}
          poster={project.primaryMedia?.poster || project.thumbnail}
          className={className}
          muted
          playsInline
          preload="metadata"
        />
      );
    }

    return (
      <img
        src={previewSrc}
        alt={project.imageAlt || project.title}
        className={className}
      />
    );
  };
  
  return (
    <section id="projects" className="
      py-20 md:py-32 
      bg-gradient-to-b from-primary via-primary/95 to-primary/90
      relative overflow-hidden
    ">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        {/* Animated Grid */}
        <div className="
          absolute inset-0
          bg-[linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px)]
          bg-[size:40px_40px]
          opacity-20
        " />
        
        {/* Floating Code Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {['</>', '{ }', 'div', 'const', '=>'].map((text, i) => (
            <motion.div
              key={i}
              className="
                absolute font-mono
                text-accent/5
                select-none
              "
              style={{
                left: `${10 + Math.random() * 80}%`,
                top: `${10 + Math.random() * 80}%`,
                fontSize: `${Math.random() * 20 + 12}px`,
              }}
              animate={{
                y: [0, Math.random() * 100 - 50],
                x: [0, Math.random() * 100 - 50],
                rotate: [0, 360],
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: Math.random() * 30 + 30,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              {text}
            </motion.div>
          ))}
        </div>
        
        {/* Gradient Orbs */}
        <motion.div
          className="
            absolute top-20 left-10
            w-80 h-80
            bg-gradient-to-r from-accent/10 to-accent/5
            rounded-full blur-3xl
          "
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="
            absolute bottom-20 right-10
            w-96 h-96
            bg-gradient-to-l from-accent/8 to-accent/3
            rounded-full blur-3xl
          "
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.3, 0.2, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-8 h-px bg-gradient-to-r from-transparent via-accent to-transparent" />
            <span className="
              font-mono text-sm text-accent
              uppercase tracking-widest
              px-4 py-1
              bg-accent/10 border border-accent/20
              rounded-full
            ">
              Portfolio
            </span>
            <div className="w-8 h-px bg-gradient-to-l from-transparent via-accent to-transparent" />
          </div>
          
          <h2 className="
            font-heading font-bold
            text-5xl md:text-6xl lg:text-7xl
            text-text-heading
            text-center
            mb-8
            leading-tight
          ">
            Showcase of{' '}
            <span className="
              bg-gradient-to-r from-accent via-accent-hover to-accent
              bg-clip-text text-transparent
              animate-gradient
            ">
              Excellence
            </span>
          </h2>
          
          <p className="
            text-xl text-text-body/80
            text-center
            max-w-3xl mx-auto
            leading-relaxed
            mb-10
          ">
            A curated collection of my finest work, demonstrating technical expertise, 
            creative problem-solving, and attention to detail.
          </p>
          
          {/* Quick Stats */}
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <div className="
              flex items-center gap-3
              px-4 py-2
              bg-primary/40 border border-border/30
              rounded-full
            ">
              <div className="
                w-2 h-2 rounded-full
                bg-gradient-to-r from-green-400 to-emerald-400
                animate-pulse
              " />
              <span className="text-sm text-text-body/70">
                <span className="font-semibold text-text-heading">{projects.length}+</span> Projects
              </span>
            </div>
            <div className="
              flex items-center gap-3
              px-4 py-2
              bg-primary/40 border border-border/30
              rounded-full
            ">
              <div className="
                w-2 h-2 rounded-full
                bg-gradient-to-r from-blue-400 to-cyan-400
                animate-pulse
              " />
              <span className="text-sm text-text-body/70">
                <span className="font-semibold text-text-heading">{categories.length}</span> Categories
              </span>
            </div>
            <div className="
              flex items-center gap-3
              px-4 py-2
              bg-primary/40 border border-border/30
              rounded-full
            ">
              <div className="
                w-2 h-2 rounded-full
                bg-gradient-to-r from-purple-400 to-pink-400
                animate-pulse
              " />
              <span className="text-sm text-text-body/70">
                <span className="font-semibold text-text-heading">100%</span> Satisfaction
              </span>
            </div>
          </div>
        </motion.div>
        
        {/* Controls */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="
            flex flex-col md:flex-row
            justify-between items-center
            gap-6 mb-12
            p-6
            bg-gradient-to-br from-primary/30 to-primary/20
            border border-border/30
            rounded-2xl
            backdrop-blur-sm
          "
        >
          <div className="flex items-center gap-4">
            <div className="
              flex items-center gap-2
              px-4 py-2
              bg-primary/50 border border-border/30
              rounded-lg
            ">
              <FiFilter className="text-accent" />
              <span className="text-sm text-text-body font-medium">Filter by</span>
            </div>
            
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setActiveCategory('all')}
                className={`
                  px-4 py-2
                  text-sm font-medium
                  rounded-lg
                  transition-all duration-300
                  ${activeCategory === 'all'
                    ? 'bg-gradient-to-r from-accent to-accent-hover text-primary-dark shadow-lg shadow-accent/20'
                    : 'bg-primary/50 text-text-body hover:text-accent hover:bg-accent/10 hover:border-accent/30 border border-transparent'
                  }
                `}
              >
                All ({featuredProjects.length})
              </button>
              
              {categoryStats.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`
                    px-4 py-2
                    text-sm font-medium
                    rounded-lg
                    transition-all duration-300
                    border
                    ${activeCategory === category.id
                      ? 'bg-gradient-to-r from-accent to-accent-hover text-primary-dark shadow-lg shadow-accent/20 border-accent/50'
                      : 'bg-primary/50 border-border/30 text-text-body hover:text-accent hover:bg-accent/10 hover:border-accent/30'
                    }
                  `}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>
          
          {/* View Mode Toggle */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setViewMode('grid')}
              className={`
                p-2.5 rounded-lg
                transition-all duration-300
                ${viewMode === 'grid'
                  ? 'bg-accent text-primary-dark'
                  : 'bg-primary/50 text-text-body hover:text-accent hover:bg-accent/10'
                }
              `}
              aria-label="Grid view"
            >
              <FiGrid size={18} />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`
                p-2.5 rounded-lg
                transition-all duration-300
                ${viewMode === 'list'
                  ? 'bg-accent text-primary-dark'
                  : 'bg-primary/50 text-text-body hover:text-accent hover:bg-accent/10'
                }
              `}
              aria-label="List view"
            >
              <FiList size={18} />
            </button>
          </div>
        </motion.div>
        
        {/* Projects Grid/List */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory + viewMode}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className={`
              ${viewMode === 'grid'
                ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
                : 'flex flex-col'
              }
              gap-6
            `}
          >
            {displayProjects.length > 0 ? (
              displayProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  variants={itemVariants}
                  whileHover="hover"
                  className={viewMode === 'list' ? 'w-full' : ''}
                >
                  {viewMode === 'grid' ? (
                    <ProjectCard
                      title={project.title}
                      description={project.description}
                      image={project.primaryMedia?.src || project.thumbnail || project.image}
                      mediaType={project.primaryMedia?.type}
                      posterImage={project.primaryMedia?.poster || project.thumbnail}
                      tags={project.technologies?.slice(0, 4) || []}
                      category={project.category}
                      liveUrl={project.liveUrl}
                      githubUrl={project.githubUrl}
                      featured={project.featured}
                      to={`/portfolio/${project.id}`}
                      layout="grid"
                    />
                  ) : (
                    <div className="
                      flex flex-col md:flex-row
                      bg-gradient-to-br from-primary/30 to-primary/20
                      border border-border/30
                      rounded-2xl
                      overflow-hidden
                      hover:border-accent/30
                      hover:shadow-xl hover:shadow-accent/5
                      transition-all duration-300
                      group
                    ">
                      {/* Thumbnail */}
                      <div className="
                        md:w-1/3
                        relative overflow-hidden
                        bg-gradient-to-br from-primary to-primary/80
                        min-h-[200px] md:min-h-0
                      ">
                        {renderProjectPreview(
                          project,
                          `
                            w-full h-full object-cover
                            group-hover:scale-105
                            transition-transform duration-500
                          `
                        )}
                        <div className="
                          absolute inset-0
                          bg-gradient-to-t from-primary/80 via-transparent to-transparent
                          opacity-0 group-hover:opacity-100
                          transition-opacity duration-300
                        " />
                      </div>
                      
                      {/* Content */}
                      <div className="
                        flex-1 p-6 md:p-8
                        flex flex-col
                      ">
                        <div className="flex flex-wrap items-center gap-3 mb-4">
                          <span className="
                            px-3 py-1
                            text-xs font-medium
                            bg-accent/10 text-accent
                            rounded-full
                          ">
                            {project.category}
                          </span>
                          {project.featured && (
                            <span className="
                              px-3 py-1
                              text-xs font-medium
                              bg-gradient-to-r from-yellow-400/20 to-orange-400/20
                              text-yellow-300
                              border border-yellow-400/30
                              rounded-full
                            ">
                              Featured
                            </span>
                          )}
                        </div>
                        
                        <h3 className="
                          font-heading font-bold
                          text-2xl text-text-heading
                          mb-3
                          group-hover:text-accent
                          transition-colors duration-300
                        ">
                          {project.title}
                        </h3>
                        
                        <p className="
                          text-text-body/80
                          leading-relaxed
                          mb-6 flex-grow
                        ">
                          {project.description}
                        </p>
                        
                        <div className="
                          flex flex-wrap items-center justify-between
                          gap-4
                          pt-6
                          border-t border-border/30
                        ">
                          <div className="flex flex-wrap gap-2">
                            {project.technologies?.slice(0, 5).map((tech, idx) => (
                              <span
                                key={idx}
                                className="
                                  px-3 py-1
                                  text-xs font-medium
                                  bg-primary/50 text-text-body/70
                                  rounded-full
                                "
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                          
                          <div className="flex items-center gap-3">
                            {project.githubUrl && (
                              <a
                                href={project.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="
                                  p-2
                                  bg-primary/50 text-text-body
                                  rounded-lg
                                  hover:bg-accent/10 hover:text-accent
                                  transition-all duration-300
                                "
                              >
                                <FiGithub size={18} />
                              </a>
                            )}
                            {project.liveUrl && (
                              <a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="
                                  p-2
                                  bg-primary/50 text-text-body
                                  rounded-lg
                                  hover:bg-accent/10 hover:text-accent
                                  transition-all duration-300
                                "
                              >
                                <FiExternalLink size={18} />
                              </a>
                            )}
                            <Link
                              to={`/portfolio/${project.id}`}
                              className="
                                px-4 py-2
                                text-sm font-medium
                                bg-gradient-to-r from-accent/10 to-accent/5
                                text-accent
                                rounded-lg
                                hover:from-accent/20 hover:to-accent/10
                                transition-all duration-300
                              "
                            >
                              Case Study
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="
                  col-span-full
                  text-center py-20
                  bg-gradient-to-br from-primary/30 to-primary/20
                  border border-border/30
                  rounded-2xl
                "
              >
                <div className="text-6xl mb-6">🔍</div>
                <h3 className="
                  font-heading font-semibold text-2xl text-text-heading
                  mb-4
                ">
                  No projects found
                </h3>
                <p className="text-text-body/80 mb-6 max-w-md mx-auto">
                  No projects match your current filter. Try a different category or reset the filters.
                </p>
                <button
                  onClick={resetFilters}
                  className="
                    px-6 py-3
                    bg-gradient-to-r from-accent/10 to-accent/5
                    border border-accent/20
                    text-accent font-medium
                    rounded-lg
                    hover:from-accent/20 hover:to-accent/10
                    hover:border-accent/30
                    transition-all duration-300
                  "
                >
                  Reset Filters
                </button>
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>
        
        {/* Load More / View All */}
        {filteredProjects.length > visibleCount && displayProjects.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center mt-12"
          >
            <Button
              variant="secondary"
              size="lg"
              onClick={loadMore}
              className="group"
            >
              <span className="group-hover:translate-y-[-2px] transition-transform duration-300">
                Load More ({filteredProjects.length - visibleCount} remaining)
              </span>
            </Button>
          </motion.div>
        )}
        
        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="
            inline-flex flex-col items-center
            gap-6
            p-8
            bg-gradient-to-br from-primary/30 to-primary/20
            border border-border/30
            rounded-2xl
            max-w-2xl mx-auto
          ">
            <h3 className="
              font-heading font-bold
              text-2xl md:text-3xl
              text-text-heading
            ">
              Ready to start your project?
            </h3>
            <p className="text-text-body/80">
              Let's collaborate to bring your ideas to life with cutting-edge solutions.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button
                variant="primary"
                size="lg"
                href="/contact"
                className="group"
              >
                <span className="group-hover:translate-x-1 transition-transform duration-300">
                  Start a Project
                </span>
              </Button>
              <Button
                variant="secondary"
                size="lg"
                href="/portfolio"
              >
                View Full Portfolio
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Add to your global CSS
const styles = `
  @keyframes gradient {
    0%, 100% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
  }
  
  .animate-gradient {
    background-size: 200% 200%;
    animation: gradient 3s ease infinite;
  }
`;

export default Projects;
