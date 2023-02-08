import "../css/Header.scss";
import logo from "../assets/logo.svg";


export default function Header () {
    return (
        <header>
            <div>
                <img src={logo} alt="logo"></img>
                <h1>Rancid Tomatillos</h1>
            </div>
        </header>
    );
}