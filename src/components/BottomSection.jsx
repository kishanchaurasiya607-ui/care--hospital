import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, MapPin, Phone, Mail, Facebook, Instagram, Youtube, Linkedin, ArrowRight, User, Calendar } from 'lucide-react';

export default function BottomSection({ selectedDept, selectedDocName, onBook, formRef }) {
  // Testimonials slider state
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const testimonials = [
    {
      name: 'Anjali Verma',
      location: 'New Delhi',
      stars: 5,
      text: 'Excellent care and treatment. The doctors and staff are very supportive and friendly. Highly recommended!',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200&h=200',
    },
    {
      name: 'Rahul Sharma',
      location: 'Gurugram',
      stars: 5,
      text: 'The cardiology team saved my father’s life. Quick action, advanced facilities, and clear communication. Truly outstanding.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200&h=200',
    },
    {
      name: 'Sneha Gupta',
      location: 'Noida',
      stars: 5,
      text: 'Very hygienic environment and minimal waiting time. Dr. Neha’s pediatric clinic is amazing. My daughter felt very comfortable.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200&h=200',
    }
  ];

  // Appointment Form state
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    department: '',
    date: '',
  });

  // Sync selectedDept from parent if it changes (e.g. from doctor card click)
  useEffect(() => {
    if (selectedDept) {
      setFormData(prev => ({
        ...prev,
        department: selectedDept
      }));
    }
  }, [selectedDept]);

  const departments = [
    { value: 'cardiology', label: 'Cardiology (Heart Care)' },
    { value: 'neurology', label: 'Neurology (Brain Care)' },
    { value: 'orthopedics', label: 'Orthopedics (Bone Care)' },
    { value: 'pediatrics', label: 'Pediatrics (Child Care)' },
    { value: 'dentistry', label: 'Dentistry (Dental Care)' },
    { value: 'emergency', label: 'Emergency (24/7 Care)' },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.department || !formData.date) {
      return;
    }

    // Call book handler
    onBook({
      name: formData.name,
      phone: formData.phone,
      department: formData.department,
      date: formData.date,
    });

    // Reset Form
    setFormData({
      name: '',
      phone: '',
      department: '',
      date: '',
    });
  };

  return (
    <section id="testimonials" className="py-20 bg-slate-50 border-t border-slate-100" ref={formRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-stretch" id="bottom-grid-container">
          
          {/* COLUMN 1: Testimonials */}
          <div className="bg-white border border-slate-100 p-8 rounded-[18px] shadow-sm flex flex-col justify-between" id="column-testimonials">
            <div>
              <span className="text-primary font-display font-bold text-xs uppercase tracking-wider bg-teal-50 px-2.5 py-1 rounded-full mb-3 inline-block">
                Testimonials
              </span>
              <h3 className="font-display font-extrabold text-2xl text-dark mb-6 tracking-tight">
                What Our Patients Say
              </h3>
              
              <div className="relative min-h-[180px] flex items-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTestimonial}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-4 w-full"
                  >
                    {/* Five Stars */}
                    <div className="flex items-center gap-0.5 text-amber-400">
                      {[...Array(testimonials[activeTestimonial].stars)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400" />
                      ))}
                    </div>

                    {/* Testimonial Quote */}
                    <p className="text-slate-500 text-sm sm:text-base leading-relaxed italic">
                      "{testimonials[activeTestimonial].text}"
                    </p>

                    {/* Testimonial User Meta */}
                    <div className="flex items-center gap-3.5 pt-2">
                      <img
                        src={testimonials[activeTestimonial].image}
                        alt={testimonials[activeTestimonial].name}
                        className="w-11 h-11 rounded-full object-cover border border-slate-100"
                        referrerPolicy="no-referrer"
                      />
                      <div>
                        <h4 className="font-display font-bold text-sm text-dark">
                          {testimonials[activeTestimonial].name}
                        </h4>
                        <p className="text-[10px] text-slate-400 font-semibold tracking-wider uppercase">
                          Patient • {testimonials[activeTestimonial].location}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Pagination Indicators */}
            <div className="flex justify-center sm:justify-start items-center gap-2 mt-8">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveTestimonial(idx)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    activeTestimonial === idx ? 'bg-primary w-6' : 'bg-slate-200 hover:bg-slate-300'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                  id={`testimonial-dot-${idx}`}
                />
              ))}
            </div>
          </div>

          {/* COLUMN 2: Appointment Form */}
          <div className="bg-white border border-slate-100 p-8 rounded-[18px] shadow-sm relative overflow-hidden" id="appointment-form-section">
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary to-secondary"></div>
            
            <span className="text-primary font-display font-bold text-xs uppercase tracking-wider bg-teal-50 px-2.5 py-1 rounded-full mb-3 inline-block">
              Easy Booking
            </span>
            <h3 className="font-display font-extrabold text-2xl text-dark mb-6 tracking-tight">
              Book An Appointment
            </h3>

            {selectedDocName && (
              <div className="mb-4 bg-teal-50 border border-primary/20 rounded-xl px-3 py-2 text-xs text-primary font-medium flex items-center justify-between">
                <span>Selected: <strong className="text-dark">{selectedDocName}</strong></span>
                <span className="text-[10px] uppercase tracking-wider font-bold bg-white px-2 py-0.5 rounded border border-primary/15">Active Selection</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4" id="appt-booking-form">
              {/* Your Name */}
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1.5">
                  Your Name
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-slate-400">
                    <User className="w-4 h-4" />
                  </span>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter full name"
                    className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-primary focus:bg-white transition-all text-dark"
                    id="input-appt-name"
                  />
                </div>
              </div>

              {/* Phone Number */}
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1.5">
                  Phone Number
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-slate-400">
                    <Phone className="w-4 h-4" />
                  </span>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="e.g. +91 98765 43210"
                    className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-primary focus:bg-white transition-all text-dark"
                    id="input-appt-phone"
                  />
                </div>
              </div>

              {/* Select Department */}
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1.5">
                  Select Department
                </label>
                <select
                  name="department"
                  required
                  value={formData.department}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-primary focus:bg-white transition-all text-dark"
                  id="select-appt-dept"
                >
                  <option value="">Choose specialization</option>
                  {departments.map((dept) => (
                    <option key={dept.value} value={dept.value}>
                      {dept.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Select Date */}
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1.5">
                  Select Date
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-slate-400">
                    <Calendar className="w-4 h-4" />
                  </span>
                  <input
                    type="date"
                    name="date"
                    required
                    value={formData.date}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-primary focus:bg-white transition-all text-dark"
                    id="input-appt-date"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-primary to-secondary text-white font-bold rounded-xl text-sm shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5 cursor-pointer flex items-center justify-center gap-2"
                id="submit-appt-btn"
              >
                <span>Book Now</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>

          {/* COLUMN 3: Get In Touch */}
          <div id="contact" className="bg-white border border-slate-100 p-8 rounded-[18px] shadow-sm flex flex-col justify-between">
            <div>
              <span className="text-primary font-display font-bold text-xs uppercase tracking-wider bg-teal-50 px-2.5 py-1 rounded-full mb-3 inline-block">
                Contact Us
              </span>
              <h3 className="font-display font-extrabold text-2xl text-dark mb-6 tracking-tight">
                Get In Touch
              </h3>

              <div className="space-y-4 mb-6">
                {/* Phone */}
                <div className="flex items-start gap-3.5">
                  <div className="bg-teal-50 text-primary p-2 rounded-lg mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <h5 className="text-[10px] text-gray-400 font-bold uppercase tracking-wider leading-none">Phone</h5>
                    <p className="text-sm font-semibold text-dark mt-1 select-all">+91 98765 43210</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3.5">
                  <div className="bg-teal-50 text-primary p-2 rounded-lg mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <h5 className="text-[10px] text-gray-400 font-bold uppercase tracking-wider leading-none">Email</h5>
                    <p className="text-sm font-semibold text-dark mt-1 select-all">info@carehospital.com</p>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-3.5">
                  <div className="bg-teal-50 text-primary p-2 rounded-lg mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <h5 className="text-[10px] text-gray-400 font-bold uppercase tracking-wider leading-none">Address</h5>
                    <p className="text-sm font-semibold text-slate-500 mt-1 leading-snug">
                      123 Health Street, Medical City,<br />New Delhi - 110001
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Media Icons */}
              <div className="flex items-center gap-3 mb-6" id="social-links">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-slate-50 hover:bg-primary hover:text-white text-slate-500 flex items-center justify-center transition-all shadow-sm"
                  aria-label="Facebook"
                >
                  <Facebook className="w-4.5 h-4.5" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-slate-50 hover:bg-primary hover:text-white text-slate-500 flex items-center justify-center transition-all shadow-sm"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4.5 h-4.5" />
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-slate-50 hover:bg-primary hover:text-white text-slate-500 flex items-center justify-center transition-all shadow-sm"
                  aria-label="YouTube"
                >
                  <Youtube className="w-4.5 h-4.5" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-slate-50 hover:bg-primary hover:text-white text-slate-500 flex items-center justify-center transition-all shadow-sm"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4.5 h-4.5" />
                </a>
              </div>
            </div>

            {/* Mini Map Card */}
            <div className="bg-teal-50/50 border border-teal-100 p-4 rounded-2xl relative overflow-hidden group hover:border-primary/20 transition-all shadow-inner" id="mini-map-card">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="bg-primary text-white p-2 rounded-full animate-pulse">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-display font-extrabold text-sm text-dark">Care+ Hospital</h4>
                    <p className="text-[10px] text-slate-400 font-semibold">New Delhi Main Campus</p>
                  </div>
                </div>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-primary hover:text-secondary flex items-center gap-1 hover:underline cursor-pointer"
                >
                  <span>View on Map</span>
                  <ArrowRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
