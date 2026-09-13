import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDXwY4sImZidjYzCqRoNkzI6vKmVFedEqc",
  authDomain: "study-material-hub-bf486.firebaseapp.com",
  projectId: "study-material-hub-bf486",
  storageBucket: "study-material-hub-bf486.firebasestorage.app",
  messagingSenderId: "726302304253",
  appId: "1:726302304253:web:4cef0b17c453a342661b94"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

window.signup = async function(email, password) {
  try {
    await createUserWithEmailAndPassword(auth, email, password);
    alert("Account successfully created ✅");
  } catch (error) {
    alert(error.message);
  }
};

window.login = async function(email, password) {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    alert("Login successful ✅");
  } catch (error) {
    alert(error.message);
  }
};
