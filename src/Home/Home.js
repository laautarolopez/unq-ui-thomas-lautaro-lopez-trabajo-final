import { useEffect, useState } from "react";
import Api from "../Api";
import Categorias from '../Categorias/Categorias';
import { Spinner } from "reactstrap";

const Home = () => {
    const [dificultades, setDificultades] = useState(undefined);

    useEffect(() => {
        Api.getDifficulty().then(response => setDificultades(response));
    }, []);

    return(
        <div className="container">
            {dificultades != undefined
                ? <Categorias dificultades={dificultades} />  
                : <div className='spinnerContainer'>
                    <Spinner />
                </div>
            }
        </div>
    );
}

export default Home;