/* ============================================
   💼 PORTFOLIO PAGE
   Complete projects showcase
   Theme: Midnight Tech
   ============================================ */

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FiFilter, 
  FiGrid, 
  FiList,
  FiEye,
  FiCode,
  FiStar
} from 'react-icons/fi';

import Button from '../components/Button';
import Card, { ProjectCard } from '../components/Card';
import {
  getAllProjectsWithImages,
  projectCategories,
  projectStats,
} from '../data/projects';
import { isVideoAsset } from '../data/projectImages';
import usePageMeta from '../hooks/usePageMeta';

/**
 * Portfolio Page Component
 */
const Portfolio = () => {
  usePageMeta({
    title: 'Portfolio | Hamad Hussain',
    description:
      'Browse portfolio projects by Hamad Hussain across WordPress, MERN, Shopify, AI, and custom web development.',
  });

  const [activeCategory, setActiveCategory] = useState('all');
  const [viewMode, setViewMode] = useState('grid');
  const [searchQuery, setSearchQuery] = useState('');
  const projects = getAllProjectsWithImages();
  
  // Filter projects
  const filteredProjects = projects
    .filter(project => 
      activeCategory === 'all' || project.category === activeCategory
    )
    .filter(project =>
      searchQuery === '' ||
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.technologies.some(tech => 
        tech.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
  
  // Get active category info
  const activeCategoryInfo = projectCategories.find(
    cat => cat.id === activeCategory
  ) || { name: 'All Projects' };

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
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-24 pb-20"
    >
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="
            max-w-5xl mx-auto
            text-center
            py-16 md:py-24
          ">
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
              <span className="
                w-2 h-2 rounded-full
                bg-accent animate-pulse
              " />
              <span className="
                font-mono text-xs text-accent
                uppercase tracking-widest
              ">
                My Portfolio
              </span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="
                font-heading font-bold
                text-4xl md:text-5xl lg:text-6xl
                text-text-heading
                leading-tight
                mb-6
              "
            >
              <span className="
                bg-gradient-to-r from-accent to-accent-hover
                bg-clip-text text-transparent
              ">
                Project Portfolio
              </span>
              <br />
              Showcasing My Best Work
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="
                text-text-body text-xl
                max-w-3xl mx-auto
                leading-relaxed
                mb-10
              "
            >
              Browse through my collection of completed projects. Each one represents 
              a unique challenge and solution, showcasing my skills and expertise.
            </motion.p>
            
            {/* Portfolio Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="
                grid grid-cols-2 md:grid-cols-4
                gap-6 mb-12
                max-w-2xl mx-auto
              "
            >
              {[
                { 
                  value: projectStats.total, 
                  label: 'Total Projects',
                  icon: <FiGrid />
                },
                { 
                  value: projectStats.featured, 
                  label: 'Featured',
                  icon: <FiStar />
                },
                { 
                  value: projectStats.categories, 
                  label: 'Categories',
                  icon: <FiFilter />
                },
                { 
                  value: projectStats.technologies, 
                  label: 'Technologies',
                  icon: <FiCode />
                },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="
                    p-4
                    bg-primary/30 border border-border
                    rounded-xl
                    hover:border-accent/30
                    transition-all duration-300
                    group
                  "
                >
                  <div className="
                    flex items-center justify-center gap-2
                    mb-2
                  ">
                    <div className="
                      text-accent
                      group-hover:scale-110
                      transition-transform duration-300
                    ">
                      {stat.icon}
                    </div>
                    <div className="
                      font-heading font-bold
                      text-2xl md:text-3xl
                      text-accent
                    ">
                      {stat.value}
                    </div>
                  </div>
                  <div className="
                    text-xs text-text-body
                    font-mono uppercase tracking-wider
                  ">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Filter Controls */}
      <section className="py-8 bg-primary/50 sticky top-24 z-20">
        <div className="container mx-auto px-6">
          <div className="
            flex flex-col lg:flex-row
            items-center justify-between
            gap-6
          ">
            {/* Category Filters */}
            <div className="
              flex flex-wrap justify-center
              gap-2
            ">
              {projectCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`
                    px-4 py-2
                    font-mono text-sm
                    rounded-full
                    transition-all duration-300
                    ${activeCategory === category.id
                      ? 'bg-accent text-primary-dark'
                      : 'bg-primary/50 text-text-body hover:text-accent hover:bg-accent/10'
                    }
                  `}
                >
                  {category.name}
                  {category.count > 0 && (
                    <span className="
                      ml-1.5 px-1.5 py-0.5
                      text-xs rounded-full
                      bg-primary-dark/20
                    ">
                      {category.count}
                    </span>
                  )}
                </button>
              ))}
            </div>
            
            {/* Search & View Controls */}
            <div className="
              flex items-center gap-4
            ">
              {/* Search Input */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search projects..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="
                    pl-10 pr-4 py-2
                    w-48 md:w-64
                    bg-primary border border-border
                    text-text-heading rounded-lg
                    placeholder:text-text-body/50
                    focus:outline-none focus:border-accent
                    focus:ring-2 focus:ring-accent/20
                    transition-all duration-300
                  "
                />
                <FiEye className="
                  absolute left-3 top-1/2 -translate-y-1/2
                  text-text-body/50
                " />
              </div>
              
              {/* View Mode Toggle */}
              <div className="
                flex items-center
                bg-primary border border-border
                rounded-lg overflow-hidden
              ">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`
                    p-2
                    transition-all duration-300
                    ${viewMode === 'grid'
                      ? 'bg-accent/10 text-accent'
                      : 'text-text-body hover:text-accent'
                    }
                  `}
                  aria-label="Grid view"
                >
                  <FiGrid size={20} />
                </button>
                <div className="w-px h-6 bg-border" />
                <button
                  onClick={() => setViewMode('list')}
                  className={`
                    p-2
                    transition-all duration-300
                    ${viewMode === 'list'
                      ? 'bg-accent/10 text-accent'
                      : 'text-text-body hover:text-accent'
                    }
                  `}
                  aria-label="List view"
                >
                  <FiList size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Projects Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          {/* Results Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="
              flex flex-col md:flex-row
              items-start md:items-center justify-between
              gap-4 mb-12
            "
          >
            <div>
              <h2 className="
                font-heading font-semibold
                text-2xl text-text-heading
                mb-2
              ">
                {activeCategoryInfo.name}
              </h2>
              <p className="text-text-body">
                Showing {filteredProjects.length} of {projects.length} projects
              </p>
            </div>
            
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="
                  px-4 py-2
                  text-sm text-accent
                  bg-accent/10 border border-accent/20
                  rounded-lg
                  hover:bg-accent/20
                  transition-colors duration-300
                "
              >
                Clear search
              </button>
            )}
          </motion.div>
          
          {/* Projects Grid/List */}
          {filteredProjects.length > 0 ? (
            <motion.div
              key={viewMode + activeCategory}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className={viewMode === 'grid' 
                ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
                : 'space-y-8'
              }
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className={viewMode === 'list' ? 'flex gap-6' : ''}
                >
                  {viewMode === 'list' ? (
                    <Card
                      hoverable={true}
                      className="flex flex-col md:flex-row gap-6 p-6"
                      to={`/portfolio/${project.id}`}
                    >
                      {/* Image */}
                      <div className="
                        md:w-1/3
                        aspect-video md:aspect-square
                        overflow-hidden rounded-lg
                      ">
                        {renderProjectPreview(
                          project,
                          `
                            w-full h-full object-cover
                            transition-transform duration-500
                            group-hover:scale-110
                          `
                        )}
                      </div>
                      
                      {/* Content */}
                      <div className="md:w-2/3">
                        {/* Category & Date */}
                        <div className="
                          flex items-center gap-4
                          mb-4
                        ">
                          <span className="
                            font-mono text-xs text-accent
                            bg-accent/10 border border-accent/20
                            px-3 py-1 rounded-full
                          ">
                            {project.category}
                          </span>
                          <span className="
                            text-xs text-text-body
                          ">
                            {project.date}
                          </span>
                          {project.featured && (
                            <span className="
                              ml-auto
                              text-xs text-accent font-bold
                              bg-accent/10 px-2 py-1 rounded
                            ">
                              Featured
                            </span>
                          )}
                        </div>
                        
                        {/* Title */}
                        <h3 className="
                          font-heading font-bold
                          text-xl text-text-heading
                          mb-3
                        ">
                          {project.title}
                        </h3>
                        
                        {/* Description */}
                        <p className="
                          text-text-body text-sm
                          mb-4 line-clamp-3
                        ">
                          {project.description}
                        </p>
                        
                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 mb-6">
                          {project.technologies.slice(0, 5).map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="
                                font-mono text-xs text-text-body/80
                                bg-primary/50 px-2 py-1 rounded
                              "
                            >
                              {tech}
                            </span>
                          ))}
                          {project.technologies.length > 5 && (
                            <span className="
                              font-mono text-xs text-accent
                            ">
                              +{project.technologies.length - 5}
                            </span>
                          )}
                        </div>
                        
                        {/* View Button */}
                        <Button
                          variant="link"
                          size="sm"
                          className="mt-auto"
                        >
                          View Case Study →
                        </Button>
                      </div>
                    </Card>
                  ) : (
                    <ProjectCard
                      title={project.title}
                      description={project.description}
                      image={project.primaryMedia?.src || project.thumbnail || project.image}
                      mediaType={project.primaryMedia?.type}
                      posterImage={project.primaryMedia?.poster || project.thumbnail}
                      tags={project.technologies}
                      category={project.category}
                      liveUrl={project.liveUrl}
                      githubUrl={project.githubUrl}
                      featured={project.featured}
                      to={`/portfolio/${project.id}`}
                    />
                  )}
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
              <h3 className="
                font-heading font-semibold text-xl text-text-heading
                mb-3
              ">
                No projects found
              </h3>
              <p className="text-text-body max-w-md mx-auto mb-6">
                {searchQuery 
                  ? `No projects match "${searchQuery}". Try a different search term.`
                  : `No projects in the "${activeCategoryInfo.name}" category yet.`
                }
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <Button
                  variant="secondary"
                  onClick={() => setSearchQuery('')}
                >
                  Clear Search
                </Button>
                <Button
                  variant="primary"
                  onClick={() => setActiveCategory('all')}
                >
                  View All Projects
                </Button>
              </div>
            </motion.div>
          )}
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="
            bg-gradient-to-br from-primary-light to-primary
            border border-border
            rounded-3xl
            p-12 text-center
            relative overflow-hidden
          ">
            {/* Background Pattern */}
            <div className="
              absolute inset-0
              opacity-5
              bg-grid-pattern
              bg-[length:100px_100px]
            " />
            
            <h2 className="
              font-heading font-bold
              text-3xl md:text-4xl
              text-text-heading
              mb-6
              relative z-10
            ">
              Like What You See?
              <span className="
                bg-gradient-to-r from-accent to-accent-hover
                bg-clip-text text-transparent
                block
              ">
                Let's Build Together
              </span>
            </h2>
            
            <p className="
              text-text-body text-lg
              max-w-2xl mx-auto
              mb-8
              relative z-10
            ">
              Have a project in mind? Let's discuss how we can create something 
              amazing for your business.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
              <Button
                variant="primary"
                size="lg"
                href="/contact"
              >
                Start a Project
              </Button>
              <Button
                variant="secondary"
                size="lg"
                href="/services"
              >
                View Services
              </Button>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Portfolio;
