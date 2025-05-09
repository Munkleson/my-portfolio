const projects = [
  {
    image: "images/projects/eventerate-pic.jpg",
    title: "Eventerate",
    description: "A web app that generates personalized event plans and activities while offering collaboration tools for teachers, event coordinators, and HR professionals",
    techStack: ["Ruby on Rails", "Stimulus", "JavaScript", "HTML", "SCSS", "Bootstrap", "Turbo", "PostgreSQL"],
    githubLink: "https://github.com/Cindy0202-mae/eventerate",
    demoLink: "https://www.eventerate.com",
  },
  {
    image: "images/projects/memory-card-game-pic.jpg",
    title: "Pokemon Memory Game",
    description: "A memory game with various game modes where you have to click on all the Pokemon without picking the same one twice",
    techStack: ["React.js", "HTML", "CSS"],
    githubLink: "https://github.com/Munkleson/TOP-memory-card",
    demoLink: "https://munkleson.github.io/TOP-memory-card/",
  },
  {
    image: "images/projects/game-swap-pic.jpg",
    title: "Game Swap",
    description: "An app where you can rent out, borrow, or swap physical copies of games near you",
    techStack: ["Ruby on Rails", "Stimulus", "JavaScript", "HTML", "SCSS", "Bootstrap", "PostgreSQL"],
    githubLink: "https://github.com/Munkleson/game-swap",
    demoLink: "https://game-swap-e551a983a6f1.herokuapp.com/",
  },
  {
    image: "images/projects/steam-game-manager-pic.jpg",
    title: "Steam Game Manager",
    description: "An app where you can manage your steam games, track stats, and make goals to maximise usage of your unplayed games",
    techStack: ["Ruby on Rails", "Stimulus", "JavaScript", "HTML", "CSS", "Bootstrap", "PostgreSQL"],
    githubLink: "https://github.com/Munkleson/steam-game-manager",
    // demoLink: "https://steam-game-manager-0d4317711fa3.herokuapp.com/", // Disabled due to not being live anymore
  },
];

function loadProjectTemplates() {
  const projectsSection = document.querySelector(".projects-container");
  const template = document.querySelector(".project-template");

  projects.forEach((project) => {
    let clone = template.content.cloneNode(true);

    loadBasicInfo(clone, project);
    loadTechStack(clone, project);
    loadGithub(clone, project);
    loadDemoLinks(clone, project);

    projectsSection.append(clone);
  });
}

loadProjectTemplates();

function loadBasicInfo(clone, project) {
  clone.querySelector(".project-picture").src = project.image;
  clone.querySelector(".project-title").innerText = project.title;
  clone.querySelector(".project-description").innerText = project.description;
}

function loadTechStack(clone, project) {
  const techStack = clone.querySelector(".project-tech-stack-container");
  const techStackTemplate = document.querySelector(".project-tech-stack-template");
  project.techStack.forEach((tech) => {
    let techStackClone = techStackTemplate.content.cloneNode(true)
    techStackClone.querySelector(".project-tech-stack-text").innerText = tech;
    techStack.append(techStackClone);
  })
}

function loadGithub(clone, project) {
  // Only renders the GitHub link if it is a public repo
  const githubLink = clone.querySelector(".project-github-link");
  if (project.githubLink) {
    githubLink.href = project.githubLink;
  } else {
    githubLink.remove();
  }
}

function loadDemoLinks(clone, project) {
  // Only renders the demo link if the site for it is live
  const demoLinks = clone.querySelectorAll(".project-demo-link");
  if (project.demoLink) {
    demoLinks.forEach((demoLink) => {
      demoLink.href = project.demoLink;
    })
  } else {
    demoLinks.forEach((demoLink) => {
      // Conditional so it doesn't remove the image if there is no demo, as the image is a demo link too
      if (demoLink.querySelector("img")) {
        // Stops it from being clicked if it is an image and has no demolink
        demoLink.classList.add("project-image-no-pointer");
      } else {
        demoLink.remove();
      }
    })
  }
}
