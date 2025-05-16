let clockDiv = document.querySelector('.clock')

function digitalClock(){
    let newTime = new Date()
    // console.log(newTime.toLocaleTimeString())
    clockDiv.innerHTML = newTime.toLocaleTimeString()
}

setInterval(digitalClock, 1000)

