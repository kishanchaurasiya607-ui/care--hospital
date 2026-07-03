import React from 'react';
import { motion } from 'motion/react';
import { Clock, Users, Cpu, ArrowRight, Phone, Star } from 'lucide-react';

import hospitalImg from '../assets/images/hospital_building_1783067121183.jpg';
import avatar1 from '../assets/images/doctor_rajesh_1783067138362.jpg';
import avatar2 from '../assets/images/doctor_priya_1783067151801.jpg';
import avatar3 from '../assets/images/doctor_amit_1783067165377.jpg';

export default function Hero({ onBookClick, onExploreClick }) {
  return (
    <section
      id="home"
      className="relative pt-24 lg:pt-28 pb-16 lg:pb-24 bg-gradient-to-br from-teal-50/60 via-slate-50 to-white overflow-hidden"
    >
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-[45%] h-full bg-teal-50/30 rounded-bl-[120px] -z-10 hidden lg:block"></div>
      <div className="absolute top-[20%] left-[-10%] w-[400px] h-[400px] bg-teal-100/30 rounded-full blur-3xl -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Typography and Features */}
          <div className="lg:col-span-6 flex flex-col justify-center text-left">
            
            {/* Small Header */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-teal-100/60 border border-teal-200/50 px-3.5 py-1.5 rounded-full w-fit mb-6"
            >
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
              <span className="text-primary font-display font-bold text-xs uppercase tracking-wider">
                Your Health, Our Priority
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-dark leading-[1.1] mb-6"
            >
              Advanced Care. <br />
              <span className="text-primary bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Trusted Doctors.
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base sm:text-lg text-slate-500 leading-relaxed max-w-xl mb-8"
            >
              World-class medical care with compassionate doctors and advanced technology. 
              We offer comprehensive clinical solutions designed around your wellness.
            </motion.p>

            {/* Feature Icons Section */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid grid-cols-3 gap-3 sm:gap-4 mb-9"
              id="hero-features"
            >
              <div className="flex flex-col items-start p-3 bg-white/75 backdrop-blur-sm rounded-[14px] border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-teal-50 text-primary p-2 rounded-full mb-3">
                  <Clock className="w-5 h-5" />
                </div>
                <h4 className="font-display font-bold text-xs text-dark uppercase tracking-wider">
                  24/7
                </h4>
                <p className="text-[11px] text-gray-500 font-medium leading-tight mt-0.5">
                  Emergency Care
                </p>
              </div>

              <div className="flex flex-col items-start p-3 bg-white/75 backdrop-blur-sm rounded-[14px] border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-teal-50 text-primary p-2 rounded-full mb-3">
                  <Users className="w-5 h-5" />
                </div>
                <h4 className="font-display font-bold text-xs text-dark uppercase tracking-wider">
                  Expert
                </h4>
                <p className="text-[11px] text-gray-500 font-medium leading-tight mt-0.5">
                  Medical Team
                </p>
              </div>

              <div className="flex flex-col items-start p-3 bg-white/75 backdrop-blur-sm rounded-[14px] border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-teal-50 text-primary p-2 rounded-full mb-3">
                  <Cpu className="w-5 h-5" />
                </div>
                <h4 className="font-display font-bold text-xs text-dark uppercase tracking-wider">
                  Advanced
                </h4>
                <p className="text-[11px] text-gray-500 font-medium leading-tight mt-0.5">
                  Technology
                </p>
              </div>
            </motion.div>

            {/* Call To Actions */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap gap-4"
              id="hero-ctas"
            >
              <button
                onClick={onBookClick}
                className="px-7 py-3.5 bg-gradient-to-r from-primary to-secondary text-white font-bold rounded-[14px] shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5 cursor-pointer flex items-center gap-2"
                id="hero-book-btn"
              >
                <span>Book Appointment</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onExploreClick}
                className="px-7 py-3.5 border-2 border-primary text-primary font-bold rounded-[14px] hover:bg-teal-50 transition-all hover:-translate-y-0.5 cursor-pointer flex items-center gap-2"
                id="hero-explore-btn"
              >
                <span>Explore Services</span>
                <ArrowRight className="w-4 h-4 text-primary" />
              </button>
            </motion.div>

          </div>

          {/* Right Column: Hospital Image and Floating Cards */}
          <div className="lg:col-span-6 relative flex justify-center items-center">
            
            {/* Main Hospital Building Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative w-full max-w-[540px] aspect-[4/3] rounded-[18px] overflow-hidden shadow-xl border border-slate-200"
              id="hero-image-wrapper"
            >
              <img
                src={hospitalImg}
                alt="Care+ Multi Speciality Hospital Building"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              {/* Soft Fade Overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/40 via-transparent to-transparent"></div>
              {/* Visual brand indicator inside image */}
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3.5 py-1.5 rounded-full text-[11px] font-bold text-dark shadow-sm border border-slate-100 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                <span>National NABH Accredited</span>
              </div>
            </motion.div>

            {/* Floating Card 1: Trusted by Thousands (Glassmorphism) */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="absolute -left-4 sm:left-4 top-[10%] bg-white/90 backdrop-blur-md p-4 rounded-[18px] shadow-lg border border-white/60 flex items-center gap-3.5 max-w-[210px]"
              id="floating-card-trusted"
            >
              <div className="bg-amber-50 text-amber-500 p-2 rounded-xl">
                <Star className="w-5 h-5 fill-amber-500" />
              </div>
              <div>
                <p className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">
                  Trusted by Patients
                </p>
                
                {/* Avatar Stack */}
                <div className="flex items-center -space-x-2.5 my-1.5">
                  <img
                    src={avatar1}
                    className="w-7 h-7 rounded-full border-2 border-white object-cover"
                    alt="Patient portrait"
                    referrerPolicy="no-referrer"
                  />
                  <img
                    src={avatar2}
                    className="w-7 h-7 rounded-full border-2 border-white object-cover"
                    alt="Patient portrait"
                    referrerPolicy="no-referrer"
                  />
                  <img
                    src={avatar3}
                    className="w-7 h-7 rounded-full border-2 border-white object-cover"
                    alt="Patient portrait"
                    referrerPolicy="no-referrer"
                  />
                  <div className="w-7 h-7 rounded-full border-2 border-white bg-primary text-white flex items-center justify-center font-display font-bold text-[9px]">
                    +
                  </div>
                </div>

                <div className="flex items-baseline gap-1.5">
                  <span className="font-display font-extrabold text-lg text-dark">50K+</span>
                  <span className="text-[10px] text-slate-500 font-semibold">Happy Patients</span>
                </div>
              </div>
            </motion.div>

            {/* Floating Card 2: Emergency Assistance (Teal Gradient) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="absolute right-4 sm:-right-4 bottom-[-8%] sm:bottom-[-4%] bg-gradient-to-br from-primary to-secondary p-5 rounded-[18px] text-white shadow-xl max-w-[240px] border border-teal-300/20"
              id="floating-card-emergency"
            >
              <div className="flex items-center gap-3.5 mb-2.5">
                <div className="bg-white/25 p-2 rounded-full text-white animate-bounce">
                  <Phone className="w-5 h-5 fill-white/10" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-sm tracking-tight">
                    24/7 Emergency
                  </h4>
                  <p className="text-[10px] text-teal-100/90 font-medium">
                    Critical Ambulance Support
                  </p>
                </div>
              </div>
              <p className="font-display font-black text-lg tracking-wide select-all">
                +91 7985395009
              </p>
              <p className="text-[10px] text-teal-100/85 mt-1 border-t border-white/15 pt-2">
                We are always here to help you.
              </p>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}
