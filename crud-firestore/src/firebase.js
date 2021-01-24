import firebase from 'firebase/app'
import 'firebase/firestore'

    const firebaseConfig = {
    apiKey: "AIzaSyDA8G6sv9XPYz_RpONOmJWvSAMqQipU6Yw",
    authDomain: "crud-firestore-beadd.firebaseapp.com",
    projectId: "crud-firestore-beadd",
    storageBucket: "crud-firestore-beadd.appspot.com",
    messagingSenderId: "554535493090",
    appId: "1:554535493090:web:fb1bab01f58a6842e8edbb"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

     

    export {firebase}
