import React, { useState } from 'react'
import Head from 'next/head'
import { Header } from './'

const Layout = ({ children }) => {
	const [menuOpen, setMenuOpen] = useState(false)

	return (
		<div className='container mx-auto px-8'>
			<Head>
				<title> Erik Olivero </title>
			</Head>
			<Header open={menuOpen} setOpen={setMenuOpen} />
			<div className={`${menuOpen ? 'hidden' : 'flex'} lg:flex py-3 flex-col`}>
				{children}
			</div>
		</div>
	)
}

export default Layout
