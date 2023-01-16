export default function Events({
  buttonPlay,
  timer,
  buttonStop,
  buttonSetMore,
  buttonSetLess,
  buttonSoundNature,
  buttonSoundRain,
  buttonSoundHouse,
  buttonSoundFire,
  sound,
  animations
}) {

  function disableButton(event) {
    buttonPlay.disabled = event;
  }
  
  buttonPlay.addEventListener('click', function(event) {
    disableButton(true)
    timer.countdown()
    buttonPlay.classList.add('btnColorDisabled')
  })
  
  buttonStop.addEventListener('click', function() {
    disableButton(false)
    timer.reset()
    buttonPlay.classList.remove('btnColorDisabled')
  })
  
  buttonSetMore.addEventListener('click', function() {
    timer.addTime()
  })
  
  buttonSetLess.addEventListener('click', function() {
    timer.subTime()
  })

  buttonSoundNature.addEventListener('click', function() {
    sound.choiceNature()
    animations.animationNature()
  }) 

  buttonSoundRain.addEventListener('click', function() {
    sound.choiceRain()
    animations.animationRain()
  }) 

  buttonSoundHouse.addEventListener('click', function() {
    sound.choiceHouse()
    animations.animationHouse()
  }) 

  buttonSoundFire.addEventListener('click', function() {
    sound.choiceFire()    
    animations.animationFire()
  }) 

}

