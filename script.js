const chessBoard = [[0,1,2,3,4,5,6,7],[0,1,2,3,4,5,6,7]]
// ([x-axis],[y-axis])

let positionGoal = []
let positionStart = [] 

// driver function that allows input of start and end field
function knightTravails(start, goal){
    let madeMoves = createGraph(start, goal)
    console.log(madeMoves)
    madeMoves.forEach((move, index) => {
             setTimeout(() => animateKnightsMovement(move), (index+1)*2000)
    });
}
// a node factory function
function createNode(position){
    return {
        position: position,
    }
}
// breadth first search
function createGraph(start, goal){
    let visitedQueue = []
    let queue = []
    let root = createNode(start)
    visitedQueue.push(root.position)

    // adding nodes to queue does not make sense
    queue.push(root)

    // start the loop
    while(queue.length>0){
        // remove first item of array
        let removedNode = queue.shift()

        visitedQueue.push(removedNode.position)
        if(removedNode.position[0] === goal[0] && removedNode.position[1] === goal[1]){
            
            return pathToArray(removedNode)
            // return route in graph from root to this position
            // maybe run a search on the created graph 
            // turn that path into an array (to be animated)  
        }
        let neighbors = calculateNextPositions(removedNode.position)
        neighbors.forEach((neighpos, index) => {
            // make sure that position has not been visited before
            if(!visitedQueue.includes(neighpos)){
                // create a new (next) node
                let nextNode = createNode(neighpos)
                // set the node.position
                nextNode.position = neighpos
                nextNode.previous = removedNode
                // push node to queue
                queue.push(nextNode)
                // add that position to the graph as next (of removedItem)
                let key = `next${index}`
                removedNode[key] = nextNode
            }
        });
    }
}
// calculate the neighbors of a position
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
// animate the knight image
function animateKnightsMovement(position){

    // clear the previous knight position
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
// return the path from root of graph to goal position as an array
function pathToArray(endNode){
    let pathArray = []
    while(endNode.previous){
        pathArray.unshift(endNode.position)
        endNode = endNode.previous
    }
    pathArray.unshift(endNode.position)
    return pathArray
}

// maybe hightlight the start and end point
// add eventlistener for start and end
function addStartEventListeners(){
    let fields = document.querySelectorAll(".field")
    fields.forEach(field => {
        field.addEventListener("click", setStartPoint)
    });
}
addStartEventListeners()
// remove the start point eventlisteners
function removeStartEventListeners(){
    let fields = document.querySelectorAll(".field")
    fields.forEach(field => {
        field.removeEventListener("click", setStartPoint)
    });
}


function setStartPoint(){
    // save the start point
    console.log(this)
    let cssId = this.id
    // extract only the number
    let id = cssId.substring(1);
    console.log(id)
    // calculate the grid position
    let xAxis = id%8-1
    let yAxis = id/8
    let calculatedPosition = [xAxis, yAxis]
    console.log(calculatedPosition)
    //let gridId = x + 64-(y*8)-7
    // g = x -8y + 57
    // x = g + 8y - 57
    //     y = (-g + x + 57)/8
    // y = -1/8g + 1/8x + 57/8
  
// equation for grid id: x + 64-(y*8)-7
// 0 + 64-(0*8)-7 = 57
// 1 + 64-(1*8)-7 = 50
// 2 + 64-(2*8)-7 = 43



    // positionStart = []

    // add styling
    this.classList.add("startPoint")
    // remove the start point eventlisteners
    //removeStartEventListeners()

}