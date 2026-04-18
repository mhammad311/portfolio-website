import ecomMain from '../assets/images/projects/ecom.jpg';
import ecomScreen1 from '../assets/images/projects/ecom1.PNG';
import ecomScreen2 from '../assets/images/projects/ecom2.PNG';
import ecomScreen4 from '../assets/images/projects/ecom4.PNG';
import ecomScreen5 from '../assets/images/projects/ecom5.png';
import multiWpMain from '../assets/images/projects/10 (9).png';
import multiWpScreen1 from '../assets/images/projects/10.png';
import multiWpScreen2 from '../assets/images/projects/10 (2).png';
import multiWpScreen3 from '../assets/images/projects/10 (3).png';
import multiWpScreen4 from '../assets/images/projects/10 (4).png';
import multiWpScreen5 from '../assets/images/projects/10 (5).png';
import multiWpScreen6 from '../assets/images/projects/10 (6).png';
import multiWpScreen7 from '../assets/images/projects/10 (7).png';
import multiWpScreen8 from '../assets/images/projects/10 (8).png';
import multiWpScreen10 from '../assets/images/projects/10 (10).png';
import multiWpScreen11 from '../assets/images/projects/10 (11).png';
import shopifyCustomMain from '../assets/images/projects/shop1.PNG';
import shopifyCustomScreen2 from '../assets/images/projects/shop2.PNG';
import shopifyCustomScreen3 from '../assets/images/projects/shop3.PNG';
import shopifyCustomScreen4 from '../assets/images/projects/shop4.PNG';
import shopifyCustomScreen5 from '../assets/images/projects/shop5.PNG';
import codexMain from '../assets/images/projects/codex.jpeg';
import codexScreen1 from '../assets/images/projects/codex1.jpeg';
import codexScreen2 from '../assets/images/projects/codex2.jpeg';
import codexScreen3 from '../assets/images/projects/codex3.jpeg';
import codexScreen4 from '../assets/images/projects/codex4.jpeg';
import codexScreen5 from '../assets/images/projects/codex5.jpeg';
import codexScreen6 from '../assets/images/projects/codex6.jpg';
import webxMain from '../assets/images/projects/webx.jpeg';
import webxScreen1 from '../assets/images/projects/webx1.jpeg';
import webxScreen2 from '../assets/images/projects/webx2.jpeg';
import webxScreen3 from '../assets/images/projects/webx3.jpeg';
import webxScreen4 from '../assets/images/projects/webx4.jpeg';
import webxScreen5 from '../assets/images/projects/webx5.jpg';
import webxScreen6 from '../assets/images/projects/webx6.jpeg';
import shopifyStoreMain from '../assets/images/projects/shopi.PNG';
import shopifyStoreScreen1 from '../assets/images/projects/shopi1.PNG';
import shopifyStoreScreen2 from '../assets/images/projects/shopi2.PNG';
import shopifyStoreScreen3 from '../assets/images/projects/shopi3.PNG';
import shopifyStoreScreen4 from '../assets/images/projects/shopi4.PNG';
import hospitalMain from '../assets/images/projects/H.PNG';
import hospitalScreen1 from '../assets/images/projects/H1.PNG';
import hospitalScreen2 from '../assets/images/projects/H2.PNG';
import hospitalScreen3 from '../assets/images/projects/H3.PNG';
import hospitalScreen4 from '../assets/images/projects/H4.PNG';
import hospitalScreen5 from '../assets/images/projects/H5.PNG';
import hospitalScreen6 from '../assets/images/projects/H6.PNG';
import hospitalScreen7 from '../assets/images/projects/H7.PNG';
import hospitalScreen8 from '../assets/images/projects/H8.PNG';
import hospitalScreen9 from '../assets/images/projects/H9.PNG';
import phishingMain from '../assets/images/projects/S.png';
import phishingScreen1 from '../assets/images/projects/S1.png';
import phishingScreen2 from '../assets/images/projects/S2.png';
import phishingScreen3 from '../assets/images/projects/S3.jpg';
import phishingScreen4 from '../assets/images/projects/S4.png';
import phishingScreen5 from '../assets/images/projects/S5.png';
import phishingScreen6 from '../assets/images/projects/S6.jpg';
import phishingScreen7 from '../assets/images/projects/S7.jpg';
import phishingScreen8 from '../assets/images/projects/S8.png';
import phishingScreen9 from '../assets/images/projects/S9.png';
import phishingScreen10 from '../assets/images/projects/S10.png';
import businessThumbnail from '../assets/images/projects/b1.png';
import businessVideo from '../assets/images/projects/business.mp4';

const defaultPlaceholderSvg = `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="800" height="600">
    <defs>
      <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#112240" />
        <stop offset="100%" stop-color="#0A192F" />
      </linearGradient>
    </defs>
    <rect width="800" height="600" fill="url(#bg)" />
    <rect x="48" y="48" width="704" height="504" rx="24" fill="none" stroke="#64FFDA" stroke-opacity="0.2" />
    <text x="400" y="275" text-anchor="middle" font-size="38" font-family="Arial, sans-serif" fill="#FFFFFF">
      Project Image
    </text>
    <text x="400" y="325" text-anchor="middle" font-size="22" font-family="Arial, sans-serif" fill="#8892B0">
      Coming soon
    </text>
  </svg>
`;

const defaultImage = `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(defaultPlaceholderSvg)}`;
const VIDEO_EXTENSIONS = /\.(mp4|webm|ogg)$/i;

export const isVideoAsset = (src = '') => VIDEO_EXTENSIONS.test(src);

const createMediaItem = (src, alt, index, poster) => ({
  id: `${alt}-${index}`,
  type: isVideoAsset(src) ? 'video' : 'image',
  src,
  alt: `${alt} ${index + 1}`,
  poster: poster || '',
});

const createProjectMedia = ({ thumbnail, alt, sources, poster }) => {
  const media = sources.map((src, index) => createMediaItem(src, alt, index, poster || thumbnail));
  const primaryMedia = media.find((item) => item.type === 'image') || media[0];

  return {
    thumbnail: thumbnail || primaryMedia?.poster || primaryMedia?.src || defaultImage,
    images: media.map((item) => item.src),
    media,
    primaryMedia,
    alt,
  };
};

export const projectImages = {
  'ecommerce-mern': createProjectMedia({
    thumbnail: ecomMain,
    alt: 'E-Commerce Website (MERN + Admin Panel)',
    sources: [ecomMain, ecomScreen1, ecomScreen2, ecomScreen4, ecomScreen5],
  }),
  'hospital-mern': createProjectMedia({
    thumbnail: hospitalMain,
    alt: 'Hospital Website (MERN)',
    sources: [
      hospitalMain,
      hospitalScreen1,
      hospitalScreen2,
      hospitalScreen3,
      hospitalScreen4,
      hospitalScreen5,
      hospitalScreen6,
      hospitalScreen7,
      hospitalScreen8,
      hospitalScreen9,
    ],
  }),
  'wordpress-business': createProjectMedia({
    thumbnail: businessThumbnail,
    alt: 'Real Estate WordPress Platform Built From Scratch',
    sources: [businessThumbnail, businessVideo],
    poster: businessThumbnail,
  }),
  'phishing-detection': createProjectMedia({
    thumbnail: phishingMain,
    alt: 'AI-Based Phishing Detection System',
    sources: [
      phishingMain,
      phishingScreen1,
      phishingScreen2,
      phishingScreen3,
      phishingScreen4,
      phishingScreen5,
      phishingScreen6,
      phishingScreen7,
      phishingScreen8,
      phishingScreen9,
      phishingScreen10,
    ],
  }),
  'multi-wp-sites': createProjectMedia({
    thumbnail: multiWpMain,
    alt: 'Multi WordPress Websites Collection',
    sources: [
      multiWpMain,
      multiWpScreen1,
      multiWpScreen2,
      multiWpScreen3,
      multiWpScreen4,
      multiWpScreen5,
      multiWpScreen6,
      multiWpScreen7,
      multiWpScreen8,
      multiWpScreen10,
      multiWpScreen11,
    ],
  }),
  'shopify-custom': createProjectMedia({
    thumbnail: shopifyCustomMain,
    alt: 'Shopify Store From Scratch',
    sources: [
      shopifyCustomMain,
      shopifyCustomScreen2,
      shopifyCustomScreen3,
      shopifyCustomScreen4,
      shopifyCustomScreen5,
    ],
  }),
  'shopify-store': createProjectMedia({
    thumbnail: shopifyStoreMain,
    alt: 'Professional Shopify Store',
    sources: [
      shopifyStoreMain,
      shopifyStoreScreen1,
      shopifyStoreScreen2,
      shopifyStoreScreen3,
      shopifyStoreScreen4,
    ],
  }),
  'wp-theme-codex': createProjectMedia({
    thumbnail: codexMain,
    alt: 'Custom WordPress Theme - CodeX',
    sources: [
      codexMain,
      codexScreen1,
      codexScreen2,
      codexScreen3,
      codexScreen4,
      codexScreen5,
      codexScreen6,
    ],
  }),
  'wp-theme-webx': createProjectMedia({
    thumbnail: webxMain,
    alt: 'Custom WordPress Theme - WebX',
    sources: [
      webxMain,
      webxScreen1,
      webxScreen2,
      webxScreen3,
      webxScreen4,
      webxScreen5,
      webxScreen6,
    ],
  }),
};

const defaultProjectMedia = createProjectMedia({
  thumbnail: defaultImage,
  alt: 'Project image coming soon',
  sources: [defaultImage],
});

export const getProjectImages = (projectId) => {
  return projectImages[projectId] || defaultProjectMedia;
};

export default projectImages;
