

export const welcomePage = () => {
    let html = `<div class="welcome">cohort56 <button class="welcomebutton arrow" name="arrow">&rarr;</button><div>`
    return html
}


document.addEventListener(
    "click",
    (event) => {
        if (event.target.name === "arrow") {
            document.dispatchEvent(new CustomEvent("stateChanged"))
        }
    }
)


