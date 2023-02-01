import "./styles-css/style-forum.css"
import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

function Forum(){
    return(
        <div className="body">
            <Header/>
            <div className="body-forum">
                <h1>Forum de Discussões</h1>
            </div>
            <Footer/>
        </div>
    )
}

export default Forum;