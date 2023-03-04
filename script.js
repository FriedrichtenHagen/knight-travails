const chessBoard = [[0,1,2,3,4,5,6,7,8],[0,1,2,3,4,5,6,7,8]]
// ([x-axis],[y-axis])

let positionKnight = [1,2]
let positionStart = [0,0]

// we need a breadth first algorithm
// this makes sure we check the closest fields first

    // exclude the move that takes us back to position

    // make sure it is a legal move (within the field)
    // if(chessBoard.includes(move1)){
    //     if(position === goal){
    //         // we have reached our goal
    //         return tree // how??
    //     }
    //     else{
    //         // keep going further
    //         calculateMoveTree(move1, goal)
    //     }
    // }

function calculateNextPositions(position){
    // x-axis moves: 2,1 2,-1 -2,1 -2,-1
    // y-axis moves: 1,2 1,-2 -1,2 -1,-2
    let possibleMoves = [[1,2],[1,-2],[-1,2],[-1,-2],[2,1],[2,-1],[-2,1],[-2,-1]]
    let possiblePositions = []

    possibleMoves.forEach(move => {
        let newPosition = [position[0]+move[0], position[1] + move[1]]
        // check if this newPosition is legal
        if(chessBoard[0].includes(newPosition[0]) && chessBoard[1].includes(newPosition[1])){
            possiblePositions.push(newPosition)
        }
        else{
            // this position is not on the board
        }
    });
    return possiblePositions
}

calculateNextPositions([0,0], [1,2])