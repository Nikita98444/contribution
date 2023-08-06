import {graphAPI} from './../API/api'

const SET_CALENDAR_DATA = "SET_CALENDAR_DATA"

let initialState = {
    calendarData:[]
}

const graphReducer = (state = initialState, action) => {

    switch (action.type) {

        case SET_CALENDAR_DATA: {
            return { ...state, calendarData: action.calendarData } 
        }

        default:
            return state
    }

}


//AC - actionCreator
export const calendarDataAC = (calendarData) => {
    return {
        type: SET_CALENDAR_DATA,
        calendarData
    }
}


//thunk
export const calendarDataThunk = () => {
    return (dispatch) => {

        graphAPI.getCalendar().then(response => {
            dispatch(calendarDataAC(response.data))
             console.log(response.data)

        }).catch(error => {
            console.log(error)
        })

    }
}



export default graphReducer