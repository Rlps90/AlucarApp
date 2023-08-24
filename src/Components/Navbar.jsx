import Title from './Title'
import DrawerComp from './DrawerComp'
import { Route, Routes, Link } from 'react-router-dom'
import { Button } from '@mui/material'
import Crud from './CRUD/Crud'

const Navbar = () => {
	return (
		<>
			<nav className="relative flex items-center bg-gradient-to-b from-emerald-900 to-emerald-500 pb-4">
				<a
					href="/"
					className="mr-3 flex-none w-[2.0625rem] overflow-hidden md:w-auto text-2xl pl-2 uppercase font-bold">
					<Title text="Alucar" />
				</a>
				<Button
					type="button"
					className="relative ml-auto -my-1 flex items-center justify-center text-rose-200 hover:text-rose-400 text-xl">
					<Link to={`CRUD/Crud`}>Login</Link>
				</Button>

				<div className="ml-2 -my-1 lg:hidden">
					<DrawerComp />
				</div>
			</nav>

			<Routes>
				<Route
					path="/CRUD/Crud"
					element={<Crud />}
				/>
			</Routes>
		</>
	)
}
export default Navbar
