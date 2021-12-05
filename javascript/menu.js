const world = document.querySelector(".world-Container");
const tools = document.querySelector(".tools");
const home = document.querySelector(".home-container");
const rules = document.querySelector(".show-rules");
const rulesContainer = document.querySelector(".show-rules-container");
const logo = document.querySelector(".logo");
const buttons = document.querySelector(".buttons-container");

const startGame = () => {
  home.style.display = "none";
  tools.style.display = "flex";
  world.style.display = "block";
};

const backHomeScreen = () => {
  home.style.display = "flex";
  tools.style.display = "none";
  world.style.display = "none";
};

const closeGame = () => {
  window.close();
};

const showRules = () => {
  rulesContainer.style.display = "flex";
  rules.style.display = "block";
  logo.style.display = "none";
  buttons.style.display = "none";
};

const exitRules = () => {
  rulesContainer.style.display = "none";
  rules.style.display = "none";
  logo.style.display = "block";
  buttons.style.display = "flex";
};
