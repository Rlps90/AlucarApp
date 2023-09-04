// import { useState } from 'react'
// import { carros } from '../data'
// import { Carousel } from '@material-tailwind/react'

// const CarrosAluguel = () => {
// 	const [carrosDisponiveis, setCarrosDisponiveis] = useState(carros)

// 	return (
// 		<section className="text-black w-1/3 gap-5">
// 			<Carousel className="rounded-xl">
// 				{carrosDisponiveis.map((carro) => {
// 					const { id, marca, modelo, valor, imagem } = carro
// 					return (
// 						<img
// 							key={id}
// 							src={imagem}
// 							alt={modelo}
// 							className="h-full w-full object-cover"
// 						/>
// 					)
// 				})}
// 			</Carousel>
// 		</section>
// 	)
// }
// export default CarrosAluguel

import {
	Card,
	CardHeader,
	CardBody,
	Typography,
} from '@material-tailwind/react'
import { carros } from '../data'

export default function CardDefault() {
	return (
		<section className="flex flex-wrap gap-6 pt-5 bg-blue-gray-800 h-screen justify-between">
			{carros.map((carro) => {
				const { id, marca, modelo, valor, imagem } = carro
				return (
					<Card
						key={id}
						className="mt-6 w-96 h-fit">
						<CardHeader className="relative h-56">
							<img
								src={imagem}
								alt={modelo}
							/>
						</CardHeader>
						<CardBody>
							<Typography
								variant="h5"
								color="blue-gray"
								className="mb-2">
								{marca} {modelo}
							</Typography>
							<Typography>R$ {valor}</Typography>
						</CardBody>
					</Card>
				)
			})}
		</section>
	)
}
