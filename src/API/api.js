import axios from "axios";


//Единая настройка
const instanse = axios.create({
    withCredentials: false,

    baseURL: `https://dpg.gg`

})

export const graphAPI = {

    getCalendar() {
        return instanse.get(`/test/calendar.json`)
    },

}



