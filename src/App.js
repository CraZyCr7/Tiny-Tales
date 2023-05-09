import React from "react";
import SubmitButton from "./SubmitButton";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Word Count Histogram</h1>
      <p>Fetching Histogram for the given URL in mail address:</p>
      <SubmitButton />
    </div>
  );
}

export default App;
