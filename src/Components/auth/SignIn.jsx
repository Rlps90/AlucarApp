import { useState } from 'react'
import { auth } from '../../Firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'

const SignIn = () => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const signIn = (e) => {
		e.preventDefault()
		signInWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				console.log(userCredential)
			})
			.catch((error) => {
				console.log(error)
			})
	}

	const openInNewTab = (url) => {
		window.open(url, '_blank', 'noreferrer')
	}

	return (
		<div className="flex bg-yellow-400 items-center justify-center h-full w-full">
			<form
				className="bg-orange-900 p-20 rounded-xl"
				onSubmit={signIn}>
				<div className="flex flex-col gap-5">
					<h1 className="font-bold text-lg">Log In</h1>
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
						className="font-bold text-lg">
						Submit
					</button>
					<button
						role="link"
						className="font-bold text-lg"
						onClick={() => openInNewTab('http://localhost:5173/SignUp')}>
						Create Account
					</button>
				</div>
			</form>
		</div>
	)
}
export default SignIn
