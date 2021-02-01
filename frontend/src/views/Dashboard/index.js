import React, { useEffect } from "react";
import {
  Box,
  Button,
  makeStyles,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@material-ui/core";

import { Link as RouterLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ROUTE_PATH } from "src/constants";
import actions from "src/store/actions";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    flexDirection: "column",
    paddingLeft: 36,
    paddingRight: 36,
  },
  table: {},
}));

const Dashboard = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const overall = useSelector((state) => state.score.overall);

  useEffect(() => {
    dispatch(actions.scoreActions.getStatisticsRequest());
  }, []);

  return (
    <div className={classes.root}>
      <Box my={6} display="flex" justifyContent="space-around">
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
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="Dashboard table">
          <TableHead>
            <TableRow>
              <TableCell>Team/Player Name</TableCell>
              <TableCell align="center">Games Played</TableCell>
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
            {overall.map((row, index) => (
              <TableRow key={`${row.team.name} ${index}`}>
                <TableCell component="th" scope="row">
                  {row.team.name} ({row.team.info})
                </TableCell>
                <TableCell align="center">
                  {row.statistic.wins +
                    row.statistic.losses +
                    row.statistic.draw}
                </TableCell>
                <TableCell align="center">{row.statistic.wins}</TableCell>
                <TableCell align="center">{row.statistic.losses}</TableCell>
                <TableCell align="center">{row.statistic.draw}</TableCell>
                <TableCell align="center">
                  {row.statistic.ratio?.toFixed(2)}
                </TableCell>
                <TableCell align="center">{row.statistic.gf}</TableCell>
                <TableCell align="center">{row.statistic.ga}</TableCell>
                <TableCell align="center">{row.statistic.gd}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Dashboard;
