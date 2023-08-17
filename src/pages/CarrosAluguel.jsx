import { useState } from 'react'
import { carros } from '../data'

const CarrosAluguel = () => {
	const [carrosDisponiveis, setCarrosDisponiveis] = useState(carros)

	return (
		<section className="carrosDisponiveis">
			{carrosDisponiveis.map((carro) => {
				const { id, marca, modelo, valor, imagem } = carro
				return (
					<article
						className="carro"
						key={id}>
						<img
							src={imagem}
							alt={modelo}
							className="carImg"
						/>
						<h5>
							{marca} {modelo}
						</h5>
						<p>R${valor}/dia</p>
					</article>
				)
			})}
		</section>
	)
}
export default CarrosAluguel
