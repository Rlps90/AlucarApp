import Title from './Title'
import { Link } from 'react-router-dom'
import { Divide as Hamburger } from 'hamburger-react'
import { useState } from 'react'
import { Button } from '@mui/material'

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false)

	const MENU = [
		{
			id: 1,
			title: 'Home',
			link: '/',
		},
		{
			id: 2,
			title: 'About',
			link: '/about',
		},
		{
			id: 3,
			title: 'Cars',
			link: '/carros',
		},
	]

	return (
		<nav className="flex flex-row flex-nowrap justify-between items-center bg-gradient-to-b from-emerald-900 to-emerald-500 pb-1">
			<a
				href="/"
				className="flex-initial text-2xl pl-2 uppercase font-bold">
				<Title text="Alucar" />
			</a>
			<Button
				type="button"
				className="absolute right-10 text-xl text-scallop">
				<Link to={`CRUD/Create`}>Login</Link>
			</Button>

			<div className="justify-self-end">
				{isOpen ? (
					<>
						<Hamburger
							toggled={isOpen}
							rounded
							toggle={setIsOpen}
						/>
						<Title text="Alucar" />
						<ul className="burger-nav">
							{MENU.map((item) => {
								const { id, title, link } = item
								return (
									<li key={id}>
										<a href={link}>{title}</a>
									</li>
								)
							})}
						</ul>
					</>
				) : (
					<Hamburger
						toggled={isOpen}
						rounded
						toggle={setIsOpen}
						className="burger-btn"
					/>
				)}
			</div>
		</nav>
	)
}
export default Navbar
