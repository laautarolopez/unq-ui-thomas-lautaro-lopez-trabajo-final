import './App.css';
import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Titulo from './Titulo/Titulo';
import Home from './Home/Home';
import NotFound from './NotFound/NotFound';
import Questions from './Questions/Questions';
import Result from './Result/Result';

const App = () => {
    return (
        <div className="app">
            <Titulo />
            <hr className='divisor'/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/questions" element={<Questions />} />
                <Route path="/result" element={<Result />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </div>
    );
}

export default App;