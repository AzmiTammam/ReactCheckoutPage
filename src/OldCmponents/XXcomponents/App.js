import React from "react";
import Header from "./Header";
import Team from "./Team";
import Home from "./Home";
import Counter from "./Counter";


function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <Home/>
        <Team />
        <Counter/>
      </div>
    </div>
  );
}

export default App;
