import React, { useMemo } from 'react'
import { SiGithub, SiLinkedin, SiTwitter } from 'react-icons/si'

const Footer = () => {
	const links = useMemo(
		() => [
			{
				url: 'https://github.com/erik18xk',
				icon: SiGithub,
			},
			{
				url: 'https://twitter.com',
				icon: SiTwitter,
			},
			{
				url: 'https://www.linkedin.com/in/erik-olivero-b8a9161a0/',
				icon: SiLinkedin,
			},
		],
		[]
	)

	return (
		<div className='flex-1 border-slate-200 border-t-2'>
			<div className='grid grid-cols-3 gap-4 mt-10'>
				{links.map(({ url, icon: Icon }) => (
					<a
						className='mx-auto'
						href={url}
						key={url}
						target='_blank'
						opacity={0.7} rel="noreferrer"
					>
						<Icon size={20} />
					</a>
				))}
			</div>
			<p className='text-lg text-gray-500 py-3 mt-10 text-center'>
				© {new Date().getFullYear()} Erik Olivero
			</p>
		</div>
	)
}

export default Footer
