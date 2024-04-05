// const shot = document.querySelector("#shot")
let overheat = 0;
// console.log(shot.getBoundingClientRect());
// document.addEventListener("space", shoot);

// function shoot(){
    if(overheat < 100){
        overheat += 5;
    }
// }

setInterval(()=>{
    overheat -= 1;
    console.log("Poil");
}, 100);