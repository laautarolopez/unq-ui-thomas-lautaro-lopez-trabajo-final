import './App.css';
import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Titulo from './Titulo/Titulo';
import Home from './Home/Home';
import NotFound from './NotFound/NotFound';

const App = () => {
    return (
        <div className="app">
            <Titulo />
            <hr className='divisor'/>
            <Routes>
                <Route path="/" element={<Home />} />
                {/* <Route path="/elemento/:parametro" element={<elemento />} /> */}
                <Route path="*" element={<NotFound />} />
            </Routes>
        </div>
    );
}

export default App;