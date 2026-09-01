import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Router from "../Router";
import "./Global.css";

function App() {
  return (

    <div className="container">

      <Router/>

      <br />

      <Header
      titleHeader="Olá!"
      textHeader="Bem vindo ao site"
      />
      <br />

      <Footer
      textFooter="Rodapé"
      />

    </div>
  
  )
}

export default App
