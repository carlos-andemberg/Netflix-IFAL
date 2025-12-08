import BarraSuperiorConta from '../components/BarraSuperiorConta';
import MenuLateral from '../components/MenuLateral';
import DetalhesConta from '../components/DetalhesConta';
import Atalhos from '../components/Atalhos'
import './PageConta.css';

function PageConta(){
    return(
        <div className='page-conta'>
            <div className='cabecalho'>
                <BarraSuperiorConta/>

            </div>

            <div className='principal'>
                <div className='esquerda'>
                    <MenuLateral/>
                </div>

                <div className='conteudo'>
                    <DetalhesConta/>
                    <Atalhos/>
                </div>

            </div>
        </div>
    );
};

export default PageConta;

