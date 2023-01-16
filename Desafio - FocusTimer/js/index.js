import Timer from "./timer.js"
import Events from "./events.js"
import Sound from "./sounds.js"
import Animations from "./transition.js"
import {
  buttonPlay,
  buttonStop,
  buttonSetMore,
  buttonSetLess,
  buttonSoundNature,
  buttonSoundRain,
  buttonSoundHouse,
  buttonSoundFire,
  minutesDisplay,
  secondsDisplay
} from "./elements.js"

const sound = Sound()

const timer = Timer({
  minutesDisplay,
  secondsDisplay
})

const animations = Animations({
  buttonSoundNature,
  buttonSoundRain,
  buttonSoundHouse,
  buttonSoundFire,
})

Events({
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
})

