import { getAreas, setSelectedAreas } from "./dataAccess.js"


export const areaPreference = () => {
    let html = '<div class="daylist">'
    let areas = getAreas()
    areas.map(area => {
        html += `<input id="area--${area.id}" class="areacheckbox" type="checkbox" value="${area.id}">
        <label for="checkbox">${area.area}</label>`
    })
    html += `</div>`
    return html
}


const surveyFormContainer = document.querySelector(".surveyForm")
let selectedArea = new Set()

surveyFormContainer.addEventListener("click", clickEvent => {
    if (clickEvent.target.id.startsWith("area")) {
        // Get what the user typed into the form fields
        let areas = document.querySelectorAll(".areacheckbox")
        for (const area of areas) {
            // selectday.clear()
            if (area.checked === true) {
                const [,areaId] = clickEvent.target.id.split("--")
                selectedArea.add(parseInt(areaId))
            }
        }
        let selectedAreaArray = [...selectedArea]
        setSelectedAreas(selectedAreaArray)
        console.log(selectedAreaArray)

    }
})