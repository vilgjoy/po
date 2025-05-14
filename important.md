Inside hero.js: 1:19:48 timestamp onto video

super(); means to do the code inside the parent file which is GameObject first, then this one
the hero class is whats known as a child, which means it takes the code from the parent but adds their own code ontop of that.


Inside world.js:
    this code creates the different tiles. we have a tilesize of 32, column of 15 and rows of 20 (in main.js)
    the code starts at 0,0 and creates 15 columns. 
    then when the column size is finished, it goes one step down and repeats this process until rows is at 20

    drawGrid(ctx){
        for (let row = 0; row < ROWS; row++){
            for(let col = 0; col < COLS; col++){
                ctx.strokeRect(
                    col * TILE_SIZE,
                    row * TILE_SIZE,
                    TILE_SIZE,
                    TILE_SIZE
                )
            }
        }
    }


Inside gameObject.js:

the ?? is known as a nullish coalescing operator. basically, if you have a argument that doesn't have a value, like: this.sprite = sprite, you can do this: this.sprite = sprite ?? {x:0,y:0,width:TILE_SIZE,
        height:TILE_SIZE,image:""}
the ?? sees if you dont have anything set for sprite, so it automatically puts in values. 
in this case, a x and y value set to 0 and the width and height of the sprite

but if you do have a value (in this case inside main.js: 
const hero = new Hero({
        position: {x: 13, y: 5}
    });)
then you need to make sure to change that value inside the child class aswell:
export class Hero extends GameObject {
    constructor({position}){
        super({position});
    }
}

when we call moveTowards() method, we pass it where we want to move (destinationPosition) and how fast (speed).
we calculate the horizontal and vertical position we need to travel (this.distanceToTravel.x, this.distanceToTravel.y)

from there, we recalculate distance between current position and destination position (let distance = Math.hypot(this.distanceToTravel.x, this.distanceToTravel.y);)
then, if distance is less than speed, you snap to the final position.
else, calculate the step we need to take and update positon.x and position.y factoring in speed.

then we recalculate the remaining distance and return the distance value.


