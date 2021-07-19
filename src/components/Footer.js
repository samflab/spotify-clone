import React from "react";
import "../styles/Footer.css";
import ShuffleRoundedIcon from "@material-ui/icons/ShuffleRounded";
import SkipPreviousRoundedIcon from "@material-ui/icons/SkipPreviousRounded";
import SkipNextRoundedIcon from "@material-ui/icons/SkipNextRounded";
import PlayArrowRoundedIcon from "@material-ui/icons/PlayArrowRounded";
import LoopRoundedIcon from "@material-ui/icons/LoopRounded";
import { Grid, Slider } from "@material-ui/core";
import PlaylistPlayRoundedIcon from "@material-ui/icons/PlaylistPlayRounded";
import VolumeDownRoundedIcon from "@material-ui/icons/VolumeDownRounded";
function Footer() {
  return (
    <div className="footer">
      <div className="footer-left">
        <img src="https://images.squarespace-cdn.com/content/v1/5edb32112cb3cc498e15a24d/1592278746395-AEX09Z0GJDHC3AFLV7AL/Squareprint+93+Logo+final-01.png" alt="album" className="footer-album-logo" />
        <div className="footer-song-info">
          <h4> Yeah! </h4>
          <p>Usher</p>
        </div>
      </div>
      <div className="footer-center">
        <ShuffleRoundedIcon className="footer-green" />
        <SkipPreviousRoundedIcon className="footer-icon" />
        <PlayArrowRoundedIcon fontSize="large" className="footer-icon" />
        <SkipNextRoundedIcon className="footer-icon" />
        <LoopRoundedIcon className="footer-green" />
      </div>
      <div className="footer-right">
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlayRoundedIcon />
          </Grid>
          <Grid item>
            <VolumeDownRoundedIcon />
          </Grid>
          <Grid item xs>
            <Slider aria-labelledby="continuous-slider" />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Footer;
