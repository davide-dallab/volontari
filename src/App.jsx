import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Calendario from './pages/Calendario'
import HomePage from './pages/HomePage'

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Navigate to='/home'/>}/>
      <Route path='/home' element={<HomePage/>}/>
      <Route path='/calendario' element={<Calendario/>}/>
      <Route path='*' element={<h1>Qualcosa non va!</h1>}/>
    </Routes>
    </BrowserRouter>
  )
}
