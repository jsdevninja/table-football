import React from "react";
import { Button, makeStyles } from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";
import { ROUTE_PATH } from "src/constants";

const useStyles = makeStyles(() => ({
  root: {
    marginLeft: 12,
    marginRight: 12,
  },
}));

const CreateTeam = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button
        color="primary"
        component={RouterLink}
        to={ROUTE_PATH.DASHBOARD}
        variant="outlined"
      >
        Back to Dashboard
      </Button>
    </div>
  );
};

export default CreateTeam;
