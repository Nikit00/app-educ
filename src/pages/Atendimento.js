import "./styles-css/style-atendimento.css"
import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

function Atendimento(){
    return(
        <div className="body">
            <Header/>
            <div className="body-attendance">
                <h1>Atendimento Saude, Social e Familiar</h1>
            </div>
            <Footer/>
        </div>
    )
}

export default Atendimento;