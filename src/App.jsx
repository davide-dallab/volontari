import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import AddInterrogazione from './pages/AddInterrogazione'
import Calendario from './pages/Calendario'
import HomePage from './pages/HomePage'
import Materia from './pages/Materia'
const TOKEN = "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";
const GIST_ID = "693b84c61fef43b077047e07b657c7f3";
const GIST_FILENAME = "calendario.json";



export default function App() { 
  const data =     '[{"materia": "Italiano","data": "17 November 2022"},{"materia": "Inglese","data": "14 November 2022"},{"materia": "IIIIIII","data": "14 November 2022"}]'
  console.log(getData());
  setData(data);
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

async function getData() {
  const req = await fetch(`https://api.github.com/gists/${GIST_ID}`);
  const gist = await req.json();
  return JSON.parse(gist.files[GIST_FILENAME].content);
}

async function setData(data) {
  const octokit = new Octokit({
    auth: TOKEN
  })
  
  await octokit.request('PATCH /gists/{gist_id}', {
    gist_id: GIST_ID,
    description: 'An updated gist description',
    files: {
      [GIST_FILENAME]: {
        content: JSON.stringify(data),
      }
    }
  })
}

