import calendario from '../../data/calendario.json'

export default function Calendario() {
    return (
        <div className='calendario'>
            <h1>Calendario</h1>
            {
                calendario
                    .sort((interrogazione1, interrogazione2) => interrogazione2.data - interrogazione1.data)
                    .map((interrogazione, index) => <h2 key={index}>{interrogazione.materia}</h2>)
            }
        </div>
    )
}