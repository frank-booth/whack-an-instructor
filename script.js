// variables
let score = 0
let scoreDisplay = document.querySelector('#score')
let timerDisplay = document.querySelector('#timer')
let timerCount = 10
let moles = document.querySelectorAll('.moles')
let button = document.querySelector('button')

timerDisplay.innerHTML = timerCount
scoreDisplay.innerHTML = score

//functions
const startGame = () => {
  score = 0
  timerCount = 10
  timerDisplay.innerHTML = timerCount
  scoreDisplay.innerHTML = score
  const timer = setInterval(() => {
    moleSelection()
    timerCount--
    timerDisplay.innerHTML = timerCount
    if (timerCount === 3) {
      timerDisplay.style.color = '#BD1817'
    } else if (timerCount <= 0) {
      clearInterval(timer)
      timerDisplay.innerHTML = 'Game Over!'
      timerDisplay.style.fontSize = '45px'
    }
  }, 1000)
}

const moleReset = (num) => {
  const clearMole = setTimeout(() => {
    moles[num].style.display = 'none'
    clearTimeout(clearMole)
  }, 1000)
}

const moleSelection = () => {
  const moleLocal = Math.floor(Math.random() * 9)
  moles[moleLocal].style.display = 'block'
  moles[moleLocal].addEventListener('click', () => {
    score++
  })
  scoreDisplay.innerHTML = score
  moleReset(moleLocal)
}

//events
button.addEventListener('click', startGame)
