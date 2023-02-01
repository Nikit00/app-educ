import './styles-css/style-main.css';
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
import Footer from '../components/Footer';
import Header from '../components/Header';
import { Link } from 'react-router-dom';



function Dashboard() {
    return (
        <div className='main-dashboard'>
            <Header />
            <div className='body'>
                <div className='main-box'>
                    <div className='box-function' >
                        <Link to="/atividades">
                            <GoTasklist size={40}/>
                            <span>Atividades</span>
                        </Link>
                    </div>
                    <div className='box-function'>
                        <Link to="/apoio">
                            <BiSupport size={40}/>
                            <span>Solicitação de Apoio</span>
                        </Link>
                    </div>
                    <div className='box-function'>
                        <Link to="dicas">
                            <MdTipsAndUpdates size={40}/>
                            <span>Dicas e Orientações</span>
                        </Link>
                    </div>
                    <div className='box-function'>
                        <Link to="laudos">
                            <MdHealthAndSafety size={40} />
                            <span>Laudos Médicos</span>
                        </Link>
                    </div>
                    <div className='box-function'>
                        <Link to="locais">
                            <MdPlace size={40} />
                            <span>Locais Acessíveis</span>
                        </Link>
                    </div>
                    <div className='box-function'>
                        <Link to="forum">
                            <MdForum size={40} />
                            <span>Fórum de Discussões</span>
                        </Link>
                    </div>
                    <div className='box-function'>
                        <Link to="historico">
                            <RiFileHistoryFill size={40} />
                            <span>Histórico Educacional</span>
                        </Link>
                    </div>
                    <div className='box-function'>
                        <Link to="atendimento">
                            <AiOutlineFileProtect size={40} />
                            <span>Atendimento Saude, Social ou Familiar</span>
                        </Link>
                    </div>
                    <div className='box-function'>
                        <Link to="intervencoes">
                            <MdMediation size={40} />
                            <span>Intervenções Pedagógicas</span>
                        </Link>
                    </div>
                    <div className='box-function'>
                        <Link to="dados-sistema">
                            <MdQueryStats size={40} />
                            <span>Dados Gerais do Sistema</span>
                        </Link>
                    </div>

                </div>
            </div>
            <Footer />


        </div>


    );
}

export default Dashboard;