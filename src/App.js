import React from "react";
import "./App.css";
import Home from "./Components/AllComponents/Home";
import ThemeContext from "./Components/ContextWrapper/ThemeContext";

function App() {
  return (
    <div>
      <ThemeContext>
        <Home></Home>
      </ThemeContext>
    </div>
  );
}

export default App;
