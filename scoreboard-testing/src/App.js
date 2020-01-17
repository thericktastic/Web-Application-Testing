import React, { useState } from "react";
import Dashboard from "./components/Dashboard";
import Display from "./components/Display";
import "./App.css";

function App() {
  const [strikes, setStrikes] = useState(0);
  const [balls, setBalls] = useState(0);

  console.log("This many strikes: ", strikes)
  console.log("This many balls: ", balls)


  return (
    <div className="App">
      <header className="App-header">
        <Display strikes={strikes} balls={balls}/>
        <Dashboard 
        setStrikes={setStrikes} 
        strikes={strikes}
        setBalls={setBalls} 
        balls={balls}
        setFouls={setStrikes} 
        fouls={strikes}
        />
      </header>
    </div>
  );
}

export default App;
