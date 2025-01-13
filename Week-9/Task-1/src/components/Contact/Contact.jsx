import React, { useState } from "react";
import './Contact.css';
import ContactMap from './ContactMap';
import ContactForm from './ContactForm';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, email, message });
  };

  return (
    <section className="section" id="contact">
      <h2 className="section-title">CONTACT US</h2>
      <span className="orange-underline"></span>
      <p className="section-description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Est at inventore quae ullam voluptatem suscipit?
      </p>

      <div className="contact-container">
        <div className="contact-info">
          <div className="contact-details">
            <div className="info-item">
              <h3>Mobile Number</h3>
              <p>+135 773 321 4442</p>
            </div>
            <div className="info-item">
              <h3>Email Address</h3>
              <p>demo@demo.com</p>
            </div>
          </div>

          <ContactForm 
            name={name} 
            setName={setName} 
            email={email} 
            setEmail={setEmail} 
            message={message} 
            setMessage={setMessage} 
            handleSubmit={handleSubmit} 
          />
        </div>

        <ContactMap />
      </div>
    </section>
  );
};

export default Contact;
