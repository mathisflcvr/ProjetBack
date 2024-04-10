const player = document.querySelector("#Player");
const enemy = document.querySelector("#enemy");
const obstacle = document.querySelector("#obstacle");

// Fonction de détection de collision
function checkCollision(obj1, obj2) {
  const rect1 = obj1.getBoundingClientRect();
  const rect2 = obj2.getBoundingClientRect();

  return !(rect2.left > rect1.right || 
           rect2.right < rect1.left || 
           rect2.top > rect1.bottom ||
           rect2.bottom < rect1.top);
}

// Fonction pour mettre à jour le jeu
function updateGame() {
  // Ajoute ici le code pour déplacer les ennemis et gérer les tirs

  // Vérification des collisions avec l'ennemi
  if (checkCollision(player, enemy)) {
    console.log("Collision avec l'ennemi !");
    // Traite la perte de vie ou l'explosion de l'ennemi ici
  }

  // Vérification des collisions avec un obstacle
  if (checkCollision(player, obstacle)) {
    console.log("Collision avec l'obstacle !");
    // Traite la perte de vie ou autre ici
  }

  // Demande au navigateur de planifier la prochaine mise à jour
  window.requestAnimationFrame(updateGame);
}

// Fonction pour déplacer le joueur en fonction des entrées du clavier
function movePlayer(event) {
  let left
