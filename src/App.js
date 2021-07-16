import './App.css';
import React, { useEffect, useState } from "react";
import Login from "./components/Login";
import { getTokenFromResponse } from './monstercat';
import SpotifyWebApi from 'spotify-web-api-js';
import Player from './components/Player';
import {useDataLayerValue} from "./components/DataLayer";

const spotify = new SpotifyWebApi();

function App() {
  const [token, setToken] = useState(null);
  const [{}, dispatch] = useDataLayerValue();

  useEffect(() =>{
    const hash = getTokenFromResponse();
    window.location.hash = "";
    const _token = hash.access_token;

    if(_token){
      setToken(_token)
      spotify.setAccessToken(_token); //giving the access token to spotify API
      spotify.getMe().then(user =>{
        console.log('👩🏼‍🦰', user);
      });
    }

    console.log("The token is : ", _token);
  }, []);
  return (
    <div className="App">
      {
       token ? <Player/> : <Login/>
      }
    </div>
  );
}

export default App;
