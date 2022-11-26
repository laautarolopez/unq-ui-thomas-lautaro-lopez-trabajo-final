import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import './NotFound.css';

const NotFound = () => {
    return(
        <div className='container error-404'>
            <div>¡Error 404! <br/></div>
            <div>Página no encontrada</div>
            <Link to="/" className='link'>
                <Button className="boton-general">Ir a la página principal</Button>
            </Link>
        </div>
    );
}

export default NotFound;