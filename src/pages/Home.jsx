import { Autocomplete, TextField } from '@mui/material'
import { carros } from '../data'
import BasicDateCalendar from '../Components/BasicDateCalendar'
import logo from '../assets/alucar-logo.png'
import Button from '@mui/material/Button'

const Home = () => {
	return (
		<>
			<div className="font-bold py-6 tracking-wide text-amber-800">
				<h1 className='text-4xl'>Bem vindo à Alucar</h1>
				<h2 className='text-2xl'>Faça sua reserva agora</h2>
			</div>
			<div className="flex flex-col items-center gap-4 bg-amber-800">
				<img
					src={logo}
					alt="logo"
					className="max-w-xs rounded-md"
				/>
				<BasicDateCalendar className='bg-slate-100'/>
				<BasicDateCalendar />
				<Autocomplete
					disablePortal
					id="escolhaCarros"
					options={carros}
					sx={{ width: 300 }}
					renderInput={(params) => (
						<TextField
							{...params}
							placeholder="Carros"
						/>
					)}
					getOptionLabel={(carro) => carro.marca + ' ' + carro.modelo}
				/>
				<Button variant="contained">Reservar</Button>
			</div>
		</>
	)
}
export default Home
