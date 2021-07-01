import React from "react";
import "./App.css";
import Chart from "./components/Chart";

function App() {
  return (
    <div className="App">
      <div className="Chart">
        <h3>Number of Enquiries in June</h3>
        <br></br>
        <Chart />
      </div>
    </div>
  );
}

export default App;
