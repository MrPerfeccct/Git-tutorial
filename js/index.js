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
const socials = document.querySelector("#SocialsHeader");
section.id = "skills";
const main = document.querySelector("main");
main.insertBefore(section, socials);
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

const messageForm = document.forms["leave_message"];
const messageSection = document.getElementById("messages");
const messageList = messageSection.querySelector("ul");
function toggleMessagesVisibility() {
  messageSection.style.display = messageList.children.length === 0 ? "none" : "block";
};
toggleMessagesVisibility();
messageForm.addEventListener("submit", function(event) {
    event.preventDefault();
    const usersName = event.target.usersName.value; 
    const usersEmail = event.target.usersEmail.value;
    const usersCompany = event.target.usersCompany.value;
    const usersMessage = event.target.usersMessage.value;
    // console.log(`Name: ${usersName}, Email: ${usersEmail}, Message: ${usersMessage}`);
    const newMessage = document.createElement("li");
    newMessage.innerHTML = `<a href="mailto:${usersEmail}">${usersName}</a>` + `<span> ${usersCompany}</span>` + `<span>${usersMessage}</span>`;
    const editButton = document.createElement("button");
    editButton.innerText = "edit";
    editButton.setAttribute("type", "button");
    editButton.addEventListener("click", function (e){
    const entry = e.target.parentNode;
    const spans = entry.querySelectorAll("span");
    const messageSpan = spans[spans.length - 1];
    const newText = prompt("Edit your message:", messageSpan.textContent);
    if (newText === null) return;
    messageSpan.textContent = newText.trim();
});
    const removeButton = document.createElement("button");
    removeButton.innerText = "remove";
    removeButton.setAttribute("type", "button");
    removeButton.addEventListener("click", function(e) {
      const entry = e.target.parentNode;
      entry.remove();
      toggleMessagesVisibility();
    });
    newMessage.appendChild(editButton);
    newMessage.appendChild(removeButton);
    messageList.appendChild(newMessage);
    toggleMessagesVisibility();
    messageForm.reset();
});
