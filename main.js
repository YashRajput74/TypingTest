import { gameController as balloonGame } from "./game/controller";
import { makeServer } from "./mirage";

makeServer();
balloonGame.init();

document.querySelector(".gameStart").addEventListener("click",(event)=>{
    let button=event.target;
    let modal=button.closest(".gameModal");
    modal.classList.add("hide");
})