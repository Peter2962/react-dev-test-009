import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { MoviesClient } from '@/clients/MoviesClient';

// components
	import { LoaderComponent } from '@/components/LoaderComponent';
	import { SearchResultComponent } from '@/components/Search/SearchResultComponent';
// end components

export function MovieListingScreen() {
	const [movies, setMovies] = useState(false);
	const [isLoading, setIsLoading] = useState(true);
	const search = useLocation().search;
	const searchQueryParameter = new URLSearchParams(search).get('q');

	// Group movies array by categories and returns the grouped
	// results.
	function categorizeMovies(moviesData) {
		const categorizedMovies = {};
		moviesData.map(movie => {
			movie.genres.map(genre => {
				if (categorizedMovies[genre] == undefined) {
					categorizedMovies[genre] = [];
				}

				categorizedMovies[genre].push(movie);
			})
		})

		return categorizedMovies;
	}

	useEffect(() => {
		MoviesClient.getMovies(searchQueryParameter).then((response) => {
			setMovies(categorizeMovies(response.data.movies));
			setIsLoading(false);
		});
	}, [setMovies]);

	return (
		<div className='movies-listing'>
			<LoaderComponent show={isLoading} />
			<SearchResultComponent movies={movies} />
		</div>
	);
}