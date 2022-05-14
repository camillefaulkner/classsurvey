import { welcomePage } from './welcomepage.js'
import { surveyIntro } from './surveyIntro.js'


const mainContainer = document.querySelector(".container")


const render = () => {
    // fetchTeams()
    //     .then(() => fetchPlayers())
    //     .then(() => fetchTeamScores())
    //     .then(
    //         () => {
    mainContainer.innerHTML = welcomePage()
    //     }
    // )
}

render()





const surveyIntroContainer = document.querySelector(".surveyIntro")

document.addEventListener("stateChanged", event => {
    surveyIntroRender()
})


const surveyIntroRender = () => {
    // fetchTeams()
    //     .then(() => fetchPlayers())
    //     .then(() => fetchTeamScores())
    //     .then(
    //         () => {
    mainContainer.innerHTML = ''
    surveyIntroContainer.innerHTML = surveyIntro()
    //     }
    // )
}
