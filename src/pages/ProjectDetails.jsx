/* ============================================
   📄 PROJECT DETAILS PAGE
   Dynamic project case study
   Theme: Midnight Tech
   ============================================ */

import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  FiArrowLeft, 
  FiExternalLink, 
  FiGithub,
  FiCalendar,
  FiUser,
  FiClock,
  FiTag,
  FiChevronLeft,
  FiChevronRight
} from 'react-icons/fi';

import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';
import  Card from '../components/Card';
import { getProjectById, getRelatedProjects } from '../data/projects';
import { isVideoAsset } from '../data/projectImages';
import usePageMeta from '../hooks/usePageMeta';

/**
 * Project Details Page Component
 */
const ProjectDetails = () => {
  const { projectId } = useParams();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const project = getProjectById(projectId);
  const relatedProjects = getRelatedProjects(projectId, 3);

  usePageMeta({
    title: project ? `${project.title} | Hamad Hussain` : 'Project | Hamad Hussain',
    description: project?.description || 'Project case study by Hamad Hussain.',
    robots: project ? 'index, follow' : 'noindex, follow',
  });
  
  // If project not found
  if (!project) {
    return (
      <div className="
        min-h-screen
        flex items-center justify-center
        pt-24 pb-20
      ">
        <div className="text-center">
          <div className="text-6xl mb-6">🔍</div>
          <h1 className="
            font-heading font-bold
            text-3xl text-text-heading
            mb-4
          ">
            Project Not Found
          </h1>
          <p className="text-text-body mb-8">
            The project you're looking for doesn't exist or has been moved.
          </p>
          <Button
            variant="primary"
            leftIcon={<FiArrowLeft />}
            href="/portfolio"
          >
            Back to Portfolio
          </Button>
        </div>
      </div>
    );
  }
  
  // Project data
  const {
    title,
    description,
    longDescription,
    images = [],
    media = [],
    technologies = [],
    client,
    duration,
    date,
    role,
    challenges = [],
    results = [],
    liveUrl,
    githubUrl,
    category,
    testimonial,
    metrics
  } = project;
  
  // Handle image navigation
  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === images.length - 1 ? 0 : prev + 1
    );
  };
  
  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? images.length - 1 : prev - 1
    );
  };
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-24 pb-20"
    >
      {/* Back Navigation */}
      <div className="container mx-auto px-6 mb-12">
        <Link
          to="/portfolio"
          className="
            inline-flex items-center gap-2
            text-text-body hover:text-accent
            transition-colors duration-300
            group
          "
        >
          <FiArrowLeft className="
            group-hover:-translate-x-1
            transition-transform duration-300
          " />
          <span>Back to Portfolio</span>
        </Link>
      </div>
      
      {/* Project Hero */}
      <section className="mb-20">
        <div className="container mx-auto px-6">
          <div className="
            grid grid-cols-1 lg:grid-cols-3
            gap-12
          ">
            {/* Left Column - Project Info */}
            <div className="lg:col-span-2">
              {/* Category & Date */}
              <div className="
                flex flex-wrap items-center gap-3
                mb-6
              ">
                <span className="
                  font-mono text-xs text-accent
                  bg-accent/10 border border-accent/20
                  px-3 py-1 rounded-full
                ">
                  {category}
                </span>
                <span className="
                  text-sm text-text-body
                  flex items-center gap-1
                ">
                  <FiCalendar size={14} />
                  {date}
                </span>
              </div>
              
              {/* Title */}
              <h1 className="
                font-heading font-bold
                text-4xl md:text-5xl lg:text-6xl
                text-text-heading
                leading-tight
                mb-6
              ">
                {title}
              </h1>
              
              {/* Description */}
              <p className="
                text-text-body text-xl
                leading-relaxed
                mb-8
              ">
                {description}
              </p>
              
              {/* Stats */}
              <div className="
                grid grid-cols-2 md:grid-cols-4
                gap-4 mb-8
              ">
                {[
                  { icon: <FiUser />, label: 'Client', value: client },
                  { icon: <FiClock />, label: 'Duration', value: duration },
                  { icon: <FiTag />, label: 'Role', value: role },
                  { icon: <FiCalendar />, label: 'Status', value: 'Completed' },
                ].map((stat, index) => (
                  <div
                    key={index}
                    className="
                      p-4
                      bg-primary/30 border border-border
                      rounded-xl
                      hover:border-accent/30
                      transition-all duration-300
                    "
                  >
                    <div className="
                      flex items-center gap-2
                      text-accent mb-2
                    ">
                      {stat.icon}
                      <span className="
                        text-xs font-medium uppercase tracking-wider
                      ">
                        {stat.label}
                      </span>
                    </div>
                    <div className="
                      font-heading font-semibold
                      text-lg text-text-heading
                    ">
                      {stat.value}
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4">
                {liveUrl && (
                  <Button
                    variant="primary"
                    leftIcon={<FiExternalLink />}
                    href={liveUrl}
                    external
                  >
                    Live Demo
                  </Button>
                )}
                
                {githubUrl && (
                  <Button
                    variant="secondary"
                    leftIcon={<FiGithub />}
                    href={githubUrl}
                    external
                  >
                    View Code
                  </Button>
                )}
                
                <Button
                  variant="ghost"
                  href="/contact"
                >
                  Similar Project?
                </Button>
              </div>
            </div>
            
            {/* Right Column - Technologies */}
            <div>
              <Card className="p-6 sticky top-24">
                <h3 className="
                  font-heading font-semibold
                  text-xl text-text-heading
                  mb-6
                ">
                  Technologies Used
                </h3>
                
                <div className="space-y-4">
                  {technologies.map((tech, index) => (
                    <div
                      key={index}
                      className="
                        flex items-center gap-3
                        p-3
                        bg-primary/50 border border-border
                        rounded-lg
                        hover:border-accent/30
                        transition-all duration-300
                        group
                      "
                    >
                      <div className="
                        w-8 h-8
                        flex items-center justify-center
                        bg-accent/10 text-accent
                        rounded-lg
                        group-hover:bg-accent group-hover:text-primary-dark
                        transition-all duration-300
                      ">
                        <FiTag size={16} />
                      </div>
                      <span className="font-medium">{tech}</span>
                    </div>
                  ))}
                </div>
                
                {/* Project Metrics */}
                {metrics && (
                  <>
                    <div className="
                      mt-8 pt-8 border-t border-border
                    ">
                      <h4 className="
                        font-heading font-semibold
                        text-lg text-text-heading
                        mb-4
                      ">
                        Performance Metrics
                      </h4>
                      
                      <div className="space-y-4">
                        {Object.entries(metrics).map(([key, value]) => (
                          <div key={key}>
                            <div className="
                              flex items-center justify-between
                              text-sm text-text-body
                              mb-1
                            ">
                              <span className="capitalize">
                                {key.replace(/([A-Z])/g, ' $1').trim()}
                              </span>
                              <span>{value}%</span>
                            </div>
                            <div className="
                              h-2 bg-border rounded-full overflow-hidden
                            ">
                              <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: `${value}%` }}
                                transition={{ duration: 1, delay: 0.5 }}
                                className="
                                  h-full bg-gradient-to-r from-accent to-accent-hover
                                  rounded-full
                                "
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </>
                )}
              </Card>
            </div>
          </div>
        </div>
      </section>
      
      {/* Project Gallery */}
      {images.length > 0 && (
        <section className="py-16 bg-primary/50">
          <div className="container mx-auto px-6">
            <SectionTitle
              subtitle="Gallery"
              title="Project Media"
              description="A visual walkthrough of the project"
              align="center"
            />
            
            <div className="
              relative max-w-5xl mx-auto
              mt-12
            ">
              {/* Main Image */}
              <div className="
                relative aspect-video
                bg-primary border border-border
                rounded-2xl overflow-hidden
                mb-6
              ">
                {(media[currentImageIndex]?.type || (isVideoAsset(images[currentImageIndex]) ? 'video' : 'image')) === 'video' ? (
                  <video
                    src={media[currentImageIndex]?.src || images[currentImageIndex]}
                    poster={media[currentImageIndex]?.poster || project.thumbnail}
                    className="
                      w-full h-full object-cover
                    "
                    controls
                    playsInline
                    preload="metadata"
                  >
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <img
                    src={media[currentImageIndex]?.src || images[currentImageIndex]}
                    alt={`${title} - Screenshot ${currentImageIndex + 1}`}
                    className="
                      w-full h-full object-cover
                      transition-opacity duration-300
                    "
                  />
                )}
                
                {/* Navigation Buttons */}
                {images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="
                        absolute left-4 top-1/2 -translate-y-1/2
                        w-12 h-12
                        flex items-center justify-center
                        bg-primary/80 backdrop-blur-sm
                        text-text-heading border border-border
                        rounded-full
                        hover:bg-accent hover:text-primary-dark hover:border-accent
                        transition-all duration-300
                        z-10
                      "
                      aria-label="Previous image"
                    >
                      <FiChevronLeft size={24} />
                    </button>
                    
                    <button
                      onClick={nextImage}
                      className="
                        absolute right-4 top-1/2 -translate-y-1/2
                        w-12 h-12
                        flex items-center justify-center
                        bg-primary/80 backdrop-blur-sm
                        text-text-heading border border-border
                        rounded-full
                        hover:bg-accent hover:text-primary-dark hover:border-accent
                        transition-all duration-300
                        z-10
                      "
                      aria-label="Next image"
                    >
                      <FiChevronRight size={24} />
                    </button>
                  </>
                )}
              </div>
              
              {/* Thumbnails */}
              {images.length > 1 && (
                <div className="
                  flex items-center justify-center
                  gap-3
                  flex-wrap
                ">
                  {images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`
                        relative w-20 h-20
                        rounded-lg overflow-hidden
                        border-2 transition-all duration-300
                        ${currentImageIndex === index
                          ? 'border-accent scale-105'
                          : 'border-transparent hover:border-accent/50'
                        }
                      `}
                      aria-label={`View image ${index + 1}`}
                    >
                      {(media[index]?.type || (isVideoAsset(image) ? 'video' : 'image')) === 'video' ? (
                        <div className="relative w-full h-full">
                          <img
                            src={media[index]?.poster || project.thumbnail}
                            alt={`Video thumbnail ${index + 1}`}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 flex items-center justify-center bg-primary/40 text-accent text-xs font-mono">
                            Video
                          </div>
                        </div>
                      ) : (
                        <img
                          src={image}
                          alt={`Thumbnail ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      )}
                      {currentImageIndex === index && (
                        <div className="
                          absolute inset-0
                          bg-accent/20
                        " />
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>
      )}
      
      {/* Project Details */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="
            grid grid-cols-1 lg:grid-cols-3
            gap-12
          ">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Detailed Description */}
              <div className="mb-16">
                <h2 className="
                  font-heading font-bold
                  text-3xl text-text-heading
                  mb-6
                ">
                  Project Overview
                </h2>
                
                <div className="
                  prose prose-invert max-w-none
                  text-text-body leading-relaxed
                ">
                  {longDescription.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="mb-6">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
              
              {/* Challenges & Solutions */}
              {(challenges.length > 0 || results.length > 0) && (
                <div className="
                  grid grid-cols-1 md:grid-cols-2
                  gap-8 mb-16
                ">
                  {challenges.length > 0 && (
                    <div>
                      <h3 className="
                        font-heading font-semibold
                        text-2xl text-text-heading
                        mb-6
                      ">
                        Challenges
                      </h3>
                      <ul className="space-y-4">
                        {challenges.map((challenge, index) => (
                          <li
                            key={index}
                            className="
                              flex items-start gap-3
                              p-4
                              bg-primary/30 border border-border
                              rounded-xl
                            "
                          >
                            <span className="
                              text-accent mt-1
                            ">
                              🎯
                            </span>
                            <span>{challenge}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  {results.length > 0 && (
                    <div>
                      <h3 className="
                        font-heading font-semibold
                        text-2xl text-text-heading
                        mb-6
                      ">
                        Results
                      </h3>
                      <ul className="space-y-4">
                        {results.map((result, index) => (
                          <li
                            key={index}
                            className="
                              flex items-start gap-3
                              p-4
                              bg-primary/30 border border-border
                              rounded-xl
                            "
                          >
                            <span className="
                              text-accent mt-1
                            ">
                              ✅
                            </span>
                            <span>{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}
            </div>
            
            {/* Sidebar - Testimonial & Related */}
            <div className="space-y-8">
              {/* Testimonial */}
              {testimonial && (
                <Card className="p-6">
                  <div className="
                    text-4xl text-accent/20
                    mb-4
                  ">
                    "
                  </div>
                  <blockquote className="
                    text-text-body italic mb-6
                  ">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="
                    flex items-center gap-4
                    pt-6 border-t border-border
                  ">
                    <div className="
                      w-12 h-12
                      bg-accent/10 rounded-full
                      flex items-center justify-center
                      text-accent font-bold
                    ">
                      {testimonial.author.charAt(0)}
                    </div>
                    <div>
                      <div className="
                        font-heading font-semibold
                        text-text-heading
                      ">
                        {testimonial.author}
                      </div>
                      <div className="text-sm text-accent">
                        {testimonial.position}, {testimonial.company}
                      </div>
                    </div>
                  </div>
                </Card>
              )}
              
              {/* Related Projects */}
              {relatedProjects.length > 0 && (
                <Card className="p-6">
                  <h3 className="
                    font-heading font-semibold
                    text-xl text-text-heading
                    mb-6
                  ">
                    Related Projects
                  </h3>
                  
                  <div className="space-y-4">
                    {relatedProjects.map((relatedProject) => (
                      <Link
                        key={relatedProject.id}
                        to={`/portfolio/${relatedProject.id}`}
                        className="
                          flex items-center gap-4
                          p-3
                          bg-primary/30 border border-border
                          rounded-lg
                          hover:border-accent/30
                          transition-all duration-300
                          group
                        "
                      >
                        <div className="
                          w-16 h-16
                          bg-primary border border-border
                          rounded-lg overflow-hidden
                          flex-shrink-0
                        ">
                          {isVideoAsset(relatedProject.primaryMedia?.src || relatedProject.thumbnail || '') ? (
                            <video
                              src={relatedProject.primaryMedia?.src || relatedProject.thumbnail}
                              poster={relatedProject.primaryMedia?.poster || relatedProject.thumbnail}
                              className="
                                w-full h-full object-cover
                                group-hover:scale-110
                                transition-transform duration-300
                              "
                              muted
                              playsInline
                              preload="metadata"
                            />
                          ) : (
                            <img
                              src={relatedProject.thumbnail || relatedProject.image}
                              alt={relatedProject.title}
                              className="
                                w-full h-full object-cover
                                group-hover:scale-110
                                transition-transform duration-300
                              "
                            />
                          )}
                        </div>
                        <div>
                          <div className="
                            font-heading font-semibold
                            text-sm text-text-heading
                            mb-1
                          ">
                            {relatedProject.title}
                          </div>
                          <div className="
                            text-xs text-text-body
                          ">
                            {relatedProject.category}
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                  
                  <div className="mt-6 pt-6 border-t border-border">
                    <Link
                      to="/portfolio"
                      className="
                        inline-flex items-center gap-2
                        text-accent hover:text-accent-hover
                        transition-colors duration-300
                        group
                      "
                    >
                      <span>View All Projects</span>
                      <span className="
                        group-hover:translate-x-1
                        transition-transform duration-300
                      ">
                        →
                      </span>
                    </Link>
                  </div>
                </Card>
              )}
            </div>
          </div>
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
          ">
            <h2 className="
              font-heading font-bold
              text-3xl md:text-4xl
              text-text-heading
              mb-6
            ">
              Ready to Start Your Next Project?
            </h2>
            
            <p className="
              text-text-body text-lg
              max-w-2xl mx-auto
              mb-8
            ">
              Let's turn your next idea into a reliable, polished product your users can trust.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
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
                href="/portfolio"
              >
                View More Work
              </Button>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default ProjectDetails;
