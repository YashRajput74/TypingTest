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
                const leftOffset = Math.floor(Math.random() * 340);
                const id=counter;
                gameModel.baloonsDisplayed[id] = randomWord; 
                GameView.createBalloon(leftOffset, randomWord, id);
                counter++;
            }
        }, 2000);
        const words=Object.values(gameModel.baloonsDisplayed);
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