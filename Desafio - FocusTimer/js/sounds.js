export default function Sound() {

  

  const pressNature = new Audio("./audios/nature.wav") 

  const pressRain = new Audio("./audios/rain.wav")

  const pressHouse = new Audio("./audios/house.wav")

  const pressFire = new Audio("./audios/fire.wav")
  
  function choiceNature() {
    pressNature.play()
    pressRain.pause()
    pressHouse.pause()
    pressFire.pause()
  }

  function choiceRain() {
    pressNature.pause()
    pressRain.play()
    pressHouse.pause()
    pressFire.pause()
  }

  function choiceHouse() {
    pressNature.pause()
    pressRain.pause()
    pressHouse.play()
    pressFire.pause()
  }

  function choiceFire() {
    pressNature.pause()
    pressRain.pause()
    pressHouse.pause()
    pressFire.play()
  }
  
  return {
    choiceNature,
    choiceRain,
    choiceHouse,
    choiceFire
  }

}