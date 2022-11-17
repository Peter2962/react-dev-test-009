import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getYearFromDateString } from '@/Helpers';
import { MoviesClient } from '@/clients/MoviesClient';
import ReactStars from 'react-rating-stars-component';
import { Stack, Row, Col, ListGroup } from 'react-bootstrap';

// components
	import { LoaderComponent } from '@/components/LoaderComponent';
// end components

export function MovieDetailsScreen() {
	const { movieSlug } = useParams();
	const [movie, setMovie] = useState(null);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		MoviesClient.getMovie(movieSlug).then((response) => {
			setIsLoading(false);
			setMovie(response.data);
		});
	}, []);

	return (
		<div className='movies-detail'>
			<LoaderComponent show={isLoading} />
			{
				movie && (
					<div className='movies-detail-block'>
						<Row>
							<Col sm='2' md='2' lg='2' className='movies-detail-block-poster'>
								<img src={movie.poster} alt={movie.title} />
							</Col>
							<Col md='12' sm='12' lg={{span: '8', offset: '2'}} className='movies-detail-block-info'>
								<Stack gap={2} direction='horizontal'>
									<h2>{movie.title}</h2>
									<div className='ms-auto'>
										<ReactStars
											count={10}
											edit={false}
											size={30}
											value={movie.imdb_rating}
											activeColor='#ffd700'
										/>
									</div>
								</Stack>
								<div className='movies-detail-block-info-top-list'>
									<ListGroup horizontal>
										<ListGroup.Item>
											<h4>{getYearFromDateString(movie.released_on)}</h4>
										</ListGroup.Item>
										<ListGroup.Item>
											<h4>{movie.length}</h4>
										</ListGroup.Item>
										<ListGroup.Item>
											<h4>{movie.director}</h4>
										</ListGroup.Item>
									</ListGroup>
									<Stack direction='horizontal' gap={2}>
										<h5>Cast:</h5>
										<h5>{movie.cast.join(', ')}</h5>
									</Stack>
								</div>
								<p className='movies-detail-block-info-overview'>Movie Description: {movie.overview}</p>
							</Col>
						</Row>
					</div>
				)
			}
		</div>
	)
}