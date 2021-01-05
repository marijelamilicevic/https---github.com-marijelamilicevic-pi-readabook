import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

var firebaseConfig = {
    apiKey: "AIzaSyBXQtHuVs42vqhzYAsPeZvG-MbdtTPnox8",
    authDomain: "pi-readabook.firebaseapp.com",
    projectId: "pi-readabook",
    storageBucket: "pi-readabook.appspot.com",
    messagingSenderId: "498256409670",
    appId: "1:498256409670:web:3d0d7d676ca2d931584647"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export {
    firebase,
}