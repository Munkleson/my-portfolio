const matchTokyoLink = `<a href="https://site.matchtokyo.com/home" target="_blank">Match Tokyo</a>`;

const featuredProject = {
  images: [
    "images/projects/match-tokyo-home.jpg",
    "images/projects/match-tokyo-tournaments.jpg"
  ],
  title: "Match Tokyo Events",
  description: `An events-based social platform for ${matchTokyoLink} where you can sign up your team for sports tournaments and join trips`,
  techStack: ["Ruby on Rails", "Stimulus", "JavaScript", "HTML", "SCSS", "Bootstrap", "Turbo", "PostgreSQL", "OAuth 2.0", "Cloudinary", "Heroku"],
  demoLink: "https://events.matchtokyo.com/",
  features: [
    "Team management tools",
    "Chat functionality",
    "OAuth 2.0 login integration with LINE and Google",
    "Extensive admin control"
  ],
}

function loadFeaturedProject() {
  const featuredProjectContainer = document.querySelector(".featured-project-container");
  const template = document.querySelector(".featured-project-template");

  let clone = template.content.cloneNode(true);
  loadFeaturedLinks(clone);
  loadFeaturedImages(clone);
  loadFeaturedInfo(clone);
  loadFeaturedFeatures(clone);
  loadFeaturedTechStack(clone);

  featuredProjectContainer.append(clone);
}

loadFeaturedProject();

function loadFeaturedLinks(clone) {
  const projectLinks = clone.querySelectorAll(".featured-project-link");
  projectLinks.forEach(projectLink => projectLink.href = featuredProject.demoLink);

  // Only shows the github link if the repo is not private
  const githubLink = clone.querySelector(".featured-project-github-link");
  if (featuredProject.githubLink) {
    githubLink.href = featuredProject.githubLink;
  } else {
    githubLink.remove();
  }
}

function loadFeaturedImages(clone) {
  const imageContainer = clone.querySelector(".featured-project-image-container");
  const images = imageContainer.querySelectorAll("img");
  images.forEach((image, index) => {
    image.src = featuredProject.images[index];
  });
}

function loadFeaturedInfo(clone) {
  const title = clone.querySelector(".featured-project-title");
  title.innerText = featuredProject.title;
  const description = clone.querySelector(".featured-project-description");
  description.innerHTML = featuredProject.description;
};

function loadFeaturedFeatures(clone) {
  const featuresContainer = clone.querySelector(".featured-project-features");
  featuredProject.features.forEach((feature) => {
    const featureElement = document.createElement("li");
    featureElement.innerText = feature;
    featuresContainer.append(featureElement);
  });
}

function loadFeaturedTechStack(clone) {
  const techStackContainer = clone.querySelector(".featured-project-tech-stack-container");
  const techStackTemplate = document.querySelector(".project-tech-stack-template");
  featuredProject.techStack.forEach((tech) => {
    let techStackClone = techStackTemplate.content.cloneNode(true)
    techStackClone.querySelector(".project-tech-stack-text").innerText = tech;
    techStackContainer.append(techStackClone);
  })
}
