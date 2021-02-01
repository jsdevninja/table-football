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
  Divider,
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
  select: { marginLeft: 12, minWidth: "100px" },
  divider: { margin: 32 },
}));

const Team = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const teams = useSelector((state) => state.team.list);
  const teamStatistic = useSelector((state) => state.score.team);
  const [team, setTeam] = useState(0);

  useEffect(() => {
    dispatch(actions.scoreActions.clearStore());
    dispatch(actions.teamActions.getTeamsRequest());
  }, []);

  useEffect(() => {
    if (team !== 0) {
      dispatch(actions.scoreActions.getTeamStatisticsRequest(team));
    }
  }, [team]);

  useEffect(() => {
    console.log(teamStatistic);
  }, [teamStatistic]);

  const handleInputChange = (event) => {
    setTeam(event.target.value);
  };

  return (
    <div className={classes.root}>
      <Box my={6} display="flex" alignItems="center">
        <h3>Select Team:</h3>
        <SelectTeam
          className={classes.select}
          items={teams}
          value={team}
          onChange={handleInputChange}
        ></SelectTeam>
      </Box>
      {teamStatistic && (
        <>
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="Team analytics table">
              <TableHead>
                <TableRow>
                  <TableCell align="right">Games Played</TableCell>
                  <TableCell align="center">Wins</TableCell>
                  <TableCell align="center">Losses</TableCell>
                  <TableCell align="center">Draw</TableCell>
                  <TableCell align="center">Win Ratio</TableCell>
                  <TableCell align="center">GF</TableCell>
                  <TableCell align="center">GA</TableCell>
                  <TableCell align="center">GD</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell align="right">
                    {teamStatistic.statistic.wins +
                      teamStatistic.statistic.losses +
                      teamStatistic.statistic.draw}
                  </TableCell>
                  <TableCell align="center">
                    {teamStatistic.statistic.wins}
                  </TableCell>
                  <TableCell align="center">
                    {teamStatistic.statistic.losses}
                  </TableCell>
                  <TableCell align="center">
                    {teamStatistic.statistic.draw}
                  </TableCell>
                  <TableCell align="center">
                    {teamStatistic.statistic.ratio?.toFixed(2)}
                  </TableCell>
                  <TableCell align="center">
                    {teamStatistic.statistic.gf}
                  </TableCell>
                  <TableCell align="center">
                    {teamStatistic.statistic.ga}
                  </TableCell>
                  <TableCell align="center">
                    {teamStatistic.statistic.gd}
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
          <Divider className={classes.divider} />
          <h3>Match details:</h3>
          <MatchesTable items={teamStatistic.data} teams={teams}></MatchesTable>
        </>
      )}
    </div>
  );
};

export default Team;
