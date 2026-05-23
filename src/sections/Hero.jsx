import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Cpu, Brain, Database, ArrowRight, Download } from 'lucide-react';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 100, damping: 15 },
    },
  };

  const badgeVariants = {
    animate1: {
      y: [0, -12, 0],
      transition: { duration: 5, repeat: Infinity, ease: 'easeInOut' },
    },
    animate2: {
      y: [0, 10, 0],
      transition: { duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 },
    },
    animate3: {
      y: [0, -8, 0],
      transition: { duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.5 },
    },
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-24 pb-16 md:py-32 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Hero Left Content */}
          <motion.div
            className="lg:col-span-7 space-y-6 text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary dark:bg-accent/15 dark:border-accent/30 dark:text-accent font-display text-sm font-semibold tracking-wider uppercase">
              <Brain className="w-4 h-4 animate-pulse-slow" />
              <span>Aspiring AI Developer & Data Analyst</span>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-2">
              <h1 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl text-charcoal dark:text-white leading-tight tracking-tight uppercase">
                Data Analyst & <span className="text-primary dark:text-accent block">ML Engineer</span>
              </h1>
              <h2 className="font-display font-medium text-xl sm:text-2xl text-charcoal/80 dark:text-gray-200 mt-2">
                Hi, I'm <span className="text-primary dark:text-accent font-bold">Antony Benedict</span>
              </h2>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-charcoal/70 dark:text-gray-300 leading-relaxed max-w-xl font-body font-light"
            >
              Data Analyst and Machine Learning Engineer with hands-on experience in data-driven decision making, predictive modeling, and project execution. Skilled in analytical problem-solving, statistical modeling, and building scalable ML solutions. Seeking to contribute to high-impact teams through strong analytical thinking and engineering rigor.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-wrap md:flex-row gap-4 pt-4 animate-fade-in"
            >
              <a
                href="#projects"
                className="group relative flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-primary text-white font-display font-semibold shadow-md hover:bg-primary-dark transition-all duration-300 transform hover:-translate-y-0.5 overflow-hidden"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="/antony-resume.pdf"
                download="Antony_Benedict_Resume.pdf"
                className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border-2 border-primary/30 dark:border-dark-border text-primary dark:text-gray-300 font-display font-semibold hover:bg-primary/5 dark:hover:bg-dark-card hover:border-primary dark:hover:border-accent transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <Download className="w-4 h-4 text-primary dark:text-accent animate-bounce" style={{ animationDuration: '3s' }} />
                <span>Download Resume</span>
              </a>
              <a
                href="#contact"
                className="flex items-center justify-center px-6 py-3.5 rounded-xl border-2 border-primary/30 dark:border-dark-border text-primary dark:text-gray-300 font-display font-semibold hover:bg-primary/5 dark:hover:bg-dark-card hover:border-primary dark:hover:border-accent transition-all duration-300 transform hover:-translate-y-0.5"
              >
                Contact Me
              </a>
            </motion.div>
          </motion.div>

          {/* Hero Right Visual: Stylish Geometric & Floating Tech Badges */}
          <div className="lg:col-span-5 flex justify-center relative select-none">
            {/* Main Interactive Geometric Avatar Placeholder */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: 'spring', stiffness: 50, delay: 0.3 }}
              className="w-72 h-72 sm:w-96 sm:h-96 rounded-3xl relative flex items-center justify-center p-1 bg-gradient-to-tr from-primary to-accent dark:from-primary/45 dark:to-accent/30 shadow-xl overflow-hidden group"
            >
              {/* Background Glow */}
              <div className="absolute inset-0.5 bg-secondary dark:bg-dark-card rounded-[22px] flex items-center justify-center overflow-hidden">
                {/* Embedded dynamic neural net SVG */}
                <svg className="w-full h-full stroke-primary/20 dark:stroke-accent/15" viewBox="0 0 400 400" fill="none">
                  {/* Outer geometric rings */}
                  <circle cx="200" cy="200" r="140" strokeWidth="1" strokeDasharray="5,5" className="animate-[spin_120s_linear_infinite]" />
                  <circle cx="200" cy="200" r="100" strokeWidth="1.5" className="animate-[spin_60s_linear_infinite]" />
                  
                  {/* Grid of nodes */}
                  <g className="nodes">
                    <line x1="120" y1="120" x2="200" y2="80" strokeWidth="1.5" />
                    <line x1="200" y1="80" x2="280" y2="120" strokeWidth="1.5" />
                    <line x1="280" y1="120" x2="280" y2="280" strokeWidth="1.5" />
                    <line x1="280" y1="280" x2="200" y2="320" strokeWidth="1.5" />
                    <line x1="200" y1="320" x2="120" y2="280" strokeWidth="1.5" />
                    <line x1="120" y1="280" x2="120" y2="120" strokeWidth="1.5" />
                    
                    <line x1="120" y1="120" x2="200" y2="200" strokeWidth="1" />
                    <line x1="200" y1="80" x2="200" y2="200" strokeWidth="1" />
                    <line x1="280" y1="120" x2="200" y2="200" strokeWidth="1" />
                    <line x1="280" y1="280" x2="200" y2="200" strokeWidth="1" />
                    <line x1="200" y1="320" x2="200" y2="200" strokeWidth="1" />
                    <line x1="120" y1="280" x2="200" y2="200" strokeWidth="1" />
                  </g>

                  {/* Pulsing Dots */}
                  <circle cx="200" cy="80" r="6" fill="#2F6F73" className="animate-pulse" />
                  <circle cx="280" cy="120" r="6" fill="#E8C86B" className="animate-pulse" />
                  <circle cx="280" cy="280" r="6" fill="#2F6F73" className="animate-pulse" />
                  <circle cx="200" cy="320" r="6" fill="#E8C86B" className="animate-pulse" />
                  <circle cx="120" cy="280" r="6" fill="#2F6F73" className="animate-pulse" />
                  <circle cx="120" cy="120" r="6" fill="#E8C86B" className="animate-pulse" />
                  <circle cx="200" cy="200" r="10" fill="#2F6F73" className="animate-pulse" />
                </svg>

                {/* Core Avatar Symbol inside network */}
                <div className="absolute flex flex-col items-center justify-center text-primary dark:text-accent">
                  <Brain className="w-16 h-16 md:w-20 md:h-20 animate-pulse-slow" />
                  <span className="font-display font-semibold text-xs tracking-widest text-charcoal/60 dark:text-gray-400 mt-2 uppercase">Core AI Node</span>
                </div>
              </div>
            </motion.div>

            {/* Floating Tech Badges */}
            
            {/* Badge 1: Python */}
            <motion.div
              variants={badgeVariants}
              animate="animate1"
              className="absolute -top-4 -left-4 sm:left-4 p-3 bg-secondary/90 dark:bg-dark-card border border-primary/20 dark:border-dark-border rounded-2xl flex items-center gap-2 shadow-lg glass-card"
            >
              <Terminal className="w-5 h-5 text-[#3776AB] dark:text-accent" />
              <span className="font-display font-bold text-xs sm:text-sm text-charcoal dark:text-white">Python</span>
            </motion.div>

            {/* Badge 2: SQL */}
            <motion.div
              variants={badgeVariants}
              animate="animate2"
              className="absolute top-1/2 -right-4 sm:-right-8 p-3 bg-secondary/90 dark:bg-dark-card border border-primary/20 dark:border-dark-border rounded-2xl flex items-center gap-2 shadow-lg glass-card"
            >
              <Database className="w-5 h-5 text-teal-600 dark:text-accent" />
              <span className="font-display font-bold text-xs sm:text-sm text-charcoal dark:text-white">SQL</span>
            </motion.div>

            {/* Badge 3: Machine Learning */}
            <motion.div
              variants={badgeVariants}
              animate="animate3"
              className="absolute -bottom-6 left-12 p-3 bg-secondary/90 dark:bg-dark-card border border-primary/20 dark:border-dark-border rounded-2xl flex items-center gap-2 shadow-lg glass-card"
            >
              <Brain className="w-5 h-5 text-primary dark:text-accent" />
              <span className="font-display font-bold text-xs sm:text-sm text-charcoal dark:text-white">Machine Learning</span>
            </motion.div>

            {/* Badge 4: Data Analysis */}
            <motion.div
              variants={badgeVariants}
              animate="animate1"
              className="absolute top-12 -right-2 sm:right-6 p-3 bg-secondary/90 dark:bg-dark-card border border-primary/20 dark:border-dark-border rounded-2xl flex items-center gap-2 shadow-lg glass-card"
            >
              <Cpu className="w-5 h-5 text-amber-500 dark:text-accent" />
              <span className="font-display font-bold text-xs sm:text-sm text-charcoal dark:text-white">Data Analysis</span>
            </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
