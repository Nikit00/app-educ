import "./styles-css/style-historico.css"
import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

function Historico(){
    return(
        <div className="body">
            <Header/>
            <div className="body-historic">
                <h1>Histórico Educacional</h1>
            </div>
            <Footer/>
        </div>
    )
}

export default Historico;