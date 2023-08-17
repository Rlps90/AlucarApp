import CarrosAluguel from './pages/CarrosAluguel'
import Navbar from './Components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import { Routes, Route } from 'react-router-dom'

function App() {
	return (
		<main className='bg-gradient-to-b from-emerald-500 to-emerald-900 text-rose-200'>
			<Navbar />
			<Routes>
				<Route
					path=""
					element={<Home />}
				/>
				<Route
					path="/about"
					element={<About />}
				/>
				<Route
					path="/carros"
					element={<CarrosAluguel />}
				/>
			</Routes>
		</main>
	)
}

export default App
