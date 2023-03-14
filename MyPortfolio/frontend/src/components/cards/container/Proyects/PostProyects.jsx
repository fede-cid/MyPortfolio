import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";


const useStyles = makeStyles({
  card: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", 
  },
});

const FeaturedPost = ( post ) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <Link to={`/posts/${post.slug}`} className={styles.link}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            title={post.title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {post.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {post.description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Link>
    </Card>
  );
};

export default FeaturedPost;