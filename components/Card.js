import Link from 'next/link'

const Card = ({ title, description, image, url, tags, domain }) => {
	return (
		<Link href={url}>
			<div className='max-w-auto rounded overflow-hidden shadow-lg hover:shadow-2xl cursor-pointer'>
				<img className='w-full h-44' src={image} alt='Sunset in the mountains' />
				<div className='px-6 py-4'>
					<div className='font-bold text-xl mb-2'>{title}</div>
					<p className='text-gray-700 text-base'>{description}</p>
					<p className='text-sm text-gray-500 mt-5'>{domain}</p>
				</div>
				<div className='h-fit px-6 pt-4 pb-2'>
					{tags.map((tag) => (
						<span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 cursor-pointer'>
							{tag}
						</span>
					))}
				</div>
			</div>
		</Link>
	)
}

export default Card
