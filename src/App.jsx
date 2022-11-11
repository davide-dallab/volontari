import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Calendario from './pages/Calendario'
import HomePage from './pages/HomePage'
import Materia from './pages/Materia'


export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Navigate to='/home'/>}/>
      <Route path='/home' element={<HomePage/>}/>
      <Route path='/calendario' element={<Calendario />} />S
      <Route path='/materia' element={<Materia />} />
      <Route path='*' element={<h1>Qualcosa non va!</h1>}/>
    </Routes>
    </BrowserRouter>
  )
}
