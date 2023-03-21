import React, { useState, useEffect } from "react";
import styles from "./Carousel.module.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const data = [
  {
    title: "To Do List",
    description: "This is the description for card 1",
    imageUrl:
      "https://raw.githubusercontent.com/fede-cid/MyPortfolio/main/MyPortfolio/frontend/public/recursos/todo.png",
    url: "https://recuerda-no-olvidar-app-de-tareas.vercel.app/",
  },
  {
    title: "Calculadora",
    description: "This is the description for card 2",
    imageUrl:
      "https://raw.githubusercontent.com/fede-cid/MyPortfolio/main/MyPortfolio/frontend/public/recursos/calculadora.png",
    url: "https://calculadora-react-fedecid.vercel.app/",
  },
  {
    title: "Speed test clicks",
    description: "This is the description for card 3",
    imageUrl:
      "https://raw.githubusercontent.com/fede-cid/MyPortfolio/main/MyPortfolio/frontend/public/recursos/speed.png",
    url: "https://speed-test-clicks.vercel.app/",
  },
  {
    title: "Form Vue.js",
    description: "This is the description for card 4",
    imageUrl:
      "https://raw.githubusercontent.com/fede-cid/MyPortfolio/main/MyPortfolio/frontend/public/recursos/formvue.png",
    url: "https://formvueprueba.web.app/",
  },
];

const CarrouselMini = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [numCards, setNumCards] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 600) {
        setNumCards(1);
      } else if (window.innerWidth < 900) {
        setNumCards(2);
      } else {
        setNumCards(3);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleNext = () => {
    setActiveIndex((prevIndex) => {
      if (prevIndex === data.length - numCards) {
        return 0;
      } else {
        return prevIndex + 1;
      }
    });
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) => {
      if (prevIndex === 0) {
        return data.length - numCards;
      } else {
        return prevIndex - 1;
      }
    });
  };

  return (
    <div className={styles.carousel}>
      <h2></h2>
        {activeIndex > 0 && (
          <button
            className={`${styles.controls} ${styles.prev}`}
            onClick={handlePrev}
          >
            <FaChevronLeft />
          </button>
        )}
      <div className={styles.cards}>
        {data.map((item, index) => {
          if (index >= activeIndex && index < activeIndex + numCards) {
            return (
              <div key={index} className={styles.card}>
                <a href={item.url} target="_blank" rel="noopener noreferrer">
                  <img src={item.imageUrl} alt={item.title} />
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </a>
              </div>
            );
          } else {
            return null;
          }
        })}
      </div>
        {activeIndex < data.length - numCards && (
          <button
            className={`${styles.controls} ${styles.next}`}
            onClick={handleNext}
          >
            <FaChevronRight />
          </button>
        )}
    </div>
  );
};

export default CarrouselMini;
