import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Box, Button, makeStyles } from "@material-ui/core";
import { ROUTE_PATH } from "src/constants";

const useStyles = makeStyles(() => ({
  root: {
    minHeight: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: 80,
    paddingBottom: 80,
  },
  image: {
    maxWidth: "100%",
    width: 560,

    maxHeight: 300,
    height: "auto",
  },
}));

const NotFound = () => {
  const classes = useStyles();

  return (
    <div className={classes.root} title="404: Not found">
      404: The page you are looking for isn’t here
      <Box mt={6} display="flex" justifyContent="center">
        <img
          alt="Page Not Found"
          className={classes.image}
          src="/static/images/page_not_found.svg"
        />
      </Box>
      <Box mt={6} display="flex" justifyContent="center">
        <Button
          color="secondary"
          component={RouterLink}
          to={ROUTE_PATH.DASHBOARD}
          variant="outlined"
        >
          Back to Dashboard
        </Button>
      </Box>
    </div>
  );
};

export default NotFound;
