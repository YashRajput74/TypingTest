import { gameModel } from "./model";
import { GameView } from "./view";

export const gameController={
    init(){
        GameView.init();
        this.attachEvents();
    },
    attachEvents(){
        document.querySelector(".gameStart").addEventListener("click",()=>this.spawnBalloon());
        document.querySelector("#playerInput").addEventListener("keydown",(event) => this.handleKeyPress(event))
    },
    handleKeyPress(event){
        if(event.key==" "){
            const wordEntered=event.target.value.trim();
            if(wordEntered){
                const isCorrect=gameModel.checkWord(wordEntered);
                if(isCorrect){
                    this.popBalloon(wordEntered);
                }
            }
            event.target.value="";
        }
    },
    words: ["Hello", "friends", "we", "are", "testing"],
    spawnBalloon(){
        let counter=0;
        const interval=setInterval(() => {
            if(counter<this.words.length){
                const randomWord=this.words[counter];
                const id=counter;
                const leftOffset = gameModel.generateOffsetLeft();
                gameModel.baloonsDisplayed[id] = randomWord;
                gameModel.occupyPosition(id,leftOffset); 
                GameView.createBalloon(leftOffset, randomWord, id);
                this.monitorBalloon(id,leftOffset);
                counter++;
            }
        }, 1000);
        const words=Object.values(gameModel.baloonsDisplayed);
    },
    monitorBalloon(id,leftOffset){
        const balloonContainer=document.getElementById(id);
        const displayScreen=document.querySelector(".displayScreen");
        const observer=new IntersectionObserver((entries,observer)=>{
            entries.forEach(entry=>{
                if(!entry.isIntersecting){
                    gameModel.freePosition(leftOffset);
                    balloonContainer.style.display="none";
                    observer.disconnect();
                }
            })
        },{
            root: displayScreen,
            rootMargin: "0px 0px 85px 0px",
            threshold:0
        })
        observer.observe(balloonContainer);
    },
    updateScore(wordEntered){
        const scoreWord=wordEntered.trim();
        let score=scoreWord.length;
        let currentScore=document.querySelector(".currentScore").textContent;
        currentScore=parseInt(currentScore);
        if (wordEntered[0] === wordEntered[0].toUpperCase()) {
            score += 1;
        }
        score += currentScore;
        document.querySelector(".currentScore").textContent=score;
    },
    popBalloon(wordEntered){
        for (let id in gameModel.baloonsDisplayed) {
            if (gameModel.baloonsDisplayed[id] == wordEntered) {
                GameView.removeBalloon(id);  
                gameModel.popBalloon(id);
                this.updateScore(wordEntered);
                break;
            }
        }
    }
}