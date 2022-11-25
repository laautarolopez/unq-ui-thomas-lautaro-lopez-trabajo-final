import { Button } from 'reactstrap';
import './Categorias.css';

const Categorias = ({ dificultades }) => {
    return(
        <div className='categorias'>
            <div className='categorias-titulo'>Seleccione una dificultad</div>
            {dificultades.map((dificultad, index) => {
                return <Button className="categorias-dificultad" key={index}>{dificultad}</Button>
            })
            }
            <Button className='boton-siguiente'>Siguiente</Button>
        </div>
    );
}

export default Categorias;