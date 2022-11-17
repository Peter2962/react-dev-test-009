import Loader from '@/store/Loader';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
	reducer: {
		loader: Loader,
	}
});
export default store;