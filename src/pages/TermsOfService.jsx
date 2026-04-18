import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiFileText, FiMessageSquare, FiShield } from 'react-icons/fi';

import Button from '../components/Button';
import usePageMeta from '../hooks/usePageMeta';

const sections = [
  {
    title: 'Website Use',
    content:
      'By using this website, you agree to use it lawfully and respectfully. The site is intended for portfolio viewing, service information, and business inquiries.',
  },
  {
    title: 'Project Discussions',
    content:
      'Sending a message through this website does not automatically create a client relationship. Project work begins only after both sides agree on scope, timing, and terms.',
  },
  {
    title: 'Intellectual Property',
    content:
      'Unless stated otherwise, the content, branding, layouts, and showcased work on this website may not be copied, republished, or redistributed without permission.',
  },
  {
    title: 'Accuracy of Information',
    content:
      'I aim to keep project details and service information accurate, but content may change over time as services evolve, new work is published, or portfolio items are updated.',
  },
  {
    title: 'Limitation of Liability',
    content:
      'This website is provided as-is for showcasing work and receiving inquiries. I am not liable for indirect damages caused by temporary downtime, third-party service interruptions, or reliance on informational content alone.',
  },
];

const TermsOfService = () => {
  usePageMeta({
    title: 'Terms of Service | Hamad Hussain',
    description:
      'Review the terms of service for using the Hamad Hussain portfolio website and contacting for project work.',
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-24 pb-20"
    >
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-accent/5" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-accent/10 border border-accent/20 rounded-full">
              <FiFileText className="text-accent" size={14} />
              <span className="font-mono text-xs text-accent uppercase tracking-[0.2em]">
                Terms
              </span>
            </div>

            <h1 className="font-heading font-bold text-4xl md:text-5xl text-text-heading mb-6">
              Terms of Service
            </h1>

            <p className="text-text-body text-lg leading-relaxed max-w-3xl">
              These terms outline the general rules for using this portfolio website and
              contacting me about freelance, development, or collaboration opportunities.
            </p>

            <div className="mt-12 grid gap-6">
              {sections.map((section) => (
                <div
                  key={section.title}
                  className="bg-primary-light/20 border border-border rounded-2xl p-6 md:p-8"
                >
                  <h2 className="font-heading font-semibold text-2xl text-text-heading mb-3">
                    {section.title}
                  </h2>
                  <p className="text-text-body leading-relaxed">{section.content}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-primary-light/20 border border-border rounded-2xl p-6">
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-accent/10 text-accent mb-4">
                  <FiMessageSquare size={20} />
                </div>
                <h2 className="font-heading font-semibold text-xl text-text-heading mb-2">
                  Clear Communication
                </h2>
                <p className="text-text-body leading-relaxed">
                  Project timelines, pricing, revisions, and deliverables are confirmed
                  separately for each client engagement.
                </p>
              </div>

              <div className="bg-primary-light/20 border border-border rounded-2xl p-6">
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-accent/10 text-accent mb-4">
                  <FiShield size={20} />
                </div>
                <h2 className="font-heading font-semibold text-xl text-text-heading mb-2">
                  Respectful Use
                </h2>
                <p className="text-text-body leading-relaxed">
                  Spam, abuse, scraping, impersonation, or misuse of this site or its
                  contact channels is not permitted.
                </p>
              </div>
            </div>

            <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <Button variant="primary" size="lg" href="/contact">
                Discuss a Project
              </Button>
              <Link
                to="/privacy"
                className="text-text-body hover:text-accent transition-colors"
              >
                View Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default TermsOfService;
