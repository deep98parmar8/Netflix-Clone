import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDprcc66qBuEMKaJGU0ZsS9zhD35L-UK2E",
    authDomain: "netflix-replication.firebaseapp.com",
    projectId: "netflix-replication",
    storageBucket: "netflix-replication.appspot.com",
    messagingSenderId: "509552355278",
    appId: "1:509552355278:web:4461132f0601f8bdf02d9f"
  };
  
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  const auth = firebase.auth();


  export { auth }
  export default db;