// Elements
const blinkPointElement = document.querySelector('[data-blink]')
const minuteElement = document.querySelector('[data-min]')
const secondElement = document.querySelector('[data-sec]')
const intervalTime = 1000
const initialTime = {
    minutes: 10,
    seconds: 13
}
const numberOfDaysToReset = 1


const setInicialAndFinalDateToResetClock = (numberOfDaysToReset) => {
    const days = {
        today: new Date(),
        tomorrow: new Date()
    }

    days.tomorrow.setDate(days.today.getDate() + numberOfDaysToReset);

    const lastDataOfVisit = localStorage.getItem('lastDataOfVisit')
    const dataToReset = localStorage.getItem('dataToReset')

    const isAlreadyVisit = (lastDataOfVisit && dataToReset) == true

    if (!isAlreadyVisit) {
        localStorage.setItem('lastDataOfVisit', days.today)
        localStorage.setItem('dataToReset', days.tomorrow)
    }
}

const setInitialValuesOnClock = (minuteElement, secondElement, initialTime, numberOfDaysToReset) => {
    const minutesStorageElement = localStorage.getItem('clockMinutes')
    const secondsStorageElement = localStorage.getItem('clockSeconds')
    const dataToResetIsAlready = localStorage.getItem('dataToReset')

    const isAlreadyVisit = minutesStorageElement && secondsStorageElement && dataToResetIsAlready

    if (isAlreadyVisit) {
        minuteElement.innerHTML = minutesStorageElement
        secondElement.innerHTML = secondsStorageElement
    }
    else {
        minuteElement.innerHTML = initialTime.minutes
        secondElement.innerHTML = initialTime.seconds
        setInicialAndFinalDateToResetClock(numberOfDaysToReset)
    }
}
setInitialValuesOnClock(minuteElement, secondElement, initialTime, numberOfDaysToReset)

const blinkEvent = (blinkPointElement, timeIsOver) => {
    if (!timeIsOver) {
        blinkPointElement.classList.value == false
            ? blinkPointElement.classList.add('blink')
            : blinkPointElement.classList.remove('blink')
    } else {
        blinkPointElement.classList.remove('blink')
    }
}
const decreaseValue = (valueElement, timeIsOver) => {
    if (!timeIsOver) {
        if (valueElement.innerHTML > 0) {

            valueElement.innerHTML > 10
                ? valueElement.innerHTML = --valueElement.innerHTML
                : valueElement.innerHTML = `0${--valueElement.innerHTML}`

        } else {
            valueElement.innerHTML = 59
        }
    }
}

const decreaseSecond = (valueElement, blinkPointElement, timeIsOver) => {
    decreaseValue(valueElement, timeIsOver)
    blinkEvent(blinkPointElement, timeIsOver)
    const inicialSeconds = localStorage.setItem('clockSeconds', valueElement.innerHTML)
}

const decreaseMinute = (valueElement) => {
    decreaseValue(valueElement)
    const inicialMinutes = localStorage.setItem('clockMinutes', valueElement.innerHTML)
}


const timeStep = () => {
    const minuteIsOver = minuteElement.innerHTML == 0
    const secondIsOver = secondElement.innerHTML == 0
    const timeIsOver = minuteIsOver && secondIsOver

    if (timeIsOver) {
        return clearInterval(startClock)
    }
    else {
        if (!minuteIsOver && secondIsOver) {
            decreaseSecond(secondElement, blinkPointElement, timeIsOver)
            decreaseMinute(minuteElement)
        }
        else {
            decreaseSecond(secondElement, blinkPointElement, timeIsOver)
        }
    }

}
const startClock = setInterval(timeStep, intervalTime)




