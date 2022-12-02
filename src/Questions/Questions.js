import './Questions.css';
import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import Api from '../Api';
import ListaDePreguntas from '../ListaDePreguntas/ListaDePreguntas';
import Error from '../Error/Error';
import { Button, Spinner } from 'reactstrap';

const Questions = () => {
    const [error, setError] = useState(undefined);
    const [preguntas, setPreguntas] = useState(undefined);

    const useQuery = () => {
        const { search } = useLocation();
        return React.useMemo(() => new URLSearchParams(search), [search]);
    }
    const query = useQuery();

    const difficulty = query.get("difficulty");

    useEffect(() => {
        const obtenerPreguntas = () => {
            Api.getQuestions(difficulty)
            .then(questions => setPreguntas(questions));
        };

        difficulty == null
        ? setError(true)
        : obtenerPreguntas()
    }, []);
 
    return(
        <div className='container'>
            {error
            ? <div className='questions-error'>
                <Error mensaje={"no hay ninguna dificultad en el query string."} />
                <Link to="/" className='link'>
                    <Button className="boton-general">Ir a la página principal</Button>
                </Link>
            </div>
            : preguntas != undefined
                ? <ListaDePreguntas preguntas={preguntas} difficulty={difficulty} />  
                : <div className='spinnerContainer'>
                    <Spinner />
                </div>
            
            }
        </div>
    );
}

export default Questions;