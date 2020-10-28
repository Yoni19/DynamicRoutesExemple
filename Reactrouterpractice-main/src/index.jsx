import React from "react";
import ReactDOM from "react-dom";
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Link
  } from "react-router-dom";
  
  import About from "./pages/About";
  import Documentation from "./pages/Documentation";
  import Home from "./pages/Home";
  import Navbar from './components/Navbar';
  import Book from './pages/Book';

  function App() {
  return (
    <Router>
      <div>
        <Navbar />

        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/documentation">
            <Documentation />
          </Route>
          <Route path="/book/:bookslug">
            <Book />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}


ReactDOM.render(<App />, document.querySelector("#root"));
