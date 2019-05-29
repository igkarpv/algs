/*
You want to build a house on an empty land which reaches all buildings in the shortest amount of distance. You can only move up, down, left and right. You are given a 2D grid of values 0, 1 or 2, where:

Each 0 marks an empty land which you can pass by freely.
Each 1 marks a building which you cannot pass through.
Each 2 marks an obstacle which you cannot pass through.
Example:

Input: [[1,0,2,0,1],[0,0,0,0,0],[0,0,1,0,0]]

1 - 0 - 2 - 0 - 1
|   |   |   |   |
0 - 0 - 0 - 0 - 0
|   |   |   |   |
0 - 0 - 1 - 0 - 0

Output: 7

Explanation: Given three buildings at (0,0), (0,4), (2,2), and an obstacle at (0,2),
             the point (1,2) is an ideal empty land to build a house, as the total
             travel distance of 3+3+1=7 is minimal. So return 7.
Note:
There will be at least one building. If it is not possible to build such house according to the above rules, return -1.
*/

/**
 * @param {number[][]} grid
 * @return {number}
 */
var Node = function(row, col) {
    this.row = row
    this.col = col
}
var bfs = function(start, grid, totalBuildings) {

    let queue = []
    let visited = new Array(grid.length);

    for(let v = 0; v < visited.length; v++) {
        visited[v] = new Array(grid[v].length)
        for (let c = 0; c < visited[v].length; c++) {
            visited[v][c] = 0
        }
    }

    queue.push(start)

    let distance = -1
    let distanceSum = 0
    let reachedBuildings = 0

    while(queue.length > 0) {

        distance++

        let levelCount = queue.length

        for(let q = 0; q < levelCount; q++) {
            let node = queue.shift()

            if (visited[node.row][node.col] == 1) {
                continue
            }

            visited[node.row][node.col] = 1

            let cellVal = grid[node.row][node.col]

            if (cellVal == 1) {
                distanceSum += distance
                reachedBuildings++
                continue
            } else if (cellVal == 2) {
                continue
            }

            let up = new Node(node.row, node.col - 1)
            let down = new Node(node.row, node.col + 1)
            let left = new Node(node.row - 1, node.col)
            let right = new Node(node.row + 1, node.col)

            let nextNodes = []
            nextNodes.push(up)
            nextNodes.push(down)
            nextNodes.push(left)
            nextNodes.push(right)

            for(let nextNode of nextNodes) {

                if (nextNode.row < 0 || nextNode.row >= grid.length || nextNode.col < 0 || nextNode.col >= grid[nextNode.row].length)  {
                    continue
                }

                if (visited[nextNode.row][nextNode.col] == 1) {
                    continue;
                }

                let nextVal = grid[nextNode.row][nextNode.col]
                if (nextVal == 2) {
                    continue
                }

                queue.push(nextNode)

            }

        }

    }
   // console.log(visited)
   // console.log(reachedBuildings)
    return [reachedBuildings == totalBuildings, distanceSum]
}

var shortestDistance = function(grid) {

    let buildings = 0 // count of building nodes

    for(let row = 0; row < grid.length; row++) {
        for(let col = 0; col < grid[row].length; col++) {
            if (grid[row][col] == 1) {
                buildings++
            }
        }
    }

    let bestTotalDistance = Number.MAX_SAFE_INTEGER
    let found = false
    for(let row = 0; row < grid.length; row++) {
        for(let col = 0; col < grid[row].length; col++) {
            if (grid[row][col] == 0) {
                let res = bfs(new Node(row, col), grid, buildings)
                if (res[0] && res[1] < bestTotalDistance) {
                    //console.log('row = ' + row +', col = ' + col)
                    bestTotalDistance = res[1]
                    found = true
                }
            }
        }
    }

    if (!found) {
        return -1
    }

    return bestTotalDistance

};
