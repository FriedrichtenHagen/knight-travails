# Knight takes the shortest path

The knight takes a shortest path between two points on a chess board.

Here is a link to a live demo: https://friedrichtenhagen.github.io/knight-travails/

![game screenshot](/chess-board-screenshot.png)

## How it's made:

### Tech used: HTML, CSS, Javascript

The user may enter a start point and end point. The knight will then take a shortest possible path between these two points. 
To solve this problem I used a breadth-first algorithm.
A graph is created that begins with the start point as the root node.
Each legal (contained within the 64 fields of the board) and not previously visited (this would result in endless loops) neighboring field is evaluated to see if it is the goal field. 
If this first level of moves does not result in our goal, we then continue with the neighbors of each of those nodes. 
This is repeated until we reach the goal node.
Since we are traversing the graph using a breadth-first approach the resulting path between the root node an our first time reaching the goal must be a shortest path (minimum amount of moves).


## Lessons learned:

A great example of breadth-first search and using a graph to solve a problem. 