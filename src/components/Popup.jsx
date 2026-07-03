import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle, X, Calendar, User, Briefcase, Phone } from 'lucide-react';

export default function Popup({ isOpen, onClose, bookingDetails }) {
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        onClose();
      }, 6000);
      return () => clearTimeout(timer);
    }
  }, [isOpen, onClose]);

  if (!isOpen || !bookingDetails) return null;

  return (
    <AnimatePresence>
      <div className="fixed top-6 left-0 right-0 z-50 flex justify-center pointer-events-none">
        <motion.div
          initial={{ opacity: 0, y: -50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.95 }}
          transition={{ type: 'spring', damping: 25, stiffness: 350 }}
          className="bg-white rounded-[18px] shadow-2xl border-l-4 border-primary p-5 max-w-md w-full mx-4 pointer-events-auto overflow-hidden relative"
          id="success-popup"
        >
          {/* Confetti particles effect in background */}
          <div className="absolute top-0 right-0 w-24 h-24 bg-teal-light rounded-full -mr-8 -mt-8 opacity-40 blur-xl"></div>
          
          <div className="flex items-start gap-4">
            <div className="bg-emerald-50 text-emerald-500 p-2 rounded-full mt-0.5">
              <CheckCircle className="w-6 h-6" />
            </div>
            
            <div className="flex-1">
              <h3 className="font-display font-bold text-lg text-dark">
                Appointment Booked!
              </h3>
              <p className="text-sm text-gray-500 mb-3">
                Your request has been confirmed. See details below:
              </p>
              
              <div className="space-y-2 bg-slate-50 p-3 rounded-xl text-xs text-gray-600">
                <div className="flex items-center gap-2">
                  <User className="w-3.5 h-3.5 text-primary" />
                  <span className="font-medium text-dark">{bookingDetails.name}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-primary" />
                  <span>{bookingDetails.phone}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Briefcase className="w-3.5 h-3.5 text-primary" />
                  <span className="capitalize">{bookingDetails.department}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-3.5 h-3.5 text-primary" />
                  <span>{bookingDetails.date}</span>
                </div>
                <div className="mt-2 pt-2 border-t border-slate-200 flex justify-between items-center">
                  <span className="text-[10px] uppercase tracking-wider text-gray-400 font-mono">Appt ID</span>
                  <span className="font-mono font-bold text-primary text-[11px] bg-teal-light px-1.5 py-0.5 rounded">
                    {bookingDetails.id}
                  </span>
                </div>
              </div>

              <div className="mt-3 flex justify-end">
                <button
                  onClick={onClose}
                  className="px-4 py-1.5 bg-primary hover:bg-secondary text-white text-xs font-semibold rounded-lg transition-colors cursor-pointer"
                  id="popup-close-btn"
                >
                  Got It
                </button>
              </div>
            </div>

            <button
              onClick={onClose}
              className="text-gray-400 hover:text-dark p-1 rounded-full hover:bg-slate-100 transition-colors cursor-pointer"
              aria-label="Close"
              id="popup-close-icon"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
