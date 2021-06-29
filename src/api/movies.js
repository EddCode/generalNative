import axios from 'axios'
import config from '../config'
import {getLanguages} from 'react-native-i18n'

let language = 'en-US'

getLanguages().then(languages => (language = languages[0]))

const movieDB = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: config.API_KEY,
    language: language
  }
})

export default movieDB
