import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import { alpha, Box } from '@mui/material'
import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/layouts/Footer'
import Header from './components/layouts/Header'
import DiplomaticIt from './features/DiplomaticIt/pages/DiplomaticIt'

import HomePage from './features/Home/page/HomePage'

function App() {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        bgcolor: '#202328',
        color: (theme) => alpha(theme.palette.common.white, 0.7),
      }}
    >
      <Header />

      <Routes>
        <Route index element={<Navigate to="/home" />} />
        <Route path="home" element={<HomePage />} />
        <Route path="diplomatic-it" element={<DiplomaticIt />} />
      </Routes>

      <Footer />
    </Box>
  )
}

export default App
