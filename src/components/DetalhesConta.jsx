import './DetalhesConta.css';
import credit from "../assets/credit.png";
import { MdChevronRight } from "react-icons/md";

function DetalhesConta(){
    return (
        <div className='detalhes-conta'>
            <span className='detalhes-titulo'>Conta</span>
            <span className='detalhes-subtitulo'>Detalhes da assinatura</span>
            <div className='detalhes-plano'>
                <span className='titulo-assinante'>Assinante desde julho de 2015</span>
                <div className='detalhes-recuo'>
                    <span className='detalhes-plano-tipo'>Plano Padrão</span>
                    <span className='detalhes-data'>Próximo pagamento: 31 de janeiro de 2025</span>
                    <div className='credit'><img src={credit} className='credit-key'/><span>****</span><span>****</span><span>****</span><span>2777</span></div>
                    <div className='credit-security'><span className='credit-title'>Gerenciar assinatura</span><MdChevronRight className='icone-gerenciar' /></div>
                </div>
            </div>
        </div>
    );
};

export default DetalhesConta;