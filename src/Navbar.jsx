import Title from './Title'
import { Divide as Hamburger } from 'hamburger-react'
import { useState } from 'react'

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false)

	const MENU = [
		{
			id: 1,
			title: 'Home',
			link: '#',
		},
		{
			id: 2,
			title: 'About',
			link: '#',
		},
		{
			id: 3,
			title: 'Cars',
			link: '#',
		},
	]

	return (
		<nav className="topNav">
			<a
				href="#"
				className="logo">
				<Title text="Alucar" />
			</a>
			<button
				type="button"
				className="login-btn"
				onClick={() => console.log('clicked!')}>
				Login
			</button>
			<div className="burgerMenu">
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
