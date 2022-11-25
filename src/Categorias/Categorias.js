import { Button } from 'reactstrap';
import './Categorias.css';

const Categorias = ({ dificultades }) => {
    return(
        <div className='categorias'>
            <div className='categorias-titulo'>Seleccione una dificultad</div>
            <div className='categorias-dificultades'>
                {dificultades.map((dificultad, index) => {
                    return <Button className="boton-general" key={index}>{dificultad}</Button>
                })
                }
            </div>
            <Button className='boton-siguiente'>Siguiente</Button>
        </div>
    );
}

export default Categorias;