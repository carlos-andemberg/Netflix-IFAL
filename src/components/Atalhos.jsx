import './Atalhos.css';
import { MdChevronRight } from "react-icons/md";
import { GoCreditCard } from "react-icons/go";
import { TbMailOpened } from "react-icons/tb";
import { PiDevices } from "react-icons/pi";
import { FaExchangeAlt } from "react-icons/fa";
import { CiLock } from "react-icons/ci";
import { AiOutlineUserSwitch } from "react-icons/ai";
import { TbAlertHexagon } from "react-icons/tb";
import { GoGear } from "react-icons/go";

function Atalhos(){
    return(
        <div className="atalhos">
            <span className='titulo-atalhos'>Atalhos</span>
            <div className="atalhos-box">
                <div className='atalho-plano'><div className='icons-div'><FaExchangeAlt className='icons'/><span className='title'>Alterar plano</span></div><MdChevronRight className='icone-gerenciar' /></div>
                <div className='atalho-comum'><div className='icons-div'><GoCreditCard className='icons'/><span className='title'>Gerenciar a forma de pagamento</span></div><MdChevronRight className='icone-gerenciar' /></div>
                <div className='atalho-sub'><div className='icons-div'><TbMailOpened className='icons'/><div className='sub-title'><span className='title'>Comprar um acesso de assinante extra</span><span className='subtitle'>Compartilhe sua Netflix com alguém que não mora com você.</span></div></div><div className='new-div'><span className='new'>Novo</span><MdChevronRight className='icone-gerenciar' /></div></div>
                <div className='atalho-comum'><div className='icons-div'><PiDevices className='icons' /><span className='title'>Gerenciar acesso e aparelhos</span></div><MdChevronRight className='icone-gerenciar' /></div>
                <div className='atalho-comum'><div className='icons-div'><CiLock className='icons'/><span className='title'>Atualizar senha</span></div><MdChevronRight className='icone-gerenciar' /></div>
                <div className='atalho-comum'><div className='icons-div'><AiOutlineUserSwitch className='icons'/><span className='title'>Transferir um perfil</span></div><MdChevronRight className='icone-gerenciar' /></div>
                <div className='atalho-comum'><div className='icons-div'><TbAlertHexagon className='icons'/><span className='title'>Ajustar o controle parental</span></div><MdChevronRight className='icone-gerenciar' /></div>
                <div className='atalho-sub'><div className='icons-div'><GoGear className='icons' /><div className='sub-title'><span className='title'>Editar configurações</span><span className='subtitle'>Idiomas, legendas, reprodução automática, notificações, privacidade e muito mais</span></div></div><MdChevronRight className='icone-gerenciar' /></div>

            </div>
        </div>
    );
};

export default Atalhos;