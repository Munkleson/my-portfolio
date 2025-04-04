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
  const aspectRatio = window.innerWidth / window.innerHeight; // Checks if mobile or not
  const extraBuffer = aspectRatio <= 1 ? -50 : 0;
  let scrollPositionToCheck = 140 + extraBuffer;
  const historyExtraBuffer = aspectRatio <= 1 ? 0 : 400;

  // History top scroll position amount like this is only due to there being nothing below this. Should there be more elements/spacing placed below this will have to be adjusted
  if (history.top <= scrollPositionToCheck + historyExtraBuffer) {
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

navigationProfile.addEventListener("click", (event) => {
  event.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
})

const sectionEventElements = [
  {
    nav: navigationSkills,
    div: skillsSection
  },
  {
    nav: navigationProjects,
    div: projectsSection
  },
  {
    nav: navigationHistory,
    div: historySection
  }
]

sectionEventElements.forEach((item) => {
  item.nav.addEventListener("click", (event) => {
    if (window.innerWidth / window.innerHeight <= 1) {
      event.preventDefault();
      // This offset makes it so the window scrolls to the correct position
      const offset = 70;
      const targetPosition = item.div.getBoundingClientRect().top + window.scrollY - offset;
      console.log(targetPosition);

      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  })
})
