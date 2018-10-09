import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/firestore';
var config = {
    apiKey: "AIzaSyAzz67qtVv-irV7YANczDLMz_bbksb591w",
    authDomain: "management-transportation.firebaseapp.com",
    databaseURL: "https://management-transportation.firebaseio.com",
    projectId: "management-transportation",
    storageBucket: "management-transportation.appspot.com",
    messagingSenderId: "488411743468"
};
const firebaseApp = firebase.initializeApp(config);

var db = firebaseApp.firestore();

// Disable deprecated features
db.settings({ timestampsInSnapshots: true });



export default firebaseApp;