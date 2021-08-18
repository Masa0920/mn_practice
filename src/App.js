import React from 'react';
import './App.css';
import Navbar from "./pages/Navbar"
import Profile from "./pages/Profile"
import Study from "./pages/Study"
import Works from "./pages/Works"
import Hobby from "./pages/Hobby"
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import SimpleSlider from './pages/SimpleSlider';
import { AnimatePresence } from "framer-motion";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <SimpleSlider/>
        <Navbar/>

        <AnimatePresence>
          <Switch>
            <Route exact path="/" component={Profile} />
            <Route exact path="/study" component={Study} />
            <Route exact path="/works" component={Works} />
            <Route exact path="/hobby" component={Hobby} />
          </Switch>
        </AnimatePresence>

      </BrowserRouter>
    </div>
  );
}

export default App;
