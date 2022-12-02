import './ResultadoFinal.css';
import Promedio from '../Result/Promedio/Promedio';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';

const ResultadoFinal = ({ difficulty, correctas, totales }) => {
    const promedio = correctas / totales;
    const esPromedioAlto = promedio >= 0.8;
    const esPromedioMedio = promedio > 0.3 && promedio < 0.8;
    const esPromedioBajo = promedio <= 0.3;

    return(
        <div className='resultado-final'>
            <div className='resultado-final-inicio'>
                <div className='resultado-final-presentacion'>RESULTADO</div>
                <div className='resultado-final-title'>
                    Obtuviste {correctas}/{totales} respuestas correctas
                </div>
            </div>
            <Promedio promedio={promedio} />
            <div className='resultado-final-links'>
                <Link to="/" className='link'>
                    <Button className="boton-general">Volver a elejir dificultad</Button>
                </Link>
                <Link to={`/questions?difficulty=${difficulty}`} className='link'>
                    <Button className="boton-general">Volver a jugar con la dificultad {difficulty}</Button>
                </Link>
            </div>
        </div>
    );
}

export default ResultadoFinal;