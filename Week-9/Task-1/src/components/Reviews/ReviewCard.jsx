import React from 'react';

const ReviewCard = ({ reviewerImage, reviewerName, reviewerRole, message }) => {
    return (
        <div className="review-card">
            <div className="reviewer-info">
                <img src={reviewerImage} alt={reviewerName} className="reviewer-image" />
                <div className="reviewer-details">
                    <h3>{reviewerName}</h3>
                    <p>{reviewerRole}</p>
                </div>
            </div>
            <div className="message-box">
                <p>{message}</p>
                <div className="corner-left"></div>
                <div className="corner-right"></div>
            </div>
        </div>
    );
};

export default ReviewCard;
