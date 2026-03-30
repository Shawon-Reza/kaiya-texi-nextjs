'use client';

import { FormEvent, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button'; 

interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setIsSuccess(false);

    // Console log form data
    console.log('📝 Form Data Submitted:', {
      timestamp: new Date().toISOString(),
      ...formData,
    });

    // Simulate API call with a brief delay for the loading animation
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
      setIsSuccess(true);
      
      // Clear success state after 3 seconds
      setTimeout(() => setIsSuccess(false), 3000);
    }, 1500); 
  };

  // Ultra-smooth Framer Motion Physics
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, // Smooth cascading effect
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    show: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { 
        type: 'spring', 
        stiffness: 60,   // Lowered for a much silkier slide
        damping: 12,     // Adjusted for less sudden snapping
        mass: 0.8
      } 
    },
  };

  return (
    <motion.form 
      onSubmit={handleSubmit} 
      className="space-y-5 md:space-y-6"
      variants={containerVariants}
      initial="hidden"
      // whileInView triggers the animation every time the form comes into the viewport
      // once: false ensures it replays if the user scrolls away and back
      whileInView="show"
      viewport={{ once: false, amount: 0.15 }}
    >
      {/* Animated Success Alert */}
      <AnimatePresence>
        {isSuccess && (
          <motion.div
            initial={{ opacity: 0, height: 0, y: -20 }}
            animate={{ opacity: 1, height: 'auto', y: 0, marginBottom: 24 }}
            exit={{ opacity: 0, height: 0, y: -20, marginBottom: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="overflow-hidden"
          >
            <div className="bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 p-4 rounded-xl flex items-center gap-3 border border-green-200 dark:border-green-800/50 shadow-sm">
              <svg className="w-5 h-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-sm font-medium">Thank you for your message! We will get back to you soon.</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Name Field */}
      <motion.div variants={itemVariants}>
        <label htmlFor="name" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1.5 md:mb-2 ml-1">
          Your Name
        </label>
        <motion.input
          whileFocus={{ scale: 1.015, y: -2 }} // Smooth lift effect
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          type="text"
          id="name"
          name="name"
          placeholder="Write Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-3.5 md:py-4 rounded-xl border border-zinc-200 dark:border-zinc-700/80 bg-[#F5F5F5] dark:bg-zinc-800/50 text-zinc-900 dark:text-white placeholder-zinc-400 dark:placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-zinc-900 dark:focus:ring-zinc-100 focus:bg-white dark:focus:bg-zinc-800 transition-colors shadow-sm"
        />
      </motion.div>

      {/* Email Field */}
      <motion.div variants={itemVariants}>
        <label htmlFor="email" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1.5 md:mb-2 ml-1">
          Your Email
        </label>
        <motion.input
          whileFocus={{ scale: 1.015, y: -2 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          type="email"
          id="email"
          name="email"
          placeholder="Write Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-3.5 md:py-4 rounded-xl border border-zinc-200 dark:border-zinc-700/80 bg-[#F5F5F5] dark:bg-zinc-800/50 text-zinc-900 dark:text-white placeholder-zinc-400 dark:placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-zinc-900 dark:focus:ring-zinc-100 focus:bg-white dark:focus:bg-zinc-800 transition-colors shadow-sm"
        />
      </motion.div>

      {/* Message Field */}
      <motion.div variants={itemVariants}>
        <label htmlFor="message" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1.5 md:mb-2 ml-1">
          Message
        </label>
        <motion.textarea
          whileFocus={{ scale: 1.015, y: -2 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          id="message"
          name="message"
          placeholder="Write Your Message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className="w-full px-4 py-3.5 md:py-4 rounded-xl border border-zinc-200 dark:border-zinc-700/80 bg-[#F5F5F5] dark:bg-zinc-800/50 text-zinc-900 dark:text-white placeholder-zinc-400 dark:placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-zinc-900 dark:focus:ring-zinc-100 focus:bg-white dark:focus:bg-zinc-800 transition-colors resize-none shadow-sm"
        />
      </motion.div>

      {/* Submit Button */}
      <motion.div 
        variants={itemVariants} 
        whileHover={{ scale: 1.02, y: -2 }} 
        whileTap={{ scale: 0.98, y: 0 }}
        className="pt-4"
      >
        <Button
          type="submit"
          disabled={isSubmitting || isSuccess}
          className="relative w-full overflow-hidden bg-zinc-900 border border-transparent dark:border-white/10 dark:bg-zinc-100 text-white dark:text-zinc-900 font-semibold py-7 rounded-xl disabled:opacity-80 disabled:cursor-not-allowed text-base md:text-lg transition-all duration-300 shadow-md hover:shadow-xl hover:bg-zinc-800 dark:hover:bg-zinc-200"
        >
          <AnimatePresence mode="wait">
            {isSubmitting ? (
              <motion.div
                key="loading"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.2 }}
                className="flex items-center justify-center gap-2"
              >
                <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                <span>Sending...</span>
              </motion.div>
            ) : isSuccess ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                className="flex items-center justify-center gap-2"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Sent successfully!</span>
              </motion.div>
            ) : (
              <motion.div
                key="default"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.2 }}
              >
                Submit Message
              </motion.div>
            )}
          </AnimatePresence>
        </Button>
      </motion.div>
    </motion.form>
  );
}
