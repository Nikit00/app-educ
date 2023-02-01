import "./styles-css/style-footer.css"
import {BsInstagram} from "react-icons/bs"
import {BsTwitter} from "react-icons/bs"
import {BsWhatsapp} from "react-icons/bs"


function Footer() {
    return (
        <div className='footer'>
            <span>Redes Sociais | Contato</span>
            <div className='logos-footer'>
                <a href="https://www.instagram.com">
                    <BsInstagram size={25} className='logo-social' />
                </a>
                <a href="https://www.twitter.com">
                    <BsTwitter size={25} className='logo-social' />
                </a>
                <a href="https://web.whatsapp.com/">
                    <BsWhatsapp size={25} className='logo-social' />
                </a>
            </div>

        </div>
    )
}

export default Footer;