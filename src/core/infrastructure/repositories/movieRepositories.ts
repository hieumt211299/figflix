import { type Http } from '@/core/domain/repositories/Http'
import { type MovieRepository } from '@/core/domain/repositories/movieRepositories'
import { httpAxios } from '../instance/httpAxios'

export const movieRepository = (http: Http): MovieRepository => {
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
      const res = await http.get(`https://api.themoviedb.org/3/search/movie?query=${text}`)
      return res.results || {}
    } catch (error) {
      console.log(error)
    }
  }
  const getMovieDetail = async (id: number) => {
    try {
      const res = await http.get(`https://api.themoviedb.org/3/movie/${id}`)
      return res || {}
    } catch (error) {
      console.log(error)
    }
  }
  const getPopularMovies = async () => {
    try {
      const res = await http.get(`https://api.themoviedb.org/3/movie/popular`)
      return res.results || {}
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
