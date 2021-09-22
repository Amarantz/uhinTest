const { test, expect } = require('@jest/globals');
const knight = require('./knight');

// I started with my unit test first because I wanted to be able to make sure the outcome was expected.
// as each area of the board is different such if on edge or corner we get less option to move.
// the requirements doesn't specify pieces on the board so I am just doing all available positions
describe('list all possible move for a knight', () => {
    test.each([
        [-1,0, []],
        [0,8, []],
        [-1,-1, []],
        [0,-1, []],
    ])("should get error x or y being out of range x: %i, y: %i", (x,y, expected) => {
        expect(() => knight.listPossible(x,y)).toThrow("Out of Range");
    });

    test.each([
        [0, 0, [{x: 1, y: 2}, {x: 2, y: 1}]],
        [0, 7, [{x: 1, y: 5}, {x: 2, y: 6}]],
        [7, 7, [{x: 6, y: 5}, {x: 5, y: 6}]],
        [7, 0, [{x: 5, y: 1}, {x: 6, y: 2}]],
        [1, 1, [{x: 0, y: 3}, {x: 2, y: 3}, {x: 3, y: 2}, {x: 3, y: 0}]],
        [1, 6, [{x: 2, y: 4}, {x: 0, y: 4}, {x: 3, y: 5}, {x: 3, y: 7}]],
        [6, 6, [{x: 7, y: 4}, {x: 5, y: 4}, {x: 4, y: 5}, {x: 4, y: 7}]],
        [6, 1, [{x: 7, y: 3}, {x: 5, y: 3}, {x: 4, y: 2}, {x: 4, y: 0}]],
        [5, 5, [{x: 7, y: 6}, {x: 7, y: 4}, {x: 6, y: 7}, {x: 6, y: 3}, {x: 3, y: 4}, {x: 3, y: 6}, {x: 4, y: 7}, {x: 4, y: 3}]]
    ])("should handle locations x: %i, y: %i locations: %j ", (x, y, expected) => {
       // we should only have 2 location if at 0,0 0,7, 7,7 7,0
        const knightPositions = knight.listPossible(x,y);

        expect(knightPositions.length).toBe(expected.length);
        expect(knightPositions).toEqual(expect.arrayContaining(expected));
    });
});