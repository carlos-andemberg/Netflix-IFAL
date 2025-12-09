import './FilmeEmDestaque.css';
import { FaPlay } from "react-icons/fa";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { HiOutlineSpeakerWave } from "react-icons/hi2";
import logo from '../assets/n.png';


function FilmeEmDestaque() {

    return (

        <div className="filme-em-destaque">

            <div className="infoFilme">

                <div className="topico-1">
                    <div className="logoNetflix">
                        <img className="logo" src={logo} />
                        <span className="filme">FILME</span>
                    </div>

                    <div className="filme-nome">
                        <span className="nomeFilme">Dançando</span>
                        <div className="parteNome">
                            <span className="nomeFilme1">no</span>
                            <span className="nomeFilme2">Escuro</span>
                        </div>
                    </div>
                </div>

                <div className="topico-2">
                    <div className="play">
                        <FaPlay className='icone1' />
                        <span className='nomeInfo'>Assistir</span>
                    </div>

                    <div className="maisInfo">
                        <IoMdInformationCircleOutline className='icone2' />
                        <span className='nomeInfo' >Mais informações</span>
                    </div>
                </div>

            </div>

            <div className="classificacao">
                <div className="capsula">
                    <span className='p-speaker'><HiOutlineSpeakerWave className='speaker' /></span>
                    <div className="boxIdade">
                        <span className="idade">A14</span>
                    </div>
                </div>

            </div>

        </div>

    );
};


export default FilmeEmDestaque;