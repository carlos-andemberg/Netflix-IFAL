// 1ª seção: importações de outros arquivos
import './CardPerfil.css';
//import fotoPerfil from '../assets/perfil.png';
import {Link} from 'react-router-dom';

// 2ª seção: o componente em si
function CardPerfil({foto,nome}){
    return (
        <Link to="/home" className='card-perfil'>
            <img className='foto-perfil' src={foto} alt="" />
            <span className='nome-perfil'>{nome}</span>
        </Link>
    );
};

// 3ª seção: exportação
// Permite que o componente seja importado em outros arquivos
export default CardPerfil;