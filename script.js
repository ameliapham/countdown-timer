import "./style.css"

const coming = "1 Jan 2025"

const countdown = () => {
    const comingDate = new Date(coming)
    const currentDate = new Date()

    const totalSeconds = (comingDate - currentDate) / 1000

    const days = Math.floor(totalSeconds / 60 / 60 / 24)
    const hours = Math.floor(totalSeconds / 60 / 60) %24
    const minutes = Math.floor(totalSeconds / 60) %60
    const seconds = Math.floor(totalSeconds) %60

    console.log(days, hours, minutes, seconds)
}

countdown()