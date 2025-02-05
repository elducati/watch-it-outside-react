import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { motion } from 'framer-motion';
import image1 from '../images/4.jpeg';
import image2 from '../images/5.jpg';
import image3 from '../images/6.jpeg';

const AboutSection = () => {
  return (
    <motion.div 
      className="about-section bg-gray-100 p-8 rounded-lg shadow-lg"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h2 className="text-3xl font-bold mb-6 text-center">About Us</h2>
      <Carousel showThumbs={false} infiniteLoop useKeyboardArrows autoPlay>
        <div>
          <img src={image1} alt="About 1" className="rounded-lg" />
          <p className="legend bg-gray-800 text-white p-2 rounded-b-lg">Our Mission</p>
        </div>
        <div>
          <img src={image2} alt="About 2" className="rounded-lg" />
          <p className="legend bg-gray-800 text-white p-2 rounded-b-lg">Our Vision</p>
        </div>
        <div>
          <img src={image3} alt="About 3" className="rounded-lg" />
          <p className="legend bg-gray-800 text-white p-2 rounded-b-lg">Our Values</p>
        </div>
      </Carousel>
    </motion.div>
  );
};

export default AboutSection;