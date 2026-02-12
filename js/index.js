const body = document.querySelector("body");
const script = document.querySelector("script");
const footerElement = document.createElement("footer");
body.insertBefore(footerElement, script);
const today = new Date();
const thisYear = today.getFullYear();
const footer = document.querySelector("footer");
const copyright = document.createElement("p");
const myName = "Aleksei Larionov";
copyright.innerHTML = `&copy; ${myName} ${thisYear}`;
footer.appendChild(copyright);
const section = document.createElement("section");
const connect = document.querySelector("#ConnectHeader");
section.id = "skills";
const main = document.querySelector("main");
main.insertBefore(section, connect);
const headerSkills = document.createElement("h2");
headerSkills.textContent = "Skills";
const ul = document.createElement("ul");
section.appendChild(headerSkills);
section.appendChild(ul);
const skills = ["HTML", "JavaScript", "CSS", "Chrome Devtools", "VS Code", "GitHub", "Jira", "Powershell"];
const skillIconClasses = [
  "devicon-html5-plain",
  "devicon-javascript-plain",
  "devicon-css3-plain",
  "devicon-chrome-plain",
  "devicon-vscode-plain",
  "devicon-github-original",
  "devicon-jira-plain",
  "devicon-powershell-plain"
];
const skillsSection = document.getElementById("skills");  /* or document.querySelector("#skills"); */
const skillsList = skillsSection.querySelector("ul"); /* or skillList = ul; */

for (let i = 0; i < skills.length; i++) {
    let skill = document.createElement("li");
    skill.innerHTML = `
  <i class="${skillIconClasses[i]} skill-icon"></i>
  <div>${skills[i]}</div>
`;
    skillsList.appendChild(skill);  
}

