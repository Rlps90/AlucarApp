import CarrosAluguel from './pages/CarrosAluguel'
import Navbar from './Components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import { Routes, Route } from 'react-router-dom'
import { ThemeProvider, createTheme } from '@mui/material/styles'

const theme = createTheme({
	direction: 'rtl',
	// other theme properties
})

function App() {
	return (
		<ThemeProvider theme={theme}>
			<main className="bg-gradient-to-b from-emerald-500 to-emerald-900 text-zinc-200 h-screen">
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
		</ThemeProvider>
	)
}

export default App
