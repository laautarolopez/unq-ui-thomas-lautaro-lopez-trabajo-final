import './App.css';
import Titulo from './Titulo/Titulo';
import { Spinner } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <div className="app">
        <Titulo />
        <hr className='divisor'/>
        <div className='container'>
            <div className='spinnerContainer'>
                <Spinner />
            </div>
        </div>
    </div>
  );
}

export default App;