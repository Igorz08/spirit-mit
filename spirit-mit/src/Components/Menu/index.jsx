import { Link } from "react-router-dom";
import "./Menu.css";

const Menu = () => {
    return (
        <header className="menu">

            <div className="menuContainer">

                <Link to="/" className="logo">
                    <div className="logoSimbolo"></div>

                    <div className="logoTexto">
                        <h1>SPIRIT MIT MOTORS</h1>
                        <h2>Especializada em Mitsubishi</h2>
                    </div>
                </Link>

                <nav>
                    <ul>
                        <li>
                            <Link to="/">Início</Link>
                        </li>

                        {/* <li>
                            <Link to="/sobre">Sobre</Link>
                        </li> */}

                        <li>
                            <Link to="/servicos">Serviços</Link>
                        </li>

                        <li>
                            <Link to="/galeria">Galeria</Link>
                        </li>

                        {/* <li>
                            <Link to="/contato">Contato</Link>
                        </li> */}
                    </ul>
                </nav>

                <Link to="/agendar" className="agendarLink">
                    AGENDAR
                </Link>

            </div>

        </header>
    );
};

export default Menu