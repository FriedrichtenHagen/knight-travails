const chessBoard = ([0,1,2,3,4,5,6,7,8],[0,1,2,3,4,5,6,7,8])


let positionKnight = [1,2]
let positionStart = [0,0]

function knightMoves(positionStart, positionKnight){

}

// we need a breadth first algorithm
// this makes sure we check the closest fields first
function calculateMoveTree(position, goal){
    // x-axis moves: +2,+1 +2,-1 -2,+1 -2,-1
    // y-axis moves: +1,+2 +1,-2 -1,+2 -1,-2

 
    let move1 = position + [2,1]
    // make sure it is a legal move (within the field)
    if(chessBoard.includes(move1)){
        if(position === goal){
            // we have reached our goal
            return tree
        }
        else{
            // keep going further
            calculateMoveTree(move1, goal)
        }
    }






}