import { getSelectedDays, getDays } from "./dataAccess.js"

export const selectTimes = () => {
    let selectDays = getSelectedDays()
    let days = getDays()
    let html = `<h3>select ideal timeframes</h3>`
    if (typeof selectDays === "undefined") {
        html = ''
    }
    // const foundWeekDay = selectDays.forEach(selectday => {
    //     console.log(selectDays)
    //     if (selectday.days < 6) {
    //         let founddayname = days.map(day => {
    //             if (day.id === foundWeekDay.day) {
    //                 html += `weekdays selected<br>
    //                 ${day.day}<input id="" type="radio" value="">
    //     <label for="radio">five-seven</label>
    //     <input id="" type="radio" value="">
    //     <label for="radio">seven-nine</label> <br><br>`
    //             }
    //         })
    //     } else if (selectday.day >= 6) {
    //         let founddayname = days.map(day => {
    //             if (day.id === foundWeekDay.day) {
    //                 html += `weekends selected<br>
    //                 ${day.day}<input id="" type="radio" value="">
    //     <label for="radio">morning/label>
    //     <input id="" type="radio" value="">
    //     <label for="radio">afternoon</label>
    //     <input id="" type="radio" value="">
    //     <label for="radio">evening</label> <br><br>`
    //             }
    //         })
    //     }
    // })
    return html
}