import { Routes, Route } from 'react-router-dom';
import { Container, Row } from 'react-bootstrap';

// screens/views
	import { MainScreen } from '@/screens/MainScreen';
	import { MovieDetailsScreen } from '@/screens/Movies/MovieDetailsScreen';
	import { MovieListingScreen } from '@/screens/Movies/MovieListingScreen';
// end screens/views

// components
	import { HeaderComponent } from '@/components/HeaderComponent';
// end components

export function LayoutScreen() {
	return (
		<Container fluid className='app-layout'>
			<Row>
				<HeaderComponent />
				<Routes>
					<Route index element={ <MainScreen /> } />
					<Route path='movies'>
						<Route index element={ <MovieListingScreen /> } />
						<Route path='/movies/:movieSlug' element={ <MovieDetailsScreen /> } />
					</Route>
				</Routes>
			</Row>
		</Container>
	);
}