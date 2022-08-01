import { SET_FILM, ADD_FILM } from "../constants"


export const initState = {
    film: {},
    films: []
}

export const reducers = (state, action) => {
    switch (action.type) {
        case SET_FILM: 
            return {...state, film: {title: action.payload.title, overview: action.payload.overview}}
        case ADD_FILM:
            return {
                    ...state, 
                    films: [...state.films, {title: action.payload.title, overview: action.payload.overview}]
            }
        default:
            throw new Error ("Please check your input!")

    }
}

export default reducers