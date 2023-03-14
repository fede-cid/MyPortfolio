import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Carousel from "react-material-ui-carousel";
import { Card, CardContent, CardMedia, Typography } from "@material-ui/core";
import styles from "./CarrucelMUI.module.css";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  card: {
    height: 500,
    width: "80%",
    margin: "0 auto",
    borderRadius: 10,
    boxShadow: "0px 10px 30px -5px rgba(0,0,0,0.3)",
    transition: "transform 0.2s",
    "&:hover": {
      transform: "scale(1.05)",
    },
  },
  media: {
    height: "100%",
    width: "100%",
    backgroundSize: "cover",
    backgroundPosition: "center",
    borderRadius: "10px 10px 0 0",
  },
});

const CardCarousel = ({ cards }) => {
  const classes = useStyles();

  return (
    <Carousel
      navButtonsProps={{
        style: {
          backgroundColor: "transparent",
          boxShadow: "none",
          borderRadius: "50%",
          width: "50px",
          height: "50px",
          top: "calc(50% - 25px)",
          "&:hover": {
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          },
        },
      }}
      animation="slide"
      navButtonsAlwaysVisible={true}
      className={styles.carousel}
    >
      {cards.map((card) => (
        <Card key={card.id} className={classes.card}>
           <a href={card.description} target="_blank" rel="noopener noreferrer">
          <CardMedia
            className={classes.media}
            image={card.imageUrl}
            title={card.title}
          />
          </a>
          <CardContent>
          </CardContent>
        </Card>
      ))}
    </Carousel>
  );
};

export default CardCarousel;