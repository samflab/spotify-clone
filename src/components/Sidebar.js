import React from "react";
import "../styles/Sidebar.css";
import SidebarOption from "./SidebarOptions";
import LibraryMusicRoundedIcon from "@material-ui/icons/LibraryMusicRounded";
import SearchRoundedIcon from "@material-ui/icons/SearchRounded";
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import { useDataLayerValue } from "../components/DataLayer";

function Sidebar() {
  const [{ playlists }, dispatch] = useDataLayerValue();
  console.log(playlists);
  return (
    <div className="sidebar">
      <img
        className="sidebar-logo"
        src="https://www.monstercat.com/player/monstercat-player-logo.png"
        alt="monstercat-logo"
      />
      <SidebarOption Icon={HomeRoundedIcon} option="Home" />
      <SidebarOption Icon={SearchRoundedIcon} option="Search" />
      <SidebarOption Icon={LibraryMusicRoundedIcon} option="Your Library" />
      <br />
      <strong className="sidebar-title">PLAYLISTS</strong>
      <hr />
      <p>
        {playlists?.items?.map((playlist) => (
          <SidebarOption option={playlist.name} />
        ))}
      </p>
    </div>
  );
}

export default Sidebar;
