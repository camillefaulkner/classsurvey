const mainContainer = document.querySelector(".container")
const surveyFormContainer = document.querySelector(".surveyForm")

const applicationState = {
    password: [],
    days: [],
    areas: [],
    completeSurveys: [],
    state: {}
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

export const fetchNashvilleAreas = () => {
    return fetch(`${API}/areas`) //default method is GET = i want data, give it to me please, give all of the requests
        .then(response => response.json()) //returns array of objects in this scenario
        .then(
            (area) => { //array of objects is the argument here
                // Store the external state in application state
                applicationState.areas = area //put in transient state
            }
        )
}

export const getDays = () => {
    return applicationState.days.map(day => ({ ...day }))
}

export const getPassword = () => {
    return applicationState.password.map(password => ({ ...password }))
}

export const getAreas = () => {
    return applicationState.areas.map(area => ({ ...area }))
}

export const getState = () => {
    return { ...applicationState.state }
}



export const setSelectedDays = (days) => {
    applicationState.state.selectedDays = days
    surveyFormContainer.dispatchEvent(new CustomEvent("stateChanged"))
}

export const setSelectedAreas = (areas) => {
    applicationState.state.selectedAreas = areas
    surveyFormContainer.dispatchEvent(new CustomEvent("stateChanged"))
}

export const setSuggestion = (suggestion) => {
    applicationState.state.suggestion = suggestion
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

