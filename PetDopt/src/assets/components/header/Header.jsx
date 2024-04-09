import Logo from "../logo/Logo";
import "./Header.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'

function Header() {
    return (
        <>
            <div className="top-bar">
                <Logo />
                
                <div className="icons">
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                    <FontAwesomeIcon icon={faBars} />
                </div>
            </div>
        </>
    )
}

export default Header;