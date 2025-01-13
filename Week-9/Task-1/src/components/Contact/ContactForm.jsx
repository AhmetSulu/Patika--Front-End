import React from 'react';

const ContactForm = ({ name, setName, email, setEmail, message, setMessage, handleSubmit }) => {
  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <h3>Make An Appointment</h3>
      <input
        type="text"
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="email"
        placeholder="Your Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <textarea
        placeholder="Your Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required
      ></textarea>
      <button type="submit">Submit</button>
    </form>
  );
};

export default ContactForm;
