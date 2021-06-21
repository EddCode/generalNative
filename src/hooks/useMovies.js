import {useState, useEffect} from 'react'
import movieDB from '../api/movies'

const useMovies = (movieType = 'now_playing') => {
  const [isLoading, setIsLoading] = useState(true)
  const [movies, setMovies] = useState([])

  useEffect(() => {
    getMovies()
  }, [])

  const getMovies = async () => {
    const {data} = await movieDB.get(`/${movieType}`)
    setMovies(data.results)
    setIsLoading(false)
  }

  return {listMovies: movies, isLoading}
}

export default useMovies
