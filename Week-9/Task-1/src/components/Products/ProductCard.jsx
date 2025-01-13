import React from 'react';

const ProductCard = ({ image, name, oldPrice, currentPrice }) => {
    return (
        <div className="product-card">
            <img src={image} alt={name} className="product-image" />
            <div className="product-details">
                <div className="product-name">{name}</div>
                <div className="product-price">
                    <span className="old-price">{oldPrice}</span>
                    <span className="current-price">{currentPrice}</span>
                </div>
                <i className="bi bi-cart-fill fs-2"></i>
                <button className="add-to-cart">Add To Cart</button>
            </div>
        </div>
    );
};

export default ProductCard;
