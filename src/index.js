const player = document.getElementById("player");
const enemy = document.getElementById("enemy");
const obstacle = document.getElementById("obstacle");
let score = 0;

console.log("player : ", player);
console.log("enemy : ", enemy);
console.log("obstacle : ", obstacle);

// Score calculation
function addScore(score) {
  console.log("score : ", score);
  score = score + 1;
  document.getElementById("score").innerHTML = score;
  document.querySelector("h1").innerHTML = "score: " + score;
}
function resetScore() {
  score = 0;
  document.getElementById("score").innerHTML = score;
}

// Fonction de détection de collision
export function checkCollision(obj1, obj2) {
  const rect1 = obj1.getBoundingClientRect();
  const rect2 = obj2.getBoundingClientRect();

  //   console.log("Rect 1 :");
  //   console.log(" -- Left : " + rect1.left);
  //   console.log(" -- Top : " + rect1.top);
  //   console.log(" -- Right : " + rect1.right);
  //   console.log(" -- Bottom : " + rect1.bottom);
  //   console.log(" -- Width : " + rect1.width);
  //   console.log(" -- Height : " + rect1.height);
  //   console.log("");
  //   console.log("Rect 2 :");
  //   console.log(" -- Left : " + rect2.left);
  //   console.log(" -- Top : " + rect2.top);
  //   console.log(" -- Right : " + rect2.right);
  //   console.log(" -- Bottom : " + rect2.bottom);
  //   console.log(" -- Width : " + rect2.width);
  //   console.log(" -- Height : " + rect2.height);
  //   console.log("");
  const isHit = !(
    rect2.left > rect1.right ||
    rect2.right < rect1.left ||
    rect2.top > rect1.bottom ||
    rect2.bottom < rect1.top
  );

  isHit && addScore();

  return isHit;
}

// Déplacement du joueur
export function movePlayer(e) {
  let left = parseInt(player.style.left, 10) || 0;
  let top = parseInt(player.style.top, 10) || 0;

  switch (e.keyCode) {
    case 39: // Droite
      player.style.left = left + 6 + "px";
      break;
    case 37: // Gauche
      player.style.left = left - 6 + "px";
      break;
    case 40: // Bas
      player.style.top = top + 6 + "px";
      break;
    case 38: // Haut
      player.style.top = top - 6 + "px";
      break;
  }
}

function gameOver() {
  // Open modal game over
  document.getElementById("modal-game-over").style.display = "flex";
}

function closeModalGameOver() {
  // reset position of player
  player.style.left = "0px";
  player.style.top = "50px";

  // reset position of enemy
  enemy.style.left = "0px";
  enemy.style.top = "0px";

  // reset position of obstacle
  obstacle.style.left = "0px";
  obstacle.style.top = "0px";

  // reset modal
  document.getElementById("modal-game-over").style.display = "none";

  // reset score
  resetScore();
}

// Mise à jour du jeu
export function updateGame() {
  // Ici, tu peux ajouter le code pour déplacer les ennemis et gérer les tirs
  console.log("Starting game");

  // Vérifie la collision avec l'ennemi
  if (checkCollision(player, enemy)) {
    console.log("Collision avec l'ennemi !");
    // Gérer la perte de vie ou l'explosion de l'ennemi ici
    gameOver();
  }

  // Vérifie la collision avec un obstacle
  if (checkCollision(player, obstacle)) {
    console.log("Collision avec l'obstacle !");
    // Gérer la perte de vie ou autre ici
  }

  document
    .getElementById("restart")
    .addEventListener("click", closeModalGameOver);

  document.addEventListener("keydown", movePlayer);

  // add scrore
  addScore(score);

  window.requestAnimationFrame(updateGame);
}

updateGame();
