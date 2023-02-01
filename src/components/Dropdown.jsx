import React, { /*useRef, */useState } from "react";
import "./styles-css/style-dropdown.css"
import { BiUserCircle } from "react-icons/bi";


function Dropdown() {
    const [open, setOpen] = useState(false);
    const Menus = ["Quadro de Avisos", "Mensagens", "Configurações", "Logout"];
    /*
    const menuRef = useRef();
    const imgRef = useRef();
    
    
    window.addEventListener("click", (e) => {
        if (e.target !== menuRef.current && e.target !== imgRef.current) {
            setOpen(false);
        }
    });*/

    return(
        <div className="box-toolbar">
            <div className="toolbar" onClick={()=>setOpen(!open)}>
                <BiUserCircle size={30} />
                <span className='name-perfil'>Perfil</span>
            </div> 

            {
                open && (
                <div className="itens-toolbar">
                    <ul className="lista-toolbar">
                        {
                            Menus.map((menu)=>(
                                <li className="itens" key={menu} onClick={()=>setOpen(false)}>
                                    {menu}
                                </li>
                            ))
                        }
                    </ul>
                </div>
            
            )
            }
            </div>

    )
}

export default Dropdown;