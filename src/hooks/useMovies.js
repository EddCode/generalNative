import {useState, useEffect} from 'react'
import movieDB from '../api/movies'

const useMovies = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [movies, setMovies] = useState([])

  useEffect(() => {
    getMovies()
  }, [])

  const getMovies = async () => {
    const {data} = await movieDB.get('/now_playing')
    setMovies(data.results)
    setIsLoading(false)
  }

  return {listMovies: movies, isLoading}
}

export default useMovies
