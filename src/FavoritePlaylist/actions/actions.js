import { SET_FILM, ADD_FILM } from "../constants"

export const setFilm = payload => {
    return {
        type: SET_FILM,
        payload
    }
}

export const addFilm = payload => {
    return {
        type: ADD_FILM,
        payload
    }
}

/*export const deleteFilm = payload => {
    return {
        type: DELETE_FILM,
        payload
    }
}*/