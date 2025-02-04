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
      className="about-section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h2>About Us</h2>
      <Carousel>
        <div>
          <img src={image1} alt="About 1" />
          <p className="legend">Our Mission</p>
        </div>
        <div>
          <img src={image2} alt="About 2" />
          <p className="legend">Our Vision</p>
        </div>
        <div>
          <img src={image3} alt="About 3" />
          <p className="legend">Our Values</p>
        </div>
      </Carousel>
    </motion.div>
  );
};

export default AboutSection;