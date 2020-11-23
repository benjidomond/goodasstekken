import app from 'firebase/app';
import "firebase/auth";

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
    }
}

export default Firebase;