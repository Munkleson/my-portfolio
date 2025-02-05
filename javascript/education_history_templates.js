const education = [
  {
    name: "ISI Japanese Language School",
    link: "https://www.isi-education.com/",
    image: "images/education/isi language school.png",
    description: "Beginner to Advanced Japanese language course",
    dates: "Jul 2021 - Apr 2023 ",
    info: [

    ],
  },
  {
    name: "Macquarie University",
    link: "https://www.mq.edu.au/",
    image: "images/education/macquarie university.jpg",
    description: "Bachelor of Arts - Psychology",
    dates: "Feb 2012 - Nov 2018",
    info: [

    ],
  },
]

const educationSection = document.querySelector(".education-history-container");
const educationTemplate = document.querySelector(".history-template");

function loadEducationTemplates() {
  education.forEach((education) => {
    let clone = educationTemplate.content.cloneNode(true);
    clone.querySelector(".history-image").src = education.image;
    clone.querySelector(".history-name").innerText = education.name;
    clone.querySelector(".history-link").href = education.link;
    clone.querySelector(".history-description").innerText = education.description;
    clone.querySelector(".history-dates").innerText = education.dates;

    const listElement = clone.querySelector(".history-list");
    education.info.forEach((item) => listElement.append(insertInfo(item)));

    educationSection.append(clone);
  });
}

function insertInfo(item) {
  const listItem = document.createElement("li");
  listItem.innerText = item;
  listItem.classList.add("education-info-text");
  return listItem;
}

loadEducationTemplates();
