import { getDays, setSelectedDays } from "./dataAccess.js"
import { selectTimes } from "./selectTimes.js"

export const selectDays = () => {
    let days = getDays()
    let html = `<h3>select <u>any</u> of the days that typically work best for you</h3>
                <div class="daylist">`
    let dayRadioButton = days.map(day => {
        return `<div class="days"> <input id="checkbox" name="simplecheckbox" type="checkbox" value="${day.id}">
                <label for="checkbox">${day.day}</label></div>`
    })
    html += dayRadioButton.join('')
    html += `</div>`
    return html
}


const surveyFormContainer = document.querySelector(".surveyForm")

surveyFormContainer.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "checkbox") {
        // Get what the user typed into the form fields
        let selectday = []
        const days = document.querySelector('input[name="simplecheckbox"]:checked').value
        selectday.push(parseInt(days))

        // // Make an object out of the user input
        const dataToSendToAPI = {
            days: selectday
        }
        

        // // Send the data to the API for permanent storage
        setSelectedDays(dataToSendToAPI)
        console.log(dataToSendToAPI)
        selectTimes()
    }
})