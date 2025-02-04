import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const ContactSection = () => {
  return (
    <motion.div 
      className="contact-section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h2>Contact Us</h2>
      <p>Email: info@watchitoutside.com</p>
      <p>Phone: (123) 456-7890</p>
      <div className="social-media-icons">
        <motion.a 
          href="https://facebook.com" 
          target="_blank" 
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2 }}
        >
          <FontAwesomeIcon icon={faFacebook} />
        </motion.a>
        <motion.a 
          href="https://twitter.com" 
          target="_blank" 
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2 }}
        >
          <FontAwesomeIcon icon={faTwitter} />
        </motion.a>
        <motion.a 
          href="https://instagram.com" 
          target="_blank" 
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2 }}
        >
          <FontAwesomeIcon icon={faInstagram} />
        </motion.a>
      </div>
    </motion.div>
  );
};

export default ContactSection;