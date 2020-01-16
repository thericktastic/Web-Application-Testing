import React from "react";
import { Display } from "./components/Display";
import { Dashboard } from "./components/Dashboard";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Display />
        <Dashboard />
      </header>
    </div>
  );
}

export default App;
