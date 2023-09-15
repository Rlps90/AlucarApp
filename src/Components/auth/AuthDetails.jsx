import { onAuthStateChanged, signOut } from 'firebase/auth'
import { useEffect, useState } from 'react'
import { auth } from '../../Firebase'

const AuthDetails = () => {
	const [authUser, setAuthUser] = useState(null)

	useEffect(() => {
		const listen = onAuthStateChanged(auth, (user) => {
			if (user) {
				setAuthUser(user)
			} else {
				setAuthUser(null)
			}
		})

		return () => {
			listen()
		}
	}, [])

	const userSignOut = () => {
		signOut(auth)
			.then(() => {
				console.log('Signed out')
			})
			.catch((err) => console.log(err))
	}

	return (
		<div>
			{authUser ? (
				<>
					<p>{`Welcome ${authUser.email}`}</p>
					<button
						type="button"
						onClick={userSignOut}
						className="border-2 rounded border-black bg-purple-900 text-yellow-800 drop-shadow-xl hover:bg-purple-700 p-2">
						Sign Out
					</button>
				</>
			) : (
				<p>Signed Off</p>
			)}
		</div>
	)
}
export default AuthDetails
