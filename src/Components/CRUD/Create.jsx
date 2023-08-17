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
		<Form className="create-form">
			<Form.Field>
				<label>First Name</label>
				<input
					type="text"
					name="first-name"
					placeholder="First Name"
					onChange={(e) => setFirstName(e.target.value)}
				/>
			</Form.Field>
			<Form.Field>
				<label>Last Name</label>
				<input
					type="text"
					name="last-name"
					placeholder="Last Name"
					onChange={(e) => setLastName(e.target.value)}
				/>
			</Form.Field>
			<Form.Field>
				<Checkbox
					label="I agree to the Terms and Conditions"
					onChange={() => setCheckbox(!checkbox)}
				/>
			</Form.Field>
			<Button
				className="ui button"
				type="submit"
				onClick={postData}>
				Submit
			</Button>
		</Form>
	)
}
export default Create
