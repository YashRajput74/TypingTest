export const GameView={
    init(){
        document.querySelector("main").innerHTML=`
        <div class="gameContainer">
            <div class="displayScreen">
                
            </div>
            <input type="text" name="playerInput" id="playerInput" placeholder="Enter Here">
        </div>
        <div class="ruleBox">
            <div class="timer">
                <p>60s</p>
            </div>
            <div class="leaderBoard">
                <img src="./resources/cup.png" alt="Trophy" draggable="false">
                <h2>LEADERBOARD</h2>
                <div>
                    <div class="score winner">
                        <img src="./resources/star.png" alt="Winner" draggable="false">
                        <span>
                            <p>Alice</p>
                            <p>340</p>
                        </span>
                    </div>
                    <div class="score">
                        <div></div>
                        <span>
                            <p>John</p>
                            <p>240</p>
                        </span>
                    </div>
                    <div class="score">
                        <div></div>
                        <span>
                            <p>James</p>
                            <p>200</p>
                        </span>
                    </div>
                </div>
            </div>
            <div class="scoreBoard">
                <img src="./resources/scoreboard_hard.png" alt="ScoreBoard" draggable="false">
                <div class="currentScore">0</div>
            </div>
        </div>
        `;
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
    }
}