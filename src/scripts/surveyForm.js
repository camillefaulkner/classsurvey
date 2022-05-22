import { selectDays } from "./selectDays.js"
import { selectWeekDayTimes, selectWeekEndTimes } from "./selectTimes.js"
import { areaPreference } from "./areaPreference.js"
import { getState } from "./dataAccess.js"

export const surveyForm = () => {
    let html = `<div class="surveyForm">

                <br>
                <h4>select <u>any</u> of the upcoming days that work best for you</h4>
                ${selectDays()}
                <br><hr>
                <h4>select <u>any</u> timeframe that works for you</h4>
                ${selectWeekDayTimes()}
                ${selectWeekEndTimes()}
                <h4>nashville area preference</h4>
                ${areaPreference()}
                <br><br><br>optional: specific meeting location suggestion <input type="text" name="suggestion id="suggestion" class="input" placeholder="dinos"/><br><br>
                <br>
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




surveyFormContainer.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "suggestion") {
            // Get what the user typed into the form fields
            const suggestion = document.querySelector("input[name='suggestion']").value
    
            // Make an object out of the user input
            const dataToSendToAS = {
                suggestion: suggestion
            }
    
            setSuggestion(dataToSendToAS)
            
            console.log(dataToSendToAS)
    
        } 
    }
)


surveyFormContainer.addEventListener("click", clickEvent => {
    
    if (clickEvent.target.id === "submitsurvey") {
        
        let state = getState()
        let selectedDays = state.selectedDays
        let selectedTimes = state.selectedTimes
        let selectedAreas = state.selectedAreas
        let suggestion = state.suggestion

        const dataToSendToAPI = {
            days: selectedDays,
            times: selectedTimes,
            areas: selectedAreas,
            suggestion: suggestion
        }

        saveSurvey(dataToSendToAPI)
        console.log(dataToSendToAPI)
    }
})