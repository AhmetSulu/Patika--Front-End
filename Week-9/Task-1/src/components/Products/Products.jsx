import React from 'react';
import './Products.css';
import ProductCard from './ProductCard';

import purchase1Image from '../../assets/images/purchase1.jpg';
import purchase2Image from '../../assets/images/purchase2.jpg';
import purchase3Image from '../../assets/images/purchase3.jpg';
import purchase4Image from '../../assets/images/purchase4.jpg';

const Products = () => {
    return (
        <section className="section" id="products">
            <h2 className="section-title" data-aos="fade-up">PURCHASE FROM US</h2>
            <span className="orange-underline" data-aos="fade-up"></span>
            <p className="section-description" data-aos="fade-up">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores et eos accusantium vero officia deleniti.</p>
            <div className="products-grid" data-aos="fade-up">
                <ProductCard 
                    image={purchase1Image} 
                    name="Kettlebell / 5kg" 
                    oldPrice="$69.99" 
                    currentPrice="$59.99" 
                />
                <ProductCard 
                    image={purchase2Image} 
                    name="Treadmill" 
                    oldPrice="$699.99" 
                    currentPrice="$599.99" 
                />
                <ProductCard 
                    image={purchase3Image} 
                    name="Adjustable Dumbbell" 
                    oldPrice="$99.99" 
                    currentPrice="$89.99" 
                />
                <ProductCard 
                    image={purchase4Image} 
                    name="Kettlebell / 3kg" 
                    oldPrice="$59.99" 
                    currentPrice="$49.99" 
                />
            </div>
        </section>
    );
};

export default Products;
