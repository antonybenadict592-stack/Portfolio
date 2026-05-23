import React from 'react';
import { Cpu, Linkedin, Github } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-primary/5 border-t border-primary/10 dark:border-dark-border/40 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Footer Top Content */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo Brand */}
          <a
            href="#home"
            className="flex items-center gap-2 font-display font-bold text-xl text-primary dark:text-accent group"
          >
            <Cpu className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
            <span>Antony <span className="text-charcoal dark:text-white font-light">Benedict</span></span>
          </a>

          {/* Nav Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8">
            <a href="#about" className="font-display text-sm font-medium text-charcoal/70 hover:text-primary dark:text-gray-300 dark:hover:text-accent transition-colors">
              About
            </a>
            <a href="#skills" className="font-display text-sm font-medium text-charcoal/70 hover:text-primary dark:text-gray-300 dark:hover:text-accent transition-colors">
              Skills
            </a>
            <a href="#projects" className="font-display text-sm font-medium text-charcoal/70 hover:text-primary dark:text-gray-300 dark:hover:text-accent transition-colors">
              Projects
            </a>
            <a href="#experience" className="font-display text-sm font-medium text-charcoal/70 hover:text-primary dark:text-gray-300 dark:hover:text-accent transition-colors">
              Experience
            </a>
            <a href="#contact" className="font-display text-sm font-medium text-charcoal/70 hover:text-primary dark:text-gray-300 dark:hover:text-accent transition-colors">
              Contact
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/in/antony-benadict-34385a3bb"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl border border-primary/20 dark:border-dark-border text-charcoal/60 dark:text-gray-400 hover:text-primary dark:hover:text-accent hover:bg-primary/5 dark:hover:bg-accent/10 transition-all duration-300"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="https://github.com/antonybenadict592-stack"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl border border-primary/20 dark:border-dark-border text-charcoal/60 dark:text-gray-400 hover:text-primary dark:hover:text-accent hover:bg-primary/5 dark:hover:bg-accent/10 transition-all duration-300"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Footer Divider & Copyright */}
        <div className="pt-8 border-t border-primary/10 dark:border-dark-border/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-body font-light text-charcoal/60 dark:text-gray-400">
          <p>© {currentYear} Antony Benedict. All rights reserved.</p>
          <p className="flex items-center gap-1">
            <span>Portfolio</span>
          </p>
        </div>

      </div>
    </footer>
  );
}
