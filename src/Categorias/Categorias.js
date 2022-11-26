import './Categorias.css';
import { Button } from 'reactstrap';
import { useState } from 'react';
import Error from '../Error/Error';
import { Navigate } from "react-router-dom";

const Categorias = ({ dificultades }) => {
    const [dificultadActiva, setDificultadActiva] = useState(undefined);
    const [error, setError] = useState(false);
    const [habilitado, setHabilitado] = useState(false);

    const verificarSeleccion = () => {
        dificultadActiva != undefined
        ? setHabilitado(true)
        : setError(true)
    }

    return(
        <div className='categorias'>
            <div className='categorias-titulo'>Seleccione una dificultad</div>
            <div className='categorias-dificultades'>
                {dificultades.map((dificultad, index) => {
                    return <Button key={index}
                                className={dificultad == dificultadActiva ? "boton-general dificultad-activa" : "boton-general"} 
                                onClick={() => setDificultadActiva(dificultad)}>
                                    {dificultad}
                                </Button>
                })
                }
                {error && <Error mensaje={"debe seleccionar una dificultad."} />}
            </div>
            <Button onClick={verificarSeleccion} className='boton-siguiente'>
                Siguiente
            </Button>
            {habilitado && <Navigate to={`/questions?difficulty=${dificultadActiva}`} />}
        </div>
    );
}

export default Categorias;