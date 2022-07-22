import React from "react";
import classes from "./SkeletonLoader.module.css";

const SkeletonLoader = () => {
  return (
    <>
    
      <div className={`${classes.card}`}>
    <div className={classes.username}>

      <h1 className={`${classes.skeleton} ${classes.skeletonText}`}></h1>
      <h1 className={`${classes.skeleton} ${classes.skeletonText}`}></h1>
      
    </div>
        
        <div className={`${classes.image} ${classes.skeleton}`}></div>
      </div>
    </>
  );
};

export default SkeletonLoader;
