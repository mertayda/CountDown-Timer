


 const daysl  = document.getElementById("days")
const hoursl  = document.getElementById("hours")
const minutesl = document.getElementById("mins") 
const secondsl = document.getElementById("second")

const newYears = "5 July 2021"

function countDown() {
    const newYearDate = new Date(newYears)
    const currentDate = new Date()

    const totalSeconds = (newYearDate - currentDate) / 1000

    
    const days = Math.floor(totalSeconds / 3600 / 24)
    const hours = Math.floor(totalSeconds / 3600) % 24
    const minutes = Math.floor(totalSeconds / 3600) % 60
    const seconds = Math.floor(totalSeconds)  % 60


    daysl.innerHTML = formatTime(days);
    hoursl.innerHTML = formatTime(hours);
    minutesl.innerHTML = formatTime(minutes) ;
    secondsl.innerHTML = formatTime(seconds);
}

countDown()
function formatTime(time) {
    return time< 10 ? `0${time}` : time
}

setInterval(countDown,1000) 