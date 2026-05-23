import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Trophy, GitCommit, CheckCircle2 } from 'lucide-react';

const achievements = [
  {
    title: 'Data Analyst Certification',
    tag: 'SMEC LAB',
    details: 'Validated proficiency in structured and unstructured data analysis, automating business KPI dashboards, data cleansing and pipelines, and delivering operational insights.',
    icon: <Trophy className="w-6 h-6 text-primary dark:text-accent" />,
  },
  {
    title: 'ML Engineering Validation',
    tag: 'NexGen Tech',
    details: 'Certified in end-to-end machine learning engineering pipelines, developing regression and classification predictive systems, and executing hyperparameter optimizations.',
    icon: <Sparkles className="w-6 h-6 text-primary dark:text-accent" />,
  },
];

export default function Achievements() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
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
    <section id="achievements" className="py-20 md:py-28 relative border-t border-primary/5 dark:border-dark-border/20">
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
            Key <span className="text-primary dark:text-accent">Achievements</span>
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
            A summary of milestones verifying my professional competitive readiness and practical coding experience.
          </motion.p>
        </div>

        {/* Achievements Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
        >
          {achievements.map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="p-6 md:p-8 rounded-3xl glass-card border border-primary/10 dark:border-dark-border/40 hover-lift text-left space-y-6 relative overflow-hidden flex flex-col justify-between group"
            >
              <div className="space-y-4">
                {/* Icon row */}
                <div className="flex items-center justify-between">
                  <div className="p-3 bg-primary/10 dark:bg-accent/10 rounded-2xl w-fit">
                    {item.icon}
                  </div>
                  <span className="font-mono text-[10px] bg-primary/5 border border-primary/10 dark:bg-accent/5 dark:border-accent/15 text-primary dark:text-accent font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    {item.tag}
                  </span>
                </div>

                {/* Content */}
                <div className="space-y-2">
                  <h3 className="font-display font-extrabold text-lg sm:text-xl text-charcoal dark:text-white group-hover:text-primary dark:group-hover:text-accent transition-colors duration-200">
                    {item.title}
                  </h3>
                  <p className="font-body text-sm font-light text-charcoal/70 dark:text-gray-300 leading-relaxed">
                    {item.details}
                  </p>
                </div>
              </div>

              {/* Achievement verified indicator */}
              <div className="pt-4 border-t border-primary/5 dark:border-dark-border/20 flex items-center gap-1.5 text-xs font-mono font-medium text-emerald-600 dark:text-emerald-500">
                <CheckCircle2 className="w-4 h-4" />
                <span>Verified Milestones</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
