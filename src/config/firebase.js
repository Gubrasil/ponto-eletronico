import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyB4sFDMf25Owg14AMg4LAgiHMsCSIUFedc",
    authDomain: "ponto-eletronico-fd563.firebaseapp.com",  
    projectId: "ponto-eletronico-fd563",  
    storageBucket: "ponto-eletronico-fd563.appspot.com",  
    messagingSenderId: "607196520153",  
    appId: "1:607196520153:web:ea1a08053b4b3b8f88a8c8",  
    measurementId: "G-BX0Z7Q90DL"  
  };

   // Initialize Firebase
 export default firebase.initializeApp(firebaseConfig);