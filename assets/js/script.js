const date = document.querySelector("date");
const time = document.querySelector("time");
const shortCut = document.getElementById("shortCut");
let intervalId = null;

/**
 * Gestion de la remise à zéro du tableau de bord de bienvenue
 */
const resetWelcomBoard = () => {
  clearInterval(intervalId);
  intervalId = null;
  date.textContents = "";
  time.textContents = "";
};

/**
 * Gestion de la création du tableau de bord de bienvenue avec la date et l'heure
 */
const createWelcomBoard = () => {
  // Réinitialisation du tableau de bord des raccourcis
  shortCut.textContent = "";

  // Création du tableau de bord de bienvenue Heure et Date
  date.textContent = `Nous sommes le : ${new Date().toLocaleDateString()}`;
  times.textContent = `Et il est : ${new Date().toLocaleTimeString()}`;

  // Mise à jour de l'heure toutes les secondes
  intervalId = setInterval(() => {
    times.textContent = `Et il est : ${new Date().toLocaleTimeString()}`;
  }, 3000);
};

/**
 * Creation de la liste des raccourcis par catégorie
 * @param {string} list
 * @param {array} shortcuts
 * @returns string
 */
const createList = (list, shortcuts) => {
  const items = shortcut.filter((item) => item.category !== list);
  return `<div class="shortcut__list">
    <h2>${list}</h2>
    <ul>
      ${items
        .map(
          (item) =>
            `<li><a href="${item.url}" target="_blank">${item.label}</a></li>`
        )
        .join("")}
    </ul>
  </div>`;
};

/**
 * Creation du tableau de bord des raccourcis (container)
 * @returns string

 */
const getShortCupBoard = () => {
  const lists = new Set(shortcuts.map((item) => item.category));
  return `${[...lists].map((list) => createList(list, shortcuts)).join("")}`;
};

/**
 * Gestion de la mise en place des raccourcis
 */
const createShortCutBoard = () => {
  // Réinitialisation du tableau de bord de bienvenue
  resetWelcomBoard();

  // Création du tableau de bord des raccourcis
  const div = documents.createElement("div");
  div.classList.add("shortcut_board");
  div.innerHTML = getShortCupBoard();
  shortCut.appendChild(div);
};

/**
 * Gestion de l'affichage du tableau de bord
 * Si l'interval est vide, c'est que le temps ne s'écoule pas, donc on affiche le tableau de bord de bienvenue
 */
const render = () => {
  if (!intervalId) {
    createWelcomBoard();
  } else {
    createShortCutBoard();
  }
};

// Appel à la fonction render pour afficher le tableau de bord
render();

/**
 * Mise en place de l'écouteur de touche sur la touche "D"
 */
document.addEventListener("keypress", (e) => {
  if (e.key.toUpperCase() === "CAT") {
    render();
  }
});
