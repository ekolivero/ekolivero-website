import Link from 'next/link'

const Card = ({ title, description, image, url, tags, domain }) => {
	return (
		<div className='max-w-sm mx-auto rounded overflow-hidden shadow-lg hover:shadow-2xl'>
			<img className='w-full h4 h-32' src={image} alt='image-article' />
			<div className='px-6 py-4 h-44 relative'>
				<div className='font-bold text-xl mb-2 line-clamp-1'>{title}</div>
				<p className='text-gray-700 text-base line-clamp-3'>{description}</p>
				<Link href={url}>
					<p className='text-sm text-gray-500 py-3 mt-5 cursor-pointer absolute bottom-0'>
						Read Full Article on {domain} {'->'}
					</p>
				</Link>
			</div>
			<div className='h-fit px-6 pt-4 pb-2'>
				{tags.map((tag, idx) => (
					<span
						key={idx}
						className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 cursor-pointer'
					>
						{tag}
					</span>
				))}
			</div>
		</div>
	)
}

export default Card
