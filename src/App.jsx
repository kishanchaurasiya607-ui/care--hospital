import React, { useState, useRef } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Doctors from './components/Doctors';
import Statistics from './components/Statistics';
import BottomSection from './components/BottomSection';
import Footer from './components/Footer';
import Popup from './components/Popup';

export default function App() {
  // Appointment pre-selection states
  const [selectedDept, setSelectedDept] = useState('');
  const [selectedDocName, setSelectedDocName] = useState('');
  
  // Booking confirmation states
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [bookingDetails, setBookingDetails] = useState(null);

  // Reference to the bottom section (to scroll to)
  const formRef = useRef(null);

  // Helper to scroll to the booking form smoothly
  const scrollToBookingForm = () => {
    const el = document.getElementById('appointment-form-section');
    if (el) {
      const offset = 80; // height of fixed navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Callback when a user clicks 'Book Appointment' on Navbar or Hero
  const handleGeneralBookClick = () => {
    setSelectedDept('');
    setSelectedDocName('');
    scrollToBookingForm();
  };

  // Callback when a user clicks 'Explore Services' on Hero
  const handleExploreClick = () => {
    const el = document.getElementById('services');
    if (el) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Callback when a user selects a specific doctor
  const handleDoctorSelect = (deptId, docName) => {
    setSelectedDept(deptId);
    setSelectedDocName(docName);
    scrollToBookingForm();
  };

  // Callback when booking is successfully submitted
  const handleBookingSubmit = (details) => {
    // Generate a beautiful, pseudo-random clinical appointment ID
    const randomNum = Math.floor(1000 + Math.random() * 9000);
    const appointmentId = `CARE-${details.department.slice(0, 3).toUpperCase()}-${randomNum}`;

    setBookingDetails({
      ...details,
      id: appointmentId,
    });
    setIsPopupOpen(true);
  };

  return (
    <div className="relative min-h-screen bg-slate-50 overflow-x-hidden selection:bg-teal-100 selection:text-primary">
      {/* Centered Top Success Popup Notification */}
      <Popup
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
        bookingDetails={bookingDetails}
      />

      {/* 1. Navbar */}
      <Navbar onBookClick={handleGeneralBookClick} />

      {/* 2. Hero Section */}
      <Hero
        onBookClick={handleGeneralBookClick}
        onExploreClick={handleExploreClick}
      />

      {/* 3. Services Section */}
      <Services />

      {/* 4. Doctors Section */}
      <Doctors onDoctorSelect={handleDoctorSelect} />

      {/* 5. Statistics Banner */}
      <Statistics />

      {/* 6. Bottom Section (Testimonials, Booking Form, Contact Details) */}
      <BottomSection
        selectedDept={selectedDept}
        selectedDocName={selectedDocName}
        onBook={handleBookingSubmit}
        formRef={formRef}
      />

      {/* 7 & 8. Footer & Floating WhatsApp Button */}
      <Footer />
    </div>
  );
}
