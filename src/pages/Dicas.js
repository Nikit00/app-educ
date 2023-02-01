import "./styles-css/style-dicas.css"
import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

function Dicas(){
    return(
        <div className="body">
            <Header/>
            <div className="body-tips">
                <h1>Dicas e Orientações</h1>
            </div>
            <Footer/>
        </div>
    )
}

export default Dicas;