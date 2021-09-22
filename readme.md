# Description
As part of the assessment I was given I was to find all possible moves for a Knight piece on a chess board.
I started by creating basic unit test with error handling first then built a list of moves and filter them

All unit test seem to be passing and I am able to run the command in node using the example below. 

# Run
```node.js
const knight = require('./knight.js');
knight.listPossible(0,0);
```