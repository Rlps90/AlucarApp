import Create from './Create'

const Crud = () => {
	return (
		<div className="bg-[url('/src/assets/hero-bg.jpg')] flex flex-col items-center p-16">
			<div className="container w-auto shadow-2xl rounded-lg p-8 bg-gradient-to-b from-emerald-500 to-emerald-900">
				<h2 className="text-2xl py-10 text-white">Cadastro Cliente</h2>
				<Create />
			</div>
		</div>
	)
}
export default Crud
