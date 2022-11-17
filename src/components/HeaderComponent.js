import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import { Container, Stack } from 'react-bootstrap';

export function HeaderComponent() {
	const [searchText, setSearchText] = useState('');

	return (
		<Container fluid className='header-component'>
			<Stack direction='horizontal' gap={2}>
				<div className='header-component-logo'>
					<h1>
						<Link to='/'>
							<span style={{display: 'block'}}>WOOKIE</span>
							<span>MOVIES</span>
						</Link>
					</h1>
				</div>
				<form action='/movies' className='header-component-search ms-auto'>
					<div className='input-group col-md-4'>
						<span className='input-group-append'>
							<div className='border-left-0 border-0 header-component-search-icon'>
								<FaSearch style={{fontSize: '30px'}} />
							</div>
						</span>
						<input
							className='form-control py-2 border-right-0 border'
							value={searchText}
							type='text'
							name='q'
							onChange={(e) => setSearchText(e.target.value)}
						/>
					</div>
				</form>
			</Stack>
		</Container>
	);
}