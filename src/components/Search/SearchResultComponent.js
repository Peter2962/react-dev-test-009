import { Link } from 'react-router-dom';
import { Alert } from 'react-bootstrap';
import OwlCarousel from 'react-owl-carousel';

export function SearchResultComponent({ movies }) {
	return (
		<div className='search-result-component'>
			{
				Object.keys(movies).length < 1 && <Alert variant='danger'>
					No results found
				</Alert>
			}
			{
				movies && Object.keys(movies).map((categoryName, i) => {
					return (
						<div key={`category-${i}`} className='search-result-component-carousel-wrapper'>
							<h3>{categoryName}</h3>
							<OwlCarousel className='owl-theme' items={4} margin={20} nav>
								{
									movies[categoryName].map((movie, category) => {
										return (
											<Link key={movie.id} to={`/movies/${movie.slug}`} className='search-result-component-carousel-item'>
												<span>{movie.slug}</span>
											</Link>
										)
									})
								}
							</OwlCarousel>
						</div>
					)
				})
			}
		</div>
	)	
}