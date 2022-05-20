import { selectDays } from "./selectDays.js"
import { selectTimes } from "./selectTimes.js"

export const surveyForm = () => {
    let html = `<div class="surveyForm">
                <h2>upcoming weekend meetup</h2>
                <br>
                ${selectDays()}
                <br><hr>
                ${selectTimes()}
                <br><br><br>
                nashville area preference <br><br>
                optional: specific meeting location suggestion <br><br>
                <button class="button surveybutton" id="submitsurvey">submit survey</button>
                </div>`
    return html
}


const surveyFormContainer = document.querySelector(".surveyForm")

surveyFormContainer.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "submitsurvey") {
        window.location.href = "success.html"
    }
})

