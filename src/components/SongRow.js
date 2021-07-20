import React from "react";
import "../styles/SongRow.css";

function SongRow({track, playSong}) {
  console.log("songs here:", track);
  return (
    <div className="songRow" onClick={() => playSong(track.id)}>
      <img className="songRow__album" src={track.album.images[0].url} alt="" />
      <div className="songRow__info">
        <div style={{display:"flex", flexDirection:"row"}}>
        <h2>{track.name}</h2>
        <p className="album-name">
          {track.artists.map((artist) => artist.name).join(",")} -{" "}
          {track.album.name}
        </p>
        </div>
      </div>
    </div>
  );
}

export default SongRow;
