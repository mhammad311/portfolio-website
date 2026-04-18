/* ============================================
   FOOTER COMPONENT
   Site footer with navigation and social links
   Theme: Midnight Tech
   ============================================ */

import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiHeart, FiMail, FiMapPin, FiPhone } from 'react-icons/fi';

import Button from './Button';
import { socials, contactInfo } from '../data/socials';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'Home',     href: '/'         },
    { label: 'About',    href: '/about'    },
    { label: 'Services', href: '/services' },
    { label: 'Projects', href: '/portfolio' },
    { label: 'Blog',     href: '/blog'     }, // ← ADDED
    { label: 'Contact',  href: '/contact'  },
  ];

  const serviceLinks = [
    { label: 'Web Development', href: '/services#web-development' },
    { label: 'Mobile Apps',     href: '/services#mobile-apps'     },
    { label: 'E-Commerce',      href: '/services#ecommerce'       },
    { label: 'WordPress',       href: '/services#wordpress'       },
  ];

  const legalLinks = [
    { label: 'Privacy Policy',   href: '/privacy' },
    { label: 'Terms of Service', href: '/terms'   },
  ];

  const footerSocials = socials.filter((link) =>
    ['github', 'linkedin', 'instagram'].includes(link.id)
  );

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      className="relative bg-primary-light/30 border-t border-border"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />

      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          <div className="lg:col-span-4">
            <Link to="/" className="inline-block group mb-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 flex items-center justify-center border-2 border-accent rounded-lg group-hover:bg-accent/10 transition-colors duration-300">
                  <span className="font-heading font-bold text-xl text-accent">web</span>
                </div>
                <div>
                  <h3 className="font-heading font-bold text-xl text-text-heading">webX</h3>
                  <p className="text-xs text-accent font-mono">Full Stack Developer</p>
                </div>
              </div>
            </Link>

            <p className="text-text-body text-sm leading-relaxed mb-6 max-w-sm">
              A passionate full-stack developer crafting beautiful, functional, and
              user-centered digital experiences. Let's build something amazing together.
            </p>

            <div className="flex items-center gap-3">
              {footerSocials.map((social) => (
                <motion.a
                  key={social.id}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 flex items-center justify-center text-text-body hover:text-accent bg-primary/50 hover:bg-accent/10 border border-border hover:border-accent/50 rounded-lg transition-all duration-300"
                  aria-label={social.name}
                >
                  {React.createElement(social.icon, { size: 18 })}
                </motion.a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <h4 className="font-heading font-semibold text-text-heading mb-4 text-lg">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-text-body hover:text-accent text-sm transition-colors duration-300 inline-flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-2 h-px bg-accent transition-all duration-300" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="font-heading font-semibold text-text-heading mb-4 text-lg">
              Services
            </h4>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-text-body hover:text-accent text-sm transition-colors duration-300 inline-flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-2 h-px bg-accent transition-all duration-300" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4">
            <h4 className="font-heading font-semibold text-text-heading mb-4 text-lg">
              Get In Touch
            </h4>

            <div className="space-y-4 mb-6">
              <a
                href={`mailto:${contactInfo.primaryEmail}`}
                className="flex items-center gap-3 text-text-body hover:text-accent transition-colors duration-300 text-sm"
              >
                <FiMail className="text-accent flex-shrink-0" />
                <span>{contactInfo.primaryEmail}</span>
              </a>

              {contactInfo.primaryPhone && (
                <a
                  href={`tel:${contactInfo.primaryPhone}`}
                  className="flex items-center gap-3 text-text-body hover:text-accent transition-colors duration-300 text-sm"
                >
                  <FiPhone className="text-accent flex-shrink-0" />
                  <span>{contactInfo.primaryPhone}</span>
                </a>
              )}

              {contactInfo.location && (
                <div className="flex items-center gap-3 text-text-body text-sm">
                  <FiMapPin className="text-accent flex-shrink-0" />
                  <span>
                    {contactInfo.location.city}, {contactInfo.location.country}
                  </span>
                </div>
              )}
            </div>

            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/20 rounded-full mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
              </span>
              <span className="text-xs font-mono text-accent">
                {contactInfo.availability?.message || 'Available for freelance'}
              </span>
            </div>

            <Button variant="secondary" size="sm" href="/contact">
              Get a Quote
            </Button>
          </div>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-text-body text-sm text-center md:text-left">
              (c) {currentYear} WebX. All rights reserved.
            </p>

            <p className="text-text-body text-sm flex items-center gap-2">
              <span>Built with</span>
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <FiHeart className="text-accent" />
              </motion.span>
              <span>using React & Vite</span>
            </p>

            <div className="flex items-center gap-4">
              {legalLinks.map((link, index) => (
                <React.Fragment key={link.label}>
                  {index > 0 && <span className="text-border">|</span>}
                  <Link
                    to={link.href}
                    className="text-text-body text-sm hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;