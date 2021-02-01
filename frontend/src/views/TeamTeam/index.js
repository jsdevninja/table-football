import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
  makeStyles,
} from "@material-ui/core";
import actions from "src/store/actions";
import SelectTeam from "src/components/SelectTeam";
import MatchesTable from "src/components/MatchesTable";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    flexDirection: "column",
    paddingLeft: 36,
    paddingRight: 36,
  },
  select: { marginLeft: 24, marginRight: 24, minWidth: "100px" },
}));

const initForm = {
  team1: 0,
  team2: 0,
};

const TeamTeam = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const teams = useSelector((state) => state.team.list);
  const matches = useSelector((state) => state.score.teamteam);
  const [form, setForm] = useState(initForm);

  useEffect(() => {
    dispatch(actions.scoreActions.clearStore());
    dispatch(actions.teamActions.getTeamsRequest());
  }, []);

  useEffect(() => {
    if (form.team1 !== 0 && form.team2 !== 0) {
      dispatch(actions.scoreActions.getTeamTeamStatisticsRequest(form));
    }
  }, [form]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    const _form = { ...form };
    _form[name] = value;
    setForm(_form);
  };

  const getTeamName = (teamId) => {
    const team = teams.find((team) => team.id === teamId);
    return team ? team.name : "";
  };

  return (
    <div className={classes.root}>
      <Box my={6} display="flex" alignItems="center">
        <h3>Select Teams:</h3>
        <SelectTeam
          className={classes.select}
          items={teams}
          name="team1"
          value={form.team1}
          onChange={handleInputChange}
        ></SelectTeam>
        <h4>vs</h4>
        <SelectTeam
          className={classes.select}
          items={teams}
          name="team2"
          value={form.team2}
          onChange={handleInputChange}
        ></SelectTeam>
      </Box>
      <MatchesTable items={matches} teams={teams}></MatchesTable>
    </div>
  );
};

export default TeamTeam;
