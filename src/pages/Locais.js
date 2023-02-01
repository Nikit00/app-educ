import "./styles-css/style-locais.css"
import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

function Locais(){
    return(
        <div className="body">
            <Header/>
            <div className="body-locations">
                <h1>Locais Acessiveis</h1>
            </div>
            <Footer/>
        </div>
    )
}

export default Locais;