import './ListaDePreguntas.css';
import { useState } from 'react';
import { Button } from 'reactstrap';
import Api from '../Api';
import { Navigate } from 'react-router-dom';

const ListaDePreguntas = ({ preguntas, difficulty }) => {
    const [preguntasActuales, setPreguntasActuales] = useState(preguntas);
    const [cantPreguntasVistas, setCantPreguntasVistas] = useState(1);
    const [contestoPreguntaActual, setContestoPreguntaActual] = useState(false);
    const [respuesta, setRespuesta] = useState(undefined);
    const [esRespuestaCorrecta, setEsRespuestaCorrecta] = useState(false);
    const [cantRespuestasCorrectas, setCantRespuestasCorrectas] = useState(0);
    const [habilitado, setHabilitado] = useState(false);
    const cantPreguntasTotales = preguntas.length;

    const buscarRespuestaCorrecta = (option) => {
        const questionId = preguntasActuales[0].id;
        Api.postAnswer(questionId, option)
        .then(resultado => {
            setContestoPreguntaActual(true);
            setRespuesta(option);
            if(resultado.answer){
                setCantRespuestasCorrectas(state => state + 1);
                setEsRespuestaCorrecta(true);
            }
        });
    }

    const claseDeOpcion = (option) => {
        return(
            "boton-general " +
            (respuesta == option 
            ? esRespuestaCorrecta
                ? "respuesta-correcta"
                : "respuesta-incorrecta"
            : ""
            )
        );
    }

    const siguiente = () => {
        if(cantPreguntasVistas == cantPreguntasTotales) {
            setHabilitado(true);
        } else {
            setCantPreguntasVistas(state => state + 1);
            setContestoPreguntaActual(false);
            setRespuesta(undefined);
            setEsRespuestaCorrecta(false);
            setPreguntasActuales(state => state.slice(1));
        }
    }

    return(
        <div className='questions'>
            <div className='questions-title'>
                <div className='questions-title-cantPreguntas'>
                    Pregunta {cantPreguntasVistas} de {cantPreguntasTotales}
                </div>
                <div className='questions-title-preguntaActual'>
                    {preguntasActuales[0].question}
                </div>
            </div>
            <div className='categorias-dificultades'>
                <Button key="option1"
                        className={claseDeOpcion("option1")}
                        onClick={() => buscarRespuestaCorrecta("option1")}
                        disabled={contestoPreguntaActual}>
                                    {preguntasActuales[0].option1}
                </Button>
                <Button key="option2"
                        className={claseDeOpcion("option2")}
                        onClick={() => buscarRespuestaCorrecta("option2")}
                        disabled={contestoPreguntaActual}>
                                    {preguntasActuales[0].option2}
                </Button>
                <Button key="option3"
                        className={claseDeOpcion("option3")}
                        onClick={() => buscarRespuestaCorrecta("option3")}
                        disabled={contestoPreguntaActual}>
                                    {preguntasActuales[0].option3}
                </Button>
                <Button key="option4"
                        className={claseDeOpcion("option4")}
                        onClick={() => buscarRespuestaCorrecta("option4")}
                        disabled={contestoPreguntaActual}>
                                    {preguntasActuales[0].option4}
                </Button>
                {contestoPreguntaActual && 
                (esRespuestaCorrecta
                ? <div className='correcto'>¡CORRECTO!</div>
                : <div className='incorrecto'>INCORRECTO</div>)
                }
            </div>
            <Button className='boton-siguiente' 
                disabled={!contestoPreguntaActual}
                onClick={siguiente} >
                {cantPreguntasVistas == cantPreguntasTotales
                ? "Terminar"
                : "Siguiente"
                }
            </Button>
            {habilitado && 
            <Navigate to={`/result?`+
                        `difficulty=${difficulty}`+
                        `&correctas=${cantRespuestasCorrectas}`+
                        `&totales=${cantPreguntasTotales}`
                        }
            />
            }
        </div>
    );
}

export default ListaDePreguntas;