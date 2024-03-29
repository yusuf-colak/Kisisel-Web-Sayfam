import React, { useContext, useEffect } from "react";
import Home from "./layout/Home";
import { DarkLightMod } from "./contexts/DarkLightContext";
import "./App.css";
function App() {
  const { theme } = useContext(DarkLightMod);

  useEffect(() => {
    document.body.className = theme ? "light-mode" : "dark-mode";
  }, [theme]);
  

 
  return (
    <div id="AppMain">
      <Home />
    </div>
  );
}

export default App;
