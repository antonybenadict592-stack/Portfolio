import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, Linkedin, Github, Send, CheckCircle2, Loader2, Globe } from 'lucide-react';

export default function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle, sending, success

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;
    
    setStatus('sending');
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setFormState({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    }, 1800);
  };

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-20 md:py-28 relative border-t border-primary/5 dark:border-dark-border/20">
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
            Get In <span className="text-primary dark:text-accent">Touch</span>
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
            Have a question, an academic project inquiry, or looking to collaborate? Drop a message below.
          </motion.p>
        </div>

        <div className="max-w-xl mx-auto">
          
          {/* Contact Details Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, type: 'spring' }}
            className="flex flex-col justify-between p-8 rounded-3xl glass-card border border-primary/10 dark:border-dark-border/40 text-left space-y-8 shadow-lg"
          >
            {/* Direct Cards & Action button */}
            <div className="space-y-4">
              
              {/* Email */}
              <a
                href="mailto:antonybenadict592@gmail.com"
                className="flex items-center gap-4 p-4 rounded-2xl border border-primary/5 hover:border-primary/20 dark:border-dark-border/30 dark:hover:border-accent/40 bg-primary/5 dark:bg-dark-card/50 transition-all duration-300 group"
              >
                <div className="p-3 bg-primary/10 dark:bg-accent/15 rounded-xl text-primary dark:text-accent group-hover:scale-110 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-mono text-[9px] text-charcoal/50 dark:text-gray-400 font-bold block uppercase tracking-wider">Email Address</span>
                  <span className="font-body text-sm text-charcoal dark:text-gray-200 group-hover:text-primary dark:group-hover:text-accent transition-colors font-medium">
                    antonybenadict592@gmail.com
                  </span>
                </div>
              </a>

              {/* Phone */}
              <div className="flex items-center gap-4 p-4 rounded-2xl border border-primary/5 dark:border-dark-border/30 bg-primary/5 dark:bg-dark-card/50">
                <div className="p-3 bg-primary/10 dark:bg-accent/15 rounded-xl text-primary dark:text-accent">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-mono text-[9px] text-charcoal/50 dark:text-gray-400 font-bold block uppercase tracking-wider">Phone Call</span>
                  <span className="font-body text-sm text-charcoal dark:text-gray-200 font-medium">
                    +91 81139 60026
                  </span>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-4 p-4 rounded-2xl border border-primary/5 dark:border-dark-border/30 bg-primary/5 dark:bg-dark-card/50">
                <div className="p-3 bg-primary/10 dark:bg-accent/15 rounded-xl text-primary dark:text-accent">
                  <Globe className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-mono text-[9px] text-charcoal/50 dark:text-gray-400 font-bold block uppercase tracking-wider">Location</span>
                  <span className="font-body text-sm text-charcoal dark:text-gray-200 font-medium">
                    Alappuzha, Kerala, India
                  </span>
                </div>
              </div>

              {/* Send a Message Button */}
              <div className="pt-2">
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=antonybenadict592@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex items-center justify-center gap-2.5 w-full px-6 py-4 rounded-2xl bg-primary hover:bg-primary-dark text-white font-display font-semibold shadow-md transition-all duration-300 transform hover:-translate-y-0.5"
                >
                  <span>Send a Message</span>
                  <Send className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>

            </div>

            {/* Socials Row */}
            <div className="pt-6 border-t border-primary/5 dark:border-dark-border/20">
              <span className="font-mono text-[9px] text-charcoal/50 dark:text-gray-400 font-bold block uppercase tracking-wider mb-3">Professional Networks</span>
              <div className="flex items-center gap-3">
                <a
                  href="https://www.linkedin.com/in/antony-benadict-34385a3bb"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl border border-primary/20 hover:border-primary dark:border-dark-border dark:hover:border-accent text-charcoal/70 hover:text-primary dark:text-gray-300 dark:hover:text-accent hover:bg-primary/5 dark:hover:bg-accent/10 transition-all duration-300"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://github.com/antonybenadict592-stack"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl border border-primary/20 hover:border-primary dark:border-dark-border dark:hover:border-accent text-charcoal/70 hover:text-primary dark:text-gray-300 dark:hover:text-accent hover:bg-primary/5 dark:hover:bg-accent/10 transition-all duration-300"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
