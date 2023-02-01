import "./styles-css/style-atividades.css"
import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

function Atividades(){
    return(
        <div className="body">
            <Header/>
            <div className="body-activities">
                <h1>Atividades</h1>
            </div>
            <Footer/>
        </div>
    )
}

export default Atividades;