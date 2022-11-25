import './App.css';
import { Spinner } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import Titulo from './Titulo/Titulo';
import Api from './Api';
import Categorias from './Categorias/Categorias';

const App = () => {
    const [dificultades, setDificultades] = useState(undefined);

    useEffect(() => {
        Api.getDifficulty().then(response => setDificultades(response));
    }, []);

    return (
        <div className="app">
            <Titulo />
            <hr className='divisor'/>
            <div className='container'>
                {dificultades != undefined
                ? <Categorias dificultades={dificultades} />  
                : <div className='spinnerContainer'>
                    <Spinner />
                  </div>
                }
            </div>
        </div>
    );
}

export default App;