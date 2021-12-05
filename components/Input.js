import { ethers } from 'ethers';
import React from 'react';
import abi from '../utils/MovieContract.json';

class Input extends React.Component {
	constructor(props) {
		super(props);
		this.state = { movie: '' };
		this.handleChange = this.handleChange.bind(this);
		this.submitMovie = this.submitMovie.bind(this);
	}

	handleChange(e) {
		this.setState({ movie: e.target.value });
	}

	submitMovie = async (e) => {
		if (e && this.state.movie) {
			const contractAddress = '0x9E31B7cb9067f822d3BBC591f698c15aA80a9612';
			const contractABI = abi.abi;
			e.preventDefault();
			try {
				const { ethereum } = window;

				if (ethereum) {
					const provider = new ethers.providers.Web3Provider(ethereum);
					const signer = provider.getSigner();
					const movieContract = new ethers.Contract(contractAddress, contractABI, signer);
					const movieTxn = await movieContract.submitMovie(this.state.movie);
					console.log('Mining...', movieTxn.hash);
					await movieTxn.wait();
					console.log('Mined -- ', movieTxn.hash);
					let count = await movieContract.getUserMovieCount(this.props.account);
					console.log('Total number of movies for %s is %s', this.props.account, count.toNumber());
				} else {
					console.log("Ethereum object doesn't exist!");
				}
			} catch (error) {
				console.log(error);
			}
			this.setState({ movie: '' });
		}
	};
	render() {
		return (
			<>
				<div className='w-full'>
					<input
						type='text'
						className='input'
						value={this.state.movie}
						onChange={this.handleChange}
						placeholder='Your Movie Recommendation'
					/>
				</div>
				<div>
					<button type='submit' onClick={this.submitMovie} className='submit-btn'>
						Submit
					</button>
				</div>
			</>
		);
	}
}

export default Input;
