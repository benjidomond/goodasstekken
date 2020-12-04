import React from "react";
import PasswordChangeForm from "./passwordChange.js";
import { PasswordForgetForm } from "./passwordForgetPage.js";
import { AuthUserContext } from "../session";

const AccountPage = () => (
    <div>
        <AuthUserContext.Consumer>
            {authUser => authUser ? <AccountPageWithAuth /> : <AccountPageNoAuth />}
        </AuthUserContext.Consumer>
    </div>
)

const AccountPageWithAuth = () => (
    <div>
        <h1>Account Page</h1>
        <PasswordForgetForm />
        <PasswordChangeForm />
    </div>
);

const AccountPageNoAuth = () => (
    <div>
        <p>You're not currently signed in. Please sign in here: </p>
    </div>
)

export default AccountPage;