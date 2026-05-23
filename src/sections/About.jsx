import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Layers, MessageSquare, BarChart2, Award, FolderGit2, Code2, Calendar } from 'lucide-react';

const highlights = [
  {
    icon: <Brain className="w-6 h-6 text-primary dark:text-accent" />,
    title: 'Machine Learning',
    description: 'Developing classification, regression, clustering models, and optimizing hyperparameters for predictive accuracy.',
  },
  {
    icon: <Layers className="w-6 h-6 text-primary dark:text-accent" />,
    title: 'Deep Learning',
    description: 'Designing neural networks using PyTorch and TensorFlow for pattern recognition and advanced predictions.',
  },
  {
    icon: <MessageSquare className="w-6 h-6 text-primary dark:text-accent" />,
    title: 'Natural Language Processing',
    description: 'Implementing custom LLM interfaces, tokenization, text processing, and sentiment analysis chatbot systems.',
  },
  {
    icon: <BarChart2 className="w-6 h-6 text-primary dark:text-accent" />,
    title: 'Data Analytics',
    description: 'Performing data cleansing, pipeline preprocessing, feature engineering, and statistical data visualization.',
  },
];

const stats = [
  {
    icon: <FolderGit2 className="w-5 h-5 text-primary dark:text-accent" />,
    value: '3',
    label: 'Academic Projects',
  },
  {
    icon: <Award className="w-5 h-5 text-primary dark:text-accent" />,
    value: '2',
    label: 'Industry Certifications',
  },
  {
    icon: <Code2 className="w-5 h-5 text-primary dark:text-accent" />,
    value: '10+',
    label: 'Core Skills mastered',
  },
  {
    icon: <Calendar className="w-5 h-5 text-primary dark:text-accent" />,
    value: '2027',
    label: 'Graduation Year',
  },
];

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 80, damping: 15 },
    },
  };

  return (
    <section id="about" className="py-20 md:py-28 relative border-t border-primary/5 dark:border-dark-border/20">
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
            About <span className="text-primary dark:text-accent">Me</span>
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
            I am a Data Analyst and Machine Learning Engineer specializing in data-driven decision making, predictive modeling, and project execution. Based in Alappuzha, Kerala, I enjoy taking on analytical problems, statistical modeling, and building scalable ML solutions.
          </motion.p>
        </div>

        {/* Highlight Grid & Stats */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Pillars List (Left 7 Cols) */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                className="p-6 rounded-2xl glass-card border border-primary/10 dark:border-dark-border/40 hover-lift text-left space-y-4"
              >
                <div className="p-3 bg-primary/10 dark:bg-accent/10 rounded-xl w-fit">
                  {item.icon}
                </div>
                <h3 className="font-display font-bold text-lg text-charcoal dark:text-white">
                  {item.title}
                </h3>
                <p className="font-body text-sm font-light text-charcoal/70 dark:text-gray-300 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Stats Grid & Bio Highlight (Right 5 Cols) */}
          <div className="lg:col-span-5 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, type: 'spring' }}
              className="p-8 rounded-2xl bg-primary text-white dark:bg-dark-card dark:border dark:border-dark-border/60 text-left space-y-4 shadow-xl"
            >
              <h3 className="font-display font-bold text-xl text-accent">Core Objective</h3>
              <p className="font-body text-base font-light leading-relaxed dark:text-gray-300">
                To build next-generation machine learning and data pipelines. My educational journey and hands-on laboratory experience has equipped me with standard practices in statistical learning, KPI dashboarding, and model deployment.
              </p>
              <div className="pt-2">
                <span className="font-mono text-xs text-accent font-semibold tracking-wider uppercase block">CURRENT MILESTONE</span>
                <span className="font-display font-medium text-sm block mt-1 text-white/90 dark:text-gray-200">
                  B.Tech in Artificial Intelligence & Data Science — Graduating 2027
                </span>
              </div>
            </motion.div>

            {/* Stats Cards Row */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              {stats.map((stat, idx) => (
                <motion.div
                  key={idx}
                  variants={cardVariants}
                  className="p-5 rounded-2xl glass-card border border-primary/10 dark:border-dark-border/40 text-center space-y-2"
                >
                  <div className="mx-auto p-2 bg-primary/5 dark:bg-accent/5 rounded-lg w-fit">
                    {stat.icon}
                  </div>
                  <div className="font-display font-black text-2xl sm:text-3xl text-primary dark:text-accent">
                    {stat.value}
                  </div>
                  <div className="font-body font-normal text-xs text-charcoal/60 dark:text-gray-400">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
