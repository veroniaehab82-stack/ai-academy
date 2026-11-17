"use strict";

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

const searchBtn = document.getElementById("searchBtn");
const searchPanel = document.getElementById("searchPanel");
const closeSearch = document.getElementById("closeSearch");
const siteSearch = document.getElementById("siteSearch");
const searchHint = document.getElementById("searchHint");

const watchBtn = document.getElementById("watchBtn");
const videoDialog = document.getElementById("videoDialog");
const closeVideo = document.getElementById("closeVideo");

// Current year
document.getElementById("year").textContent =
  new Date().getFullYear();

// Mobile navigation
menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");

  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute(
    "aria-label",
    isOpen ? "Close navigation" : "Open navigation"
  );
});

// Navigation links
navLinks.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.querySelectorAll("a").forEach(item => {
      item.classList.remove("active");
    });

    link.classList.add("active");
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

// Search panel
searchBtn.addEventListener("click", () => {
  searchPanel.hidden = !searchPanel.hidden;

  if (!searchPanel.hidden) {
    siteSearch.focus();
  }
});

closeSearch.addEventListener("click", () => {
  searchPanel.hidden = true;
  searchBtn.focus();
});

// Simple search within this landing page
function searchPage() {
  const query = siteSearch.value.trim().toLowerCase();

  if (!query) {
    searchHint.textContent =
      "Enter a word to search courses and learning resources.";
    return;
  }

  const searchableSections = [
    ...document.querySelectorAll(
      "#home, #courses, #about, #features, .course-card"
    )
  ];

  const match = searchableSections.find(section =>
    section.textContent.toLowerCase().includes(query)
  );

  if (match) {
    searchHint.textContent = "Result found. Opening the relevant section...";
    searchPanel.hidden = true;
    match.scrollIntoView({ behavior: "smooth", block: "center" });
  } else {
    searchHint.textContent =
      "No matching content found on this page. Try AI, courses, projects, or learning.";
  }
}

siteSearch.addEventListener("keydown", event => {
  if (event.key === "Enter") {
    searchPage();
  }
});

// Welcome / video preview dialog
watchBtn.addEventListener("click", () => {
  if (typeof videoDialog.showModal === "function") {
    videoDialog.showModal();
  }
});

closeVideo.addEventListener("click", () => {
  videoDialog.close();
});

// Close the dialog when clicking its backdrop
videoDialog.addEventListener("click", event => {
  if (event.target === videoDialog) {
    videoDialog.close();
  }
});

// Escape closes open panels and menus
document.addEventListener("keydown", event => {
  if (event.key === "Escape") {
    searchPanel.hidden = true;
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  }
});