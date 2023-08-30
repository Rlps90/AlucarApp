import Title from './Title'
import DrawerComp from './DrawerComp'
import { Route, Routes, Link } from 'react-router-dom'
import { Button } from '@mui/material'
import Crud from './CRUD/Crud'
import logo from '../assets/alucar-logo.png'

const Navbar = () => {
	const MENU = [
		{
			id: 1,
			title: 'Home',
			link: '/',
		},
		{
			id: 2,
			title: 'Sobre',
			link: '/about',
		},
		{
			id: 3,
			title: 'Carros',
			link: '/carros',
		},
	]

	return (
		<header className="bg-gradient-to-b from-emerald-900 to-emerald-500">
			<nav className="flex flex-row justify-between items-center w-[95%] mx-auto pb-4 py-4">
				<a
					href="/"
					className="flex flex-row mr-3 w-auto overflow-hidden text-[1.75rem] pl-2 uppercase font-bold items-center">
					<img
						src={logo}
						alt="logo"
						className="rounded-md max-w-[10vh] mr-3"
					/>
					<div className="invisible lg:visible">
						<Title text="Alucar" />
					</div>
				</a>

				<div className="">
					<ul className="flex items-center invisible lg:visible gap-[4vw] uppercase">
						{MENU.map((item) => {
							const { id, title, link } = item
							return (
								<li key={id}>
									<a
										href={link}
										className="text-zinc-200 hover:text-rose-500 text-xl font-semibold">
										{title}
									</a>
								</li>
							)
						})}
					</ul>
				</div>

				<div>
					<Button
						type="button"
						className="relative flex bg-[#19571e] hover:bg-[#70d14a] rounded-full px-3 py-1 w-auto items-center justify-center text-zinc-200 text-xl">
						<Link to={`CRUD/Crud`}>Login</Link>
					</Button>
				</div>

				<div className="ml-2 -my-1 lg:hidden bg-[#19571e] hover:bg-[#70d14a] rounded-lg">
					<DrawerComp />
				</div>
			</nav>

			<Routes>
				<Route
					path="/CRUD/Crud"
					element={<Crud />}
				/>
			</Routes>
		</header>
	)
}
export default Navbar
