import './Promedio.css';

const Promedio = ({ promedio }) => {
    const esPromedioPerfecto = promedio == 1;
    const esPromedioAlto = promedio >= 0.7 && promedio < 1;
    const esPromedioMedio = promedio > 0.3 && promedio < 0.7;
    const esPromedioBajo = promedio <= 0.3;

    return(
        <div className='promedio'>
            {esPromedioPerfecto &&
            <div className='promedio-final'>
                ¡Felicitaciones! Tu puntaje es perfecto, sos un héroe
                <img src='images/puntaje-perfecto.jpg' alt='puntaje perfecto imagen' />
            </div>
            }
            {esPromedioAlto &&
            <div className='promedio-final'>
                ¡Muy bien! Tu puntaje es bueno, linda medalla
                <img src='images/puntaje-alto.jpg' alt='puntaje alto imagen' />
            </div>
            }
            {esPromedioMedio &&
            <div className='promedio-final'>
                ¡Puede pasar! Tu puntaje es regular, puedes mejorar
                <img src='images/puntaje-medio.jpg' alt='puntaje medio imagen' />
            </div>
            }
            {esPromedioBajo &&
            <div className='promedio-final'>
                ¡No te desanimes! Tu puntaje es bajo, sigue intentando
                <img src='images/puntaje-bajo.jpg' alt='puntaje bajo imagen' />
            </div>
            }
        </div>
    );
}

export default Promedio;