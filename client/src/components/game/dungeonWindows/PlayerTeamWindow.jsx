import { Grid } from "@material-ui/core";
import React from "react";
import Player from "../player/Player";
import {useSelector } from "react-redux";

const PlayerTeamWindow = () => {
  const players = useSelector((state) => state.allPlayers.players);

  return (
    <Grid container spacing={1} item xs={12} sm={12} md={12}>
      {players.map((player) => {
        return (
          <Grid item xs={12} key={player.key}>
            <Player player={player} />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default PlayerTeamWindow;
