import "./styles-css/style-apoio.css"
import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

function Apoio(){
    return(
        <div className="body">
            <Header/>
            <div className="body-apoio">
                <h1>Solicitações de Apoio</h1>
            </div>
            <Footer/>
        </div>
    )
}

export default Apoio;