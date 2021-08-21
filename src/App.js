import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import ThemeContextProvider from './contexts/ThemeContext';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from './components/Home';
import Education from "./components/Education";
import Projects from './components/Projects';
import Contact from './components/Contact';
function App() {
  return (
    <div className="App">
      <Router>
      <ThemeContextProvider>
        <Navbar />
        <Switch>
          <Route path = "/" exact component = {Home} />
          <Route path = "/education" exact component = {Education} />
          <Route path = "/projects" exact component = {Projects} />
          <Route path = "/contact" exact component = {Contact} />
        </Switch>
      </ThemeContextProvider>
      </Router>
    </div>
  );
}

export default App;
