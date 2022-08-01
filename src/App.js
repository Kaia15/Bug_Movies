import logo from './logo.svg';
import './App.css';
// import Content from '../src/Components/Content';
import React, { useEffect, useState, useRef } from 'react';
// import Movies from '../src/Movies/Movies';
import SearchBox from './Movies/SearchBox.js/searchBox';
// import MovieList from './Movies/MovieList/MovieList';
// import films from './Movies/Films/films';
// import Pagination from '../src/Pagination/pagination';
import Filter from '../src/Movies/Filter/filter';
import genres from '../src/Movies/Filter/filteredTypes/Genres';
import nations from '../src/Movies/Filter/filteredTypes/Nations';
import popular from '../src/Movies/Filter/filteredTypes/Popular';
import years from '../src/Movies/Filter/filteredTypes/Years';
import bgVideo from './Videos/ExtraordinaryAttorneyWooOfficialTrailerNetflixENGSUB.mp4'
import moviesData from '../src/Data/MovieData'
import TVsData from '../src/Data/TvData'
import Modal from './Modals/Modal'
import HeartIcon from '../src/Images/Heart.png'
import FavoritePlaylist from './FavoritePlaylist/index';
// import { createContext } from 'react';

export const modalContext = React.createContext();

export default function App() {
  const storageMovies = JSON.parse(localStorage.getItem('movieList'));
  const [movie, setMovie] = React.useState({})
  const [movieList, setMovieList] = React.useState([]);
  const [searchVal, setSearchVal] = React.useState("")
  const [searchmovieList, setSearchmovieList] = React.useState([])
  const [filterVal, setFilterVal] = React.useState("")
  const [filteredRes, setFilteredRes] = React.useState([])
  const [afterFilter, setAfterFilter] = React.useState([])
  const [hide, setHide] = React.useState(false)
  // const [hideSearch, setHideSearch] = React.useState(true)
  const [hideFilter, setHideFilter] = React.useState(true)
  const [page, setPage] = React.useState(1)
  const [allMovies, setAllMovies] = React.useState([])
  const [allTVs, setAllTVs] = React.useState([])
  const [openModal, setOpenModal] = React.useState(false)
  const [imagePath, setImagePath] = React.useState("")
  const [back, setBack] = React.useState(true)
  const [srcFilm, setSrcFilm] = React.useState({})
  
  
  useEffect(() => {
    const jsonFilms = JSON.stringify([]);
    setMovieList(movieList);
    localStorage.setItem('movieList', jsonFilms);

  }, [movieList])

  

  // Fetching data for searching and filtering
  let list = []

  list.push(...TVsData)
  list.push(...moviesData)

  /*let movies = []
  let tvs = []
  const pagesMovie = Array.from({  
    length: 125  
  }, (v, k) => k + 1)

  const pagesTvs = Array.from({
    length: 100
  }, (v,k) => k + 1)

  const action = (inp1, inp2) => {
    switch (inp1) {
      case "movie":
        setAllMovies(inp2)
      case "tv":
        setAllTVs(inp2)
      
    }
  }

  
  /*const data = async function (type, pages) {
    // let movieList = []
    
    let requests = pages.map(p => fetch(`https://api.themoviedb.org/3/${type}/popular?api_key=4c3513a8f11ca3724bbed6b947d29097&language=en-US&page=${p}`))
    let promise = await Promise.all(requests)
    let result = await Promise.all(promise.map(pr => 
                                                pr.json()))
    let films = await Promise.all(result.map(r => r['results']))                                            
    return films
    
  }

  data('movie', pagesMovie).then(items => items.map(item => {
    console.log(item)
    for (let i = 0; i < item.length; i++)
    {
      movies.push(...item)
    }
  })
  )
  */

  /*data('tv', pagesTvs).then(items => items.map(item => {
    console.log(item)
    tvs.push(...item)
  }
  ))
  */

  
  /*useEffect(() => 
                { data('tv', pagesTvs)
                  // data('movie', pagesMovie)
                  return () => {}
                }, [])
  
  useEffect(() => 
                {
                  data('movie', pagesMovie)
                  return () => {}
                }, [])
  
  if (allTVs.length > 0) {
    for (let i = 0; i < allTVs.length; i ++) {
      let b = allTVs[i]
      // console.log(all[i])
      // console.log(...b)
      list.push(...b)
    }
  }

  /*if (allMovies.length > 0) {
    for (let i = 0; i < allMovies.length; i ++) {
      let b = allMovies[i]
      // console.log(all[i])
      // console.log(...b)
      list.push(...b)
    }
  }*/

  // Searching movies
  const handleSearch = useEffect(
    () => {
      if (searchVal !== "") {
        setSearchmovieList(() => {
          // console.log(movieList.length > 0)
          let searched = list.filter(item => {
            let title = item.title;
            let name = item.name;
            let includedLower;
            let includedUpper;
            if (typeof title === "undefined") {
                includedLower = name.toLowerCase().includes(searchVal) 
                includedUpper = name.toUpperCase().includes(searchVal);
            }
            else {
                includedLower = title.toLowerCase().includes(searchVal) 
                includedUpper = title.toUpperCase().includes(searchVal);
            }
            return includedLower || includedUpper
          })
          return searched
        })
        setHide(true)
        setHideFilter(true)
      } else {
        setHide(false)
        setSearchmovieList([])
        setSearchVal("")
        setOpenModal(false)
        console.log("Please enter the movie")
      }
    }
  , [searchVal])

  const searchInput = (e) => {
    setSearchVal(e.target.value);
  }

  // Adding new movies to movie movieList
  const handleSubmit = () => {
    setMovieList((prev) => ([...prev, movie]))
    setMovie({Title: "", Year: "", imdbID: "", Type: "", Poster: ""})
  }

  // Filtering movie input
  const filterType = (input) => {
    setFilterVal(input)
    const options = matchedArr(input)
    setFilteredRes(options);
  }

  const matchedArr = (t) => {
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
    */
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
        // console.log(ids)
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
  }

  /*const fetchSearch = async (key) => {
    const searchURL = `https://api.themoviedb.org/3/search/${key}?api_key=4c3513a8f11ca3724bbed6b947d29097&page=1`
    const fetchedSearch = await fetch(searchURL)
    const jsonSearch = await fetchedSearch.json()
    return jsonSearch
  }*/

  // Fetching data to show on main page
  const fetchData = async () => {
    const url = `https://api.themoviedb.org/3/tv/popular?api_key=4c3513a8f11ca3724bbed6b947d29097&language=en-US&page=${page}`
    const fetchedMovies = await fetch(url)
    const jsonMovies = await fetchedMovies.json()
    return jsonMovies
  }

  useEffect(() => 
  {
    fetchData().then(a => { setMovieList(movieList.concat(a['results']))
                          })
    return () => {}
  }, [page])

  // Console log to test the results
  // console.log movieList.concat({Title: "Harry Potter"}))
  
  // console.log(searchVal);
  // list.forEach(i => console.log(i['release_date'].substr(0,4)))
  console.log(searchmovieList);
  // console.log(allMovies);
  // console.log(allTVs);

  // console.log (list);
  // console.log (movieList);
  // console.log(filterVal);
  // console.log(filteredRes)
  // console.log(afterFilter)
  // console.log(movies)
  // console.log(tvs)
  // console.log(moviesData)
  // console.log(TVsData)
  // console.log(hide)
  // console.log(list)

  return (
    <div className='App'>
      <div className='movie-slide'>
        {
        !hide && <video autoPlay loop muted>
          <source src = {bgVideo} type = "video/mp4"></source>
          </video>
        }
        <div className='nav'>
            <div className='navbar_components'>
              <div className="nav_comp" onClick={() => {
                setHide(false)
                setHideFilter(true)
                setSearchVal("")
              } }>
              <p> Home </p>
              </div>

              <div className="nav_comp">
              <SearchBox searchInput = {searchInput} search = {searchVal} handleSearch = {() => handleSearch}/> 
              </div>

              

            </div>
            
            {!hide && <div className='trailer_desc'>
              <p> Extraordinary <br/> Attorney Woo</p>
            </div>
            }
        </div>
        
      </div>
    
    
    {!hide && <div className='movie_head'>
    <p id = "top_rated"> Top Rated </p>
    <div className="filter">
        <button id = "filter_btn"> Filter </button>
        <div className='filter-content'>
          <div className='header'>
            <Filter filterType = {filterType} list = {list}/>
          </div>
                  
          {filteredRes.length > 0 && (
            <div style = {{height: "25vh", backgroundColor: "black"}}>
              {filteredRes.map(res => 
              {return (<button key = {res} style = {{color: 'black', borderRadius: '5px', margin: '10px'}}
              onClick = {() => 
              {
                setHide(true)
                        // console.log(res)
                setAfterFilter(readyFilter(res))
                setHideFilter(false)
              }
              }> {res} </button>)})
              }
            </div>)
          }
        </div>    
            
      </div>
    
    </div>
    }
    <div className='movie-body'>
    
    <div className = "Movies">
      {
          !hide && movieList.map((mov, index) => 
            {
              const imgPath = `https://www.themoviedb.org/t/p/w1280/${mov.poster_path}`
              return (
                <div className='Movie' key = {index}>
                  <img src = {imgPath}  style = {{width: "100%", height: "70%", borderRadius: '5px'}}/>
                  <li className="movie_info"> Title: {mov.name} </li>
                  <li className='movie_info'> Year: {mov.first_air_date} </li>
                </div>
              )
            }
            
          )
      }
    </div>
    {
      !hide && 
        <div className = "Page_Btn">
          <button id = "Up" onClick = {() => setPage(page + 1)}>  Load more </button>
        </div>
    }
    <div style={{display: "block"}}>
      { !openModal && searchmovieList.map((src, index) => 
        {
        let name = src.name
        let title = src.title
        let identity;
        const srcPath = `https://www.themoviedb.org/t/p/w1280/${src.poster_path}`
        if (typeof name !== "undefined") identity = name;
        else identity = title
        // const a = src
        return (
        <div>
        <button className = "searchMovie_in4" style = {{listStyleType: "none"}}
        onClick = {() => {
          // console.log(srcPath)
          setImagePath(srcPath)
          setSrcFilm(src)
          setOpenModal(!openModal)
          // setBack(false)
        }}> {identity} </button>
        
        </div>
        )
        })
      }
    
      <div> 
        { openModal && 
            <div className='modal'>
              <div style = {{display: "flex", flexDirection: "row", marginLeft: "45vw"}}>
                <button className = "modal_btn"> 
                  <img src = {HeartIcon} style = {{width: "40%",height: "60%"}}/>
                </button>
                <button className = "modal_btn" onClick={() => setOpenModal(false)}> X </button> 
              
              </div>
              <Modal imgPath = {imagePath} src = {srcFilm} />
            </div> 
        }
      </div>
      <FavoritePlaylist src = {srcFilm} />
    </div>
      
    <div>
    {
      !hideFilter && afterFilter.map(a => {
        if (typeof a.title !== "undefined") {
          // console.log(a.title)
          return (<button key = {a.imdbID} style = {{listStyleType: "none", margin: "20px", height: "30px", borderRadius: "8px"}}> {a.title} </button>)
        }
          
        else {
          // console.log(a.name)
          return (<button key = {a.imdbID} style = {{listStyleType: "none", margin: "20px", height: "30px", borderRadius: "8px"}}> {a.name} </button>)
        }

          
      })
    }
    </div>
    
    </div>
  </div>
  );
}

