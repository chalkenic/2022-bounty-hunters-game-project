import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { useSelector } from "react-redux";

const CardTargetTracker = (props) => {
  const players = useSelector((state) => state.allPlayers.players);
  console.log("players:", players);
  console.log("players length:", players.length);
  console.log(props.roomCard);
  let targets = "";
  try {
    targets = props.roomCard.target;
  } catch (error) {
    targets = ["1"];
  }

  console.log(typeof targets);

  return (
    <Grid item style={{ paddingTop: 40 }}>
      <Typography variant="h6">Card Target(s)</Typography>

      {props.roomCard && players.length > 1 && !isNaN(targets) ? (
        <>
          {targets.map((target) => {
            var playerTarget = parseInt(target);
            return (
              <Typography style={{ fontStyle: "italic" }} key={target}>
                Player {playerTarget + 1}
              </Typography>
            );
          })}
        </>
      ) : (
        <Typography style={{ fontStyle: "italic" }}>
          Single Player Game
        </Typography>
      )}
    </Grid>
  );
};
export default CardTargetTracker;
