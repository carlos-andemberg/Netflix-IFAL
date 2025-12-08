// 1ª seção: importações de outros arquivos
import { IoHomeOutline } from "react-icons/io5";
import BotaoVazado from './BotaoVazado.jsx';
import CardPerfil from './CardPerfil';
import './SelecaoPerfil.css';


// 2ª seção: o componente em si
function SelecaoPerfil({listaDePerfis}){
    return (
        <div className='selecao-perfil'>
            <span className='titulo'>Quem está assistindo? <IoHomeOutline className="icone"/></span>
            <div className='container-perfis'>
                {listaDePerfis.map((perfil,index) =>(<CardPerfil key={index} foto={perfil.foto} nome={perfil.nome} />
                ))}
            </div>
            <BotaoVazado />
        </div>
    );
};

// 3ª seção: exportação
// Permite que o componente seja importado em outros arquivos
export default SelecaoPerfil;