const timer = document.getElementById("timer")
const start = document.getElementById("start")
const pause = document.getElementById("pause")
const reset = document.getElementById("reset")

let totalSeconds = 0
let interval = null

function formatTime(totalSeconds) {
    let hours = Math.floor(totalSeconds / 3600)
    let minutes = Math.floor((totalSeconds % 3600) / 60)
    let seconds = totalSeconds % 60

    return [
        hours.toString().padStart(2, "0"),
        minutes.toString().padStart(2, "0"),
        seconds.toString().padStart(2, "0"),
    ].join(":")
}

function startTimer() {
    if(!interval) {
        interval = setInterval(() => {
            totalSeconds++
            timer.textContent = formatTime(totalSeconds)
        }, 1000)
    }
}

function pauseTimer() {
    clearInterval(interval)
    interval = null
}

function resetTimer() {
    pauseTimer()
    totalSeconds = 0
    timer.textContent = "00:00:00"
}

start.addEventListener("click", startTimer)
pause.addEventListener("click", pauseTimer)
reset.addEventListener("click", resetTimer)