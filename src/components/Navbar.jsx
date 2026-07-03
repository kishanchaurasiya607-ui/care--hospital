import React, { useState, useEffect } from 'react';
import { Stethoscope, Phone, Menu, X, Calendar } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar({ onBookClick }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'services', label: 'Services' },
    { id: 'doctors', label: 'Doctors' },
    { id: 'facilities', label: 'Facilities' },
    { id: 'testimonials', label: 'Testimonials' },
    { id: 'contact', label: 'Contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Simple scroll spy logic
      const scrollPos = window.scrollY + 120;
      for (const item of navItems) {
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(item.id);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setIsOpen(false);
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of fixed navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled ? 'bg-white shadow-md py-2.5' : 'bg-white shadow-sm py-4'
        }`}
        id="navbar"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Left Side: Hospital Branding */}
          <div
            onClick={() => scrollToSection('home')}
            className="flex items-center gap-2.5 cursor-pointer select-none"
            id="brand-logo"
          >
            <div className="bg-primary text-white p-2.5 rounded-[12px] shadow-sm flex items-center justify-center">
              <Stethoscope className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-0.5">
                <span className="font-display font-black text-2xl tracking-tight text-dark">Care</span>
                <span className="font-display font-black text-2xl text-primary">+</span>
              </div>
              <div className="text-[10px] font-semibold text-gray-400 tracking-wider uppercase leading-none">
                Multi Speciality Hospital
              </div>
            </div>
          </div>

          {/* Centered Navigation Menu - Desktop */}
          <div className="hidden lg:flex items-center gap-7">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`font-medium text-[15px] relative py-1 cursor-pointer transition-colors ${
                  activeSection === item.id ? 'text-primary font-semibold' : 'text-slate-600 hover:text-primary'
                }`}
                id={`nav-link-${item.id}`}
              >
                {item.label}
                {activeSection === item.id && (
                  <motion.div
                    layoutId="activeUnderline"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Right Side Info & CTA - Desktop */}
          <div className="hidden lg:flex items-center gap-6">
            <div className="flex items-center gap-3 border-r border-slate-200 pr-5">
              <div className="bg-teal-light text-primary p-2 rounded-full">
                <Phone className="w-4 h-4" />
              </div>
              <div className="text-left">
                <p className="text-[10px] font-bold text-red-500 uppercase tracking-wider leading-none">
                  24/7 Emergency
                </p>
                <p className="font-display font-bold text-sm text-dark mt-0.5">
                  +91 98765 43210
                </p>
              </div>
            </div>

            <button
              onClick={onBookClick}
              className="relative overflow-hidden group px-5 py-2.5 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-[14px] shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 cursor-pointer flex items-center gap-2"
              id="nav-book-btn"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Appointment</span>
            </button>
          </div>

          {/* Hamburger Menu - Mobile */}
          <div className="flex items-center lg:hidden gap-4">
            {/* Phone Quick Link */}
            <a
              href="tel:+919876543210"
              className="bg-teal-light text-primary p-2.5 rounded-full"
            >
              <Phone className="w-4 h-4" />
            </a>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-dark p-1.5 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
              id="menu-toggle-btn"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black z-30"
            />

            {/* Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed right-0 top-0 bottom-0 w-80 max-w-[85vw] bg-white z-45 shadow-2xl p-6 flex flex-col justify-between"
              id="mobile-drawer"
            >
              <div>
                <div className="flex items-center justify-between pb-6 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <div className="bg-primary text-white p-2 rounded-lg">
                      <Stethoscope className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-display font-extrabold text-xl tracking-tight text-dark">Care+</span>
                    </div>
                  </div>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-1.5 hover:bg-slate-100 rounded-lg transition-colors"
                  >
                    <X className="w-5 h-5 text-gray-500" />
                  </button>
                </div>

                <div className="py-6 space-y-4">
                  {navItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={`block w-full text-left px-4 py-3 rounded-xl font-medium text-base transition-colors ${
                        activeSection === item.id
                          ? 'bg-teal-light/50 text-primary font-semibold'
                          : 'text-slate-600 hover:bg-slate-50 hover:text-primary'
                      }`}
                      id={`mobile-nav-${item.id}`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="border-t border-slate-100 pt-6 space-y-4">
                <div className="flex items-center gap-3 px-4">
                  <div className="bg-red-50 text-red-500 p-2.5 rounded-full">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-red-500 uppercase tracking-wider leading-none">
                      24/7 Emergency
                    </p>
                    <p className="font-display font-bold text-base text-dark mt-0.5">
                      +91 98765 43210
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => {
                    setIsOpen(false);
                    onBookClick();
                  }}
                  className="w-full py-3.5 bg-gradient-to-r from-primary to-secondary text-white font-bold rounded-[14px] text-center shadow-md hover:shadow-lg transition-all cursor-pointer flex items-center justify-center gap-2"
                  id="mobile-drawer-book-btn"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Appointment</span>
                </button>
              </div>

            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
