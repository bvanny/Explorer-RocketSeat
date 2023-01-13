const btnTry = document.querySelector('#btnTry')
const btnReset = document.querySelector('#btnReset')
const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')

let element = document.querySelector('.screen2 p')
let randomNumber = Math.round(Math.random() * 10)
let xAttempts = 1



btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleResetClick)



function handleTryClick(event) {
  event.preventDefault()

  const inputNumber = document.querySelector('#inputNumber')

  if(Number(inputNumber.value) == randomNumber) {
    toggleScreen()
    screen2.querySelector('p').innerText = `Você acertou em ${xAttempts} tentativas` 
  }

  if (Number(inputNumber.value) < 0 || Number(inputNumber.value) > 10 || (!Number(inputNumber.value) && Number(inputNumber.value)!=0)) {
    screen2.querySelector('p').innerText = `Escolha um numero de 0 a 10`
    element.style.setProperty('--bg-secondary', 'red')
    handleResetClick()
  } else {
    element.style.setProperty('--bg-secondary', '#1F846C')
  }

  inputNumber.value = ''
  xAttempts++
}

function handleResetClick() {
  toggleScreen()
  randomNumber = Math.round(Math.random() * 10)
  xAttempts = 1
}

function toggleScreen() {
  screen1.classList.toggle('hide')
  screen2.classList.toggle('hide')
}


