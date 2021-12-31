import Image from 'next/image';
export default function Card({ movie: { account, image, title, genre, year } }) {
	return (
		<>
			<div className='card'>
				<Image
					src={image}
					className='object-cover absolute h-full w-full inset-0 rounded'
					layout='fixed'
					width='256'
					height='256'
					draggable='false'
					alt={title}
				/>
				<p className='card-title'>{title}</p>
				<small className='card-subtitle'>
					{genre} &bull; {year}
				</small>
				{account ? (
					<span className='card-badge'>
						<small>{account.substr(0, 6) + '...' + account.substr(38)}</small>
					</span>
				) : (
					''
				)}
			</div>
		</>
	);
}
