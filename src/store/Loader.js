import { createSlice } from '@reduxjs/toolkit';

export const Loader = createSlice({
	name: 'loader',
	initialState: {
		show: false
	},
	reducers: {
		showLoader: (state) => {
			state.show = true;
		},
		hideLoader: (state) => {
			state.show = false;
		}
	}
});

export const { showLoader, hideLoader } = Loader.actions;

export default Loader.reducer;