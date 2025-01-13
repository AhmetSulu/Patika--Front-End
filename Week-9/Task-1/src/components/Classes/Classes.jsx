import React, { useState } from 'react';
import './Classes.css';
import yogaImage from "../../assets/images/yoga.jpg";
import groupImage from "../../assets/images/group.webp";
import soloImage from "../../assets/images/solo.jpg";
import stretchingImage from "../../assets/images/stret.webp";
import ClassCard from './ClassCard';
import ClassSchedule from './ClassSchedule';

function Classes() {
  const [activeClass, setActiveClass] = useState('yoga');

  const classContent = {
    yoga: {
      title: "Yoga",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur possimus voluptatum impedit odit perferendis dolorum placeat...",
      schedule: [
        "Saturday-Sunday: 8:00am - 10:00am",
        "Monday-Tuesday: 10:00am - 12:00pm",
        "Wednesday-Friday: 3:00pm - 6:00pm"
      ],
      image: yogaImage
    },
    group: {
      title: "Group",
      description: "Experience the energy and motivation of working out together. Our group classes combine strength training, cardio, and team spirit...",
      schedule: [
        "Saturday-Sunday: 9:00am - 11:00am",
        "Monday-Tuesday: 2:00pm - 4:00pm",
        "Wednesday-Friday: 6:00pm - 8:00pm"
      ],
      image: groupImage
    },
    solo: {
      title: "Personal",
      description: "Get personalized attention and customized workout plans with our expert trainers. Achieve your fitness goals faster...",
      schedule: [
        "Saturday-Sunday: 7:00am - 9:00pm",
        "Monday-Friday: 6:00am - 10:00pm",
        "By Appointment Only"
      ],
      image: soloImage
    },
    stretching: {
      title: "Flexibility",
      description: "Improve your flexibility, reduce injury risk, and enhance recovery with our specialized stretching classes...",
      schedule: [
        "Saturday-Sunday: 11:00am - 12:00pm",
        "Monday-Wednesday: 1:00pm - 2:00pm",
        "Thursday-Friday: 5:00pm - 6:00pm"
      ],
      image: stretchingImage
    }
  };

  const handleClassClick = (className) => {
    setActiveClass(className);
  };

  return (
    <section className="section" id="classes">
      <h2 className="section-title">OUR CLASSES</h2>
      <span className="orange-underline"></span>
      <p className="section-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium asperiores quisquam qui reiciendis, nulla repellat!</p>

      <div className="class-types">
        {Object.keys(classContent).map((className) => {
          const { title } = classContent[className];
          return (
            <ClassCard
              key={className}
              title={title}
              classType={className}
              onClick={handleClassClick}
              isActive={activeClass === className}
            />
          );
        })}
      </div>

      <div className="content-grid">
        {Object.keys(classContent).map((className) => {
          const { title, description, schedule, image } = classContent[className];
          return (
            <div
              key={className}
              className={`class-content ${activeClass === className ? 'active' : ''}`}
              id={`${className}-content`}
              data-aos="fade-up"
            >
              <div className="info">
                <h2>{title}</h2>
                <p>{description}</p>
                <ClassSchedule schedule={schedule} title={title} />
              </div>
              <div className="image">
                <img src={image} alt={`${className} Class`} />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Classes;
