// use can use node

class Knight {
    static listPossible(x, y) {
        // I throw error first because we know if its out range what the point providing a list of moves.
        if(x < 0 || x > 7 || y < 0 || y > 7) {
            throw new Error("Out of Range");
        }
        // I created list of all 8 possible moves and then filter out the ones that are invalid I was trying to keep it optimal as possible. currently this assignment has big O of 1 and the filter is just a foreach
        // so it function is really a big O(n) an the unit test run average of 1 ms 
        const list = [{x: x + 2, y: y + 1}, {x: x + 2, y: y - 1},{x: x + 1, y: y + 2},{x: x - 1, y: y + 2},{ x: x - 2, y: y + 1},{x: x - 2, y: y - 1},{x: x + 1, y: y - 2}, {x: x - 1, y: y - 2}];
        return list.filter((move) => move.x >= 0 && move.x <= 7 && move.y >= 0 && move.y <= 7).sort((a,b) => b.x - a.x);
    }
}

module.exports = Knight;