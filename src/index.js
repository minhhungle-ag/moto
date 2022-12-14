import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter } from 'react-router-dom'
import { createTheme, responsiveFontSizes, ThemeProvider } from '@mui/material/styles'
import { CssBaseline } from '@mui/material'

let theme = createTheme({
  palette: {
    primary: {
      main: '#f4911d', //'#202328'
      light: '', //'#2e313a',
      dark: '#000000',
      contrastText: '#FFFFFFB3',
    },
    mode: 'dark',
  },
})
theme = responsiveFontSizes(theme)

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
