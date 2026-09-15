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
    subjects: {
      "History": [
        { title: "History Lecture 1", video: "#" },
        { title: "History Lecture 2", video: "#" }
      ],
      "Geography": [
        { title: "Geography Lecture 1", video: "#" },
        { title: "Geography Lecture 2", video: "#" }
      ],
      "Polity": [
        { title: "Polity Lecture 1", video: "#" },
        { title: "Polity Lecture 2", video: "#" }
      ],
      "Economy": [
        { title: "Economy Lecture 1", video: "#" },
        { title: "Economy Lecture 2", video: "#" }
      ],
      "Science": [
        { title: "Science Lecture 1", video: "#" },
        { title: "Science Lecture 2", video: "#" }
      ],
      "Current Affairs": [
        { title: "Current Affairs Lecture 1", video: "#" }
      ]
    }
  },

  "SSC": {
    subjects: {
      "Maths": [
        { title: "Maths Lecture 1", video: "#" },
        { title: "Maths Lecture 2", video: "#" }
      ],
      "Reasoning": [
        { title: "Reasoning Lecture 1", video: "#" }
      ],
      "English": [
        { title: "English Lecture 1", video: "#" }
      ],
      "General Awareness": [
        { title: "GA Lecture 1", video: "#" }
      ]
    }
  },

  "JEE": {
    subjects: {
      "Physics": [
        { title: "Physics Lecture 1", video: "#" }
      ],
      "Chemistry": [
        { title: "Chemistry Lecture 1", video: "#" }
      ],
      "Mathematics": [
        { title: "Maths Lecture 1", video: "#" }
      ]
    }
  },

  "PW Running": {
    subjects: {
      "Subject 1": [
        { title: "Lecture 1", video: "#" }
      ],
      "Subject 2": [
        { title: "Lecture 1", video: "#" }
      ]
    }
  }
};

// ================= COURSE SYSTEM =================

// Open Course
window.openCourse = function(course) {
  document.getElementById("coursePanel").classList.remove("hidden");
  document.getElementById("selectedCourse").textContent = course;

  showSubjects(course);
};


// Show Subjects
function showSubjects(course) {
  const content = document.getElementById("content");

  if (!courseData[course]) {
    content.innerHTML = "<p>Content available soon.</p>";
    return;
  }

  const subjects = courseData[course].subjects;

  content.innerHTML = `
    <h3>Select Subject</h3>
    <div class="subject-list">
      ${Object.keys(subjects).map(subject => `
        <button class="subject-btn"
          onclick="openSubject('${subject}')">
          📚 ${subject}
        </button>
      `).join("")}
    </div>
  `;
}


// Open Subject
window.openSubject = function(subject) {

  const course = document.getElementById("selectedCourse").textContent;
  const items = courseData[course].subjects[subject];
  const content = document.getElementById("content");

  content.innerHTML = `
    <button class="back-subject" onclick="showSubjects('${course}')">
      ← All Subjects
    </button>

    <h3>📚 ${subject}</h3>

    ${items.map(item => `
      <div class="content-item">
        <h4>${item.title}</h4>

        <button class="play-btn"
          onclick="playVideo('${item.video}')">
          ▶️ Play Lecture
        </button>

      </div>
    `).join("")}
  `;
};


// Play Video Inside Website
window.playVideo = function(video) {
// ================= COURSE SYSTEM =================

// Open Course
window.openCourse = function(course) {
  document.getElementById("coursePanel").classList.remove("hidden");
  document.getElementById("selectedCourse").textContent = course;

  showSubjects(course);
};


// Show Subjects
function showSubjects(course) {
  const content = document.getElementById("content");

  const subjects = courseData[course].subjects;

  content.innerHTML = `
    <h3>Select Subject</h3>

    <div class="subject-list">
      ${Object.keys(subjects).map(subject => `
        <button class="subject-btn"
          onclick="openSubject('${subject}')">
          📚 ${subject}
        </button>
      `).join("")}
    </div>
  `;
}


// Open Subject
window.openSubject = function(subject) {

  const course =
    document.getElementById("selectedCourse").textContent;

  const items =
    courseData[course].subjects[subject];

  const content =
    document.getElementById("content");

  content.innerHTML = `
    <button class="back-subject"
      onclick="showSubjects('${course}')">
      ← All Subjects
    </button>

    <h3>📚 ${subject}</h3>

    ${items.map(item => `
      <div class="content-item">

        <h4>${item.title}</h4>

        <button class="play-btn"
          onclick="playVideo('${item.video}')">
          ▶️ Play Lecture
        </button>

      </div>
    `).join("")}
  `;
};


// Play Video
window.playVideo = function(video) {

  if (video === "#") {
    alert("Video link abhi add nahi kiya gaya hai.");
    return;
  }

  const content =
    document.getElementById("content");

  content.innerHTML = `
    <button class="back-subject"
      onclick="showSubjects(
        document.getElementById('selectedCourse').textContent
      )">
      ← Back
    </button>

    <video controls width="100%">
      <source src="${video}" type="video/mp4">
      Your browser does not support video playback.
    </video>
  `;
};


// Close Course
window.closeCourse = function() {
  document.getElementById("coursePanel")
    .classList.add("hidden");
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
