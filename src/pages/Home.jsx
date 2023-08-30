import { Autocomplete, TextField } from '@mui/material'
import { carros } from '../data'
import BasicDateCalendar from '../Components/BasicDateCalendar'
import logo from '../assets/alucar-logo.png'
import Button from '@mui/material/Button'
import { useState } from 'react'

const Home = () => {
	const [dayStart, setDayStart] = useState(null)
	const [dayEnd, setDayEnd] = useState(null)

	return (
		<>
			<div className='bg-[url("/src/assets/hero-bg.jpg")]'>
				<div className="font-bold tracking-wide pt-6 drop-shadow-md">
					<h1 className="text-4xl italic">Faça sua reserva agora</h1>
				</div>
				<section className="flex flex-col w-full h-full items-center justify-center py-8">
					<div className="max-w-xs pb-10">
						<img
							src={logo}
							alt="logo"
							className="rounded-md"
						/>
					</div>

					<form className="flex flex-col gap-4">
						<BasicDateCalendar
							value={dayStart}
							onChange={(e) => setDayStart(e.target.value)}
						/>
						<BasicDateCalendar
							value={dayEnd}
							onChange={(e) => setDayEnd(e.target.value)}
						/>
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
						<Button
							variant="contained"
							className="justify-self-center bg-rose-400 hover:bg-rose-800">
							Reservar
						</Button>
					</form>
				</section>
			</div>
		</>
	)
}
export default Home
