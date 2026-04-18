import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiMail, FiShield } from 'react-icons/fi';

import Button from '../components/Button';
import usePageMeta from '../hooks/usePageMeta';

const sections = [
  {
    title: 'Information I Collect',
    content:
      'When you contact me through this website, I may receive your name, email address, phone number, project details, and any message you choose to share.',
  },
  {
    title: 'How Information Is Used',
    content:
      'Your information is used only to respond to inquiries, discuss project opportunities, provide requested support, and maintain communication related to my services.',
  },
  {
    title: 'Data Protection',
    content:
      'I do not sell or trade your personal information. Reasonable steps are taken to protect submitted data and keep access limited to legitimate business communication.',
  },
  {
    title: 'Third-Party Services',
    content:
      'This site may use trusted third-party services such as EmailJS or hosting providers to deliver messages and operate the website. They only process the data needed to perform their service.',
  },
  {
    title: 'Your Rights',
    content:
      'If you want your submitted information updated or removed, you can contact me directly and I will handle the request as soon as reasonably possible.',
  },
];

const PrivacyPolicy = () => {
  usePageMeta({
    title: 'Privacy Policy | Hamad Hussain',
    description:
      'Read the privacy policy for Hamad Hussain portfolio website and contact forms.',
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-24 pb-20"
    >
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/8 via-transparent to-green-500/5" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-accent/10 border border-accent/20 rounded-full">
              <FiShield className="text-accent" size={14} />
              <span className="font-mono text-xs text-accent uppercase tracking-[0.2em]">
                Privacy
              </span>
            </div>

            <h1 className="font-heading font-bold text-4xl md:text-5xl text-text-heading mb-6">
              Privacy Policy
            </h1>

            <p className="text-text-body text-lg leading-relaxed max-w-3xl">
              This policy explains what information may be collected through this website
              and how it is used. The goal is simple: keep communication clear, secure,
              and limited to legitimate project-related use.
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

            <div className="mt-8 bg-primary-light/20 border border-border rounded-2xl p-6 md:p-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-accent/10 text-accent shrink-0">
                  <FiMail size={20} />
                </div>
                <div>
                  <h2 className="font-heading font-semibold text-xl text-text-heading mb-2">
                    Questions About Privacy
                  </h2>
                  <p className="text-text-body leading-relaxed">
                    If you have any privacy-related question or want your submitted data
                    reviewed or removed, you can reach out through the contact page.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <Button variant="primary" size="lg" href="/contact">
                Contact Me
              </Button>
              <Link
                to="/terms"
                className="text-text-body hover:text-accent transition-colors"
              >
                Read Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default PrivacyPolicy;
