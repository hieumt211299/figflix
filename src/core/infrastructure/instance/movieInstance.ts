import { type Http } from '@/core/domain/repositories/Http'
import { httpAxios } from './httpAxios'
import type { MovieRepository } from '@/core/domain/repositories/movieRepositories'
import { movieRepository } from '@/core/infrastructure/repositories/MovieRepositories'

const movie: Http = httpAxios
export const movieInstance: MovieRepository = movieRepository(movie)
