import Logo from "../assets/FotoLogo/Logo";
import "../assets/styles/head.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Header(){
    return(
        <>
            <div className="top-bar">
                <Logo/>
                <div className="icons">
                    <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
                </div>
            </div>
            <script src="https://kit.fontawesome.com/3a47f9bce5.js" crossorigin="anonymous"></script>
        </>
    )
}

export default Header;