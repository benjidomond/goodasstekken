import React from "react";
import PasswordChangeForm from "./passwordChange.js";
import { PasswordForgetForm } from "./passwordForgetPage.js";
import { withAuthorization } from "../session";

const AccountPage = () => (
    <div>
        <h1>Account Page</h1>
        <PasswordForgetForm />
        <PasswordChangeForm />
    </div>
);

const condition = (authUser) => !!authUser;

export default withAuthorization(condition)(AccountPage);