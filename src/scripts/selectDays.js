import { getDays, setSelectedDays } from "./dataAccess.js"
import { selectWeekDayTimes, selectWeekEndTimes } from "./selectTimes.js"

export const selectDays = () => {
    let databaseDays = getDays()
    let html = `<div class="daylist">`
    let dayRadioButton = databaseDays.map(day => {
        return `<input id="checkbox--${day.id}" class="daycheckbox" type="checkbox" value="${day.id}">
                <label for="checkbox">${day.day}</label>`
    })
    html += dayRadioButton.join('')
    html += `</div>`
    return html
}


const surveyFormContainer = document.querySelector(".surveyForm")
let selectedDay = new Set()

surveyFormContainer.addEventListener("click", clickEvent => {
    if (clickEvent.target.id.startsWith("checkbox")) {
        // Get what the user typed into the form fields
        let days = document.querySelectorAll(".daycheckbox")
        for (const day of days) {
            // selectday.clear()
            if (day.checked === true) {
                const [,dayId] = clickEvent.target.id.split("--")
                selectedDay.add(parseInt(dayId))
            }
        }
        let selectedDayArray = [...selectedDay]
        setSelectedDays(selectedDayArray.sort())

        // selectWeekDayTimes()
        // selectWeekEndTimes()
    }
})