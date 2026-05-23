import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Code, Sigma, Cpu, FileSpreadsheet } from 'lucide-react';

const milestones = [
  {
    phase: 'Professional Experience',
    year: 'June 2025 – Present',
    title: 'Data Analyst — SMEC LAB',
    location: 'Kochi, India',
    details: 'Analyzed structured and unstructured datasets to generate actionable insights improving operational efficiency by 20%. Built KPI dashboards and automated reports. Performed data cleansing, transformation, and visualization using Python and SQL. Collaborated cross-functionally to support data-driven decisions.',
    icon: <FileSpreadsheet className="w-5 h-5 text-primary dark:text-accent" />,
  },
  {
    phase: 'Professional Experience',
    year: 'January 2025 – Present',
    title: 'Machine Learning Engineer — NexGen Tech Solutions',
    location: 'India',
    details: 'Designed and deployed machine learning models for predictive analytics and classification tasks. Improved model accuracy by 15% through feature engineering and hyperparameter tuning. Implemented end-to-end ML pipelines including preprocessing, training, and evaluation.',
    icon: <Cpu className="w-5 h-5 text-primary dark:text-accent" />,
  },
  {
    phase: 'Academic Education',
    year: '2023 – 2027',
    title: 'B.Tech — Artificial Intelligence and Data Science',
    location: 'Dhanalakshmi Srinivasan Engineering College',
    details: 'Affiliated to Anna University, Chennai. Graduating in 2027. Gaining deep exposure in computational engineering, statistical modeling, data warehousing, neural structures, and database query optimization.',
    icon: <GraduationCap className="w-5 h-5 text-primary dark:text-accent" />,
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 md:py-28 relative border-t border-primary/5 dark:border-dark-border/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-display font-extrabold text-3xl sm:text-4xl text-charcoal dark:text-white tracking-tight uppercase"
          >
            Education & <span className="text-primary dark:text-accent">Milestones</span>
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
            A timeline representing my academic journey pursuing my B.E. in Computer Science with a specialization in AI and Machine Learning.
          </motion.p>
        </div>

        {/* Timeline Layout */}
        <div className="relative max-w-4xl mx-auto">
          
          {/* Connecting Vertical Track */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary via-primary/30 to-transparent dark:from-accent dark:via-accent/20 transform md:-translate-x-1/2" />

          {/* Milestones Map */}
          <div className="space-y-12">
            {milestones.map((milestone, index) => {
              const isEven = index % 2 === 0;

              return (
                <div key={index} className="relative flex flex-col md:flex-row items-start md:items-center">
                  
                  {/* Left Side Space (Desktop only) */}
                  <div className={`hidden md:block w-1/2 ${isEven ? 'pr-12 text-right' : 'order-last pl-12 text-left'}`}>
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: '-50px' }}
                      transition={{ duration: 0.6, type: 'spring' }}
                      className="space-y-2"
                    >
                      <span className="font-mono text-xs text-primary dark:text-accent font-semibold tracking-wider uppercase">
                        {milestone.phase}
                      </span>
                      <h4 className="font-display font-bold text-lg text-charcoal dark:text-white">
                        {milestone.title}
                      </h4>
                      <div className="font-body text-xs text-charcoal/60 dark:text-gray-400">
                        {milestone.year} | {milestone.location}
                      </div>
                    </motion.div>
                  </div>

                  {/* Pulsing Center Node */}
                  <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 z-10 flex items-center justify-center">
                    <motion.div
                      initial={{ scale: 0.8 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      className="w-10 h-10 rounded-full bg-secondary dark:bg-dark-card border-2 border-primary dark:border-accent flex items-center justify-center shadow-lg"
                    >
                      {milestone.icon}
                    </motion.div>
                    <div className="absolute w-12 h-12 rounded-full border border-primary/20 dark:border-accent/20 animate-ping -z-10" />
                  </div>

                  {/* Right Side Content (or Main Mobile Content) */}
                  <div className={`w-full md:w-1/2 pl-16 md:pl-0 ${isEven ? 'md:order-last md:pl-12' : 'md:pr-12'}`}>
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: '-50px' }}
                      transition={{ duration: 0.6, type: 'spring' }}
                      className="p-6 rounded-2xl glass-card border border-primary/10 dark:border-dark-border/40 hover-lift text-left space-y-3"
                    >
                      {/* Mobile Header elements */}
                      <div className="md:hidden space-y-1">
                        <span className="font-mono text-xs text-primary dark:text-accent font-semibold tracking-wider uppercase">
                          {milestone.phase}
                        </span>
                        <h4 className="font-display font-bold text-base text-charcoal dark:text-white">
                          {milestone.title}
                        </h4>
                        <div className="font-body text-xs text-charcoal/60 dark:text-gray-400">
                          {milestone.year} | {milestone.location}
                        </div>
                      </div>

                      <p className="font-body text-sm font-light text-charcoal/70 dark:text-gray-300 leading-relaxed">
                        {milestone.details}
                      </p>

                      <div className="pt-2 flex items-center gap-1 text-[11px] font-mono text-primary/80 dark:text-accent/80">
                        <GraduationCap className="w-3.5 h-3.5" />
                        <span>B.Tech AI & Data Science Student / Engineer</span>
                      </div>
                    </motion.div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
