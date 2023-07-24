import { httpAxios } from './httpAxios'
import { type Movie } from '../model/movie'

export interface IMovieService {
  getList: () => Movie[]
  searchMovie: (text: string) => Movie[]
}

export const movieService = () => {
  const getList = async () => {
    try {
      const res = await httpAxios.get('https://api.themoviedb.org/3/trending/movie/week')
      return res.results || {}
    } catch (error) {
      console.log(error)
    }
  }
  const searchMovie = async (text: string) => {
    try {
      const res = await httpAxios.get(`https://api.themoviedb.org/3/search/movie?query=${text}`)
      return res.results || {}
    } catch (error) {
      console.log(error)
    }
  }
  const getMovieDetail = async (id: number) => {
    try {
      const res = await httpAxios.get(`https://api.themoviedb.org/3/movie/${id}`)
      return res || {}
    } catch (error) {
      console.log(error)
    }
  }
  const getPopularMovies = async () => {
    try {
      const res = await httpAxios.get(`https://api.themoviedb.org/3/movie/popular`)
      return res || {}
    } catch (error) {
      console.log(error)
    }
  }

  return {
    getList,
    searchMovie,
    getMovieDetail,
    getPopularMovies
  }
}
