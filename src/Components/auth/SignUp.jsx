import { useState } from 'react'
import { auth } from '../../Firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'

const SignUp = () => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const signUp = (e) => {
		e.preventDefault()
		createUserWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				console.log(userCredential)
			})
			.catch((error) => {
				console.log(error)
			})
	}

	return (
		<div className="flex bg-yellow-400 items-center justify-center h-full w-full">
			<form
				className="bg-orange-900 p-20 rounded-xl"
				onSubmit={signUp}>
				<div className="flex flex-col gap-5">
					<h1>Create Account</h1>
					<input
						type="email"
						placeholder="Enter your email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
					<input
						type="password"
						placeholder="Enter your password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
					<button
						type="submit"
						className="border-2 rounded border-black bg-purple-900 text-yellow-800 drop-shadow-xl hover:bg-purple-700">
						Submit
					</button>
				</div>
			</form>
		</div>
	)
}
export default SignUp
