import React from "react";
import Header from "./Header";
import Text from "./Text";
import Social from "./Social";
import Employees from "./Employees";

function App() {
  return (
    <div className="container">
    <Header />
    <Text />
    <Social/>  
    <div className="row">
    <div className="col-4">
    <Employees/>
    </div>
    </div>
    
    </div>
  );
}

export default App;
