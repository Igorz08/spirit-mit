import { Link } from "react-router-dom";
import "./Menu.css"

const Menu = () => {
    return (

        <>

            <ul>
                <li>
                    <Link to="/">Início</Link>
                </li>

                <li>
                    <Link to="/sobre">Sobre</Link>
                </li>
            </ul>

        </>

    )
}

export default Menu