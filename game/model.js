export const gameModel={
    baloonsDisplayed: {
        /* "1": "Hello",
        "2": "friends",
        "3": "we",
        "4":"are",
        "5": "testing" */
    },
    balloonsBelowLine: {},
    baloonsAtBottom(balloonsBelowLine){
        let arr = [];
        return arr;
    },
    generateOffsetLeft(){
        const newLeft = Math.floor(Math.random() * (maxLeft + 1));
        for (let i = 0; i < arr.length; i++) {
            if (newLeft==arr[i]){
                
            }            
        }
    },
    spawnBalloon(){

    },
    popBalloon(id){
        const updatedBalloons = {};
        for (const key in this.baloonsDisplayed) {
            if (key !== id) {
                updatedBalloons[key] = this.baloonsDisplayed[key];
            }
        }
        this.baloonsDisplayed = updatedBalloons;
    },
    checkWord(word){
        for(let key in this.baloonsDisplayed){
            if(this.baloonsDisplayed[key]==word){
                return true;
            }
        }
        return false;
    }
}