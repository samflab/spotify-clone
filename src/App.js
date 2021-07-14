import './App.css';
import React, { useEffect, useState } from "react";
import Login from "./components/Login";
import { getTokenFromResponse } from './monstercat';
function App() {
  const [token, setToken] = useState(null);

  useEffect(() =>{
    const hash = getTokenFromResponse();
    window.location.hash = "";
    const _token = hash.access_token;

    if(_token){
      setToken(_token)
    }

    console.log("The token is : ", _token);
  }, []);
  return (
    <div className="App">
      {
       token ? <h1>Loggen in</h1> : <Login/>
      }
    </div>
  );
}

export default App;
