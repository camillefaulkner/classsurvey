import { fetchDays, fetchNashvilleAreas } from "./dataAccess.js"
import { selectWeekDayTimes, selectWeekEndTimes } from "./selectTimes.js"
import { surveyForm } from "./surveyForm.js"

const surveyFormContainer = document.querySelector(".surveyForm")


surveyFormContainer.addEventListener(
    "stateChanged",
    customEvent => {
        surveyFormRender()
    })

const surveyFormRender = () => {
    fetchDays()
            .then(() => fetchNashvilleAreas())
        .then(
            () => {
                surveyFormContainer.innerHTML = surveyForm()
            }
        )
}

surveyFormRender()


