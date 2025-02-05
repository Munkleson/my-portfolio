const sections = [
  {
    name: "Profile",
    link: "#profile-section",
    class: "navigation-profile",
  },
  {
    name: "Skills",
    link: "#tech-stack-section",
    class: "navigation-skills",
  },
  {
    name: "Projects",
    link: "#projects-section",
    class: "navigation-projects",
  },
  {
    name: "History",
    link: "#history-section",
    class: "navigation-history",
  },
];

const navigationSection = document.querySelector(".navigation-section");
const navigationTemplate = document.querySelector(".navigation-template");
const activeBarTemplate = document.querySelector(".active-bar-template");

sections.forEach((item, index) => {
  let clone = navigationTemplate.content.cloneNode(true);
  const navigationElement = clone.querySelector(".navigation-text");
  navigationElement.innerText = item.name;
  navigationElement.href = item.link;
  navigationElement.classList.add(item.class)

  if (index === 0) {
    navigationElement.classList.add("active-section");
    let clone = activeBarTemplate.content.cloneNode(true);
    navigationElement.append(clone);
  }

  // navigationElement.addEventListener("click", (event) => setActiveSection(event.target));
  navigationSection.append(navigationElement);
});

function setActiveSection(target) {
  setActiveClassList(target);
  setActiveBar(target);
}

function setActiveClassList(target) {
  document.querySelector(".active-section").classList.remove("active-section");
  target.classList.add("active-section");
}

function setActiveBar(target) {
  document.querySelector(".active-bar").remove();
  let clone = activeBarTemplate.content.cloneNode(true);
  target.append(clone);
}

const profileSection = document.querySelector("#profile-section");
const skillsSection = document.querySelector("#tech-stack-section");
const projectsSection = document.querySelector("#projects-section");
const historySection = document.querySelector("#history-section");

const navigationProfile = document.querySelector(".navigation-profile");
const navigationSkills = document.querySelector(".navigation-skills");
const navigationProjects = document.querySelector(".navigation-projects");
const navigationHistory = document.querySelector(".navigation-history");

function checkScrolledPosition() {
  const profile = profileSection.getBoundingClientRect();
  const skills = skillsSection.getBoundingClientRect();
  const projects = projectsSection.getBoundingClientRect();
  const history = historySection.getBoundingClientRect();

  // Sets how many px above a section do I want to consider having "moved" to that section
  let scrollPositionToCheck = 140;

  if (history.top <= scrollPositionToCheck) {
    setActiveSection(navigationHistory);
  } else if (projects.top <= scrollPositionToCheck) {
    setActiveSection(navigationProjects);
  } else if (skills.top <= scrollPositionToCheck) {
    setActiveSection(navigationSkills);
  } else if (profile.top <= scrollPositionToCheck) {
    setActiveSection(navigationProfile);
  }
}

window.addEventListener("scroll", checkScrolledPosition);
