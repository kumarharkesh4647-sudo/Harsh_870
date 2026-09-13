const data = {
  "UPSC": {
    lectures: [["UPSC Demo Lecture", "https://drive.google.com/"]],
    notes: [["UPSC Demo Notes", "https://drive.google.com/"]]
  },
  "SSC": {
    lectures: [["SSC Demo Lecture", "https://drive.google.com/"]],
    notes: [["SSC Demo Notes", "https://drive.google.com/"]]
  },
  "JEE": {
    lectures: [["JEE Demo Lecture", "https://drive.google.com/"]],
    notes: [["JEE Demo Notes", "https://drive.google.com/"]]
  },
  "PW Running": {
    lectures: [["Demo Lecture", "https://drive.google.com/"]],
    notes: [["Demo Notes", "https://drive.google.com/"]]
  }
};

let current = "UPSC";

function openCourse(name) {
  current = name;
  document.querySelector(".courses").style.display = "none";
  document.getElementById("coursePanel").classList.remove("hidden");
  document.getElementById("selectedCourse").textContent = name;
  render("lectures");
}

function closeCourse() {
  document.querySelector(".courses").style.display = "block";
  document.getElementById("coursePanel").classList.add("hidden");
}

function showTab(tab, btn) {
  document.querySelectorAll(".tabs button").forEach(x => x.classList.remove("active"));
  btn.classList.add("active");
  render(tab);
}

function render(tab) {
  const box = document.getElementById("content");
  box.innerHTML = "";

  data[current][tab].forEach(([title, url]) => {
    const item = document.createElement("div");
    item.className = "item";
    item.innerHTML = `
      <b>${tab === "lectures" ? "🎥" : "📄"} ${title}</b>
      <a href="${url}" target="_blank">
        Open ${tab === "lectures" ? "Lecture" : "Notes"}
      </a>`;
    box.appendChild(item);
  });
}

function toggleLang() {
  const h = document.getElementById("heroTitle");
  const t = document.getElementById("heroText");

  if (h.textContent === "Learn. Practice. Grow.") {
    h.textContent = "सीखो। अभ्यास करो। आगे बढ़ो।";
    t.textContent = "लेक्चर, नोट्स और उपयोगी स्टडी मटेरियल — एक ही जगह।";
  } else {
    h.textContent = "Learn. Practice. Grow.";
    t.textContent = "Lectures, notes and useful study material — all in one place.";
  }
}
