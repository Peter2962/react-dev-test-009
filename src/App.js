import '@/App.css';
import '@/StyleEntry';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

// screens/views
	import { LayoutScreen } from '@/screens/LayoutScreen'
// end screens/views

function App() {
	const [user, setUser] = useState(true);
	const EmulatedLoginScreen = () => {
		return (
			<div>
				<h1>Login</h1>
			</div>
		);
	};
	return (
		<Routes>
			<Route path='/*' element={user ? <LayoutScreen /> : <EmulatedLoginScreen />} />
		</Routes>
	);
}

export default App;