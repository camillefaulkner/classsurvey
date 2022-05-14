import { fetchDays, fetchSelectedDays } from "./dataAccess.js"
import { surveyForm } from "./surveyForm.js"

const surveyFormContainer = document.querySelector(".surveyForm")


document.addEventListener("stateChanged", event => {
    surveyFormRender()
})

const surveyFormRender = () => {
    fetchDays()
        .then(() => fetchSelectedDays())
    //     .then(() => fetchTeamScores())
        .then(
            () => {
    surveyFormContainer.innerHTML = surveyForm()
        }
    )
}

surveyFormRender()
