import './PageSelecionarPerfil.css';
import Perfil1 from '../assets/netflixperfil1.jpg';
import Perfil2 from '../assets/netflixperfil2.png';
import Perfil3 from '../assets/netflixperfil3.png';
import Perfil4 from '../assets/netflixperfil4.png';
import Perfil5 from '../assets/netflixperfil5.png';
import SelecaoPerfil from '../components/SelecaoPerfil';

function PageSelecionarPerfil(){

    let lista = [
        {foto: Perfil1, nome:'Felipe'},
        {foto: Perfil2, nome:'Túlio'},
        {foto: Perfil3, nome:'Jefferson'},
        {foto: Perfil4, nome:'Adielson'},
        {foto: Perfil5, nome:'Carolina'}
    ];

    return(
        <div className="page-selecionar-perfil">
            <SelecaoPerfil listaDePerfis={lista}/>
        </div>
    );
};

export default PageSelecionarPerfil;