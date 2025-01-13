import React, { useState, useRef, useEffect } from "react";
import bmiChartImage from '@assets/images/bmi-index.jpg';
import './BmiCalculator.css';

function BmiCalculator() {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBmi] = useState('');
  const [category, setCategory] = useState('');
  const [arrowPosition, setArrowPosition] = useState(0);

  const bmiChartRef = useRef(null);
  const bmiArrowRef = useRef(null);

  const calculateBMI = () => {
    if (height && weight) {
      const heightInMeters = height / 100;
      const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(1);
      setBmi(bmiValue);

      let newCategory = '';
      let newPosition = 0;

      const chartWidth = bmiChartRef.current.offsetWidth;

      if (bmiValue < 18.5) {
        newPosition = chartWidth * 0.1;
        newCategory = 'Underweight';
      } else if (bmiValue < 24.9) {
        newPosition = chartWidth * 0.3;
        newCategory = 'Normal';
      } else if (bmiValue < 29.9) {
        newPosition = chartWidth * 0.5;
        newCategory = 'Overweight';
      } else if (bmiValue < 34.9) {
        newPosition = chartWidth * 0.7;
        newCategory = 'Obese';
      } else {
        newPosition = chartWidth * 0.9;
        newCategory = 'Extremely Obese';
      }

      setCategory(newCategory);
      setArrowPosition(newPosition);
    }
  };

  useEffect(() => {
    calculateBMI();
  }, [height, weight]);

  return (
    <section className="section" id="bmi">
      <div className="bmi-container">
        <div className="bmi-left">
          <h2>BMI Calculator</h2>
          <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>
          <div className="bmi-form">
            <input
              type="number"
              placeholder="Your Height (cm)"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
            <input
              type="number"
              placeholder="Your Weight (kg)"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>
        </div>

        <div className="bmi-right">
          {bmi && (
            <div id="bmi-result" className="bmi-result">
              Your BMI: {bmi} ({category})
            </div>
          )}
          <div className="bmi-chart">
            <img ref={bmiChartRef} src={bmiChartImage} alt="BMI Chart" />
            
            <div
              id="bmiArrow"
              className="bmi-arrow"
              ref={bmiArrowRef}
              style={{ left: `${arrowPosition}px`, display: bmi ? 'block' : 'none' }}
            >
              ▲
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BmiCalculator;
