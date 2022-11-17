import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

export function MainScreen() {
	return (
		<Link to='/movies'>
			<Button>See available movies</Button>
		</Link>
	);
}