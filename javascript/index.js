const table = document.querySelector("#newWorld");
const picaxeHover = document.querySelector(".picaxe-container");
const axeHover = document.querySelector(".axe-container");
const shovelHover = document.querySelector(".shovel-container");
const storage = document.querySelector(".inside-inventory");
const inventoryHover = document.querySelector(".inventory");
let inventory = [];
let clickedPicax = false;
let clickedAxe = false;
let clickedShovel = false;
let clickInventory = false;

const materials = {
  wood: "oak",
  dirt: "dirt",
  grass: "grass",
  cloud: "cloud",
  leaves: "leaves",
  stone: "stone",
  green: "green",
  red: "red",
};

table.addEventListener("click", (event) => {
  breakable(event);
  redBorder(event);
});

picaxeHover.addEventListener("click", () => {
  picaxeHover.classList.add(materials.green);
  axeHover.classList.remove(materials.green);
  shovelHover.classList.remove(materials.green);
  inventoryHover.classList.remove(materials.green);
  clickedPicax = true;
  clickedAxe = false;
  clickedShovel = false;
  clickInventory = false;
  document.body.style.cursor = `url("../assets/images/mouse/stonePickaxeCursor.png"), auto`;
});

axeHover.addEventListener("click", () => {
  axeHover.classList.add(materials.green);
  picaxeHover.classList.remove(materials.green);
  shovelHover.classList.remove(materials.green);
  inventoryHover.classList.remove(materials.green);
  clickedAxe = true;
  clickedPicax = false;
  clickedShovel = false;
  clickInventory = false;
  document.body.style.cursor = `url("../assets/images/mouse/treeAxeCursor.png"), auto`;
});

shovelHover.addEventListener("click", () => {
  shovelHover.classList.add(materials.green);
  picaxeHover.classList.remove(materials.green);
  axeHover.classList.remove(materials.green);
  inventoryHover.classList.remove(materials.green);
  clickedShovel = true;
  clickedPicax = false;
  clickedAxe = false;
  clickInventory = false;
  document.body.style.cursor = `url("../assets/images/mouse/dirtShovelCursor.png"), auto`;
});

storage.addEventListener("click", () => {
  inventoryHover.classList.add(materials.green);
  removeSelection();
  let clickInventory = true;
  table.addEventListener("click", (event) => {
    if (clickInventory && event.target.classList[1] == undefined) {
      event.target.classList.add(storage.classList[1]);
      storage.classList.remove(storage.classList[1]);
      inventoryHover.classList.remove(materials.green);
      clickInventory = false;
    }
  });
});

const isBreakable = (event) => {
  inventory.push(event.target.classList.value);
  event.target.classList.remove(event.target.classList[1]);
  console.log(storage.classList);
  storage.classList = "";
  storage.classList.add(
    "inside-inventory",
    inventory[inventory.length - 1].split(" ")[1]
  );
};

const removeSelection = () => {
  clickedShovel = false;
  clickedPicax = false;
  clickedAxe = false;
  shovelHover.classList.remove(materials.green);
  picaxeHover.classList.remove(materials.green);
  axeHover.classList.remove(materials.green);
};

const breakable = (event) => {
  if (event.target.classList.value !== "block") {
    if (clickedPicax && event.target.classList[1] == materials.stone) {
      isBreakable(event);
    } else if (
      clickedAxe &&
      (event.target.classList[1] == materials.wood ||
        event.target.classList[1] == materials.leaves)
    ) {
      isBreakable(event);
    } else if (
      clickedShovel &&
      (event.target.classList[1] == materials.dirt ||
        event.target.classList[1] == materials.grass)
    ) {
      isBreakable(event);
    }
  }
};

const redBorder = (event) => {
  if (event.target.classList.value !== "block") {
    if (clickedPicax && event.target.classList.value !== "") {
      picaxeHover.classList.add(materials.red);
      setTimeout(function () {
        picaxeHover.classList.remove(materials.red);
      }, 500);
    } else if (clickedAxe && event.target.classList.value !== "") {
      axeHover.classList.add(materials.red);
      setTimeout(function () {
        axeHover.classList.remove(materials.red);
      }, 500);
    } else if (clickedShovel && event.target.classList.value !== "") {
      shovelHover.classList.add(materials.red);
      setTimeout(function () {
        shovelHover.classList.remove(materials.red);
      }, 500);
    }
  }
};

//creating a world
function createWorld() {
  for (let i = 0; i < 20; i++) {
    const tr = document.createElement("tr");
    table.appendChild(tr);
    for (let j = 0; j < 20; j++) {
      const td = document.createElement("td");
      const div = document.createElement("div");
      div.id = "x:" + j + "_" + "y:" + i;
      div.className = "block";
      td.appendChild(div);
      tr.appendChild(td);
      if (i === 15) {
        div.className = "block grass";
      }
      if (i >= 16) {
        div.className = "block dirt";
      }
    }
  }
  createElements();
}

(function startGame() {
  createWorld();
})();

function resetGame() {
  table.innerHTML = "";
  createWorld();
  inventory = [];
  clickedPicax = false;
  clickedAxe = false;
  clickedShovel = false;
  clickInventory = false;
  picaxeHover.classList.remove(materials.green);
  axeHover.classList.remove(materials.green);
  shovelHover.classList.remove(materials.green);
  inventoryHover.classList.remove(materials.green);
}

function createElement(x, y, type) {
  if (type === "stone") {
    document.getElementById(`x:${x}_y:${y}`).classList.add(materials.stone);
  } else if (type === "wood") {
    document.getElementById(`x:${x}_y:${y}`).classList.add(materials.wood);
  } else if (type === "leaves") {
    document.getElementById(`x:${x}_y:${y}`).classList.add(materials.leaves);
  } else if (type === "cloud") {
    document.getElementById(`x:${x}_y:${y}`).id = materials.cloud;
  }
}

function createElements() {
  let randomStone = Math.floor(Math.random() * 4) + 12;
  let randomTree = Math.floor(Math.random() * 6) + 5;
  let randomCloud = Math.floor(Math.random() * 12) + 5;
  // stone
  createElement(randomStone, 14, "stone");
  createElement(randomStone + 1, 14, "stone");
  createElement(randomStone + 2, 14, "stone");
  createElement(randomStone + 2, 13, "stone");
  createElement(randomStone + 2, 12, "stone");
  createElement(randomStone + 1, 12, "stone");
  createElement(randomStone, 12, "stone");
  createElement(randomStone, 13, "stone");
  createElement(randomStone + 1, 13, "stone");
  // wood
  createElement(randomTree, 11, "wood");
  createElement(randomTree, 12, "wood");
  createElement(randomTree, 13, "wood");
  createElement(randomTree, 14, "wood");
  // leaves
  createElement(randomTree - 2, 10, "leaves");
  createElement(randomTree - 1, 10, "leaves");
  createElement(randomTree, 10, "leaves");
  createElement(randomTree + 1, 10, "leaves");
  createElement(randomTree + 2, 10, "leaves");
  createElement(randomTree - 2, 9, "leaves");
  createElement(randomTree - 1, 9, "leaves");
  createElement(randomTree, 9, "leaves");
  createElement(randomTree + 1, 9, "leaves");
  createElement(randomTree + 2, 9, "leaves");
  createElement(randomTree - 2, 8, "leaves");
  createElement(randomTree - 1, 8, "leaves");
  createElement(randomTree, 8, "leaves");
  createElement(randomTree + 1, 8, "leaves");
  createElement(randomTree + 2, 8, "leaves");
  createElement(randomTree - 1, 7, "leaves");
  createElement(randomTree, 7, "leaves");
  createElement(randomTree + 1, 7, "leaves");
  // clouds
  createElement(randomCloud, 2, "cloud");
  createElement(randomCloud + 1, 2, "cloud");
  createElement(randomCloud + 2, 2, "cloud");
  createElement(randomCloud - 1, 3, "cloud");
  createElement(randomCloud, 3, "cloud");
  createElement(randomCloud + 1, 3, "cloud");
  createElement(randomCloud + 2, 3, "cloud");
  createElement(randomCloud + 3, 3, "cloud");
}
