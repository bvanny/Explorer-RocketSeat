const btnOpen = document.querySelector("#btnOpen")
const btnReset = document.querySelector("#btnReset")
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")

btnOpen.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleResetClick)

function getPhrases() {
  let randomPhrases = new Array ()

  randomPhrases[0] = "Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu."
  randomPhrases[1] = "Sorte na vida é sentir a felicidade de viver cada momento."
  randomPhrases[2] = "Sorte é reconhecer as boas oportunidades e saber aproveitá-las."
  randomPhrases[3] = "A sorte me acompanha, tenho corpo fechado à inveja, a intriga não me amarra os pés, sou imune ao mau-olhado.” (Jorge Amado)"
  randomPhrases[4] = "Eu quero a sorte de um amor tranquilo.” (Cazuza)"
  
  let i = Math.floor(5 * Math.random())
  document.getElementById("luck").innerHTML = randomPhrases[i]
}


function handleTryClick() {
  handleToggle()
  getPhrases()
}

function handleResetClick() {
  handleToggle()
}

function handleToggle() {
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")
}