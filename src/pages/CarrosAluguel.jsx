import { useState } from 'react'
import { carros } from '../data'

const CarrosAluguel = () => {
	const [carrosDisponiveis, setCarrosDisponiveis] = useState(carros)
	

	return (
		<section className="flex flex-row bg-auto text-black gap-5">
			{carrosDisponiveis.map((carro) => {
				const { id, marca, modelo, valor, imagem } = carro
				return (
					<article
						key={id}
						className="">
						<img
							src={imagem}
							alt={modelo}
						/>
						<h5 className='text-xl italic'>
							{marca} {modelo}
						</h5>
						<p className='font-bold'>R${valor}/dia</p>
					</article>
				)
			})}
		</section>
	)
}
export default CarrosAluguel
