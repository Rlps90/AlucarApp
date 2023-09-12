import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
	apiKey: 'AIzaSyCIb6jULadd0uuV7UD8pbfhD_E901uX_vc',
	authDomain: 'alucarapp-login.firebaseapp.com',
	projectId: 'alucarapp-login',
	storageBucket: 'alucarapp-login.appspot.com',
	messagingSenderId: '116346880893',
	appId: '1:116346880893:web:40e7f06232289e05d3c214',
	measurementId: 'G-BTV5EJ16GH',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app)
