// DOM References
const gameGridEl = document.getElementById("game-board")

// Global Variables (aka State)
let currentPlayer = 'x'; // this is either 'x' or 'o'

// Functions

// Psuedocode:
// When the user clicks on a square, we want to:
// 1. Check if it's already a full square
// 2. If it isn't already a full square, set it to X or Y -
//    depending on the current player 
// 3. Check to see if someone won or the game is tied
// 3a. If someone won - end the game
// 4. Change the currentPlayer 
function handleClick(event) {
    // Helper variable that holds the square we clicked
    let clickedSquare = event.target
    // clickedSquare.id is "square_1", "square_2", etc.
    console.log(clickedSquare.id)

    // Reject clicks to the parent
    if(clickedSquare === event.currentTarget) return;
    
    
    // Step 1: Check if square is full

    // Step 2: Add the X or the O
    clickedSquare.classList.add(currentPlayer)
    
    // Step 3: Check to see if someone won

    // Step 4: Change the currentPlayer
    // currentPlayer = currentPlayer === 'x' ? 'o' : 'x'
}

// Event Listeners
gameGridEl.addEventListener('click', handleClick)












// const gameBoard = [ // this represents the game board's state
//     [null, null, null],
//     [null, null, null],
//     [null, null, null]
// ]

// function makeMove() {
//     // Psuedocode:
//     // Goal: We want to make a move on the selected square - 
//     // Caveats: Gotta make sure the square isn't already full
//     // Step 1: 
// }