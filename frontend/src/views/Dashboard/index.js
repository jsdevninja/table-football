import React from "react";
import { Box, Button, makeStyles } from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";
import { ROUTE_PATH } from "src/constants";

const useStyles = makeStyles(() => ({
  root: {},
}));

const Dashboard = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Box mt={6} display="flex" justifyContent="space-around">
        <Button
          color="primary"
          component={RouterLink}
          to={ROUTE_PATH.START_GAME}
          variant="contained"
        >
          Start Game(US#1)
        </Button>
        <Button
          color="primary"
          component={RouterLink}
          to={ROUTE_PATH.CREATE_GAME}
          variant="contained"
        >
          Record Game(US#2)
        </Button>
        <Button
          color="primary"
          component={RouterLink}
          to={ROUTE_PATH.CREATE_TEAM}
          variant="contained"
        >
          Create Team(US#3)
        </Button>
      </Box>
    </div>
  );
};

export default Dashboard;
