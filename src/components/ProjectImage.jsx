import React from 'react';
import PropTypes from 'prop-types';
import { projectImages } from '../data/projectImages';

/**
 * ProjectImage Component
 * Handles project images with fallback and lazy loading
 */
const ProjectImage = ({
  projectId,
  imageIndex = 0,
  className = '',
  alt = '',
  width = '100%',
  height = 'auto',
  thumbnail = false,
  lazy = true,
  ...props
}) => {
  let imageSrc;
  let imageAlt = alt;

  if (projectImages[projectId]) {
    if (thumbnail) {
      imageSrc = projectImages[projectId].thumbnail;
    } else {
      const images = projectImages[projectId].images;
      imageSrc = images[Math.min(imageIndex, images.length - 1)];
    }
    
    if (!alt) {
      imageAlt = projectImages[projectId].alt || `Project ${projectId} image`;
    }
  } else {
    // Fallback to placeholder
    imageSrc = '/assets/images/projects/default.jpg';
    imageAlt = imageAlt || 'Project image';
  }

  return (
    <img
      src={imageSrc}
      alt={imageAlt}
      className={`project-image ${className}`}
      width={width}
      height={height}
      loading={lazy ? 'lazy' : 'eager'}
      onError={(e) => {
        e.target.onerror = null;
        e.target.src = '/assets/images/projects/default.jpg';
      }}
      {...props}
    />
  );
};

ProjectImage.propTypes = {
  projectId: PropTypes.string.isRequired,
  imageIndex: PropTypes.number,
  className: PropTypes.string,
  alt: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  thumbnail: PropTypes.bool,
  lazy: PropTypes.bool,
};

export default ProjectImage;
