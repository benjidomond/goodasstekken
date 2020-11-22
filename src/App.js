import React, { Component } from "react";
import "./App.css";
import {hot} from "react-hot-loader";
import { BrowserRouter as Router } from "react-router-dom";
import Nav from './Nav.js';
import AccountPage from './views/accountPage.js';
import AdminPage from './views/adminPage.js';
import HomePage from './views/homePage.js';
import LandingPage from './views/landingPage.js';
import PasswordForgetPage from './views/passwordForgetPage.js';
import SignInPage from './views/signInPage.js';
import SignUpPage from './views/signUpPage.js';

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