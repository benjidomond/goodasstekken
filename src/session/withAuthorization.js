import React from "react";
import { withRouter } from "react-router-dom";
import { withFirebase } from "../firebase";
import * as ROUTES from '../constants/routes.js';
import AuthUserContext from './context.js';

const withAuthorization = condition => Component => {
    class WithAuthorization extends React.Component {
        componentDidMount(){
            this.listener = this.props.firebase.auth.onAuthStateChanged(
                authUser => {
                    if (!condition(authUser)){
                        this.props.history.push(ROUTES.SIGN_IN);
                    }
                },
            );
        }
        componentWillUnmount(){
            this.listener();
        }
        render(){
            return (
                <AuthUserContext.Consumer>
                    {authUser =>
                        condition(authUser) ? <Component {...this.props} /> : null
                    }
                </AuthUserContext.Consumer>
            );
        }
    }
    const baseAuth = withFirebase(WithAuthorization);
    return withRouter(baseAuth);
}

export default withAuthorization;