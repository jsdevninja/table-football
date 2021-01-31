import React from "react";
import { CircularProgress, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  root: {
    position: "fixed",
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    zIndex: 99900,
    backgroundColor: "#00000020",
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
}));

const LoadingScreen = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CircularProgress />
    </div>
  );
};

export default LoadingScreen;
