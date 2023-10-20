// import React from 'react';
// import Modal from 'react-modal';
// import "./Modal.css"

// const CustomModal = ({ isOpen, onRequestClose }) => {
//   return (
//     <Modal
//       isOpen={isOpen}
//       onRequestClose={onRequestClose}
//       contentLabel="Custom Modal"
//       className="custom-modal-content" // Assign the CSS class here
//       overlayClassName="custom-modal-overlay"
//     >
//       <div className='pop-up'>
//         <h2>Request a call back</h2>
//         <input type="text" placeholder='Enter your name' />
//         <input type="number" placeholder='Enter mobile number' />
//         <button>Request a call back</button>
//         <button onClick={onRequestClose}>Close</button>
//       </div>
//     </Modal>
//   );
// };

// export default CustomModal;


import React, { useState } from 'react';
import Modal from 'react-modal';
import axios from 'axios';
import "./Modal.css";

const CustomModal = ({ isOpen, onRequestClose }) => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleRequestCallback = async () => {
    try {
      const response = await axios.post('http://localhost:3002/send-email', {
        name,
        phoneNumber,
        recipientEmail: 'ayushjha5467@gmail.com'
        // recipientEmail: 'ravi@anchors.in'
        // You can include more data as needed
      });

      // Handle success (maybe close the modal or show a success message)
      console.log('Email sent successfully!', response.data);
    } catch (error) {
      // Handle error (show an error message)
      console.error('Error sending email:', error);
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Custom Modal"
      className="custom-modal-content"
      overlayClassName="custom-modal-overlay"
    >
      <div className='pop-up'>
        <h2>Request a call back</h2>
        <input
          type="text"
          placeholder='Enter your name'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          placeholder='Enter mobile number'
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <button className='btn' onClick={handleRequestCallback}>Request a call back</button>
        <button className='btn' onClick={onRequestClose}>Close</button>
      </div>
    </Modal>
  );
};

export default CustomModal;
