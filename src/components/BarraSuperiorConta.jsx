import './BarraSuperiorConta.css';
import { RiArrowDownSFill } from "react-icons/ri";
import { Link } from 'react-router-dom';
function BarraSuperiorConta() {
    return (
        <div className="main-barra-superior">
            <Link to="/home" className='link'>
                <div className="netflix">
                    <img className="netflix-logo" src="src/assets/Logonetflix.png" />
                </div>
            </Link>
            <div className="perfil">
                <img className="user-netflix" src="src/assets/netflix-user.jpg" />
                <RiArrowDownSFill />
            </div>
        </div>
    );
};

export default BarraSuperiorConta;