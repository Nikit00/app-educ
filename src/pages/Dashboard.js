import './css/Dash.css';
import { FaReact } from "react-icons/fa";
import { GoTasklist } from "react-icons/go"
import { BiSupport } from "react-icons/bi"
import { MdTipsAndUpdates } from "react-icons/md"
import { MdHealthAndSafety } from "react-icons/md"
import { MdPlace } from "react-icons/md"
import { MdForum } from "react-icons/md"
import { RiFileHistoryFill } from "react-icons/ri"
import { AiOutlineFileProtect } from "react-icons/ai"
import { MdMediation } from "react-icons/md"
import { MdQueryStats } from "react-icons/md"
import { BsWhatsapp } from "react-icons/bs"
import { BsInstagram } from "react-icons/bs"
import { BsTwitter } from "react-icons/bs"
import Dropdown from '../components/Dropdown';


function Dashboard() {
    return (
        <div className='main-dashboard'>
            <div className='header'>
                <div className='top-header'>
                    <div className='logo-app'>
                        <FaReact size={30} />
                        <span className='name-logo'>FImerge</span>
                    </div>
                    <div className='logo-user'>
                        <Dropdown />
                    </div>
                </div>
            </div>
            <div className='body'>
                <div className='main-box'>
                    <div className='box-function'>
                        <GoTasklist size={40} />
                        <span>Atividades</span>
                    </div>
                    <div className='box-function'>
                        <BiSupport size={40} />
                        <span>Solicitação de Apoio</span>
                    </div>
                    <div className='box-function'>
                        <MdTipsAndUpdates size={40} />
                        <span>Dicas e Orientações</span>
                    </div>
                    <div className='box-function'>
                        <MdHealthAndSafety size={40} />
                        <span>Laudos Médicos</span>
                    </div>
                    <div className='box-function'>
                        <MdPlace size={40} />
                        <span>Locais Acessíveis</span>
                    </div>
                    <div className='box-function'>
                        <MdForum size={40} />
                        <span>Fórum de Discussões</span>
                    </div>
                    <div className='box-function'>
                        <RiFileHistoryFill size={40} />
                        <span>Histórico Educacional</span>
                    </div>
                    <div className='box-function'>
                        <AiOutlineFileProtect size={40} />
                        <span>Atendimento Saude, Social ou Familiar</span>
                    </div>
                    <div className='box-function'>
                        <MdMediation size={40} />
                        <span>Intervenções Pedagógicas</span>
                    </div>
                    <div className='box-function'>
                        <MdQueryStats size={40} />
                        <span>Dados Gerais do Sistema</span>
                    </div>

                </div>
            </div>
            <div className='footer'>
                <span>Redes Sociais | Contato</span>
                <div className='logos-footer'>
                    <BsInstagram size={25} className='logo-social'/>
                    <BsTwitter size={25} className='logo-social'/>
                    <BsWhatsapp size={25} className='logo-social'/>
                </div>

            </div>


        </div>


    );
}

export default Dashboard;