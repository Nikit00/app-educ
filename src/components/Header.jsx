import "./styles-css/style-header.css"

import {FaReact} from "react-icons/fa"
import Dropdown from "./Dropdown";

function Header(){
    return(
        <div className='header'>
        <div className='top-header'>
            <div className='logo-app'>
                <FaReact size={30} />
                <span className='name-logo'>FImerge</span>
            </div>
            <div className='logo-user'>
                <Dropdown />
            </div>
        </div>
    </div>
    )
}

export default Header;