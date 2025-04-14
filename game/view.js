export const GameView={
    init(){
        document.querySelector("main").innerHTML=`
        <div class="gameContainer">
            <div class="displayScreen">
                
            </div>
            <input type="text" name="playerInput" id="playerInput" placeholder="Enter Here">
        </div>
        <div class="ruleBox">
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

        const balloonElement = document.createElement("div");
        balloonElement.classList.add("balloon");
        balloonElement.setAttribute("id", id);
        balloonElement.style.left = `${leftOffset}px`;
        balloonElement.classList.add(colors[Math.floor(Math.random()*colors.length)]);
        balloonElement.innerText = word;
        const displayScreen = document.querySelector(".displayScreen");
        displayScreen.appendChild(balloonElement);
    },
    removeBalloon(id){
        const balloonElement=document.getElementById(id);
        if(balloonElement){
            balloonElement.style.display="none";
        }
    }
}