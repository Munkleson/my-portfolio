const frontEndTech = [
  {
    name: "JavaScript",
    image: "images/skills/javascript.png",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    name: "HTML",
    image: "images/skills/html.png",
    link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  {
    name: "CSS",
    image: "images/skills/css.png",
    link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  {
    name: "React.js",
    image: "images/skills/react.png",
    link: "https://react.dev/",
  },
  {
    name: "Stimulus Js",
    image: "images/skills/stimulus.png",
    link: "https://stimulus.hotwired.dev/",
  },
  {
    name: "Bootstrap",
    image: "images/skills/bootstrap.png",
    link: "https://getbootstrap.com/",
  },
  {
    name: "Sass",
    image: "images/skills/sass.png",
    link: "https://sass-lang.com/",
  },
];

const backEndTech = [
  {
    name: "Ruby on Rails",
    image: "images/skills/rails.png",
    link: "https://rubyonrails.org/",
  },
  {
    name: "Ruby",
    image: "images/skills/ruby.png",
    link: "https://www.ruby-lang.org/en/",
  },
  {
    name: "PostgreSQL",
    image: "images/skills/postgresql.png",
    link: "https://www.postgresql.org/",
  },
];

const services = [
  {
    name: "REST API",
    image: "images/skills/rest api.png",
    link: "https://en.wikipedia.org/wiki/REST",
  },
  {
    name: "Heroku",
    image: "images/skills/heroku.png",
    link: "https://www.heroku.com/",
  },
  {
    name: "Git",
    image: "images/skills/git.png",
    link: "https://git-scm.com/",
  },
];

// const techStackContainer = document.querySelector(".tech-stack-container");
const techStackTemplate = document.querySelector(".tech-stack-template");
const frontEndSection = document.querySelector(".front-end-section");
const backEndSection = document.querySelector(".back-end-section");
const servicesSection = document.querySelector(".services-section");

function loadFrontEndTech() {
  frontEndTech.forEach((item) => iterateOverTechStack(item, frontEndSection));
}

function loadBackEndTech() {
  backEndTech.forEach((item) => iterateOverTechStack(item, backEndSection));
}

function loadServices() {
  services.forEach((item) => iterateOverTechStack(item, servicesSection));
}

function iterateOverTechStack(item, section) {
  let clone = techStackTemplate.content.cloneNode(true);
  clone.querySelector(".tech-stack").href = item.link;
  clone.querySelector(".tech-stack-image").src = item.image;
  clone.querySelector(".tech-stack-text").innerText = item.name;
  section.append(clone);
}

function loadTechStackTemplates() {
  loadFrontEndTech();
  loadBackEndTech();
  loadServices();
}

loadTechStackTemplates();
