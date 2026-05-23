import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LineChart, MessageSquare, Tag, ArrowRight, ExternalLink, X, CheckCircle, BarChart, Settings, Play } from 'lucide-react';

const projects = [
  {
    id: 3,
    title: 'Heart Attack Prediction System',
    shortDesc: 'Supervised predictive classification system utilizing Troponin I levels and vitals to determine cardiac arrest risk.',
    longDesc: 'Developed an advanced clinical classification engine using supervised prediction learning. Ingested patient vitals data including age, Troponin I levels (cardiac biomarker), blood pressure, cholesterol levels, and heart rate parameters. Handled class-imbalance corrections via SMOTE oversampling and implemented SVM models to achieve a high recall rating (91.2%), optimizing diagnostic patient safety.',
    tech: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'Seaborn'],
    metrics: [
      { name: 'Recall Rate', value: '91.2%' },
      { name: 'Primary Biomarker', value: 'Troponin I' },
      { name: 'Preprocessing', value: 'SMOTE / Scaling' }
    ],
    features: [
      'Developed vital health classification predictions utilizing Troponin I',
      'Handled highly imbalanced clinical data distributions',
      'Optimized model sensitivity (recall) to minimize false negatives',
      'Mapped and analyzed feature correlations using Seaborn plots'
    ],
    illustration: (
      <svg className="w-full h-full bg-slate-50 dark:bg-[#0b1c1e] transition-colors stroke-primary/25 dark:stroke-accent/15" viewBox="0 0 400 200" fill="none">
        {/* Gridlines */}
        <line x1="40" y1="20" x2="40" y2="170" strokeWidth="0.5" strokeDasharray="3,3" />
        <line x1="120" y1="20" x2="120" y2="170" strokeWidth="0.5" strokeDasharray="3,3" />
        <line x1="200" y1="20" x2="200" y2="170" strokeWidth="0.5" strokeDasharray="3,3" />
        <line x1="280" y1="20" x2="280" y2="170" strokeWidth="0.5" strokeDasharray="3,3" />
        <line x1="360" y1="20" x2="360" y2="170" strokeWidth="0.5" strokeDasharray="3,3" />
        
        {/* ECG pulse path */}
        <motion.path
          d="M 40 100 L 120 100 L 140 100 L 150 60 L 160 140 L 170 100 L 180 100 L 190 100 L 200 40 L 210 160 L 220 100 L 230 100 L 360 100"
          stroke="#2F6F73"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: 'easeInOut' }}
        />

        {/* Pulse beacon */}
        <circle cx="200" cy="40" r="5" fill="#E8C86B" className="animate-ping" />
        <circle cx="200" cy="40" r="4.5" fill="#E8C86B" />

        {/* Floating details box */}
        <rect x="250" y="125" width="90" height="25" rx="5" fill="#E8C86B" fillOpacity="0.1" stroke="#E8C86B" strokeWidth="1" />
        <text x="295" y="142" fill="currentColor" className="text-[10px] font-mono fill-accent font-bold" textAnchor="middle">Risk Model Active</text>
      </svg>
    )
  },
  {
    id: 1,
    title: 'Predictive Analytics System',
    shortDesc: 'Regression and classification modeling system achieving 90%+ accuracy through optimization and validation.',
    longDesc: 'Developed a high-accuracy predictive model applying advanced regression and classification algorithms. Handled data preprocessing, normalization, and K-Fold cross-validation to prevent overfitting. Achieved over 90% model accuracy through grid-search optimization and visualized key features using Matplotlib and custom dashboards.',
    tech: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'Matplotlib'],
    metrics: [
      { name: 'Model Accuracy', value: '90%+' },
      { name: 'Validation Method', value: 'K-Fold CV' },
      { name: 'Feature Count', value: 'Optimal Features' }
    ],
    features: [
      'Developed regression and classification models',
      'Achieved 90%+ model accuracy via parameter tuning',
      'Implemented cross-validation and scaling checks',
      'Created data visualization graphs using Matplotlib'
    ],
    illustration: (
      <svg className="w-full h-full bg-slate-50 dark:bg-[#0b1c1e] transition-colors stroke-primary/25 dark:stroke-accent/15" viewBox="0 0 400 200" fill="none">
        {/* Chart gridlines */}
        <line x1="40" y1="20" x2="40" y2="170" strokeWidth="1" />
        <line x1="40" y1="170" x2="360" y2="170" strokeWidth="1" />
        <line x1="40" y1="70" x2="360" y2="70" strokeDasharray="3,3" strokeWidth="0.5" />
        <line x1="40" y1="120" x2="360" y2="120" strokeDasharray="3,3" strokeWidth="0.5" />
        
        {/* Regression line */}
        <motion.line
          x1="40" y1="150" x2="360" y2="50"
          stroke="#2F6F73"
          strokeWidth="3"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: 'easeInOut' }}
        />
        
        {/* Scatter Points */}
        <circle cx="80" cy="140" r="4.5" fill="#E8C86B" />
        <circle cx="120" cy="120" r="4.5" fill="#E8C86B" />
        <circle cx="180" cy="115" r="4.5" fill="#E8C86B" />
        <circle cx="230" cy="85" r="4.5" fill="#E8C86B" />
        <circle cx="290" cy="80" r="4.5" fill="#E8C86B" />
        <circle cx="340" cy="55" r="4.5" fill="#E8C86B" />

        {/* Highlight box */}
        <rect x="250" y="110" width="90" height="25" rx="5" fill="#2F6F73" fillOpacity="0.1" stroke="#2F6F73" strokeWidth="1" />
        <text x="295" y="127" fill="currentColor" className="text-[10px] font-mono fill-primary dark:fill-accent font-bold" textAnchor="middle">Accuracy &gt; 90%</text>
      </svg>
    )
  },
  {
    id: 2,
    title: 'Data Insights Dashboard',
    shortDesc: 'Automated business KPI tracking dashboard reducing manual reporting time by 40%.',
    longDesc: 'Built interactive and automated KPI tracking dashboards to monitor business performance. Cleaned and structured metrics pipelines using Pandas and connected database sources through SQL. Visualized critical business indicators in Power BI, successfully reducing manual reporting efforts by 40%.',
    tech: ['SQL', 'Power BI', 'Excel', 'Pandas'],
    metrics: [
      { name: 'Manual Reporting', value: '-40% Time' },
      { name: 'Core KPIs Tracked', value: 'Interactive' },
      { name: 'Data Pipeline', value: 'Automated' }
    ],
    features: [
      'Built automated dashboards to track business KPIs',
      'Configured database queries and schemas using SQL',
      'Transformed structured datasets using Pandas',
      'Designed executive visual layouts in Power BI'
    ],
    illustration: (
      <svg className="w-full h-full bg-slate-50 dark:bg-[#0b1c1e] transition-colors stroke-primary/25 dark:stroke-accent/15" viewBox="0 0 400 200" fill="none">
        {/* Dashboard frame */}
        <rect x="40" y="20" width="320" height="160" rx="8" strokeWidth="1.5" />
        <line x1="40" y1="50" x2="360" y2="50" strokeWidth="1" />
        
        {/* Header symbols */}
        <circle cx="55" cy="35" r="4" fill="#2F6F73" />
        <circle cx="70" cy="35" r="4" fill="#2F6F73" />
        <circle cx="85" cy="35" r="4" fill="#2F6F73" />
        
        {/* KPI indicator card */}
        <rect x="55" y="65" width="100" height="100" rx="6" fill="#2F6F73" fillOpacity="0.08" stroke="#2F6F73" strokeWidth="0.75" />
        <text x="105" y="100" fill="#2F6F73" className="text-xl font-display font-black fill-primary dark:fill-accent" textAnchor="middle">-40%</text>
        <text x="105" y="125" fill="currentColor" className="text-[8px] font-body fill-charcoal/60 dark:fill-gray-400 font-medium" textAnchor="middle">Reporting Time</text>
        
        {/* Bar chart mockup */}
        <rect x="180" y="130" width="25" height="35" rx="3" fill="#E8C86B" />
        <rect x="220" y="90" width="25" height="75" rx="3" fill="#2F6F73" />
        <rect x="260" y="105" width="25" height="60" rx="3" fill="#E8C86B" />
        <rect x="300" y="70" width="25" height="95" rx="3" fill="#2F6F73" />
      </svg>
    )
  }
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

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
      transition: { type: 'spring', stiffness: 85, damping: 15 }
    }
  };

  return (
    <section id="projects" className="py-20 md:py-28 relative border-t border-primary/5 dark:border-dark-border/20">
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
            Featured <span className="text-primary dark:text-accent">Projects</span>
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
            A selective showcase of academic and engineering projects applying statistics, custom datasets, and algorithmic architectures.
          </motion.p>
        </div>

        {/* Projects Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              className="group rounded-3xl overflow-hidden glass-card border border-primary/10 dark:border-dark-border/40 hover-lift text-left flex flex-col justify-between"
            >
              {/* Illustration Thumbnail Container */}
              <div className="w-full h-52 overflow-hidden border-b border-primary/10 dark:border-dark-border/40 relative">
                {project.illustration}
                
                {/* Overlay hover effect */}
                <div className="absolute inset-0 bg-primary/20 dark:bg-dark-bg/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="px-4 py-2 bg-secondary dark:bg-dark-card border border-primary/20 dark:border-dark-border rounded-xl text-primary dark:text-accent font-display text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-md">
                    <Play className="w-3.5 h-3.5 fill-current" />
                    Preview Details
                  </span>
                </div>
              </div>

              {/* Content Panel */}
              <div className="p-6 md:p-8 flex flex-col flex-grow justify-between space-y-6">
                <div className="space-y-3">
                  {/* Tech stack row */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-0.5 rounded-md bg-primary/5 border border-primary/10 text-primary dark:bg-accent/5 dark:border-accent/20 dark:text-accent font-mono text-xs"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <h3 className="font-display font-bold text-xl md:text-2xl text-charcoal dark:text-white group-hover:text-primary dark:group-hover:text-accent transition-colors duration-200">
                    {project.title}
                  </h3>

                  <p className="font-body text-sm font-light text-charcoal/70 dark:text-gray-300 leading-relaxed">
                    {project.shortDesc}
                  </p>
                </div>

                {/* Card CTA */}
                <button
                  onClick={() => setSelectedProject(project)}
                  className="inline-flex items-center gap-2 font-display text-sm font-semibold text-primary dark:text-accent hover:underline w-fit self-start"
                >
                  <span>Explore Architecture</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>

      {/* Project Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-charcoal/45 dark:bg-black/75 backdrop-blur-sm"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 30 }}
              className="relative w-full max-w-2xl bg-secondary dark:bg-dark-card border border-primary/20 dark:border-dark-border rounded-3xl shadow-2xl overflow-hidden z-10 max-h-[85vh] flex flex-col"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-primary/10 dark:hover:bg-primary-dark/30 text-charcoal/60 dark:text-gray-400 z-20"
                aria-label="Close Modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Scrollable Container */}
              <div className="overflow-y-auto p-6 md:p-8 space-y-6">
                
                {/* Title */}
                <div className="space-y-3 pr-8">
                  <h3 className="font-display font-black text-2xl md:text-3xl text-charcoal dark:text-white uppercase leading-tight">
                    {selectedProject.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((t, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-0.5 rounded-md bg-primary/10 dark:bg-accent/15 text-primary dark:text-accent font-mono text-xs"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Mini SVG Visualization in Modal */}
                <div className="w-full h-40 overflow-hidden rounded-2xl border border-primary/15 dark:border-dark-border">
                  {selectedProject.illustration}
                </div>

                {/* Description */}
                <div className="space-y-2">
                  <h4 className="font-display font-bold text-sm text-primary dark:text-accent uppercase tracking-wider">Project Overview</h4>
                  <p className="font-body text-sm font-light text-charcoal/80 dark:text-gray-300 leading-relaxed">
                    {selectedProject.longDesc}
                  </p>
                </div>

                {/* Metrics Grid */}
                <div className="space-y-3">
                  <h4 className="font-display font-bold text-sm text-primary dark:text-accent uppercase tracking-wider">Performance Metrics</h4>
                  <div className="grid grid-cols-3 gap-4">
                    {selectedProject.metrics.map((metric, idx) => (
                      <div key={idx} className="p-4 rounded-xl bg-primary/5 border border-primary/10 dark:bg-primary/5 dark:border-dark-border/40 text-center">
                        <div className="font-display font-black text-lg md:text-xl text-primary dark:text-accent">{metric.value}</div>
                        <div className="font-body text-[10px] md:text-xs text-charcoal/60 dark:text-gray-400 mt-1">{metric.name}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Key Implementation Features */}
                <div className="space-y-3">
                  <h4 className="font-display font-bold text-sm text-primary dark:text-accent uppercase tracking-wider">Features & Implementation</h4>
                  <ul className="space-y-2">
                    {selectedProject.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-sm font-body font-light text-charcoal/80 dark:text-gray-300">
                        <CheckCircle className="w-4 h-4 text-primary dark:text-accent shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

              {/* Modal Footer */}
              <div className="px-6 py-4 bg-primary/5 border-t border-primary/10 dark:border-dark-border/40 flex justify-end gap-3">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-5 py-2.5 rounded-xl border border-primary/20 text-charcoal/70 dark:text-gray-300 font-display text-xs font-semibold hover:bg-primary/5"
                >
                  Close
                </button>
                <a
                  href="#contact"
                  onClick={() => setSelectedProject(null)}
                  className="px-5 py-2.5 rounded-xl bg-primary hover:bg-primary-dark text-white font-display text-xs font-semibold flex items-center gap-1.5"
                >
                  <span>Inquire About Project</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
