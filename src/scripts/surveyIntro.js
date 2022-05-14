

export const surveyIntro = () => {
    let html = `<div class="survey">
                <div class="unbold">
                the unmatched cohort56 demands in-person get togethers<br>
                we must network<br>
                we must collaborate<br>
                we must partake in drinking activities<br>
                <br><br><br>
                however, cohort56 has conflicting schedules.....
                </div>
                <br><br><br><br><br>
                <div class="begin">survey begins <a href="survey.html"><button class="welcomebutton" id="surveyarrow" name="surveyarrow">&rarr;</button></a></div>
                <div>`
    return html
}

document.addEventListener(
    "click",
    (event) => {
        if (event.target.name === "surveyarrow") {
            document.dispatchEvent(new CustomEvent("stateChanged"))
            console.log(`clicked`)
        }
    }
)