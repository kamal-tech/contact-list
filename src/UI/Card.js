import React from "react";
import classes from "./Card.module.css";

const Card = ({ picUrl, firstName, lastName }) => {
  return (
    <>
      <div className={classes.card}>
      <div className={classes.username}>
        <h1 className={classes.cardText}>{firstName}</h1>
        <h1>{lastName}</h1>
      </div>
        <img src={picUrl} alt="User" />
      </div>
    </>
  );
};

export default Card;
