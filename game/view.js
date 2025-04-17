export const GameView={
    init(){
        
    },
    createBalloon(leftOffset,word,id){
        const colors=["red","blue","yellow","green","purple","orange","pink","aqua"];

        const balloonContainer=document.createElement("div");
        balloonContainer.classList.add("balloonContainer");
        balloonContainer.setAttribute("id",id);
        balloonContainer.style.left=`${leftOffset}px`;

        const balloonElement = document.createElement("div");
        balloonElement.classList.add("balloon");
        balloonElement.classList.add(colors[Math.floor(Math.random()*colors.length)]);

        const textSpan=document.createElement("span");
        textSpan.classList.add("text");
        textSpan.innerText = word;

        const thread=document.createElement("div");
        thread.classList.add("thread");

        balloonElement.appendChild(textSpan);
        balloonElement.appendChild(thread);
        balloonContainer.appendChild(balloonElement);

        const displayScreen = document.querySelector(".displayScreen");
        displayScreen.appendChild(balloonContainer);

    },
    removeBalloon(id){
        const balloonContainer=document.getElementById(id);
        if(balloonContainer){
            balloonContainer.style.display="none";
        }
    },
    createScoreAnimation(score){
        const scoreChangeElement=document.createElement("div");
        scoreChangeElement.classList.add("scoreChange");
        scoreChangeElement.textContent=`+${score}`;
        const scoreBoard=document.querySelector(".scoreBoard");
        scoreBoard.appendChild(scoreChangeElement);
        setTimeout(()=>{
            scoreChangeElement.style.animation='floatUps 1s forwards';
        },10);
        setTimeout(()=>{
            scoreChangeElement.remove();
        },1000);
    },
    gameOverUI(){
        const gameOverDiv=document.createElement("div");
        gameOverDiv.classList.add("gameOverText");
        gameOverDiv.textContent=`Game Over`;
        const screen=document.querySelector(".displayScreen");
        screen.appendChild(gameOverDiv);
    }
}