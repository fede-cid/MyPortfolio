import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    background: "transparent",
    maxWidth: "100%",
  },
  media: {
    height: 240,
  },
  text: {
    color: "var(--white-apoyo)",
  },
});

const CardProductos = ({ title, description, image, slug }) => {
  const classes = useStyles();
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <Card className={classes.root}>
      
        <CardActionArea>
          {/* <CardMedia className={classes.media} image={image} title={title} /> */}
          <CardContent><a href={`${slug}`} target="_blank">
            <Typography
              className={classes.text}
              gutterBottom
              variant="h5"
              component="h2"
            >
              {title}
            </Typography></a>
            <Typography
              className={classes.text}
              variant="body2"
              color="textSecondary"
              component="p"
            >
              {showMore ? description : `${description.substring(0, 100)}...`}
              <Button  onClick={toggleShowMore}>
                <p>{showMore ? "Show less" : "Show more"}</p>
              </Button>
            </Typography>
          </CardContent>
        </CardActionArea>
      
    </Card>
  );
};

export default CardProductos;