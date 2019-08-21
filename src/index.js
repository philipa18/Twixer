import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header.js";
import Streams from "./components/JointStreams";
import MixStreams from "./components/MixerStreams";
import TwitchStreams from "./components/TwitchStreams";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import "./styles.css";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Route exact path="/" component={Streams} />
        <Route exact path="/twitch" component={TwitchStreams} />
        <Route exact path="/mixer" component={MixStreams} />
      </div>
    </Router>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
