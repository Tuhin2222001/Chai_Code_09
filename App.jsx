import React, { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
function App() {
  const [color, setColor] = useState("white");
  return (
    <div className="container" style={{ backgroundColor: color }}>
     <Header/>
      <div className="bottom">
        <button className="btn btn-danger" onClick={() => setColor("red")}>
          ClickMe
        </button>
        <button className="btn btn-primary" onClick={() => setColor("blue")} >
          ClickMe
        </button>
        <button className="btn btn-success" onClick={() => setColor("green")} >
          ClickMe
        </button>
        <button className="btn btn-info"  onClick={() => setColor("skyblue")}>
          ClickMe
        </button>
        <button className="btn btn-warning" onClick={() => setColor("yellow")}>
          ClickMe
        </button>
        <button className="btn btn-dark" onClick={() => setColor("black")}>
          ClickMe
        </button>
      </div>
    </div>
  );
}
//onClick={() => setColor("blue")}
export default App;
