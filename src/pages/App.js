import { BrowserRouter, Routes, Route } from "react-router-dom"
import Main from "./Main"
import Atividades from "./Atividades"
import Apoio from "./Apoio"
import Dicas from "./Dicas"
import Laudos from "./Laudos"
import Locais from "./Locais"
import Forum from "./Forum"
import Historico from "./Historico"
import Atendimento from "./Atendimento"
import Intervencoes from "./Intervencoes"
import Dados from "./Dados"


export default function App(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main/>}/>
                <Route path="/atividades" element={<Atividades/>}/>
                <Route path="/apoio" element={<Apoio/>}/>
                <Route path="/dicas" element={<Dicas/>}/>
                <Route path="/laudos" element={<Laudos/>}/>
                <Route path="/locais" element={<Locais/>}/>
                <Route path="/forum" element={<Forum/>}/>
                <Route path="/historico" element={<Historico/>}/>
                <Route path="atendimento" element={<Atendimento/>}/>
                <Route path="intervencoes" element={<Intervencoes/>}/>
                <Route path="dados-sistema" element={<Dados/>}/>
            </Routes>
        </BrowserRouter>
    )
}