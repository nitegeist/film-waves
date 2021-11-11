import { useState } from 'react';

export default function Input() {
	const [movie, setMovieValue] = useState();
	const submitMovie = async (e) => {
		e.preventDefault();
		console.log(movie);
		// const provider = new ethers.providers.Web3Provider(window.ethereum);
		// const signer = provider.getSigner();
		// const movieContract = new ethers.Contract(movieAddress, Movie.abi, signer);
		// const transaction = await movieContract.submitMovieRecc(movie);
		// await transaction.wait();
		// const totalMovieReccs = await movieContract.getTotalMovieReccs();
		setMovieValue('');
	};
	return (
		<>
			<div className='w-full'>
				<input
					type='text'
					className='input'
					value={movie}
					onChange={(e) => setMovieValue(e.target.value)}
					placeholder='Your Movie'
				/>
			</div>
			<div>
				<button type='submit' onClick={submitMovie} className='submit-btn'>
					Submit
				</button>
			</div>
		</>
	);
}
