import React from 'react';
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

	submitMovie = (e) => {
		if (e && this.state.movie) {
			e.preventDefault();
			this.props.onSubmit(this.state.movie);
			this.setState({ movie: '' });
		}
	};
	render() {
		return (
			<form className='relative flex items-center' onSubmit={this.submitMovie}>
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
					<button type='submit' className='submit-btn'>
						Submit
					</button>
				</div>
			</form>
		);
	}
}

export default Input;
