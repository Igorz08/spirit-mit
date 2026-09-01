import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Router from "../Router";
import "./Global.css";

function App() {
  return (

    <div className="container">

      <Router/>
      {/* <Header
      titleHeader="Olá!"
      textHeader="Bem vindo ao site"
      /> */}

      <Footer/>

    </div>
  
  )
}

export default App
