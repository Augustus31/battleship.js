# Voice Battleship
[![Build Status](https://scrutinizer-ci.com/g/lluiscamino/battleship.js/badges/build.png?b=master)](https://scrutinizer-ci.com/g/lluiscamino/battleship.js/build-status/master) [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/lluiscamino/battleship.js/blob/master/LICENSE)

## Description
A Voice activated Battleship game based on battleship.js by iluiscamino. 
## How it works
1. There are 5 types of boats and 7 boats in total:

    ```js
    Game.numBoatTypes = 5;
    Game.numBoatsPerType = [0, 2, 2, 1, 1, 1];
    ```
   1. 2 boats occupying 1 cell
   2. 2 boats occupying 2 cells
   3. 1 boat occupying 3 cells
   4. 1 boat occupying 4 cells
   5. 1 boat occupying 5 cells
2. Boats have to be placed horizontally or vertically
3. Boats cannot be placed outside the 10x10 grid
4. Boats cannot be placed on another boat or around it (every boat has to be distanced one cell from the rest of the boats)

All boats are automatically placed by the game. On your turn, you fire at the opponent's grid (right), trying to hit their boats. The opponent immediately fires back on your grid (left). You can fire by clicking the tile with your mouse or by saying the coordinates of the tile to the voice button (bottom right).

Special Moves (voice only):

1. Barrage (you can fire multiple shots in one go by saying them one after the other. Maximum 5 in one go.)
2. Airstrike (you can call in an airstrike on a tile, which will hit the tile and 4 tiles around it.)

## Improvements over Original Game
1. Voice activation using Alan AI
2. Nice background
3. Functional restart button
4. Sound effects
5. Special Moves (listed above)

## Built with
* [Bootstrap](https://getbootstrap.com/)
## Play
[Click here to play](https://honorius.us/battleships/index.html)
