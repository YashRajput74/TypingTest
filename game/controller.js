import { gameModel } from "./model";
import { GameView } from "./view";

export const gameController={
    init(){
        GameView.init();
        this.attachEvents();
    },
    attachEvents(){
        document.querySelector(".gameStart").addEventListener("click",()=>{
            this.spawnBalloon();
            this.timerUpdate();
        });
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
    spawnBalloon(){
        let counter=0;
        const startInterval=setTimeout(()=>{
            counter=500;
            GameView.gameOverUI();
        },60000)
        const interval=setInterval(() => {
            if(counter<400){
                this.fetchRandomWord().then(randomWord=>{
                    const id=counter;
                    const leftOffset = gameModel.generateOffsetLeft();
                    gameModel.baloonsDisplayed[id] = randomWord;
                    gameModel.occupyPosition(id,leftOffset); 
                    GameView.createBalloon(leftOffset, randomWord, id);
                    this.monitorBalloon(id,leftOffset);
                    counter++;
                })
            }
        }, 1500);
    },
    fetchRandomWord(){
        return fetch("/api/word")
        .then(response=>response.json())
        .then(data=>data.word)
        .catch(err=>{
            console.error(err);
        })
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
        let score=0;
        let currentScore=document.querySelector(".currentScore").textContent;
        currentScore=parseInt(currentScore);
        score += 1;        
        GameView.createScoreAnimation(score);
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
    },
    timerUpdate(){
        let counter=60;
        const interval=setInterval(()=>{
            counter--;
            document.querySelector(".timer>p").textContent=`${counter}s`
            if(counter==0){
                clearInterval(interval);
            }
        },1000)
    }
}