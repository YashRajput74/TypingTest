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
                <img src="./resources/cup.png" alt="Trophy">
                <h2>LEADERBOARD</h2>
                <div>
                    <div class="score winner">
                        <img src="./resources/star.png" alt="Winner">
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
                <img src="./resources/scoreboard_hard.png" alt="">
                <div class="currentScore">0</div>
            </div>
        </div>
        `;
    },
    spawnBalloon(leftOffset){

    }
}