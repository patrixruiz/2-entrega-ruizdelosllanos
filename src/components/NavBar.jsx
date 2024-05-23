import  "./NavBar.css";
import BotonNavbar from "./BotonNavbar";
import CartWidget from "./CartWidget";
import logoCiclo from "../assets/logoCiclo.jpeg";


export default function NavBar(){

    return(
        <>
        <header className="navbarjsx">
        <img className="logoCiclo" src={logoCiclo}alt="logoCiclo" />
            <nav className="navbarCentro">
                <BotonNavbar nombre="Sandwich de Bondiola"/>
                <BotonNavbar nombre="Hamburguesa Ciclo"/>
                <BotonNavbar nombre="Matambre a la pizza"/>
                <BotonNavbar nombre="Sandwich de Entraña"/>
            </nav>
            <CartWidget/>
            </header>
        </>
    );
}