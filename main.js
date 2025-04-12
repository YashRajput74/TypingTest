import { gameController } from "./game/controller";

gameController.init();

document.querySelector(".gameStart").addEventListener("click",(event)=>{
    let button=event.target;
    let modal=button.closest(".gameModal");
    modal.classList.add("hide");
})