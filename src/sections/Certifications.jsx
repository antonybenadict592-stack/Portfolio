import React from 'react';
import { motion } from 'framer-motion';
import { Award, ShieldCheck, Calendar, CheckCircle } from 'lucide-react';

const certifications = [
  {
    title: 'Data Analyst Certification',
    issuer: 'SMEC LAB',
    date: '2025',
    skills: ['Structured & Unstructured Data Analysis', 'Python & SQL Cleansing / Queries', 'KPI & Business Metrics Dashboards', 'Cross-Functional Reporting'],
    color: 'from-teal-500/20 to-teal-600/10'
  },
  {
    title: 'Machine Learning Engineering',
    issuer: 'NexGen Tech Solutions',
    date: '2025',
    skills: ['Predictive & Classification Models', 'Feature Engineering & Hyperparameters', 'End-to-End ML Training Pipelines', 'Scalable Machine Learning Solutions'],
    color: 'from-amber-500/20 to-amber-600/10'
  }
];

export default function Certifications() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 90, damping: 15 }
    }
  };

  return (
    <section id="certifications" className="py-20 md:py-28 relative border-t border-primary/5 dark:border-dark-border/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-display font-extrabold text-3xl sm:text-4xl text-charcoal dark:text-white tracking-tight uppercase"
          >
            Professional <span className="text-primary dark:text-accent">Certifications</span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '80px' }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-[3px] bg-primary dark:bg-accent mx-auto mt-4 rounded-full"
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-6 text-charcoal/70 dark:text-gray-300 font-body font-light text-base sm:text-lg leading-relaxed"
          >
            Valid credentials confirming my technical capabilities in programming standards and mathematical modeling.
          </motion.p>
        </div>

        {/* Certifications Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
        >
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ 
                scale: 1.03,
                boxShadow: '0 10px 30px -10px rgba(47, 111, 115, 0.25)' 
              }}
              className="p-6 md:p-8 rounded-3xl glass-card border border-primary/10 dark:border-dark-border/40 text-left transition-all duration-300 relative flex flex-col justify-between group overflow-hidden"
            >
              {/* Decorative Background Gradient Spot */}
              <div className={`absolute -right-20 -top-20 w-40 h-40 rounded-full blur-3xl bg-gradient-to-br ${cert.color} opacity-40 group-hover:scale-150 transition-transform duration-500`} />

              <div className="space-y-6 z-10 relative">
                {/* Header */}
                <div className="flex items-start justify-between">
                  <div className="p-3 bg-primary/5 dark:bg-accent/5 border border-primary/15 dark:border-dark-border rounded-2xl text-primary dark:text-accent">
                    <Award className="w-6 h-6 animate-pulse-slow" />
                  </div>
                  <div className="flex items-center gap-1 text-[11px] font-mono text-charcoal/50 dark:text-gray-400">
                    <Calendar className="w-3 h-3" />
                    <span>{cert.date}</span>
                  </div>
                </div>

                {/* Info block */}
                <div className="space-y-1">
                  <h3 className="font-display font-extrabold text-lg sm:text-xl text-charcoal dark:text-white leading-snug">
                    {cert.title}
                  </h3>
                  <p className="font-body text-xs text-primary dark:text-accent font-semibold">
                    {cert.issuer}
                  </p>
                </div>

                {/* Details Checkboxes */}
                <div className="space-y-2 pt-2 border-t border-primary/5 dark:border-dark-border/20">
                  <span className="font-mono text-[10px] text-charcoal/50 dark:text-gray-400 font-semibold uppercase tracking-wider block mb-3">CURRICULUM HIGHLIGHTS</span>
                  {cert.skills.map((skill, sIdx) => (
                    <div key={sIdx} className="flex items-center gap-2 text-xs font-body font-light text-charcoal/70 dark:text-gray-300">
                      <ShieldCheck className="w-3.5 h-3.5 text-primary dark:text-accent shrink-0" />
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
