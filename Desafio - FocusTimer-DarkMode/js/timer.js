export default function Timer({
  minutesDisplay,
  secondsDisplay
}) {

  let minutes = Number(minutesDisplay.textContent)
  let newMinutes = minutes
  let timerTimeOut

  function addTime() {
    if(newMinutes == '60'){
      return
    }
    newMinutes = newMinutes + 5
    updateDisplay(newMinutes, secondsDisplay.textContent)
  }

  function subTime() {
    if(newMinutes == '00') {
      return
    }
    newMinutes = newMinutes - 5
    updateDisplay(newMinutes, secondsDisplay.textContent)
  }

  function reset() {
    updateDisplay(newMinutes, 0)
    clearTimeout(timerTimeOut)
  }

  function updateDisplay(minutes, seconds) {
    minutesDisplay.textContent = String(minutes).padStart(2, "0")
    secondsDisplay.textContent = String(seconds).padStart(2, "0")
  }

  function countdown() {

    timerTimeOut = setTimeout(function() {   
      let minutes = Number(minutesDisplay.textContent)
      let seconds = Number(secondsDisplay.textContent)

      updateDisplay(minutes, 0)

      if(minutes <= 0 && seconds <= 0) {
        reset()
        return
      }

      if(seconds <= 0) {
        seconds = 60
        --minutes
      }
      
      updateDisplay(minutes, String(seconds - 1))


      countdown()
    }, 1000)

  }

  return {
    addTime,
    subTime,
    reset,
    updateDisplay,
    countdown
  }

}