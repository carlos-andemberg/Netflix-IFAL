import './MenuLateral.css';
import { FaArrowLeftLong } from "react-icons/fa6";
import { GoHomeFill } from "react-icons/go";
import { BsCreditCard } from "react-icons/bs";
import { BiCheckShield } from "react-icons/bi";
import { PiDevices } from "react-icons/pi";
import { FaUsersRectangle } from "react-icons/fa6";

function MenuLateral() {
    return (
        <div className='menu-item'>
            <div className='item-superior'>
                <div className='item-top'>
                    <FaArrowLeftLong className='item-icons top' /><span className='item-top-text'>Voltar à Netflix</span>
                </div>
            </div>
            <div className='item-inferior'>
                <div className="item">
                    <GoHomeFill className='item-icons select' /><span className='item-select'>Visão geral</span>
                </div>
                <div className="item">
                    <BsCreditCard className='item-icons noselect' /><span className='item-noselect'>Assinatura</span>
                </div>
                <div className="item">
                    <BiCheckShield className='item-icons noselect' /><span className='item-noselect'>Segurança</span>
                </div>
                <div className="item">
                    <PiDevices className='item-icons noselect' /><span className='item-noselect'>Aparelhos</span>
                </div>
                <div className="item">
                    <FaUsersRectangle className='item-icons noselect' /><span className='item-noselect'>Perfis</span>
                </div>
            </div>
        </div>
    );
};

export default MenuLateral;