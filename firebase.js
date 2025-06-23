// firebase.js
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBOkwlDLTtnsNBmPtTDScUllqL1b6hug9c",
  authDomain: "eduverse-academy-4b96b.firebaseapp.com",
  projectId: "eduverse-academy-4b96b",
  storageBucket: "eduverse-academy-4b96b.firebasestorage.app",
  messagingSenderId: "19810288427",
  appId: "1:19810288427:web:b837708c33dcc3e8dbbb6e",
  measurementId: "G-HY59ENKB7P"
};

firebase.initializeApp(firebaseConfig);
window.auth = firebase.auth();
