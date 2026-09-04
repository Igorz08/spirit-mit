import './Galeria.css'
import home1 from "../../assets/home1.png";
import home2 from "../../assets/home2.png";
import home3 from "../../assets/home3.png";
import g1 from "../../assets/g1.png";
import g2 from "../../assets/g2.png";
import g3 from "../../assets/g3.png";
import g4 from "../../assets/g4.png";
import g5 from "../../assets/g5.png";
import g6 from "../../assets/g6.png";

export default function Home() {
  return (

        <div className='galBackground'>


          <div>
                <h3>Galeria de fotos</h3>
                <p>Veja aqui alguns do registros reais do nosso trabalho.</p>

                <img src={g1} alt="foto da oficina" />
                <img src={g2} alt="foto da oficina" />
                <img src={home3} alt="foto da oficina" />
                <img src={g3} alt="foto da oficina" />
                <img src={g4} alt="foto da oficina" />
                <img src={home2} alt="foto da oficina" />
                <img src={g5} alt="foto da oficina" />
                <img src={home1} alt="foto da oficina" />
                <img src={g6} alt="foto da oficina" />
          </div>
        
        </div>
  )
}