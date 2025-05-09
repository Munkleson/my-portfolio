const workHistory = [
  {
    name: "Freelance",
    link: "https://github.com/Munkleson",
    image: "images/work/freelance.png",
    description: "Full-stack web developer",
    dates: "Jan 2025 - Ongoing",
    info: [

    ],
  },
  {
    name: "GPlusMedia Inc.",
    link: "https://gplusmedia.com/en",
    image: "images/work/gplusmedia.jpg",
    description: "Project manager - GaijinPot Study",
    dates: "Mar 2024 - Ongoing",
    info: [

    ],
  },
  {
    name: "Azabu Skin Clinic",
    link: "https://www.azabu-skinclinic.com/camp/en/index_e.html",
    image: "images/work/azabu skin clinic.jpg",
    description: "Head receptionist",
    dates: "Feb 2023 - Mar 2024",
    info: [

    ],
  },
  {
    name: "Shane English School Japan",
    link: "https://www.shane.co.jp/",
    image: "images/work/shane english school.png",
    description: "English teacher",
    dates: "Apr 2019 - Jun 2021",
    info: [

    ],
  },
  {
    name: "Datacom",
    link: "https://datacom.com/au/en",
    image: "images/work/datacom.jpg",
    description: "Quality Assurance Specialist",
    dates: "May 2015 - Oct 2018",
    info: [

    ],
  },
]

const workHistorySection = document.querySelector(".work-history-container");
const workHistoryTemplate = document.querySelector(".history-template");

function loadWorkHistoryTemplates() {
  workHistory.forEach((work) => {
    let clone = workHistoryTemplate.content.cloneNode(true);
    clone.querySelector(".history-image").src = work.image;
    clone.querySelector(".history-name").innerText = work.name;
    clone.querySelector(".history-link").href = work.link;
    clone.querySelector(".history-description").innerText = work.description;
    clone.querySelector(".history-dates").innerText = work.dates;

    const listElement = clone.querySelector(".history-list");
    work.info.forEach((item) => listElement.append(insertInfo(item)));

    workHistorySection.append(clone);
  });
}

function insertInfo(item) {
  const listItem = document.createElement("li");
  listItem.innerText = item;
  listItem.classList.add("education-info-text");
  return listItem;
}

loadWorkHistoryTemplates();
