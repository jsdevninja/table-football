import React from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  Box,
  Divider,
  List,
  Button,
  ListItem,
  makeStyles,
} from "@material-ui/core";
import { ROUTE_PATH } from "src/constants";

const items = [
  {
    title: "Dashboard",
    href: ROUTE_PATH.DASHBOARD,
  },
  {
    title: "Team Statistics",
    href: ROUTE_PATH.TEAM,
  },
  {
    title: "Team vs Team",
    href: ROUTE_PATH.TEAMTEAM,
  },
];

const useStyles = makeStyles(() => ({
  name: {
    margin: 12,
  },
  item: {
    display: "block",
    paddingTop: 0,
    paddingBottom: 0,
  },
  itemLeaf: {
    display: "flex",
    paddingTop: 0,
    paddingBottom: 0,
  },
  button: {
    padding: "10px 8px",
    justifyContent: "flex-start",
    textTransform: "none",
    letterSpacing: 0,
    width: "100%",
  },
  title: {
    marginRight: "auto",
  },
}));

const Sidebar = () => {
  const classes = useStyles();

  return (
    <>
      <Box height="100%" display="flex" flexDirection="column">
        <h2 className={classes.name}>Table Football</h2>
        <Box p={2}>
          {items.map((item) => (
            <List key={item.title}>
              <ListItem
                disableGutters
                key={item.title}
                className={classes.item}
              >
                <Button
                  className={classes.button}
                  component={RouterLink}
                  to={item.href}
                >
                  <span className={classes.title}>{item.title}</span>
                </Button>
              </ListItem>
            </List>
          ))}
        </Box>
        <Divider />
      </Box>
    </>
  );
};

export default Sidebar;
