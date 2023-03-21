import React, { useState } from "react";
import styles from "./Carousel.module.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const data = [
  {
    title: "To Do List",
    description: "This is the description for card 1",
    imageUrl: "https://picsum.photos/id/1018/400/250",
    url:'https://recuerda-no-olvidar-app-de-tareas.vercel.app/'
  },
  {
    title: "Calculadora",
    description: "This is the description for card 2",
    imageUrl: "",
    url:'https://calculadora-react-fedecid.vercel.app/'
  },
  {
    title: "Speed test clicks",
    description: "This is the description for card 3",
    imageUrl: "",
    url:'https://speed-test-clicks.vercel.app/'
  },
  {
    title: "Form Vue.js",
    description: "This is the description for card 4",
    imageUrl: "https://picsum.photos/id/1020/400/250",
    url:'https://formvueprueba.web.app/'
  },
];

const CarrouselMini = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prevIndex) => {
      if (prevIndex === data.length - 1) {
        return 0;
      } else {
        return prevIndex + 1;
      }
    });
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) => {
      if (prevIndex === 0) {
        return data.length - 1;
      } else {
        return prevIndex - 1;
      }
    });
  };

  return (
    <div className={styles.carousel}>
      <div className={styles.cards}>
        {data.map((card, index) => (
          <div
            key={index}
            className={`${styles.card} ${
              index === activeIndex ? styles.active : ""
            }`}
            style={{ transform: `translateX(${-20 * (activeIndex - index)}rem)` }}
          >
            <img src={card.imageUrl} alt={card.title} />
            <div className={styles.cardDescription}>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.controls}>
        <button onClick={handlePrev}>
          <FaChevronLeft />
        </button>
        <button onClick={handleNext}>
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};


export default CarrouselMini;


