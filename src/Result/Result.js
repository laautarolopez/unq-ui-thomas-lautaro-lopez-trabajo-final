import './Result.css';
import Error from '../Error/Error';
import ResultadoFinal from '../ResultadoFinal/ResultadoFinal';
import { useLocation, Link } from 'react-router-dom';
import React from "react";
import { Button } from 'reactstrap';

const Result = () => {
    const useQuery = () => {
        const { search } = useLocation();
        return React.useMemo(() => new URLSearchParams(search), [search]);
    }
    const query = useQuery();

    const difficulty = query.get("difficulty");
    const correctas = query.get("correctas");
    const totales = query.get("totales");

    const error = difficulty == null || correctas == null || totales == null;

    return(
        <div className='container'>
            {error
            ? <div className='result-error'>
                <div className='result-error-list'>
                    {difficulty == null && <Error mensaje={"no hay ninguna dificultad en el query string."} />}
                    {correctas == null && <Error mensaje={"no hay ninguna cantidad de respuestas correctas en el query string."} />}
                    {totales == null && <Error mensaje={"no hay ninguna cantidad de respuestas totales en el query string."} />}
                </div>
                <Link to="/" className='link'>
                    <Button className="boton-general">Ir a la página principal</Button>
                </Link>
            </div>
            : <ResultadoFinal 
                difficulty={difficulty}
                correctas={correctas}
                totales={totales}
            />
            }
        </div>
    );
}

export default Result;