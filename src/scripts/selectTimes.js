import { getDays, getState } from "./dataAccess.js"

export const selectWeekDayTimes = () => {
    let state = getState()
    let selectDays = state.selectedDays
    let days = getDays()
    let html = ``
    if (typeof selectDays === "undefined") {
        html = ''
    }
    else if (selectDays.includes(1) || selectDays.includes(2) || selectDays.includes(3) || selectDays.includes(4) || selectDays.includes(5)) {
        html += `<h4>weekdays selected:</h4>`
        selectDays.map(selectday => {
            if (selectday < 6) {
                const foundweekday = days.find((day) => {
                    return day.id === selectday
                })
                html += `<div class="daylist">${foundweekday.day}<input id="five--${foundweekday.id}" type="checkbox" value="">
        <label for="checkbox">five-seven</label>
        <input id="seven--${foundweekday.id}" type="checkbox" value="">
        <label for="checkbox">seven-nine</label></div><br>`
            }
        })
    }
    html += ``
    return html
}



export const selectWeekEndTimes = () => {
    let state = getState()
    let selectDays = state.selectedDays 
    let days = getDays()
    let html = ``
    if (typeof selectDays === "undefined") {
        html = ''
    }
    else if (selectDays.includes(6) || selectDays.includes(7)) {
        html += `<br><h4>weekend days selected:</h4>`
        selectDays.map(selectday => {
            if (selectday >= 6) {
                const foundweekendday = days.find((day) => {
                    return day.id === selectday
                })
                html += `<div class="daylist timecheck">${foundweekendday.day}<input id="morning--${foundweekendday.id}" type="checkbox" value="">
    <label for="checkbox">morning</label>
    <input id="afternoon--${foundweekendday.id}" type="checkbox" value="">
    <label for="checkbox">afternoon</label>
    <input id="evening--${foundweekendday.id}" type="checkbox" value="">
    <label for="checkbox">evening</label></div><br>`
            }

        })
    }
    html += `<hr>`
    return html
}



// const surveyFormContainer = document.querySelector(".surveyForm")
// let selectedDay = new Set()

// surveyFormContainer.addEventListener("click", clickEvent => {
//     if (clickEvent.target.id.startsWith("time")) {
//         // Get what the user typed into the form fields
//         let days = document.querySelectorAll(".daycheckbox")
//         for (const day of days) {
//             // selectday.clear()
//             if (day.checked === true) {
//                 const [,dayId] = clickEvent.target.id.split("--")
//                 selectedDay.add(parseInt(dayId))
//             }
//         }
//         let selectedDayArray = [...selectedDay]
//         setSelectedDays(selectedDayArray)

//     }
// })
