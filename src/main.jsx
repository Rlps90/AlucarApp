import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import {StyledEngineProvider} from '@mui/material'

ReactDOM.createRoot(document.getElementById('root')).render(
	<BrowserRouter>
		<StyledEngineProvider injectFirst>
			<App />
		</StyledEngineProvider>
	</BrowserRouter>
)
