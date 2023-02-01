import "./styles-css/style-laudo.css"
import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

function Laudos(){
    return(
        <div className="body">
            <Header/>
            <div className="body-lauds">
                <h1>Laudos Medicos</h1>
            </div>
            <Footer/>
        </div>
    )
}

export default Laudos;