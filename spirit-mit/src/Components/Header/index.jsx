import "./Header.css"

const Header = (props) => {
    return (

        <>
            <header className="containerHeader">
                <h1>{props.titleHeader}</h1>
                <p>{props.textHeader}</p>
            </header>

            <hr className="divider" />
        </>

    )
}

export default Header