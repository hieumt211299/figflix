import { type Movie } from '../model/movie'

export interface MovieRepository {
  getList: () => Promise<Movie[]>
  searchMovie: (text: string) => Promise<Movie[]>
  getMovieDetail: (id: number) => Promise<Movie>
  getPopularMovies: () => Promise<Movie[]>
}
