import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Box,
  Select,
  MenuItem,
  Button,
  TextField,
  makeStyles,
} from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";
import { ROUTE_PATH } from "src/constants";
import actions from "src/store/actions";
import SelectTeam from "src/components/SelectTeam";

const useStyles = makeStyles(() => ({
  root: {
    marginLeft: 12,
    marginRight: 12,
  },
  select: {
    width: "auto",
  },
}));

const initForm = {
  team1: 0,
  team2: 0,
  score1: 0,
  score2: 0,
};

const CreateGame = () => {
  const classes = useStyles();

  const dispatch = useDispatch();
  const teams = useSelector((state) => state.team.list);

  const [form, setForm] = useState(initForm);

  useEffect(() => {
    dispatch(actions.teamActions.getTeamsRequest());
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    const _form = { ...form };
    _form[name] = value;
    setForm(_form);
  };

  const recordGame = () => {
    dispatch(actions.scoreActions.recordScoreRequest(form));
    setForm(initForm);
  };

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
      <Box display="flex" justifyContent="space-around" alignItems="center">
        <Box display="flex" flexDirection="column">
          <SelectTeam
            items={teams}
            name="team1"
            value={form.team1}
            onChange={handleInputChange}
          ></SelectTeam>
          <TextField
            name="score1"
            onChange={handleInputChange}
            className={classes.textField}
            value={form.score1}
            type="number"
            placeholder="Team 1 Score"
            margin="normal"
          />
        </Box>
        <h4>vs</h4>
        <Box display="flex" flexDirection="column" width={classes.select}>
          <SelectTeam
            items={teams}
            name="team2"
            value={form.team2}
            onChange={handleInputChange}
          ></SelectTeam>
          <TextField
            name="score2"
            onChange={handleInputChange}
            className={classes.textField}
            value={form.score2}
            type="number"
            placeholder="Team 2 Score"
            margin="normal"
          />
        </Box>
        <Button
          variant="contained"
          color="primary"
          onClick={recordGame}
          disabled={!form.team1 || !form.team2 || form.team1 === form.team2}
        >
          Record Game
        </Button>
      </Box>
    </div>
  );
};

export default CreateGame;
