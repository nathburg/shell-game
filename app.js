// import functions and grab DOM elements
const cupOneButton = document.getElementById('cup-one-button');
const cupTwoButton = document.getElementById('cup-two-button');
const cupThreeButton = document.getElementById('cup-three-button');
const cupOnePic = document.getElementById('cup-one-pic');
const cupTwoPic = document.getElementById('cup-two-pic');
const cupThreePic = document.getElementById('cup-three-pic');
const totalEl = document.getElementById('total-count');
const correctEl = document.getElementById('correct-count');
const incorrectEl = document.getElementById('incorrect-count')

// let state
let totalCount = 0;
let correctCount = 0;

const cups = [cupOnePic, cupTwoPic, cupThreePic];

// set event listeners 
cupOneButton.addEventListener('click', () => {

  const correctCup = getRandomItem(cups);
  handleGuess(cupOnePic, correctCup);
})
cupTwoButton.addEventListener('click', () => {
  const correctCup = getRandomItem(cups);
  handleGuess(cupTwoPic, correctCup);
})
cupThreeButton.addEventListener('click', () => {
  const correctCup = getRandomItem(cups);
  handleGuess(cupThreePic, correctCup);

})

function resetStyles() {
  cupOnePic.src = '/assets/cup.png'
  cupTwoPic.src = '/assets/cup.png'
  cupThreePic.src = '/assets/cup.png'
}

function getRandomItem(arr) {
  const itemNumber = Math.floor(Math.random() * arr.length);
  return arr[itemNumber];
}

function handleGuess(userGuess, correctSpot) {
  resetStyles();
  correctSpot.src = '/assets/upside-down-cup.jpg';
  totalCount++;
  if (userGuess === correctSpot) {
    correctCount++;
  }
  totalEl.textContent = totalCount;
  correctEl.textContent = correctCount;
  incorrectEl.textContent = totalCount - correctCount;
}

  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
