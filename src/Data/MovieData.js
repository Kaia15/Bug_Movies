let movies = []

const pagesMovie = Array.from({  
  length: 125  
}, (v, k) => k + 1)

/*const action = (inp1, inp2) => {
  switch (inp1) {
    case "movie":
      setAllMovies(inp2)
    case "tv":
      setAllTVs(inp2)
    
  }
}*/

const data = async function (type, pages) {
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
  movies.push(...item)
}
))

export default movies

/*function fetch() {
    // let list = []
    const pagesMovie = Array.from({  
    length: 125  
    }, (v, k) => k + 1)

  /*const pagesTvs = Array.from({
    length: 400
  }, (v,k) => k + 1)

  const action = (inp1, inp2) => {
    switch (inp1) {
      case "movie":
        setAllMovies(inp2)
      case "tv":
        setAllTVs(inp2)
      
    }
    }

    const data = async function (type, pages) {
        // let movieList = []
        
        let requests = pages.map(p => fetch(`https://api.themoviedb.org/3/${type}/popular?api_key=4c3513a8f11ca3724bbed6b947d29097&language=en-US&page=${p}`))
        let promise = await Promise.all(requests)
        let result = await Promise.all(promise.map(pr => 
                                                    pr.json()))
        let films = await Promise.all(result.map(r => r['results']))                                            
        return films
    }

    data('movie', pagesMovie)
    
    // return movies
}

fetch()

if (allMovies.length > 0) {
    for (let i = 0; i < allMovies.length; i ++) {
        let b = allMovies[i]
                          // console.log(all[i])
                          // console.log(...b)
            movies.push(...b)
        }
}

export default movies

/*useEffect(() => 
                {
                  data('movie', pagesMovie)
                  return () => {}
                }, [])
*/