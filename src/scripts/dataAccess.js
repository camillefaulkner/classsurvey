const mainContainer = document.querySelector(".container")
const surveyFormContainer = document.querySelector(".surveyForm")

const applicationState = {
    password: [],
    days: [],
    selectedDays: [],
    completeSurveys: []
}

const API = "http://localhost:8088"


export const submitDaysAvailable = (userDaySubmission) => {
    const fetchOptions = {
        method: "POST", //creation request, "please create"
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userDaySubmission)
    }
    return fetch(`${API}/days`,
        fetchOptions) //here's the url i wanna send a request to
        .then(response => response.json()) //when response happens, returns string of json data, string => data structure(response.json)
        .then(() => { //then, do this (alert! things have changed)
            mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
            surveyFormContainer.dispatchEvent(new CustomEvent("stateChanged"))
        })
}

export const fetchDays = () => {
    return fetch(`${API}/days`) //default method is GET = i want data, give it to me please, give all of the requests
        .then(response => response.json()) //returns array of objects in this scenario
        .then(
            (day) => { //array of objects is the argument here
                // Store the external state in application state
                applicationState.days = day //put in transient state
            }
        )
}

export const fetchSelectedDays = () => {
    return fetch(`${API}/selectedDays`) //default method is GET = i want data, give it to me please, give all of the requests
        .then(response => response.json()) //returns array of objects in this scenario
        .then(
            (day) => { //array of objects is the argument here
                // Store the external state in application state
                applicationState.selectedDays = day //put in transient state
            }
        )
}

export const fetchPassword = () => {
    return fetch(`${API}/password`) //default method is GET = i want data, give it to me please, give all of the requests
        .then(response => response.json()) //returns array of objects in this scenario
        .then(
            (password) => { //array of objects is the argument here
                // Store the external state in application state
                applicationState.password = password //put in transient state
            }
        )
}

export const getDays = () => {
    return applicationState.days.map(day => ({ ...day }))
}

export const getPassword = () => {
    return applicationState.password.map(password => ({ ...password }))
}

export const getSelectedDays = () => {
    return applicationState.selectedDays.map(day => ({ ...day }))
}


// export const setSelectedDays = (day) => {
//     applicationState.selectedDays.add(day)
//     document.dispatchEvent(new CustomEvent("stateChanged"))
// }



export const setSelectedDays = (days) => {
    applicationState.selectedDays = days
    surveyFormContainer.dispatchEvent(new CustomEvent("stateChanged"))
}


export const saveSurvey = (userRequest) => {
    const fetchCompletions = {
        method: "POST", //please create this object I sent you in permanent state
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userRequest)
    }
    return fetch(`${API}/completeSurveys`, fetchCompletions)
        .then(response => response.json())
        .then(() => {
            mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
        })
}



export const sendSelectedDays = (userServiceRequest) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userServiceRequest)
    }


    return fetch(`${API}/selectedDays`, fetchOptions)
        .then(response => response.json())
        .then(() => {
            mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
            })

}