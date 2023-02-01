import "./styles-css/style-dados.css"
import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

function Dados(){
    return(
        <div className="body">
            <Header/>
            <div className="body-system">
                <h1>Dados Gerais do Sistema</h1>
            </div>
            <Footer/>
        </div>
    )
}

export default Dados;