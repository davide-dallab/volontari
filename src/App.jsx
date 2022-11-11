import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<h1>Home</h1>}/>
      <Route path='*' element={<h1>Qualcosa non va!</h1>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
