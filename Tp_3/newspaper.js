const formNewspaperEl = document.getElementById("formNewspaper");
const newspaperEl = document.getElementById("newspaper");

let localJsonUrl = "./data.json";
let newspapers = [];

async function fetchLocalJson() {
  try {
    const response = await fetch(localJsonUrl);
    if (!response.ok) {
      throw new Error(`Erreur HTTP : ${response.status}`);
    }
    const data = await response.json();
    newspapers = data;
    displayNewspaper(data);
  } catch (error) {
    console.error("Erreur lors du chargement du fichier JSON :", error);
  }
}

formNewspaperEl.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = document.getElementById("name").value;
  const link = document.getElementById("link").value;

  if (!name || !link) {
    alert("Veuillez remplir tous les champs.");
    return;
  }
  newspapers.push({ name, link });
  formNewspaperEl.reset();

  displayNewspaper(newspapers);
});

const removeNewspaper = (event) => {
  const index = event.target.getAttribute("data-index");
  newspapers.splice(index, 1);

  displayNewspaper(newspapers);
};

function displayNewspaper(data) {
  newspaperEl.innerHTML = "";
  data.forEach((newspaper, index) => {
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

fetchLocalJson();
