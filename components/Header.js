import React, { useMemo } from 'react'
import Link from 'next/link'
import { VscClose, VscMenu } from 'react-icons/vsc'

const Header = ({ open, setOpen }) => {
	const handleMenu = () => {
		setOpen((open) => !open)
	}

	const menuItems = [
		{
			name: 'Posts',
			href: '/posts',
		},
		{
			name: 'Bookmarks',
			href: '/bookmarks',
		},
		{
			name: 'Videos',
			href: '/videos',
		},
	]

	const items = useMemo(
		() => (
			<ul
				className={
					'flex flex-1 flex-col justify-start lg:flex-row lg:justify-end'
				}
			>
				{menuItems.map(({ name, href }) => (
					<li className={'py-1 lg:px-3'}>
						<Link href={href}>
							<a
								onClick={open && handleMenu}
								className={'text-2xl font-semibold lg:text-lg lg:font-normal'}
							>
								{name}
							</a>
						</Link>
					</li>
				))}
			</ul>
		),
		[open]
	)

	return (
		<>
			<div className='flex flex-1 flex-row h-24 items-center'>
				<Link href='/'>
					<a className='text-xl lg:text-2xl'>Erik Olivero</a>
				</Link>
				<div className='hidden lg:flex flex-1'>{items}</div>
				<div className='flex flex-1 justify-end lg:hidden'>
					{open ? (
						<VscClose
							size={30}
							onClick={handleMenu}
							className='cursor-pointer'
						/>
					) : (
						<VscMenu
							size={30}
							onClick={handleMenu}
							className='cursor-pointer'
						/>
					)}
				</div>
			</div>
			{open && (
				<div className='flex flex-1 flex-column lg:hidden justify-start py-8'>
					{items}
				</div>
			)}
		</>
	)
}

export default Header
