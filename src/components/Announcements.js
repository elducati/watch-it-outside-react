import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';

const Announcements = () => {
  const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <motion.div 
      className="announcements"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h2>Announcements</h2>
      <motion.div 
        className="announcement-card"
        whileHover={{ scale: 1.05 }}
      >
        <h5>Upcoming Event: Summer Festival</h5>
        <p>Join us for our annual Summer Festival on July 15th!</p>
        <Button variant="primary" onClick={handleShow}>
          View Details
        </Button>
      </motion.div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Summer Festival Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Details about the Summer Festival will be provided here.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </motion.div>
  );
};

export default Announcements;