import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import './index.css'
import { ThemeProvider } from '@kobandavis/ui'

const root = ReactDOM.createRoot(document.getElementById('root')!)

root.render(
	<React.StrictMode>
		<ThemeProvider initialTheme={{ primary: '#2F2235', secondary: '#BFC3BA' }}>
			<App />
		</ThemeProvider>
	</React.StrictMode>
)
