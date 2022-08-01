import React from 'react'
import filterStyle from './filter.module.css'

export default function Filter({filterType, list} ) {
    const cats = ["Genres", "Nations", "Popular", "Years"];
    const [filterVal, setFilterVal] = React.useState("")
    const [filteredRes, setFilteredRes] = React.useState([])
    const [afterFilter, setAfterFilter] = React.useState([])
    
    /*const matchedArr = (t) => {
        switch(t) {
          case "Genres":
            return genres.map(i => i['genre'])
          case "Nations":
            return nations
          case "Popular":
            return popular
          case "Years":
            return years
          default:
            return []
        }
    
      }
    
    const movieInput = ({target}) => {
        const {name, value} = target;
        // console.log(target);
        setMovie((prev) => ({...prev, [name]: value}))
        console.log(movie);
      }
    
      const findIn = (e, arr) => {
        return arr.includes(e)
      }
    
    const readyFilter = (e) => {
        let filteredFilms = [];
        /*console.log(e)
        // console.log(genres.includes(e))
        
        let a = genres.map(g => g['genre'])
        let ids = [12,28,878]
        console.log(ids.includes(genres[1]['genreID']))
        
        let a = genres.map(g => g['genre'])
        if (findIn(e, a)) {
          // console.log(findIn(e,a))
          let ind = a.indexOf(e)
          let genreMovie_id = genres[ind]['genreMovieID']
          let genreTv_id = genres[ind]['genreTvID']
          // console.log(g_id)
          list.forEach(f => {
            // let ind = a.indexOf(e)
            // let g_id = genres[ind]['genreID']
            let ids = f['genre_ids']
            console.log(ids)
          if (typeof ids !== 'undefined') {if (ids.includes(genreMovie_id) || ids.includes(genreTv_id)) filteredFilms.push(f)}
         })
        } else if (findIn(e, nations)) {
          filteredFilms = list.filter(f => {
            let n = f.Nation
            return n.toLowerCase() === e.toLowerCase()
          })
        } else if (findIn(e, popular)) {
          if (e === 'descending') {
            filteredFilms = list.sort(function(a, b) {
              var popularA = a.popularity; // ignore upper and lowercase
              var popularB = b.popularity; // ignore upper and lowercase
              if (popularA < popularB) {
                return -1;
              }
              if (popularA > popularB) {
                return 1;
              }
              return 0;
            })
          }
          
      
            // names must be equal
            
        } else if (findIn(e, years)) {
          filteredFilms = list.filter(f => {
            let x = f['first_air_date']
            let y = f['release_date'];
            if (typeof y !== 'undefined' || typeof x !== 'undefined') {
              if (typeof y !== 'undefined') return y.substr(0,4) === e;
              else return x.substr(0,4) === e;
            } else return false
            
          })
        }
        return filteredFilms
    }*/

    {console.log(list)}

    return (
        <div className={filterStyle.row}>
            
            {cats.map(obj => {
                return (
                    <div className={filterStyle.column}>
                        <button
                        className={filterStyle.filterType}
                        onClick = {() => {
                            filterType(obj)}}>
                        <h2> {obj} </h2>  
                        </button>
                    </div>
                )
            })}
    
        </div>
    )
}