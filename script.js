// variables
let score = 0
let timerCount = 10
let scoreDisplay = document.querySelector('#score')
let timerDisplay = document.querySelector('#timer')
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
  timerDisplay.style.fontSize = '96px'
  timerDisplay.style.color = 'black'
  countDown()
}

const countDown = () => {
  const timer = setInterval(() => {
    moleSelection()
    timerDisplay.classList.add('timerPulse')
    timerCount--
    timerDisplay.innerHTML = timerCount
    if (timerCount === 3) {
      timerDisplay.style.color = 'red'
    } else if (timerCount <= 0) {
      clearInterval(timer)
      gameOver(score)
      // timerDisplay.innerHTML = 'Game Over!'
      // timerDisplay.style.fontSize = '45px'
      timerDisplay.classList.remove('timerPulse')
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

const gameOver = (whacked) => {
  timerDisplay.style.fontSize = '60px'
  timerDisplay.style.color = '#2017CB'
  timerDisplay.style.fontWeight = 'bold'
  if (whacked >= 6) {
    timerDisplay.innerHTML = 'Mole Killa!'
    timerDisplay.classList.add('winnerTest')
  } else if (whacked < 6 && whacked > 0) {
    timerDisplay.innerHTML = 'Nice Try'
  } else {
    timerDisplay.innerHTML = 'Moles Win!'
  }
}

//events
button.addEventListener('click', startGame)
