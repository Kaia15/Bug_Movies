import React from 'react'
import reducers, { initState } from './reducers/reducers'
import { setFilm, addFilm } from './actions/actions'
import indexCSS from './index.css';

export default function FavoritePlaylist({src}) {
    const [state, dispatch] = React.useReducer(reducers, initState)
    const {film, films} = state
    const {title, overview} = src
    return (
        <div style = {{fontFamily: "Times New Roman"}}>
            <button
            style = {{height: "60px",
                backgroundColor: "red",
                width: "20vw",
                margin: "10px", 
                borderRadius: "8px"}}
            onClick = {() => {
                dispatch(setFilm({title: title, overview: overview}))
                dispatch(addFilm({title: title, overview: overview}))
            }}
            > + Watch later </button>

            {console.log(films)}
        </div>
    )
}

