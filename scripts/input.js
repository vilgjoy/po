export const LEFT = "LEFT"
export const RIGHT = "RIGHT"
export const UP = "UP"
export const DOWN = "DOWN"

export class Input {
    constructor(){
        this.keys = [];
        /* theese codes converts wasd and the arrow keys to the four values LEFT, RIGHT, UP, DOWN inside [] */
        window.addEventListener('keydown', e => {
            if (e.key === "ArrowUp" || e.key.toLowerCase() === "w"){
                this.keyPressed(UP);
            } else if (e.key === "ArrowDown" || e.key.toLowerCase() === "s"){
                this.keyPressed(DOWN);
            } else if (e.key === "ArrowLeft" || e.key.toLowerCase() === "a"){
                this.keyPressed(LEFT);
            } else if (e.key === "ArrowRight" || e.key.toLowerCase() === "d"){
                this.keyPressed(RIGHT);
            }
        })
        window.addEventListener('keyup', e => {
            if (e.key === "ArrowUp" || e.key.toLowerCase() === "w"){
                this.keyReleased(UP);
            } else if (e.key === "ArrowDown" || e.key.toLowerCase() === "s"){
                this.keyReleased(DOWN);
            } else if (e.key === "ArrowLeft" || e.key.toLowerCase() === "a"){
                this.keyReleased(LEFT);
            } else if (e.key === "ArrowRight" || e.key.toLowerCase() === "d"){
                this.keyReleased(RIGHT);
            }
        })
    }
    /* this code makes it so if you pressed a key that isn't in [], you add it */
    keyPressed(key){
        if (this.keys.indexOf(key) === -1){
            this.keys.unshift(key);
        }
        console.log(key);
    }
    /* this code makes it so if you have theese values still in the [], you remove it */
    keyReleased(key){
        const index = this.keys.indexOf(key);
        if (index === -1) return;
        this.keys.splice(index, 1);
    }
    /* this code gives out the most recent input(direction) */
    get lastKey(){
        return this.keys[0];
    }
}