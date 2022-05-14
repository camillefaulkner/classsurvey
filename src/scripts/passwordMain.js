import { fetchPassword } from "./dataAccess.js"
import { password } from "./password.js"

const passwordContainer = document.querySelector(".password")



const passwordHTML = () => {
    fetchPassword()
    //     .then(() => fetchPlayers())
    //     .then(() => fetchTeamScores())
        .then(
            () => {
    passwordContainer.innerHTML = password()
        }
    )
}

passwordHTML()
