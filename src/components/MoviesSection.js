import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Modal, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import movie1 from '../images/movie1.jpg';
import movie2 from '../images/movie2.jpg';
import movie3 from '../images/movie3.jpg';
import movie4 from '../images/movie4.jpg';
import movie5 from '../images/movie5.jpg';
import movie6 from '../images/movie6.jpg';

const MoviesSection = () => {
  const [show, setShow] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const handleClose = () => setShow(false);
  const handleShow = (movie) => {
    setSelectedMovie(movie);
    setShow(true);
  };

  const movies = [
    { title: 'Movie 1', description: 'Description of Movie 1', image: movie1 },
    { title: 'Movie 2', description: 'Description of Movie 2', image: movie2 },
    { title: 'Movie 3', description: 'Description of Movie 3', image: movie3 },
    { title: 'Movie 4', description: 'Description of Movie 4', image: movie4 },
    { title: 'Movie 5', description: 'Description of Movie 5', image: movie5 },
    { title: 'Movie 6', description: 'Description of Movie 6', image: movie6 }
  ];

  return (
    <motion.div
      className="movies-section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h2>Movies</h2>
      <Carousel showThumbs={false} showStatus={false}>
        {movies.map((movie, index) => (
          <div key={index} onClick={() => handleShow(movie)}>
            <img src={movie.image} alt={movie.title} />
            <p className="legend">{movie.title}</p>
          </div>
        ))}
      </Carousel>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{selectedMovie?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{selectedMovie?.description}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </motion.div>
  );
};

export default MoviesSection;