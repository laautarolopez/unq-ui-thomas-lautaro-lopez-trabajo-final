import './ListaDePreguntas.css';

const ListaDePreguntas = ({ preguntas }) => {
    return(
        <div className='questions'>
                {preguntas.length}
                {console.log(preguntas)}
        </div>
    );
}

export default ListaDePreguntas;