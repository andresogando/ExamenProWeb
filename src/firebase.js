import * as firebase from "firebase";
import { auth } from "firebase"





var firebaseConfig = {
    apiKey: "AIzaSyDCBQiz7PvDg7DNscMMZQxp3vJ0Z2TP2zg",
    authDomain: "examen-2e178.firebaseapp.com",
    databaseURL: "https://examen-2e178.firebaseio.com",
    projectId: "examen-2e178",
    storageBucket: "examen-2e178.appspot.com",
    messagingSenderId: "50494751368",
    appId: "1:50494751368:web:d85041ef6f89151566953d",
    measurementId: "G-V0ZJYRDVSC"
  };
  
// Initialize Firebase
var fireDb = firebase.initializeApp(firebaseConfig);
firebase.analytics();





export default fireDb;



