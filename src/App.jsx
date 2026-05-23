import React, { useState, useEffect } from 'react';
import GeometricBg from './components/GeometricBg';
import { Sun, Moon } from 'lucide-react';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Experience from './sections/Experience';
import Certifications from './sections/Certifications';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

export default function App() {
  const [darkMode, setDarkMode] = useState(() => {
    // Check local storage or system preference
    const saved = localStorage.getItem('theme');
    if (saved) return saved === 'dark';
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  // Sync dark class on root document
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
    <div className="relative min-h-screen selection:bg-primary/20 selection:text-primary dark:selection:bg-accent/20 dark:selection:text-accent">
      {/* Background visual components */}
      <GeometricBg />

      {/* Floating Theme Toggle (since Navbar header is removed) */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="fixed bottom-6 right-6 z-50 p-3.5 rounded-full bg-secondary/80 dark:bg-dark-card/90 backdrop-blur-md border border-primary/20 dark:border-dark-border text-primary dark:text-accent shadow-lg hover:shadow-xl hover:scale-110 active:scale-95 transition-all duration-300 group cursor-pointer"
        aria-label="Toggle Theme"
      >
        {darkMode ? <Sun className="w-5 h-5 group-hover:rotate-12 transition-transform" /> : <Moon className="w-5 h-5 group-hover:-rotate-12 transition-transform" />}
      </button>

      {/* Portfolio sections wrapper */}
      <main className="relative">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Certifications />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
