export function LoaderComponent({ show }) {
	return (
		<div className={`loader-component-wrapper ${show ? 'loader-component-active' : 'loader-component-destruct'}`}>
			<div className='loader-component'>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
			</div>
		</div>
	);
}