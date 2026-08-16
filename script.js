// This file is where you will connect your project data to the page.
// Later, you can write code here to loop through the projects and render cards.

const projectList = document.getElementById("project-list");

function renderProjects(projects) {
  if (!projectList) return;

  projectList.innerHTML = "";

  projects.forEach((project) => {
    const card = document.createElement("article");
    card.className = "project-card";

    const techList = project.tech
      .map((item) => `<li>${item}</li>`)
      .join("");

    card.innerHTML = `
      <h3>${project.title}</h3>
      <p>${project.description}</p>
      <a href=${project.link} target="blank">${project.title}</a>
      <ul class="tech-list">${techList}</ul>
    `;

    projectList.appendChild(card);
  });
}

renderProjects(projects);
