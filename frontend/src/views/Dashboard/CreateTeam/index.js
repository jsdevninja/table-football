import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  makeStyles,
  List,
  ListItem,
  ListItemText,
  TextField,
} from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ROUTE_PATH } from "src/constants";
import actions from "src/store/actions";

const useStyles = makeStyles(() => ({
  root: {
    marginLeft: 12,
    marginRight: 12,
  },
  list: {
    width: "30%",
  },
  textField: {
    marginRight: 28,
  },
}));

const CreateTeam = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const teams = useSelector((state) => state.team.list);
  const [form, setForm] = useState({ name: "", info: "" });

  useEffect(() => {
    dispatch(actions.teamActions.getTeamsRequest());
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    const _form = { ...form };
    _form[name] = value;
    setForm(_form);
  };

  const createTeam = () => {
    dispatch(actions.teamActions.createTeamRequest(form));
    setForm({ name: "", info: "" });
  };

  return (
    <div className={classes.root}>
      <Box mb={3}>
        <Button
          color="primary"
          component={RouterLink}
          to={ROUTE_PATH.DASHBOARD}
          variant="outlined"
        >
          Back to Dashboard
        </Button>
      </Box>
      <Box display="flex" alignItems="center">
        <TextField
          id="team-name"
          name="name"
          onChange={handleInputChange}
          className={classes.textField}
          value={form.name}
          placeholder="Team Name"
          margin="normal"
        />
        <TextField
          id="team-info"
          name="info"
          onChange={handleInputChange}
          className={classes.textField}
          value={form.info}
          placeholder="Team Information"
          margin="normal"
        />
        <Button
          variant="contained"
          color="primary"
          onClick={createTeam}
          disabled={!form.name || !form.info}
        >
          Create Team
        </Button>
      </Box>
      <Box mt={3}>
        <h3>All Teams</h3>
        <List component="nav" className={classes.list}>
          {teams.map((team) => (
            <ListItem button key={team.id}>
              <ListItemText primary={`${team.name}(${team.info})`} />
            </ListItem>
          ))}
        </List>
      </Box>
    </div>
  );
};

export default CreateTeam;
