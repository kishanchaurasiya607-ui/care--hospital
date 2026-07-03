import React from 'react';
import { motion } from 'motion/react';
import { MessageSquare } from 'lucide-react';

export default function Footer() {
  return (
    <>
      {/* Footer Section: Dark Teal Strip */}
      <footer className="bg-[#053D3C] text-teal-100 py-6 border-t border-teal-950" id="footer">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          {/* Left copyright */}
          <p className="text-xs text-teal-200/80 font-medium">
            © 2025 Care+ Hospital. All Rights Reserved.
          </p>

          {/* Right links */}
          <div className="flex items-center gap-4 text-xs font-semibold text-teal-200/80">
            <a href="#privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <span className="text-teal-800">|</span>
            <a href="#terms" className="hover:text-white transition-colors">
              Terms & Conditions
            </a>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button: Fixed bottom-right. Green circular. Shadow. Hover animation. */}
      <motion.a
        href="https://wa.me/917985395009"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: 'spring', stiffness: 260, damping: 20 }}
        whileHover={{ scale: 1.1, y: -2 }}
        className="fixed bottom-6 right-6 z-40 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:shadow-emerald-500/20 flex items-center justify-center cursor-pointer select-none group"
        aria-label="Contact on WhatsApp"
        id="whatsapp-floating-btn"
      >
        <MessageSquare className="w-6 h-6 fill-white stroke-none group-hover:scale-105 transition-transform" />
        
        {/* Soft pulse ring */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-35 animate-ping -z-10"></span>
      </motion.a>
    </>
  );
}
