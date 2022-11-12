import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import AddInterrogazione from './pages/AddInterrogazione'
import Calendario from './pages/Calendario'
import HomePage from './pages/HomePage'
import Materia from './pages/Materia'


export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/volontari/' element={<Navigate to='home'/>}/>
      <Route path='/volontari/home' element={<HomePage/>}/>
      <Route path='/volontari/calendario' element={<Calendario />} />
      <Route path='/volontari/materia' element={<Materia />} />
      <Route path='/volontari/add' element={<AddInterrogazione />} />
      <Route path='*' element={<h1>Qualcosa non va!</h1>}/>
    </Routes>
    </BrowserRouter>
  )
}
