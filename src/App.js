import React from 'react';
import './App.css';
import Header from './components/Header';
import MainCarousel from './components/MainCarousel';
import AboutSection from './components/AboutSection';
import MoviesSection from './components/MoviesSection';
import ScheduleSection from './components/ScheduleSection';
import Announcements from './components/Announcements';
import RegisterForm from './components/RegisterForm';
import ContactSection from './components/ContactSection';

function App() {
  return (
    <div className="App">
      <Header />
      <MainCarousel />
      <AboutSection />
      <MoviesSection />
      <ScheduleSection />
      <Announcements />
      <RegisterForm />
      <ContactSection />
    </div>
  );
}

export default App;