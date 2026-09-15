import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut
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

// Signup
window.signup = async function () {
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;
  const message = document.getElementById("authMessage");

  if (!email || !password) {
    message.textContent = "Email aur password enter karo.";
    return;
  }

  try {
    await createUserWithEmailAndPassword(auth, email, password);
    message.textContent = "Account successfully created ✅";
  } catch (error) {
    message.textContent = error.message;
  }
};

// Login
window.login = async function () {
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;
  const message = document.getElementById("authMessage");

  if (!email || !password) {
    message.textContent = "Email aur password enter karo.";
    return;
  }

  try {
    await signInWithEmailAndPassword(auth, email, password);
    message.textContent = "Login successful ✅";
  } catch (error) {
    message.textContent = error.message;
  }
};
// Login status + Logout
onAuthStateChanged(auth, (user) => {
  const status = document.getElementById("userStatus");

  if (user) {
    status.textContent = "Logged in: " + user.email + " ✅";
  } else {
    status.textContent = "Not logged in";
  }
});

window.logout = async function () {
  try {
    await signOut(auth);
    document.getElementById("authMessage").textContent =
      "Logout successful ✅";
  } catch (error) {
    document.getElementById("authMessage").textContent =
      error.message;
  }
};
