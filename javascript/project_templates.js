const projects = [
  {
    image: "images/projects/memory-card-game-pic.jpg",
    title: "Pokemon Memory Game",
    description: "A memory game with various game modes where you have to avoid clicking the same card twice in the same round",
    techStack: ["React.js", "HTML", "CSS"],
    githubLink: "https://github.com/Munkleson/TOP-memory-card",
    demoLink: "https://munkleson.github.io/TOP-memory-card/",
  },
  {
    image: "images/projects/game-swap-pic.jpg",
    title: "Game Swap",
    description: "An app where you can rent out, borrow, or swap physical copies of games near you",
    techStack: ["Ruby on Rails", "Stimulus Js", "JavaScript", "HTML", "SCSS", "Bootstrap", "PostgreSQL"],
    githubLink: "https://github.com/Munkleson/game-swap",
    demoLink: "https://game-swap-e551a983a6f1.herokuapp.com/",
  },
  {
    image: "images/projects/steam-game-manager-pic.jpg",
    title: "Steam Game Manager",
    description: "An app where you can manage your steam games, track stats, and make goals to maximise usage of your unplayed games",
    techStack: ["Ruby on Rails", "Stimulus.js", "JavaScript", "HTML", "Bootstrap", "CSS", "PostgreSQL"],
    githubLink: "https://github.com/Munkleson/steam-game-manager",
    demoLink: "https://steam-game-manager-0d4317711fa3.herokuapp.com/",
  },
];

function loadProjectTemplates() {
  const projectsSection = document.querySelector(".projects-container");
  const template = document.querySelector(".project-template");
  projects.forEach((project) => {
    let clone = template.content.cloneNode(true);

    clone.querySelectorAll(".project-github-link").forEach((githubLink) => {
      githubLink.href = project.githubLink;
    });
    clone.querySelector(".project-picture").src = project.image;
    clone.querySelector(".project-title").innerText = project.title;
    clone.querySelector(".project-description").innerText = project.description;

    const techStack = clone.querySelector(".project-tech-stack-container");
    const techStackTemplate = document.querySelector(".project-tech-stack-template");
    project.techStack.forEach((tech) => {
      let techStackClone = techStackTemplate.content.cloneNode(true)
      techStackClone.querySelector(".project-tech-stack-text").innerText = tech;
      techStack.append(techStackClone);
    })

    clone.querySelector(".project-demo-link").href = project.demoLink;

    projectsSection.append(clone);
  });
}

loadProjectTemplates();
