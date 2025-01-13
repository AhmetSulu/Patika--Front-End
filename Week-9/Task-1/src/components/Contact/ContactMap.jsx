import React from 'react';

const Map = () => {
  return (
    <div className="map-container">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96630.23481755338!2d28.9795304!3d41.015137!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caba2fb87a2f59%3A0x8f071f0c5f6d68a2!2sIstanbul%2C%20Turkey!5e0!3m2!1sen!2sus!4v1695393307456!5m2!1sen!2sus"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default Map;
