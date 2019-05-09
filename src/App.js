import React from "react";

import ClearableInput from "./exercises/clearable-input";
import ScrollableTabs from "./exercises/scrollable-tabs";
import ScrollToOffscreen from "./exercises/scroll-to-offscreen";
import "./App.css";

function App() {
  return (
    <div className="app">
      <hr />
      <h2>Clearable Input</h2>
      <ClearableInput />
      <hr />
      <h2>Scrollable Tabs</h2>
      <ScrollableTabs />
      <hr />
      <h3>Scroll To Errors</h3>
      <ScrollToOffscreen />
    </div>
  );
}

export default App;
