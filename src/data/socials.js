/* ============================================
   SOCIALS DATA
   Social media and contact information
   ============================================ */

import {
  FiGithub,
  FiLinkedin,
  FiInstagram,
  FiYoutube,
  FiCodepen,
  FiMail,
  FiPhone,
  FiMapPin,
  FiGlobe,
} from 'react-icons/fi';
import {
  SiWhatsapp,
  SiFiverr,
  SiUpwork,
  SiDribbble,
  SiBehance,
  SiMedium,
  SiDiscord,
  SiTelegram,
} from 'react-icons/si';

/**
 * Main social links for website
 */
export const socials = [
  {
    id: 'github',
    name: 'GitHub',
    url: 'https://github.com/mhammad311',
    icon: FiGithub,
    color: '#6e5494',
    hoverColor: '#8b7ab5',
    username: '@mhammad311',
    description: 'Code repositories and projects',
    type: 'coding',
    visible: true,
    order: 1,
  },
  {
    id: 'linkedin',
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/hamad-hussain-96274a397/',
    icon: FiLinkedin,
    color: '#0077B5',
    hoverColor: '#0099e5',
    username: 'Hamad Hussain',
    description: 'Professional network',
    type: 'professional',
    visible: true,
    order: 2,
  },
  {
    id: 'instagram',
    name: 'Instagram',
    url: 'https://www.instagram.com/mh_codes/',
    icon: FiInstagram,
    color: '#E4405F',
    hoverColor: '#f06292',
    username: '@mh_codes',
    description: 'Daily updates and behind-the-scenes',
    type: 'social',
    visible: true,
    order: 3,
  },
  {
    id: 'whatsapp',
    name: 'WhatsApp',
    url: 'https://wa.me/923497818575',
    icon: SiWhatsapp,
    color: '#25D366',
    hoverColor: '#4ade80',
    phone: '+92 349 7818575',
    description: 'Quick chat and queries',
    type: 'contact',
    visible: true,
    order: 4,
  },
  {
    id: 'email',
    name: 'Email',
    url: 'mailto:mhweb11@gmail.com',
    icon: FiMail,
    color: '#EA4335',
    hoverColor: '#ff6b6b',
    email: 'mhweb11@gmail.com',
    description: 'Business inquiries',
    type: 'contact',
    visible: true,
    order: 5,
  },
  {
    id: 'codepen',
    name: 'CodePen',
    url: 'https://codepen.io/yourprofile',
    icon: FiCodepen,
    color: '#000000',
    hoverColor: '#333333',
    username: '@yourprofile',
    description: 'Frontend experiments',
    type: 'coding',
    visible: false,
    order: 6,
  },
  {
    id: 'youtube',
    name: 'YouTube',
    url: 'https://youtube.com/@yourchannel',
    icon: FiYoutube,
    color: '#FF0000',
    hoverColor: '#ff5252',
    username: '@yourchannel',
    description: 'Tutorials and content',
    type: 'content',
    visible: false,
    order: 7,
  },
];

/**
 * Professional profiles (Freelance platforms)
 */
export const professionalProfiles = [
  {
    id: 'upwork',
    name: 'Upwork',
    url: 'https://upwork.com/freelancers/~yourprofile',
    icon: SiUpwork,
    color: '#6FDA44',
    hoverColor: '#8ee374',
    username: 'Your Name',
    description: 'Freelance profile',
    type: 'freelance',
    visible: false,
    order: 1,
  },
  {
    id: 'fiverr',
    name: 'Fiverr',
    url: 'https://fiverr.com/yourprofile',
    icon: SiFiverr,
    color: '#1DBF73',
    hoverColor: '#36e996',
    username: 'yourprofile',
    description: 'Gig marketplace',
    type: 'freelance',
    visible: false,
    order: 2,
  },
];

/**
 * Design profiles
 */
export const designProfiles = [
  {
    id: 'dribbble',
    name: 'Dribbble',
    url: 'https://dribbble.com/yourprofile',
    icon: SiDribbble,
    color: '#EA4C89',
    hoverColor: '#ff80ab',
    username: '@yourprofile',
    description: 'Design portfolio',
    type: 'design',
    visible: false,
    order: 1,
  },
  {
    id: 'behance',
    name: 'Behance',
    url: 'https://behance.net/yourprofile',
    icon: SiBehance,
    color: '#1769FF',
    hoverColor: '#448aff',
    username: 'Your Name',
    description: 'Creative portfolio',
    type: 'design',
    visible: false,
    order: 2,
  },
];

/**
 * Communication platforms
 */
export const communicationPlatforms = [
  {
    id: 'discord',
    name: 'Discord',
    url: 'https://discord.gg/yourinvite',
    icon: SiDiscord,
    color: '#5865F2',
    hoverColor: '#7986ff',
    username: 'yourusername#0000',
    description: 'Community chat',
    type: 'communication',
    visible: false,
    order: 1,
  },
  {
    id: 'telegram',
    name: 'Telegram',
    url: 'https://t.me/yourusername',
    icon: SiTelegram,
    color: '#0088cc',
    hoverColor: '#29b6f6',
    username: '@yourusername',
    description: 'Instant messaging',
    type: 'communication',
    visible: false,
    order: 2,
  },
];

/**
 * Content platforms
 */
export const contentPlatforms = [
  {
    id: 'medium',
    name: 'Medium',
    url: 'https://medium.com/@yourusername',
    icon: SiMedium,
    color: '#00AB6C',
    hoverColor: '#26c6da',
    username: '@yourusername',
    description: 'Tech articles and blog',
    type: 'content',
    visible: false,
    order: 1,
  },
];

/**
 * Contact information
 */
export const contactInfo = {
  primaryEmail: 'mhweb11@gmail.com',
  secondaryEmail: 'contactmhweb11@gmail.com',
  primaryPhone: '+92 3497818575',
  secondaryPhone: '+92 3497818575',
  whatsapp: '+92 3497818575',
  location: {
    city: 'Lahore',
    country: 'Pakistan',
    timezone: 'PKT (UTC+5)',
    coordinates: '31.5204° N, 74.3587° E',
  },
  workingHours: {
    start: '09:00',
    end: '18:00',
    days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
    timezone: 'PKT',
  },
  availability: {
    status: 'available',
    message: 'Available for new projects',
    responseTime: 'Within 24 hours',
  },
};

/**
 * Get all social links (combined)
 * @returns {Array} All social links
 */
export const getAllSocialLinks = () => {
  return [
    ...socials,
    ...professionalProfiles,
    ...designProfiles,
    ...communicationPlatforms,
    ...contentPlatforms,
  ].sort((a, b) => a.order - b.order);
};

/**
 * Get visible social links
 * @returns {Array} Visible social links
 */
export const getVisibleSocialLinks = () => {
  return getAllSocialLinks().filter((link) => link.visible);
};

/**
 * Get social links by type
 * @param {string} type - Type of social link
 * @returns {Array} Filtered social links
 */
export const getSocialLinksByType = (type) => {
  return getAllSocialLinks().filter((link) => link.type === type);
};

/**
 * Get social link by ID
 * @param {string} id - Social link ID
 * @returns {Object|null} Social link object
 */
export const getSocialLinkById = (id) => {
  return getAllSocialLinks().find((link) => link.id === id) || null;
};

/**
 * Get primary contact methods
 * @returns {Array} Primary contact methods
 */
export const getPrimaryContactMethods = () => {
  return [
    {
      id: 'email',
      name: 'Email',
      value: contactInfo.primaryEmail,
      icon: FiMail,
      color: '#EA4335',
      type: 'email',
    },
    {
      id: 'phone',
      name: 'Phone',
      value: contactInfo.primaryPhone,
      icon: FiPhone,
      color: '#25D366',
      type: 'phone',
    },
    {
      id: 'location',
      name: 'Location',
      value: `${contactInfo.location.city}, ${contactInfo.location.country}`,
      icon: FiMapPin,
      color: '#FF9800',
      type: 'location',
    },
    {
      id: 'website',
      name: 'Website',
      value: 'webx.dev',
      icon: FiGlobe,
      color: '#2196F3',
      type: 'website',
    },
  ];
};

/**
 * Quick contact data for footer
 */
export const footerContact = {
  email: contactInfo.primaryEmail,
  phone: contactInfo.primaryPhone,
  location: `${contactInfo.location.city}, ${contactInfo.location.country}`,
  workingHours: `Mon-Fri ${contactInfo.workingHours.start}-${contactInfo.workingHours.end} ${contactInfo.workingHours.timezone}`,
};

export default socials;
