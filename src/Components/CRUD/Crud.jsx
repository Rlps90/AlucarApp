import { Link, Routes, Route } from 'react-router-dom'
import Create from './Create'
import Read from './Read'
import Update from './Update'

const Crud = () => {
	return (
		<div className="bg-[url('/src/assets/hero-bg.jpg')] flex flex-col items-center h-screen p-16">
			<div className="container w-auto shadow-2xl rounded-lg p-8 bg-gradient-to-b from-emerald-500 to-emerald-900 font-bold">
				<h2 className="text-2xl pt-1 pb-10 text-white">Cadastro Cliente</h2>
				<div className="flex flex-row gap-5 text-black ">
					<Link
						className="p-2 border-b-2 border-r-2 rounded-lg bg-rose-400 hover:bg-rose-800 border-slate-600 shadow-lg"
						to="/CRUD/Create">
						Cadastro
					</Link>
					<Link
						className="p-2 border-b-2 border-r-2 rounded-lg bg-rose-400 hover:bg-rose-800 border-slate-600 shadow-lg"
						to="/CRUD/Read">
						Consulta
					</Link>
					<Link
						className="p-2 border-b-2 border-r-2 rounded-lg bg-rose-400 hover:bg-rose-800 border-slate-600 shadow-lg"
						to="/CRUD/Update">
						Edição
					</Link>
				</div>
			</div>

			<Routes>
				<Route
					exact path="/CRUD/Create"
					element={<Create />}
				/>
				<Route
					exact path="/CRUD/Read"
					element={<Read />}
				/>
				<Route
					exact path="/CRUD/Update"
					element={<Update />}
				/>
			</Routes>
		</div>
	)
}
export default Crud
