import "./style.css"

// Variables
const daysEl = document.querySelector("#days")
const hoursEl = document.querySelector("#hours")
const minutesEl = document.querySelector("#minutes")
const secondsEl = document.querySelector("#seconds")

const coming = "1 Jan 2025"

// Function countdown
const countdown = () => {
    const comingDate = new Date(coming)
    const currentDate = new Date()

    const totalSeconds = (comingDate - currentDate) / 1000

    const days = Math.floor(totalSeconds / 60 / 60 / 24)
    const hours = Math.floor(totalSeconds / 60 / 60) %24
    const minutes = Math.floor(totalSeconds / 60) %60
    const seconds = Math.floor(totalSeconds) %60

    daysEl.innerHTML = days
    hoursEl.innerHTML = hours
    minutesEl.innerHTML = minutes
    secondsEl.innerHTML = seconds
}

setInterval(countdown, 1000)