const tmdb_api_key = '795cf19c05b9ff607f4b7206a0a4abd3'

let genresToInclude = []
let maxDuration = 100
let minDuration = 65
function getMovies(ratingOrPopular, callback) {
  let path = ratingOrPopular === 'popular' ? 'popular' : 'top_rated'
  function getUrl(page = 1) {
    let url = `
          https://api.themoviedb.org/3/movie/${path}?api_key=${tmdb_api_key}&language=en-US&page=${page}`
    return url
  }
  const pagesToFetch = []
  for (let page = 1; page < 5; page++) {
    pagesToFetch.push(
      new Promise((resolve, reject) => {
        try {
          fetch(getUrl(page))
            .then((res) => res.json())
            .then((data) => resolve(data))
        } catch (err) {
          reject(err)
        }
      })
    )
  }
  Promise.all(pagesToFetch).then((result) => {
    callback(result)
  })
}
async function getMoviesByType(movieType = 'popular', opts) {
  const { duration, genre } = opts
  genresToInclude.push(genre)
  maxDuration = duration + 100
  minDuration = duration - 100

  // movieType can be "popular" or "top_rated"
  return new Promise((resolve) => {
    getMovies(movieType, async (results) => {
      const retval = await filterByDuration(reduceMoviesToIds(results))
      resolve(retval)
    })
  })
}

function reduceMoviesToIds(results) {
  return results
    .reduce((retval, page) => {
      const pageMovies = page.results.filter((pageMovie) => {
        return pageMovie.genre_ids.some((genre) =>
          genresToInclude.includes(genre)
        )
      })
      return [...retval, ...pageMovies]
    }, [])
    .map((movie) => movie.id)
}

function filterByDuration(movieIds) {
  return new Promise((resolve, reject) => {
    const movieDetailPromises = []
    for (let movieId of movieIds) {
      const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${tmdb_api_key}`
      movieDetailPromises.push(
        new Promise((resolve, reject) => {
          fetch(url)
            .then((res) => res.json())
            .then((data) => {
              resolve(data)
            })
            .catch((err) => {
              console.log(err)
              reject(err)
            })
        })
      )
    }
    Promise.all(movieDetailPromises).then((movies) => {
      resolve(
        movies.filter((movie) => {
          const { runtime } = movie
          return runtime > minDuration && runtime < maxDuration
        })
      )
    })
  })
}

export { getMoviesByType }
