class Player{
    constructor (hitpoints,damage,speed){
        this.hitpoints = hitpoints;
        this.damage = damage;
        this.speed = speed;
        this.overheat = 100;
        this.attack = function (target) {
            target.hitpoints -= this.damage;
            console.log (target.hitpoints);
        }
    }
}

const hero = new Player (150,50,20)
const obstacle = new Player (200,20,2)
const ennemy = new Player (150,50,20)


while (hero.hitpoints >> 0) {
    hero.attack(ennemy);
    console.log(ennemy.hitpoints)

    if (ennemy.hitpoints>>0) {
        ennemy.attack(hero)
        console.log(hero.hitpoints)
    }

}