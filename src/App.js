import React, { Component } from "react";
import "./App.css";
import {hot} from "react-hot-loader";
import { BrowserRouter as Router } from "react-router-dom";
import Nav from './Nav.js';

class App extends Component {
    render(){
        return (
            <div className="App">
                <Router>
                    <Nav />
                </Router>
            </div>
        )
    }
}

export default hot(module)(App);