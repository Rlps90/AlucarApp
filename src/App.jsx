import CarrosAluguel from './pages/CarrosAluguel'
import Navbar from './Components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import { Routes, Route } from 'react-router-dom'

function App() {
	return (
		<main>
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
