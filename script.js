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
// ================= COURSE SYSTEM =================

const courseData = {
  "UPSC": {
    lectures: [
      "UPSC": {
  lectures: [
    { title: "UPSC Introduction", link: "https://youtu.be/aN2xoBFeUmg?si=gF8y9AvkoO-wXooT" },
    { title: "General Studies", link: "#" }
  ],
  notes: [
    { title: "UPSC Basic Notes", link: "#" },
    { title: "General Studies Notes", link: "#" }
  ]
},
    
      { title: "UPSC Basic Notes", link: "#" },
      { title: "General Studies Notes", link: "#" }
    ]
  },

  "SSC": {
    lectures: [
      { title: "SSC Introduction", link: "#" },
      { title: "SSC Maths", link: "#" }
    ],
    notes: [
      { title: "SSC Maths Notes", link: "#" },
      { title: "SSC Reasoning Notes", link: "#" }
    ]
  },

  "JEE": {
    lectures: [
      { title: "JEE Physics", link: "#" },
      { title: "JEE Chemistry", link: "#" }
    ],
    notes: [
      { title: "JEE Physics Notes", link: "#" },
      { title: "JEE Chemistry Notes", link: "#" }
    ]
  },

  "PW Running": {
    lectures: [
      { title: "Running Lecture 1", link: "#" },
      { title: "Running Lecture 2", link: "#" }
    ],
    notes: [
      { title: "Running Notes 1", link: "#" },
      { title: "Running Notes 2", link: "#" }
    ]
  }
};


// Open Course
window.openCourse = function(course) {
  document.getElementById("coursePanel").classList.remove("hidden");
  document.getElementById("selectedCourse").textContent = course;

  showTab("lectures", document.querySelector(".tabs button"));
};


// Close Course
window.closeCourse = function() {
  document.getElementById("coursePanel").classList.add("hidden");
};


// Show Lectures / Notes
window.showTab = function(type, button) {

  document.querySelectorAll(".tabs button").forEach(btn => {
    btn.classList.remove("active");
  });

  if (button) {
    button.classList.add("active");
  }

  const course = document.getElementById("selectedCourse").textContent;
  const content = document.getElementById("content");

  if (!courseData[course]) {
    content.innerHTML = "<p>Content available soon.</p>";
    return;
  }

  const items = courseData[course][type];

  content.innerHTML = items.map(item => `
    <div class="content-item">
      <h3>${item.title}</h3>
      <a href="${item.link}" target="_blank">Open →</a>
    </div>
  `).join("");
};


// Language
window.toggleLang = function() {
  const title = document.getElementById("heroTitle");
  const text = document.getElementById("heroText");
  const heading = document.getElementById("courseHeading");

  if (title.textContent === "Learn. Practice. Grow.") {
    title.textContent = "सीखो। अभ्यास करो। आगे बढ़ो।";
    text.textContent = "लेक्चर, नोट्स और उपयोगी स्टडी मटेरियल — सब एक जगह।";
    heading.textContent = "कोर्स";
  } else {
    title.textContent = "Learn. Practice. Grow.";
    text.textContent = "Lectures, notes and useful study material — all in one place.";
    heading.textContent = "Courses";
  }
};
