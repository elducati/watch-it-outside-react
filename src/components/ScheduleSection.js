import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { motion } from 'framer-motion';

const ScheduleSection = () => {
  const schedules = [
    { id: 1, image: 'https://res.cloudinary.com/jeff007/image/upload/c_scale,h_473,w_840/v1588147549/6624960f0062bd8b8845037c6776277c_ehn73v.jpg', title: 'Event 1', description: 'Description for Event 1' },
    { id: 2, image: 'https://res.cloudinary.com/jeff007/image/upload/c_scale,h_473,w_840/v1588147516/the-avengers-movie-poster-banners-04_c3hzhf.jpg', title: 'Event 2', description: 'Description for Event 2' },
    { id: 3, image: 'https://res.cloudinary.com/jeff007/image/upload/c_scale,h_473,w_840/v1588147516/the-avengers-movie-poster-banners-04_c3hzhf.jpg', title: 'Event 3', description: 'Description for Event 3' },
  ];

  return (
    <motion.div
      className="schedule-section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h2>Event Schedule</h2>
      <Carousel autoPlay infiniteLoop showThumbs={false}>
        {schedules.map(schedule => (
          <div key={schedule.id}>
            <img src={schedule.image} alt={schedule.title} />
            <p className="legend">{schedule.title}</p>
          </div>
        ))}
      </Carousel>
    </motion.div>
  );
};

export default ScheduleSection;