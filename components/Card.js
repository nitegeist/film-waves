import Image from 'next/image';
export default function Card({ movie: { img, movie, genre, year } }) {
	return (
		<>
			<div className='card'>
				<Image
					src={img}
					className='object-cover absolute h-full w-full inset-0 rounded'
					layout='fixed'
					width='256'
					height='256'
					draggable='false'
					alt='Old Henry'
				/>
				<p className='card-title'>{movie}</p>
				<small className='card-subtitle'>
					{genre} &bull; {year}
				</small>
				<span className='card-badge'>
					<small>
						{'0x8de806462823aD25056eE8104101F9367E208C14'.substr(0, 6) +
							'...' +
							'0x8de806462823aD25056eE8104101F9367E208C14'.substr(38)}
					</small>
				</span>
			</div>
		</>
	);
}
