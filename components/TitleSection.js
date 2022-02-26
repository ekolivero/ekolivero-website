const TitleSection = ({ heading, title, description }) => {
	return (
		<div className='flex flex-1 flex-col text-center'>
			<h5 className='text-lg font-light italic uppercase p-3'>{heading}</h5>
			<h1 className='text-2xl font-bold italic p-3'>{title}</h1>
			{description && <h4 className='text-xl font-bold'>{description}</h4>}
		</div>
	)
}

export default TitleSection
