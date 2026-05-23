import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Cpu, Database, GitBranch, Sparkles } from 'lucide-react';

const skillCategories = [
  {
    title: 'Programming',
    icon: <Terminal className="w-5 h-5 text-primary dark:text-accent" />,
    skills: [
      { name: 'Python', level: 75 },
      { name: 'SQL', level: 68 },
    ],
  },
  {
    title: 'Data Analysis',
    icon: <Database className="w-5 h-5 text-primary dark:text-accent" />,
    skills: [
      { name: 'Pandas & NumPy', level: 72 },
      { name: 'Excel & Data Visualization', level: 70 },
    ],
  },
  {
    title: 'Machine Learning',
    icon: <Cpu className="w-5 h-5 text-primary dark:text-accent" />,
    skills: [
      { name: 'Scikit-learn', level: 70 },
      { name: 'Regression & Classification', level: 72 },
      { name: 'Model Evaluation', level: 65 },
    ],
  },
  {
    title: 'Tools',
    icon: <GitBranch className="w-5 h-5 text-primary dark:text-accent" />,
    skills: [
      { name: 'Git & Jupyter Notebook', level: 65 },
      { name: 'Power BI', level: 60 },
    ],
  },
  {
    title: 'Core Skills',
    icon: <Sparkles className="w-5 h-5 text-primary dark:text-accent" />,
    skills: [
      { name: 'Analytical & Problem Solving', level: 80 },
      { name: 'Statistical & Project Management', level: 68 },
    ],
  },
];

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 90, damping: 15 },
    },
  };

  return (
    <section id="skills" className="py-20 md:py-28 relative border-t border-primary/5 dark:border-dark-border/20">
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
            Technical <span className="text-primary dark:text-accent">Skills</span>
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
            A breakdown of my computational toolkit, programming environments, and libraries for developing AI architectures.
          </motion.p>
        </div>

        {/* Skills Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="p-6 rounded-2xl glass-card border border-primary/10 dark:border-dark-border/40 hover-lift text-left flex flex-col justify-between"
            >
              <div>
                {/* Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2.5 bg-primary/10 dark:bg-accent/10 rounded-xl">
                    {category.icon}
                  </div>
                  <h3 className="font-display font-bold text-lg text-charcoal dark:text-white">
                    {category.title}
                  </h3>
                </div>

                {/* Skill List with Progress Indicators */}
                <div className="space-y-5">
                  {category.skills.map((skill, sIdx) => (
                    <div key={sIdx} className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="font-body font-medium text-charcoal dark:text-gray-200">
                          {skill.name}
                        </span>
                        <span className="font-mono text-xs text-primary dark:text-accent font-semibold">
                          {skill.level}%
                        </span>
                      </div>
                      
                      {/* Bar Track */}
                      <div className="h-2 w-full bg-primary/5 dark:bg-primary/10 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, ease: 'easeOut', delay: sIdx * 0.1 }}
                          className="h-full bg-gradient-to-r from-primary to-primary-dark dark:from-accent dark:to-accent-dark rounded-full"
                        />
                      </div>
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
