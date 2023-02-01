import "./styles-css/style-intervencoes.css"
import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

function Intervencoes(){
    return(
        <div className="body">
            <Header/>
            <div className="body-interventions">
                <h1>Intervenções Pedagógicas</h1>
            </div>
            <Footer/>
        </div>
    )
}

export default Intervencoes;