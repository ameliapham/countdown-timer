import "./style.css"

// Variables for time values
const daysEl = document.querySelector("#days")
const hoursEl = document.querySelector("#hours")
const minutesEl = document.querySelector("#minutes")
const secondsEl = document.querySelector("#seconds")

// Variables for leading zero
let leadingDays = 0
let leadingHours = 0
let leadingMinutes = 0
let leadingSeconds = 0

const coming = "08 Aug 2024"

// Function countdown
const countdown = () => {
    const comingDate = new Date(coming)
    const currentDate = new Date()

    const totalSeconds = (comingDate - currentDate) / 1000

    const days = Math.floor(totalSeconds / 60 / 60 / 24)
    const hours = Math.floor(totalSeconds / 60 / 60) %24
    const minutes = Math.floor(totalSeconds / 60) %60
    const seconds = Math.floor(totalSeconds) %60

    if (seconds < 10) {
        leadingSeconds = "0" + seconds
    } else {
        leadingSeconds = seconds
    }

    if (minutes < 10) {
        leadingMinutes = "0" + minutes
    } else {
        leadingMinutes = minutes
    }

    if (hours < 10) {
        leadingHours = "0" + hours
    } else {
        leadingHours = hours
    }

    if (days < 10) {
        leadingDays = "0" + days
    } else {
        leadingDays = days
    }

    daysEl.innerHTML = leadingDays
    hoursEl.innerHTML = leadingHours
    minutesEl.innerHTML = leadingMinutes
    secondsEl.innerHTML = leadingSeconds

    
}

setInterval(countdown, 1000)