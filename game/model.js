export const gameModel={
    baloonsDisplayed: {
        /* "1": "Hello",
        "2": "friends",
        "3": "we",
        "4":"are",
        "5": "testing" */
    },
    balloonsBelowLine: {},
    isPositionOccupied(leftOffset){
        return Object.values(this.balloonsBelowLine).includes(leftOffset);
    },
    generateOffsetLeft(){
        let leftOffset;
        let positionOccupied=true;

        while(positionOccupied){
            leftOffset=Math.floor(Math.random()*480);
            positionOccupied=this.isPositionOccupied(leftOffset);
        }
        return leftOffset;
    },
    occupyPosition(id,leftOffset){
        this.balloonsBelowLine[id]=leftOffset;
    },
    freePosition(leftOffset){
        for(let id in this.balloonsBelowLine){
            if(this.balloonsBelowLine[id]==leftOffset){
                delete this.balloonsBelowLine[id];//delete deletes the id of the thing
                break;
            }
        }
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