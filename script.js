// variables
let score = 0
let scoreDisplay = document.querySelector('#score')
let timerDisplay = document.querySelector('#timer')
let timerCount = 10
let moles = document.querySelectorAll('.moles')

timerDisplay.innerHTML = timerCount

//functions
const startGame = () => {
  timerCount = 10
  score = 0
  timer()
}

const timer = setInterval(() => {
  moleSelection()
  timerCount--
  timerDisplay.innerHTML = timerCount
  if (timerCount <= 0) {
    clearInterval(timer)
    timerDisplay.innerHTML = 'Game Over!'
    timerDisplay.style.fontSize = '36px'
  }
}, 1000)

const moleReset = (num) => {
  moles[num].style.display = 'none'
}

const moleSelection = () => {
  const moleLocal = Math.floor(Math.random() * 9)
  moles[moleLocal].style.display = 'block'
  moles[moleLocal].addEventListener('click', () => {
    score++
  })
  scoreDisplay.innerHTML = score
}

//events
button.addEventListener('click', startGame)
