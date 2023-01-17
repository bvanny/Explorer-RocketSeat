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
  animations,
  natureVolume,
  rainVolume,
  houseVolume,
  fireVolume,
  btnNight,
  btnLight,
  dutTime,
  minutesDisplay,
  secondsDisplay,
  allButtonsColor
}) {

  const incrementVolume = value => 
    value < 1 ? (value * 10 + 1) / 10 : value;

  const decrementVolume = value => 
    value > 0 ? (value * 10 - 1) / 10 : value;

  function disableButton(event) {
    buttonPlay.disabled = event;
  }

  function allButtons() {
    buttonPlay,
    buttonStop
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

  natureVolume.addEventListener('change', function() {
    sound.pressNature.volume = this.value
  })

  buttonSoundRain.addEventListener('click', function() {
    sound.choiceRain()
    animations.animationRain()
  }) 

  rainVolume.addEventListener('change', function() {
    sound.pressRain.volume = this.value
  })

  buttonSoundHouse.addEventListener('click', function() {
    sound.choiceHouse()
    animations.animationHouse()
  }) 

  houseVolume.addEventListener('change', function() {
    sound.pressHouse.volume = this.value
  })

  buttonSoundFire.addEventListener('click', function() {
    sound.choiceFire()    
    animations.animationFire()
  }) 

  fireVolume.addEventListener('change', function() {
    sound.pressFire.volume = this.value
  })


  btnNight.addEventListener('click', function() {
    btnNight.classList.add('hide')
    btnLight.classList.remove('hide')
    document.body.classList.add('nightMode')
    minutesDisplay.classList.add('textNightMode')
    secondsDisplay.classList.add('textNightMode')
    dutTime.classList.add('textNightMode')
    for(let i = 0 ; i < 4; i++) {
      allButtonsColor[i].style.fill = '#fff';
    }
  })

  btnLight.addEventListener('click', function() {
    btnLight.classList.add('hide')
    btnNight.classList.remove('hide')
    document.body.classList.remove('nightMode')
    minutesDisplay.classList.remove('textNightMode')
    secondsDisplay.classList.remove('textNightMode')
    dutTime.classList.remove('textNightMode')
    for(let i = 0 ; i < 4; i++) {
      allButtonsColor[i].style.fill = '#323238';
    }
  })

}

