import { Autocomplete, TextField } from '@mui/material'
import { carros } from '../data'
import BasicDateCalendar from '../Components/BasicDateCalendar'
import logo from '../assets/alucar-logo.png'
import Button from '@mui/material/Button'

const Home = () => {
	return (
		<>
			<div className='bg-[url("/src/assets/hero-bg.jpg")] '>
				<div className="font-bold tracking-wide pt-6 drop-shadow-md">
					<h1 className='text-4xl'>Faça sua reserva agora</h1>
				</div>
				<div className='w-full h-full flex items-center justify-center py-8 '>
					<div className="grid gap-4 shadow-2xl max-w-md rounded-lg p-8 bg-gradient-to-b from-emerald-500 to-emerald-900">
						<img
							src={logo}
							alt="logo"
							className="max-w-xs rounded-md"
						/>
						<BasicDateCalendar />
						<BasicDateCalendar />
						<Autocomplete
							disablePortal
							id="escolhaCarros"
							options={carros}
							renderInput={(params) => (
								<TextField
									{...params}
									placeholder="Carros"
								/>
							)}
							getOptionLabel={(carro) => carro.marca + ' ' + carro.modelo}
						/>
						<Button variant="contained" className='justify-self-center bg-pink-900 '>Reservar</Button>
					</div>
				</div>
			</div>
		</>
	)
}
export default Home
