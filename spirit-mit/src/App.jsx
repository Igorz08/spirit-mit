import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Router from "./Router";
import "./Global.css";

function App() {
  return (

    <div className="container">

      <Header
      titleHeader="Olá!"
      textHeader="Bem vindo ao site"
      />

      <Router/>

      <Footer
      textFooter="Rodapé"
      />

    </div>
  
  )
}

export default App
