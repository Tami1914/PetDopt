import Logo from "../logo/Logo";
import "./Header.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'


function Header() {
    return (
        <>
            <div className="top-bar">
                <Logo />
            </div>
            <div>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
            </div>
        </>
    )
}

export default Header;