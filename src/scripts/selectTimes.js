import { getDays, getState } from "./dataAccess.js"

export const selectTimes = () => {
    let state = getState()
    let selectDays = state.selectedDays
    let days = getDays()
    let html = `<h3>select ideal timeframes</h3>`
    if (typeof selectDays === "undefined") {
        html = ''
    }
    else if (typeof selectDays !== "undefined") {
        selectDays.map(selectday => {
            if (selectday < 6) {
                days.map(day => {
                    if (selectday.includes(day.id)) {
                        const foundweekday = days.find((day) => {
                            return day.id === selectday
                        })
                        html += `weekdays selected<br>
                    ${foundweekday.day}<input id="" type="radio" value="">
        <label for="radio">five-seven</label>
        <input id="" type="radio" value="">
        <label for="radio">seven-nine</label> <br><br>`
                    }
                })
            }
            else if (selectday >= 6) {
                days.map(day => {
                    if (selectday.includes(day.id)) {
                        const foundweekendday = days.find((day) => {
                            return day.id === selectday
                        })
                        html += `weekends selected<br>
                    ${foundweekendday.day}<input id="" type="radio" value="">
        <label for="radio">morning/label>
        <input id="" type="radio" value="">
        <label for="radio">afternoon</label>
        <input id="" type="radio" value="">
        <label for="radio">evening</label> <br><br>`
                    }
                })
            }
        })
        return html
    }
}