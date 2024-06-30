  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
  import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCmh36S80MOTsGuYjlFSe9LBKOKfzS5gcw",
    authDomain: "spck-7dd4c.firebaseapp.com",
    projectId: "spck-7dd4c",
    storageBucket: "spck-7dd4c.appspot.com",
    messagingSenderId: "393223354018",
    appId: "1:393223354018:web:8dec805c23ff94a454c9fb",
    measurementId: "G-93MQVE8VMY"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  export const auth=getAuth(app)