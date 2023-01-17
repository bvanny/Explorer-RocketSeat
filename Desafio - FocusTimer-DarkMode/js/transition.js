export default function Animations({
  buttonSoundNature,
  buttonSoundRain,
  buttonSoundHouse,
  buttonSoundFire,
}) {
  
  function animationNature() {
    buttonSoundNature.classList.add('activeNature')
    buttonSoundFire.classList.remove('activeFire')
    buttonSoundHouse.classList.remove('activeHouse')
    buttonSoundRain.classList.remove('activeRain')
  }

  function animationRain() {
    buttonSoundRain.classList.add('activeRain')
    buttonSoundFire.classList.remove('activeFire')
    buttonSoundHouse.classList.remove('activeHouse')
    buttonSoundNature.classList.remove('activeNature')
  }

  function animationHouse() {
    buttonSoundHouse.classList.add('activeHouse')
    buttonSoundFire.classList.remove('activeFire')
    buttonSoundRain.classList.remove('activeRain')
    buttonSoundNature.classList.remove('activeNature')
  }

  function animationFire() {
    buttonSoundFire.classList.add('activeFire')
    buttonSoundHouse.classList.remove('activeHouse')
    buttonSoundRain.classList.remove('activeRain')
    buttonSoundNature.classList.remove('activeNature')
  }

  return {
    animationNature,
    animationRain,
    animationHouse,
    animationFire
  }

}