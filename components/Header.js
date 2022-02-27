import React, { useMemo } from 'react'
import Link from 'next/link'
import { VscClose, VscMenu } from 'react-icons/vsc'
import Footer from './Footer'

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
					'flex flex-1 flex-col justify-around py-10 items-center lg:flex-row lg:justify-end'
				}
			>
				{menuItems.map(({ name, href }, key) => (
					<li key={key} className={'lg:px-3'}>
						<Link href={href}>
							<a
								onClick={open && handleMenu}
								className={'text-4xl font-semibold lg:text-lg lg:font-normal'}
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
					<a className='text-xl lg:text-2xl' onClick={handleMenu}>
						Erik Olivero
					</a>
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
				<div className='flex flex-1 h-[calc(100vh-96px)] flex-col lg:hidden'>
					{items}
					<div className='flex flex-1 items-end mx-auto w-64'>
						<Footer />
					</div>
				</div>
			)}
		</>
	)
}

export default Header
