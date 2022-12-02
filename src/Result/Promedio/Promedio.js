import './Promedio.css';

const Promedio = ({ promedio }) => {
    const esPromedioAlto = promedio >= 0.8;
    const esPromedioMedio = promedio > 0.3 && promedio < 0.8;
    const esPromedioBajo = promedio <= 0.3;

    return(
        <div>{promedio}</div>
    );
}

export default Promedio;