import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@material-ui/core";

const MatchesTable = ({ items, teams, ...props }) => {
  const getTeamName = (teamId) => {
    const team = teams.find((team) => team.id === teamId);
    return team ? team.name : "";
  };

  return (
    <TableContainer component={Paper}>
      <Table aria-label="Team matches table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Date</TableCell>
            <TableCell align="center">Home</TableCell>
            <TableCell align="center">Away</TableCell>
            <TableCell align="center">Score</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {items.map((row) => (
            <TableRow key={row.id}>
              <TableCell align="center">
                {new Date(row.updatedAt).toDateString()}
              </TableCell>
              <TableCell align="center">
                {getTeamName(row.homeTeamId)}
              </TableCell>
              <TableCell align="center">
                {getTeamName(row.awayTeamId)}
              </TableCell>
              <TableCell align="center">
                {row.score1} : {row.score2}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default MatchesTable;
