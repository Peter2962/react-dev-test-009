import { ApiClientFactory } from '@/ApiClientFactory';

const factory = new ApiClientFactory();

export const MoviesClient = {

	/**
	 * Sends a request to get movies.
	 * 
	 * @param {searchQuery}
	 */
	getMovies(searchQuery = '') {
		if (searchQuery != null && searchQuery.length > 0) {
			searchQuery = `?q=${searchQuery}`;
		}else{
			searchQuery = '';
		}
		return factory.get(`/movies${searchQuery}`);
	},

	/**
	 * Sends a request to get a movie with the provided id.
	 * 
	 * @param {movieId}
	 */
	getMovie(movieId) {
		return factory.get(`/movies/${movieId}`);
	},

}