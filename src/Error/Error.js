import './Error.css';

const Error = ({ mensaje }) => {
    return(
        <div className='error'><p>Error: {mensaje}</p></div>
    );
}

export default Error;