// variables
let score = 0
let scoreDisplay = document.querySelector('#score')
let timerDisplay = document.querySelector('#timer')
let timerCount = 10
let moles = document.querySelectorAll('.moles')
timerDisplay.innerHTML = timerCount
//functions
const startGame = () => {}

const timer = setInterval(() => {
  timerCount--
  timerDisplay.innerHTML = timerCount
  if (timerCount <= 0) {
    clearInterval(timer)
    timerDisplay.innerHTML = 'Game Over!'
    timerDisplay.style.fontSize = '36px'
  }
}, 1000)

const moleSelection = () => {
  const moleLocal = Math.floor(Math.random() * 9)
}

//events
