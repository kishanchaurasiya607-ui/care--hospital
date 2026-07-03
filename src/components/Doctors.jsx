import React from 'react';
import { motion } from 'motion/react';
import { Star, Plus, ArrowRight } from 'lucide-react';

import drRajesh from '../assets/images/doctor_rajesh_1783067138362.jpg';
import drPriya from '../assets/images/doctor_priya_1783067151801.jpg';
import drAmit from '../assets/images/doctor_amit_1783067165377.jpg';
import drNeha from '../assets/images/doctor_neha_1783067181528.jpg';

export default function Doctors({ onDoctorSelect }) {
  const doctors = [
    {
      id: 'dr-rajesh',
      name: 'Dr. Rajesh Sharma',
      specialty: 'Cardiology',
      role: 'Senior Cardiologist',
      exp: '15+ Years Exp.',
      image: drRajesh,
      stars: 5,
      deptId: 'cardiology'
    },
    {
      id: 'dr-priya',
      name: 'Dr. Priya Mehta',
      specialty: 'Neurology',
      role: 'Senior Neurologist',
      exp: '12+ Years Exp.',
      image: drPriya,
      stars: 5,
      deptId: 'neurology'
    },
    {
      id: 'dr-amit',
      name: 'Dr. Amit Verma',
      specialty: 'Orthopedic',
      role: 'Orthopedic Surgeon',
      exp: '10+ Years Exp.',
      image: drAmit,
      stars: 5,
      deptId: 'orthopedics'
    },
    {
      id: 'dr-neha',
      name: 'Dr. Neha Patel',
      specialty: 'Pediatrics',
      role: 'Consultant Pediatrician',
      exp: '8+ Years Exp.',
      image: drNeha,
      stars: 5,
      deptId: 'pediatrics'
    }
  ];

  return (
    <section id="doctors" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-12 gap-4">
          <div>
            <span className="text-primary font-display font-bold text-xs uppercase tracking-widest bg-teal-50 px-3 py-1 rounded-full mb-3 inline-block">
              Our Experts
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-dark tracking-tight">
              Our Expert Doctors
            </h2>
            <div className="w-16 h-1.5 bg-primary rounded-full mt-3"></div>
          </div>

          <button
            onClick={() => {
              const el = document.getElementById('appointment-form-section');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="flex items-center gap-1.5 text-primary hover:text-secondary font-bold text-sm tracking-tight transition-colors cursor-pointer group"
          >
            <span>View All Doctors</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        {/* Doctor Grid: 4 columns desktop, 2 tablet, 1 mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8" id="doctors-grid">
          {doctors.map((doc, idx) => (
            <motion.div
              key={doc.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white border border-slate-100 rounded-[18px] p-6 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col items-center relative group"
              id={`doctor-card-${doc.id}`}
            >
              
              {/* Circular Doctor Image */}
              <div className="relative w-36 h-36 rounded-full overflow-hidden mb-5 border-4 border-slate-50 shadow-inner group-hover:border-teal-light transition-all duration-300">
                <img
                  src={doc.image}
                  alt={doc.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Specialization / Badge */}
              <span className="text-[10px] font-bold text-primary uppercase tracking-widest bg-teal-50 px-2.5 py-1 rounded-full mb-2">
                {doc.specialty}
              </span>

              {/* Name & Role */}
              <h3 className="font-display font-extrabold text-lg text-dark text-center group-hover:text-primary transition-colors">
                {doc.name}
              </h3>
              <p className="text-xs text-slate-400 font-medium mb-1">
                {doc.role}
              </p>
              
              {/* Experience */}
              <p className="text-xs font-semibold text-slate-500 mb-3 bg-slate-50 px-2 py-0.5 rounded-md">
                {doc.exp}
              </p>

              {/* Five Star Rating */}
              <div className="flex items-center gap-0.5 mb-6">
                {[...Array(doc.stars)].map((_, sIdx) => (
                  <Star key={sIdx} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* Teal Circular Plus Icon Button */}
              <button
                onClick={() => onDoctorSelect(doc.deptId, doc.name)}
                className="w-11 h-11 rounded-full bg-primary hover:bg-secondary text-white shadow-md hover:shadow-lg transition-all hover:scale-110 flex items-center justify-center cursor-pointer absolute bottom-[-22px] left-1/2 -translate-x-1/2 z-10 border-4 border-white"
                title={`Book with ${doc.name}`}
                id={`book-doctor-btn-${doc.id}`}
              >
                <Plus className="w-5 h-5 stroke-[2.5]" />
              </button>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
