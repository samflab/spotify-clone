import "./App.css";
import React, { useEffect} from "react";
import Login from "./components/Login";
import { getTokenFromResponse } from "./monstercat";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./components/Player";
import { useDataLayerValue } from "./components/DataLayer";

const spotify = new SpotifyWebApi();

function App() {
  //const [token, setToken] = useState(null);
  const [{ user, token }, dispatch] = useDataLayerValue();

  useEffect(() => {
    const hash = getTokenFromResponse();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      //setToken(_token);
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      })

      spotify.setAccessToken(_token); //giving the access token to spotify API
      spotify.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user: user,
        });
      });
      spotify.getUserPlaylists().then((playlists) =>{
        dispatch({
        type: "SET_PLAYLISTS",
        playlists: playlists,
      });
    });
    }
  }, []);

  // console.log("👩🏼", user);
  // console.log("🤘🏼", token);
  
  return <div className="App">{token ? <Player spotify = {spotify}/> : <Login />}</div>;
}

export default App;
