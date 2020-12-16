import app from 'firebase/app';
import "firebase/auth";
import "firebase/database";
import "firebase/firestore";

const config = {
    apiKey: process.env.FIREBASE_APP_API_KEY,
    authDomain: process.env.FIREBASE_APP_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_APP_DATABASE_URL,
    projectID: process.env.FIREBASE_APP_PROJECT_ID,
    storageBucket: process.env.FIREBASE_APP_STORAGE_BUCKET,
    messagingSenderID: process.env.FIREBASE_APP_MESSAGING_SENDER_ID,
    appID: process.env.FIREBASE_APP_APPID,
    measurementID: process.env.FIREBASE_APP_MEASUREMENT_ID
};

class Firebase {
    constructor(){
        app.initializeApp(config);
        this.auth = app.auth();
        this.db = app.database();
        //this.fs = app.firestore();
        // "ProjectID not provided in firebase.initializeapp"
    }
    // Authentication API
    doCreateUserWithEmailAndPassword = (email, password) =>
        this.auth.createUserWithEmailAndPassword(email, password);
    doSignInWithEmailAndPassword = (email, password) =>
        this.auth.signInWithEmailAndPassword(email, password);
    doSignOut = () => this.auth.signOut();
    doPasswordReset = (email) => this.auth.sendPasswordResetEmail(email);
    doPasswordUpdate = (password) => this.auth.currentUser.updatePassword(password);
    // User API
    user = (uid) => this.db.ref(`users/${uid}`);
    users = () => this.db.ref('users');
    //Firestore Users API
    fsUser = () => this.db.collection('users');
}

export default Firebase;