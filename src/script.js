class Compass {
  constructor() {
    this.quantityOfSteps = 0
    this.startPosition = 75
    this.startDirection = 'N'
    this.compassRose = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW']
    this.turnQuontity = 0
  }

  clear() {
    this.quantityOfSteps = 0
    this.startPosition = 75
    compassArrow.style.transform = `rotate(${this.startPosition}deg) skewX(60deg)`
    this.turnQuontity = 0
    this.startDirection = 'N'
    this.updateDisplay()
  }

  minusDegree() {
    this.turnQuontity -= 45
  }

  addDegree() {
    compassArrow.style.transform = `rotate(${(this.startPosition +=
      this.turnQuontity)}deg) skewX(60deg)`
  }

  subtract() {
    compassArrow.style.transform = `rotate(${(this.startPosition -=
      this.turnQuontity)}deg) skewX(60deg)`
  }

  plusDegree() {
    this.turnQuontity += 45
  }

  updateDisplay() {
    quontityOfDeegre.innerText = this.turnQuontity
  }

  chooseDirection(direction = this.startDirection) {
    this.startDirection = direction
    const steps = this.compassRose.indexOf(this.startDirection)

    for (let i = 0; i < steps; i++) {
      this.quantityOfSteps += 45
    }
  }

  turnArrow() {
    compassArrow.style.transform = `rotate(${(this.startPosition +=
      this.quantityOfSteps)}deg) skewX(60deg)`
  }

  activeNextDisplay(currentDisplay, nextDisplay) {
    currentDisplay.classList.remove('active')
    nextDisplay.classList.add('active')
  }
}

// Compass button
const buttonsOfSide = document.querySelectorAll('.button-of-side')
const buttonMinus = document.querySelector('.minus_selector')
const buttonPlus = document.querySelector('.plus_selector')
const quontityOfDeegre = document.querySelector('.quontity-of-deegree')
const homeButton = document.querySelector('.action-button.reset')
const startButton = document.querySelector('.action-button.start')

// Compass arrow
const compassArrow = document.querySelector('.compass-arrow')

// Blocks
const startDisplay = document.querySelector('.step_container_one')
const actionDisplay = document.querySelector('.step_container_two')
const textOfAction = document.querySelector('.start_window-text')
const buttonOfAction = document.querySelector(
  '.start_window-action-button-selector'
)

let newCompass = new Compass()

// Events listeners
buttonPlus.addEventListener('click', () => {
  newCompass.plusDegree()
  newCompass.updateDisplay()
})

buttonMinus.addEventListener('click', () => {
  newCompass.minusDegree()
  newCompass.updateDisplay()
})

buttonsOfSide.forEach((button) => {
  button.addEventListener('click', () => {
    newCompass.chooseDirection(button.innerText)
    newCompass.turnArrow()
    newCompass.activeNextDisplay(startDisplay, actionDisplay)
  })
})

startButton.addEventListener('click', () => {
  newCompass.addDegree()
})

homeButton.addEventListener('click', () => {
  newCompass.activeNextDisplay(actionDisplay, startDisplay)
  newCompass.clear()
})
