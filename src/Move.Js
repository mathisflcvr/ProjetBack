// Fonction de détection de collision
export function checkCollision(obj1, obj2) {
  const rect1 = obj1.getBoundingClientRect();
  const rect2 = obj2.getBoundingClientRect();

  return !(
    rect2.left > rect1.right ||
    rect2.right < rect1.left ||
    rect2.top > rect1.bottom ||
    rect2.bottom < rect1.top
  );
}

// Mise à jour du jeu
export function updateGame() {
  // Ici, tu peux ajouter le code pour déplacer les ennemis et gérer les tirs

  // Vérifie la collision avec l'ennemi
  if (checkCollision(player, enemy)) {
    console.log("Collision avec l'ennemi !");
    // Gérer la perte de vie ou l'explosion de l'ennemi ici
  }

  // Vérifie la collision avec un obstacle
  if (checkCollision(player, obstacle)) {
    console.log("Collision avec l'obstacle !");
    // Gérer la perte de vie ou autre ici
  }

  window.requestAnimationFrame(updateGame);
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
