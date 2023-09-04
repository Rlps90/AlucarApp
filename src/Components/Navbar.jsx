// import DrawerComp from './DrawerComp'
// import { Route, Routes, Link } from 'react-router-dom'
// import { Button } from '@mui/material'
// import Crud from './CRUD/Crud'
// import logo from '../assets/alucar-logo.png'

// const Navbar = () => {
// 	const MENU = [
// 		{
// 			id: 1,
// 			title: 'Home',
// 			link: '/',
// 		},
// 		{
// 			id: 2,
// 			title: 'Sobre',
// 			link: '/about',
// 		},
// 		{
// 			id: 3,
// 			title: 'Carros',
// 			link: '/carros',
// 		},
// 	]

// 	return (
// 		<header className="bg-gradient-to-b from-emerald-900 to-emerald-500">
// 			<nav className="flex flex-row justify-between items-center w-[95%] py-4">
// 				<a
// 					href="/"
// 					className="flex flex-row text-[1.75rem] uppercase">
// 					<img
// 						src={logo}
// 						alt="logo"
// 						className="rounded-md max-w-[75px] mr-3"
// 					/>
// 				</a>

// 				<div className="">
// 					<ul className="flex items-center invisible lg:visible gap-[4vw] uppercase">
// 						{MENU.map((item) => {
// 							const { id, title, link } = item
// 							return (
// 								<li key={id}>
// 									<a
// 										href={link}
// 										className="text-zinc-200 hover:text-rose-500 text-xl font-semibold">
// 										{title}
// 									</a>
// 								</li>
// 							)
// 						})}
// 					</ul>
// 				</div>

// 				<div>
// 					<Button
// 						type="button"
// 						className="relative flex bg-[#19571e] hover:bg-[#70d14a] rounded-full px-3 py-1 w-auto items-center justify-center text-zinc-200 text-xl">
// 						<Link to={`CRUD/Crud`}>Login</Link>
// 					</Button>
// 				</div>

// 				<div className="ml-2 -my-1 lg:hidden bg-[#19571e] hover:bg-[#70d14a] rounded-lg">
// 					<DrawerComp />
// 				</div>
// 			</nav>

// 			<Routes>
// 				<Route
// 					path="/CRUD/Crud"
// 					element={<Crud />}
// 				/>
// 			</Routes>
// 		</header>
// 	)
// }
// export default Navbar
import {
	Navbar,
	Collapse,
	Typography,
	Button,
	IconButton,
} from '@material-tailwind/react'
import { useState, useEffect } from 'react'
import logo from '../assets/alucar-logo.png'

export default function NavbarDefault() {
	const [openNav, setOpenNav] = useState(false)

	useEffect(() => {
		window.addEventListener(
			'resize',
			() => window.innerWidth >= 960 && setOpenNav(false)
		)
	}, [])

	const navList = (
		<ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
			<Typography
				as="li"
				variant="small"
				color="blue-gray"
				className="p-1 font-normal">
				<a
					href="/"
					className="flex items-center">
					Home
				</a>
			</Typography>
			<Typography
				as="li"
				variant="small"
				color="blue-gray"
				className="p-1 font-normal">
				<a
					href="/about"
					className="flex items-center">
					Sobre Nós
				</a>
			</Typography>
			<Typography
				as="li"
				variant="small"
				color="blue-gray"
				className="p-1 font-normal">
				<a
					href="/carros"
					className="flex items-center">
					Carros
				</a>
			</Typography>
		</ul>
	)

	return (
		<Navbar className="relative bg-yellow-700 w-full max-w-none py-2 px-4 rounded-none border-none">
			<div className="mx-auto flex items-center justify-between text-blue-gray-900">
				<Typography
					as="a"
					href="#"
					className="mr-4 cursor-pointer py-1.5 font-medium">
					<img
						src={logo}
						alt="logo"
						className="rounded-md max-w-[75px] mr-3"
					/>
				</Typography>
				<div className="hidden lg:block">{navList}</div>
				<Button
					variant="gradient"
					size="sm"
					className="hidden lg:inline-block">
					<span>Login</span>
				</Button>
				<IconButton
					variant="text"
					className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
					ripple={false}
					onClick={() => setOpenNav(!openNav)}>
					{openNav ? (
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							className="h-6 w-6"
							viewBox="0 0 24 24"
							stroke="currentColor"
							strokeWidth={2}>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M6 18L18 6M6 6l12 12"
							/>
						</svg>
					) : (
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-6 w-6"
							fill="none"
							stroke="currentColor"
							strokeWidth={2}>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M4 6h16M4 12h16M4 18h16"
							/>
						</svg>
					)}
				</IconButton>
			</div>
			<Collapse open={openNav}>
				<div className="container mx-auto">
					{navList}
					<Button
						variant="gradient"
						size="sm"
						fullWidth
						className="mb-2">
						<span>Login</span>
					</Button>
				</div>
			</Collapse>
		</Navbar>
	)
}
