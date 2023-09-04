import { useState } from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react'
import axios from 'axios'

const Create = () => {
	const [firstName, setFirstName] = useState('')
	const [lastName, setLastName] = useState('')
	const [checkbox, setCheckbox] = useState(false)

	const postData = () => {
		axios.post(`https://64cd4af9bb31a268409a8ee9.mockapi.io/fakeData`, {
			firstName,
			lastName,
			checkbox,
		})
	}

	return (
		<div className="text-white font-serif h-fit">
			<Form className="space-y-4">
				<Form.Field>
					<input
						type="text"
						name="first-name"
						placeholder="Nome"
						onChange={(e) => setFirstName(e.target.value)}
						className="text-black rounded"
					/>
				</Form.Field>
				<Form.Field>
					<input
						type="text"
						name="last-name"
						placeholder="Sobrenome"
						onChange={(e) => setLastName(e.target.value)}
						className="text-black rounded"
					/>
				</Form.Field>
				<Form.Field>
					<Checkbox
						label="Aceito Termos e Condições"
						onChange={() => setCheckbox(!checkbox)}
					/>
				</Form.Field>
				<Button
					className="p-2 border-b-2 border-r-2 rounded-lg border-slate-600 shadow-md bg-rose-400 hover:bg-rose-800"
					type="submit"
					onClick={postData}>
					Cadastrar
				</Button>
			</Form>
		</div>
	)
}
export default Create
