// CardSlider.tsx
"use client";

import React, { useState } from 'react';
import styles from './CardSlider.module.css';

interface CardProps {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
}

const cardsData: CardProps[] = [
  { id: 1, name: 'David Dell', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', imageUrl: 'path_to_david_image' },
  { id: 2, name: 'Rose Bush', description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', imageUrl: 'path_to_rose_image' },
  { id: 3, name: 'Jones Gail', description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco.', imageUrl: 'path_to_jones_image' },
  // Add more cards as needed
];

const CardSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % cardsData.length); // Loop back to start
  };

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + cardsData.length) % cardsData.length); // Loop back to end
  };

  return (
    <div className={styles.sliderContainer}>
      <button onClick={prevSlide} className={`${styles.arrow} ${styles.left}`}>
        &lt;
      </button>
      <div className={styles.cardsWrapper}>
        {cardsData.map((card, index) => (
          <div className={styles.card} key={card.id} style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
            <div className={styles.imageContainer}>
              <img src={card.imageUrl} alt={card.name} className={styles.image} />
            </div>
            <h3 className={styles.name}>{card.name}</h3>
            <p className={styles.description}>{card.description}</p>
            <button className={styles.viewMore}>View More</button>
          </div>
        ))}
      </div>
      <button onClick={nextSlide} className={`${styles.arrow} ${styles.right}`}>
        &gt;
      </button>
      <div className={styles.dots}>
        {cardsData.map((_, index) => (
          <span
            key={index}
            className={`${styles.dot} ${index === currentIndex ? styles.activeDot : ''}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default CardSlider;
