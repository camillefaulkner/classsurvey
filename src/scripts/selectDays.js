import { getDays, setSelectedDays } from "./dataAccess.js"
import { selectTimes } from "./selectTimes.js"

export const selectDays = () => {
    let days = getDays()
    let html = `<h3>select <u>any</u> of the days that typically work best for you</h3>
                <div class="daylist">`
    let dayRadioButton = days.map(day => {
        return `<input id="checkbox_${day.id}" class="simplecheckbox" type="checkbox" value="${day.id}">
                <label for="checkbox">${day.day}</label>`
    })
    html += dayRadioButton.join('')
    html += `</div>`
    return html
}


const surveyFormContainer = document.querySelector(".surveyForm")
let selectday = new Set()

surveyFormContainer.addEventListener("click", clickEvent => {
    if (clickEvent.target.id.startsWith("checkbox")) {
        // Get what the user typed into the form fields
        let days = document.querySelectorAll(".simplecheckbox")
        for (const day of days) {
            // selectday.clear()
            if (day.checked === true) {
                selectday.add(parseInt(day.value))
            }
        }

        let dayArray = [...selectday]
        // // Make an object out of the user input
        const dataToSendToAPI = {
            days: dayArray
        }
        
        console.log(selectday)
        // // Send the data to the API for permanent storage
        setSelectedDays(dataToSendToAPI)
        selectTimes()
    }
})