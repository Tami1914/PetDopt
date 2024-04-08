import logo from "../fotos/logo.png";
import "../styles/logo-styles.css";

function Logo(){
    return(
        <>
            <div className="logo-container">
                <img src={logo}/>
            </div>
        </>
    )
}

export default Logo;