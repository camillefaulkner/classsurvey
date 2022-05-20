import { getDays, setSelectedDays } from "./dataAccess.js"
import { selectTimes } from "./selectTimes.js"

export const selectDays = () => {
    let databaseDays = getDays()
    let html = `<h4>select <u>any</u> of the upcoming days that work best for you</h4>
                <div class="daylist">`
    let dayRadioButton = databaseDays.map(day => {
        return `<input id="checkbox--${day.id}" class="simplecheckbox" type="checkbox" value="${day.id}">
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
        let days = document.querySelectorAll(".simplecheckbox")
        for (const day of days) {
            // selectday.clear()
            if (day.checked === true) {
                const [,dayId] = clickEvent.target.id.split("--")
                selectedDay.add(parseInt(dayId))
            }
        }
        let selectedDayArray = [...selectedDay]
        setSelectedDays(selectedDayArray)
        console.log(selectedDayArray)
        selectTimes()
    }
})