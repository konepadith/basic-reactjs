import logo from "../image/logo.png"
import "./Header.css";
function Header({title}) {
    return(
        <>
        <nav>
            <img src={logo} alt="Logo" className="logo"/>
            <a href="/">{title}</a>
        </nav>
        </>
    )
}
export default Header