import './BarraDeNavegacao.css';
import Logo from '../assets/Logonetflix.png';
import { Link } from 'react-router-dom';
import { FaRegUser } from 'react-icons/fa';

function BarraDeNavegacao({ links }) {
    return (
        <div className='barra-pai'>
            <div className='barra-links'>
                <img className='logo-barra' src={Logo} alt="" />
                {links.map((link, index) => (<span key={index}>{link}</span>))}
            </div>

            <Link to="/conta" className="link-conta">
                <div className='barra-perfil'>
                    <div className='user-navbar'>
                        <FaRegUser />
                    </div>
                    <span className='rightdiv-text'>Conta</span>
                </div>
            </Link >
        </div >
    );
};

export default BarraDeNavegacao;