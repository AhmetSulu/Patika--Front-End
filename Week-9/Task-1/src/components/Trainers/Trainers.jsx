import React from 'react';
import './Trainers.css';
import trainer1Image from '../../assets/images/trainer1.jpg';
import trainer2Image from '../../assets/images/trainer2.jpg';
import trainer3Image from '../../assets/images/trainer3.jpg';
import TrainerCard from './TrainerCard';

const Trainers = () => {
    return (
        <section className="section section-gray" id="trainers" data-aos="fade-down">
            <h2 className="section-title">OUR BEST TRAINERS</h2>
            <span className="orange-underline"></span>
            <p className="section-description">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus ab expedita maiores nihil doloribus aliquam..</p>
            <div className="trainers-container">
                
                <TrainerCard
                    image={trainer1Image}
                    name="Jane Doe"
                    title="Cardio Trainer"
                />

                <TrainerCard
                    image={trainer2Image}
                    name="John Smith"
                    title="Strength Coach"
                />

                <TrainerCard
                    image={trainer3Image}
                    name="Sarah Johnson"
                    title="Fitness Instructor"
                />
                
            </div>
        </section>
    );
};

export default Trainers;
