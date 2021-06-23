import {useState, useEffect, useRef} from 'react'
import movieDB from '../api/movies'

const useMovies = (movieType = 'now_playing', resource = 'listMovies') => {
  const [isLoading, setIsLoading] = useState(true)
  const [movies, setMovies] = useState([])

  const resources = useRef({
    crew: async () => {
      const {data} = await movieDB.get(`/${movieType}`)
      setMovies(data.crew)
      setIsLoading(false)
    },
    details: async () => {
      const {data} = await movieDB.get(`/${movieType}`)
      setMovies(data)
      setIsLoading(false)
    },
    listMovies: async () => {
      const {data} = await movieDB.get(`/${movieType}`)
      setMovies(data.results)
      setIsLoading(false)
    }
  })

  useEffect(() => {
    resources.current[resource]()
  }, [resource])

  return {[resource]: movies, isLoading}
}

export default useMovies
