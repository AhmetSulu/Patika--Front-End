import React from 'react';
import './Reviews.css';
import client1Image from '../../assets/images/client1.jpg';
import client2Image from '../../assets/images/client2.jpg';
import ReviewCard from './ReviewCard';


const Reviews = () => {
    return (
        <section className="section section-gray" id="review" data-aos="fade-left">
            <h2 className="section-title">REVIEW CLIENT</h2>
            <span className="orange-underline"></span>
            <p className="section-description">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum, nihil? Fugiat soluta quia ab at!
            </p>
            <div className="review-container">
                <ReviewCard 
                    reviewerImage={client1Image}
                    reviewerName="Diet Expert"
                    reviewerRole="CFO"
                    message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic minima necessitatibus repellendus rem possimus fugit labore voluptatem ut aspernatur obcaecati?"
                />
                <ReviewCard 
                    reviewerImage={client2Image}
                    reviewerName="Cardio Trainer"
                    reviewerRole="CEO"
                    message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, vel ipsam incidunt quos architecto hic facilis totam dolor cum tempore?"
                />
            </div>
        </section>
    );
};

export default Reviews;
