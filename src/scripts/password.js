import { getPassword } from "./dataAccess.js"


export const password = () => {
    let html = ''
    html += `
    <label class="label" for="password">what is steve's slack username?</label>
    <input type="text" name="password" class="input" placeholder="no @ , no caps"/>
    <button class="passwordbutton" id="submitPass">submit</button>`
    return html
}


const passwordContainer = document.querySelector(".password")

passwordContainer.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "submitPass") {
        let password = getPassword()
        let input = document.querySelector("input[name='password']").value
        password.find((password) => {
            if (input === password.password) {
                console.log(`works`)
                window.location.href = "welcome.html"
            } else {
                window.alert(`incorrect`)
            }
        })

    }
})


