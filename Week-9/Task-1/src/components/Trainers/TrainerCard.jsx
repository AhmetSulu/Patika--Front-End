import React from 'react';

const TrainerCard = ({ image, name, title }) => {
    return (
        <div className="trainer-card">
            <img src={image} alt="Trainer" className="trainer-image" />
            <div className="bar-left"></div>
            <div className="bar-right"></div>
            <div className="bar-top"></div>
            <div className="bar-bottom"></div>
            <div className="trainer-info">
                <div className="trainer-name">{name}</div>
                <div className="trainer-title">{title}</div>
            </div>
        </div>
    );
};

export default TrainerCard;
