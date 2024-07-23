import React from "react";

import Navbar from "./Component/Layout/Navbar";
import "./App.css"

class App extends React.Component {
  render() {
    // const loading = true;
    // if (loading) {
    //   return "Loading";
    // }
    return (
      <div>
        
        <Navbar title="GitHub Finder" icon="fa-brands fa-github" />
      </div>
    );
  }
}

export default App;
