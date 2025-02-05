const bootcamps = [
  {
    name: "Le Wagon Tokyo",
    link: "https://www.lewagon.com/tokyo",
    image: "images/bootcamps/le wagon.jpg",
    description: "Full stack web development course",
    dates: "Sept 2024 - Mar 2025",
    info: [
      // "Studied"
    ],
  },
  {
    name: "The Odin Project",
    link: "https://www.theodinproject.com/",
    image: "images/bootcamps/the odin project.png",
    description: "Full stack JavaScript path",
    dates: "Jun 2024 - Ongoing",
    info: [

    ],
  },
  {
    name: "Code Chrysalis",
    link: "https://www.codechrysalis.io/",
    image: "images/bootcamps/code chrysalis.png",
    description: "Foundations course - Introduction to web development",
    dates: "Nov 2022 - Feb 2023",
    info: [

    ],
  },
]

const bootcampSection = document.querySelector(".bootcamp-section-container");
const bootcampTemplate = document.querySelector(".history-template");

function loadBootcampTemplates() {
  bootcamps.forEach((bootcamp) => {
    let clone = bootcampTemplate.content.cloneNode(true);
    clone.querySelector(".history-image").src = bootcamp.image;
    clone.querySelector(".history-name").innerText = bootcamp.name;
    clone.querySelector(".history-link").href = bootcamp.link;
    clone.querySelector(".history-description").innerText = bootcamp.description;
    clone.querySelector(".history-dates").innerText = bootcamp.dates;

    const listElement = clone.querySelector(".history-list");
    bootcamp.info.forEach((item) => listElement.append(insertInfo(item)));

    bootcampSection.append(clone);
  });
}

function insertInfo(item) {
  const listItem = document.createElement("li");
  listItem.innerText = item;
  listItem.classList.add("bootcamp-info-text");
  return listItem;
}

loadBootcampTemplates();
