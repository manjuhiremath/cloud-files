import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAozyN2lUUI5eM1ADfodfx1dkWucJhseSo",
  authDomain: "cloud-file-management-system.firebaseapp.com",
  projectId: "cloud-file-management-system",
  storageBucket: "cloud-file-management-system.appspot.com",
  messagingSenderId: "379818115279",
  appId: "1:379818115279:web:f1d0e214a8ecc2d07ff7ba",
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;
