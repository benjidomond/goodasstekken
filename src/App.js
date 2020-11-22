import React, { Component } from "react";
import "./App.css";
import {hot} from "react-hot-loader";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from './Nav.js';
import AccountPage from './views/accountPage.js';
import AdminPage from './views/adminPage.js';
import HomePage from './views/homePage.js';
import LandingPage from './views/landingPage.js';
import PasswordForgetPage from './views/passwordForgetPage.js';
import SignInPage from './views/signInPage.js';
import SignUpPage from './views/signUpPage.js';
import * as ROUTES from './constants/routes.js';

class App extends Component {
    render(){
        return (
            <div className="App">
                <Router>
                    <Nav />
                    <Route exact path={ROUTES.LANDING} component={LandingPage} />
                    <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
                    <Route path={ROUTES.SIGN_IN} component={SignInPage} />
                    <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} />
                    <Route path={ROUTES.HOME} component={HomePage} />
                    <Route path={ROUTES.ACCOUNT} component={AccountPage} />
                    <Route path={ROUTES.ADMIN} component={AdminPage} />
                </Router>
            </div>
        )
    }
}

export default hot(module)(App);