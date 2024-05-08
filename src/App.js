import React from "react";
import Testimonals from "./components/Testimonals";
import peopleArray from "./data";

function App() {
  return (
    <div className="App">
      <div className="heading">
        <h1>OUR TESTIMONALS</h1>
        <div className="underline"></div>
        <Testimonals review={peopleArray}></Testimonals>
        </div>
    </div>
  );
}

export default App;
