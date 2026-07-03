import React from 'react';
import { motion } from 'motion/react';
import { Users, UserCheck, CalendarDays, Activity } from 'lucide-react';

export default function Statistics() {
  const stats = [
    {
      id: 'stat-doctors',
      value: '25+',
      label: 'Expert Doctors',
      icon: Users
    },
    {
      id: 'stat-patients',
      value: '50K+',
      label: 'Happy Patients',
      icon: UserCheck
    },
    {
      id: 'stat-experience',
      value: '15+',
      label: 'Years Experience',
      icon: CalendarDays
    },
    {
      id: 'stat-emergency',
      value: '24/7',
      label: 'Emergency Care',
      icon: Activity
    }
  ];

  return (
    <section className="py-8 bg-slate-50 relative z-10" id="facilities">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Statistics Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-[#064E4D] to-[#0EA5A4] rounded-[18px] shadow-xl overflow-hidden py-8 md:py-0 md:h-[130px] flex items-center border border-teal-300/10"
          id="stats-banner"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 w-full h-full divide-y md:divide-y-0 md:divide-x divide-white/15">
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.id}
                  className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-4 py-4 md:py-0 text-white text-center sm:text-left h-full"
                  id={stat.id}
                >
                  {/* Circular White Icon Outline */}
                  <div className="w-11 h-11 rounded-full border-2 border-white/20 flex items-center justify-center bg-white/5 shadow-inner">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  
                  <div>
                    <h3 className="font-display font-extrabold text-2xl sm:text-3xl leading-none">
                      {stat.value}
                    </h3>
                    <p className="text-[11px] sm:text-xs text-teal-100/80 font-medium tracking-wide mt-1 uppercase">
                      {stat.label}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
