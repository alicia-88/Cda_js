const formNewspaperEl = document.getElementById("formNewspaper");
const newspaperEl = document.getElementById("newspaper");

let newspapers = [...data];

formNewspaperEl.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = document.getElementById("name").value;
  const link = document.getElementById("link").value;
  newspapers.push({ name, link });
  formNewspaperEl.reset();

  displayNewspaper();
});

const removeNewspaper = (event) => {
  const index = event.target.getAttribute("data-index");
  newspapers.splice(index, 1);

  displayNewspaper();
};

function displayNewspaper() {
  newspaperEl.innerHTML = "";
  newspapers.forEach((newspaper, index) => {
    const divEl = document.createElement("div");
    divEl.id = `${index}`;

    const aEl = document.createElement("a");
    aEl.href = `${newspaper.link}`;
    aEl.textContent = `${newspaper.name}`;
    aEl.target = "_blank";

    const buttonEl = document.createElement("button");
    buttonEl.textContent = "Supprimer";
    buttonEl.setAttribute("data-index", index);

    buttonEl.addEventListener("click", removeNewspaper);

    divEl.appendChild(aEl);
    divEl.appendChild(buttonEl);

    newspaperEl.appendChild(divEl);
  });
}

displayNewspaper();
