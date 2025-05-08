const featuredProject = {
  images: [
    "images/projects/match-tokyo-home.jpg",
    "images/projects/match-tokyo-tournaments.jpg"
  ],
  title: "Match Tokyo Events",
  description: "A Meetup-style app where you can sign up your team for sports tournaments and join trips",
  techStack: ["Ruby on Rails", "Stimulus", "JavaScript", "HTML", "SCSS", "Bootstrap", "Turbo", "PostgreSQL"],
  demoLink: "https://events.matchtokyo.com/",
}

function loadFeaturedProject() {
  const featuredProjectContainer = document.querySelector(".featured-project-container");
  const template = document.querySelector(".featured-project-template");

  let clone = template.content.cloneNode(true);
  loadFeaturedImages(clone);

  featuredProjectContainer.append(clone);
}

loadFeaturedProject();

function loadFeaturedImages(clone) {
  const imageContainer = clone.querySelector(".featured-project-image-container");
  const images = imageContainer.querySelectorAll("img");
  images.forEach((image, index) => {
    image.src = featuredProject.images[index];
  });
}
