import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Button, makeStyles } from "@material-ui/core";
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
    minWidth: "100px",
  },
  score: {
    marginTop: 24,
    marginBottom: 36,
  },
}));

const initForm = {
  team1: 0,
  team2: 0,
  score1: 0,
  score2: 0,
};

const StartGame = () => {
  const classes = useStyles();

  const dispatch = useDispatch();
  const teams = useSelector((state) => state.team.list);
  const createdTeam = useSelector((state) => state.score.createdTeam);

  const [form, setForm] = useState(initForm);

  useEffect(() => {
    dispatch(actions.scoreActions.clearStore());
    dispatch(actions.teamActions.getTeamsRequest());
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    const _form = { ...form };
    _form[name] = value;
    setForm(_form);
  };

  const startGame = () => {
    dispatch(actions.scoreActions.recordScoreRequest(form));
  };

  const scored = (isHome) => {
    const _form = { ...form };
    if (isHome) _form.score1++;
    else _form.score2++;
    setForm(_form);
    dispatch(
      actions.scoreActions.updateScoreRequest({
        ..._form,
        scoreId: createdTeam.id,
      })
    );
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
      <Box
        display="flex"
        justifyContent="space-around"
        alignItems="center"
        mt={5}
      >
        <Box display="flex" flexDirection="column" alignItems="center">
          <SelectTeam
            className={classes.select}
            items={teams}
            name="team1"
            value={form.team1}
            onChange={handleInputChange}
            disabled={!!createdTeam}
          ></SelectTeam>
          {createdTeam && (
            <>
              <h3 className={classes.score}>{createdTeam.score1}</h3>
              <Button
                variant="contained"
                color="primary"
                onClick={() => scored(true)}
              >
                Scored (+1)
              </Button>
            </>
          )}
        </Box>
        <h4>vs</h4>
        <Box display="flex" flexDirection="column" alignItems="center">
          <SelectTeam
            className={classes.select}
            items={teams}
            name="team2"
            value={form.team2}
            onChange={handleInputChange}
            disabled={!!createdTeam}
          ></SelectTeam>
          {createdTeam && (
            <>
              <h3 className={classes.score}>{createdTeam.score2}</h3>
              <Button
                variant="contained"
                color="secondary"
                onClick={() => scored(false)}
              >
                Scored (+1)
              </Button>
            </>
          )}
        </Box>
        <Button
          variant="contained"
          color="primary"
          onClick={startGame}
          disabled={
            !form.team1 ||
            !form.team2 ||
            form.team1 === form.team2 ||
            !!createdTeam
          }
        >
          Start Game
        </Button>
      </Box>
    </div>
  );
};

export default StartGame;
