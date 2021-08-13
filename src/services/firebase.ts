import firebase from "firebase/app";
import "firebase/auth";

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  });
}

export default firebase;

// <!-- The core Firebase JS SDK is always required and must be listed first -->
// <script src="https://www.gstatic.com/firebasejs/8.8.1/firebase-app.js"></script>

// <!-- TODO: Add SDKs for Firebase products that you want to use
//      https://firebase.google.com/docs/web/setup#available-libraries -->

// <script>
//   // Your web app's Firebase configuration
//   var firebaseConfig = {
//     apiKey: "AIzaSyC2qsXjcDqltM49sDgdRdu8sSy5rN4K_R0",
//     authDomain: "gb-courses.firebaseapp.com",
//     projectId: "gb-courses",
//     storageBucket: "gb-courses.appspot.com",
//     messagingSenderId: "73163121561",
//     appId: "1:73163121561:web:c74b50aac0b07b761d6908"
//   };
//   // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);
// </script>
