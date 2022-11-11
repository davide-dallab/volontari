import calendario from '../../data/calendario.json'
import { Link } from 'react-router-dom'


export default function Calendario() {

  const myData = {
    name: 'Some thing',
    price: 123
  }
    
    return (
        <div className='calendario'>
            <h1>Calendario</h1>
            {
                calendario
                .sort((interrogazione1, interrogazione2) => interrogazione2.data - interrogazione1.data)
                .map((interrogazione, index) => <h2 key={index}>
                  <Link to="/materia" state={{ materia: interrogazione.materia }} className='link'>{interrogazione.materia}</Link>
                </h2>)
            }
            
        </div>
    )
}