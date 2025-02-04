import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { motion } from 'framer-motion';

const MainCarousel = () => {
  return (
    <motion.div
      className="carousel-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false} interval={3000}>
        <div>
          <video className="carousel-video" muted autoPlay loop>
            <source src="https://res.cloudinary.com/jeff007/video/upload/c_scale,h_360,w_640/v1585754544/onward_gd2r07.mp4" type="video/mp4" />
          </video>
        </div>
        <div>
          <video className="carousel-video" muted autoPlay loop>
            <source src="https://res.cloudinary.com/jeff007/video/upload/v1585754549/bloodshot_cwjd5w.mp4" type="video/mp4" />
          </video>
        </div>
        <div>
          <video className="carousel-video" muted autoPlay loop>
            <source src="https://res.cloudinary.com/jeff007/video/upload/c_scale,h_360,w_640/v1585754524/frozen_arvtrx.mp4" type="video/mp4" />
          </video>
        </div>
      </Carousel>
    </motion.div>
  );
};

export default MainCarousel;