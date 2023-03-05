const chessBoard = [[0,1,2,3,4,5,6,7],[0,1,2,3,4,5,6,7]]
// ([x-axis],[y-axis])

let positionGoal = [3,7]
let positionStart = [0,0]

// we need a breadth first algorithm
// this makes sure we check the closest 

createGraph(positionStart, positionGoal)

function createGraph(node, goal){
    let visitedQueue = []
    let queue = []
    //visitedQueue.push(node)
    queue.push(node)
    while(queue.length>0){
        // remove first item of array
        let removedItem = queue.shift()
        visitedQueue.push(removedItem)
        if(removedItem[0] === goal[0] && removedItem[1] === goal[1]){
            console.log(visitedQueue)
            return
        }
        let neighbors = calculateNextPositions(removedItem)
        neighbors.forEach(position => {
            // make sure that position has not been visited before
            if(!visitedQueue.includes(position)){
                queue.push(position)
            }
        });
    }
}
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

function animateKnightsMovement(position){

    //clear the previous knight position
    let previousKnight = document.querySelector("#knight")
    if(previousKnight){
        previousKnight.remove()
    }

    // animate the transition


    let x = position[0]
    let y = position[1]
    
    let gridId = x + 64-(y*8)-7
// equation for grid id: x + 64-(y*8)-7
// 0 + 64-(0*8)-7 = 57
// 1 + 64-(1*8)-7 = 50
// 2 + 64-(2*8)-7 = 43
let goalGridItem = document.querySelector(`#f${gridId}`) 

    let knightImage = document.createElement("img")
    knightImage.src = "chess.png"
    knightImage.id = "knight"
    goalGridItem.append(knightImage)
}

let testArray = [1,1]
animateKnightsMovement(testArray)