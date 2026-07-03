import React from 'react';
import { motion } from 'motion/react';
import { Heart, Brain, Bone, Baby, Activity, ArrowRight, ShieldCheck } from 'lucide-react';

export default function Services() {
  const services = [
    {
      id: 'cardiology',
      title: 'Cardiology',
      desc: 'Heart care & surgery',
      icon: Heart,
      color: 'bg-rose-50 text-rose-500 hover:bg-rose-500 hover:text-white',
      border: 'border-rose-100',
    },
    {
      id: 'neurology',
      title: 'Neurology',
      desc: 'Brain & nervous system',
      icon: Brain,
      color: 'bg-indigo-50 text-indigo-500 hover:bg-indigo-500 hover:text-white',
      border: 'border-indigo-100',
    },
    {
      id: 'orthopedics',
      title: 'Orthopedics',
      desc: 'Bone & joint care',
      icon: Bone,
      color: 'bg-amber-50 text-amber-500 hover:bg-amber-500 hover:text-white',
      border: 'border-amber-100',
    },
    {
      id: 'pediatrics',
      title: 'Pediatrics',
      desc: 'Child healthcare',
      icon: Baby,
      color: 'bg-sky-50 text-sky-500 hover:bg-sky-500 hover:text-white',
      border: 'border-sky-100',
    },
    {
      id: 'dentistry',
      title: 'Dentistry',
      desc: 'Dental care experts',
      icon: ShieldCheck,
      color: 'bg-emerald-50 text-emerald-500 hover:bg-emerald-500 hover:text-white',
      border: 'border-emerald-100',
    },
    {
      id: 'emergency',
      title: 'Emergency',
      desc: '24/7 emergency care',
      icon: Activity,
      color: 'bg-red-50 text-red-500 hover:bg-red-500 hover:text-white',
      border: 'border-red-100',
    }
  ];

  return (
    <section id="services" className="py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Centered Heading */}
        <div className="max-w-3xl mx-auto mb-16 flex flex-col items-center">
          <span className="text-primary font-display font-bold text-xs uppercase tracking-widest bg-teal-50 px-3 py-1 rounded-full mb-3">
            What We Do
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-dark tracking-tight">
            Our Specialised Services
          </h2>
          {/* Small teal underline */}
          <div className="w-16 h-1.5 bg-primary rounded-full mt-4"></div>
          <p className="text-slate-500 text-sm sm:text-base mt-4 max-w-lg">
            We provide comprehensive medical solutions across departments, backed by top clinicians and sophisticated diagnostics.
          </p>
        </div>

        {/* Responsive Grid: 6 columns desktop, 2 tablet, 1 mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6" id="services-grid">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative bg-white border border-slate-100 rounded-[18px] p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between items-center text-center cursor-pointer"
                id={`service-card-${service.id}`}
              >
                <div className="flex flex-col items-center w-full">
                  {/* Circle Icon Container with custom hover bg transition */}
                  <div className={`w-14 h-14 rounded-full flex items-center justify-center mb-5 transition-all duration-300 ${service.color.split(' ')[0]} ${service.color.split(' ')[1]} group-hover:${service.color.split(' ')[2]} group-hover:${service.color.split(' ')[3]}`}>
                    <Icon className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" />
                  </div>

                  <h3 className="font-display font-bold text-base text-dark mb-1 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-xs text-slate-400 font-medium leading-normal mb-6 min-h-[32px] flex items-center">
                    {service.desc}
                  </p>
                </div>

                {/* Arrow Icon at bottom */}
                <div className="w-8 h-8 rounded-full bg-slate-50 text-slate-400 group-hover:bg-primary group-hover:text-white flex items-center justify-center transition-all duration-300">
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
