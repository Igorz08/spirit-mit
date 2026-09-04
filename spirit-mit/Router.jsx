import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Menu from './src/Components/Menu'
import Home from './src/Pages/Home'
import Notfound from './src/Pages/Notfound'
import Servicos from './src/Pages/Servicos'
import Contato from './src/Pages/Contato'
import Galeria from './src/Pages/Galeria'

export default function Router() {
    return (

        <BrowserRouter>
        
            <Menu/>

            <Routes>

                <Route path="/" element={<Home />} />
                {/* <Route path="/sobre" element={<Sobre />} /> */}
                <Route path="/servicos" element={<Servicos />} />
                <Route path="/contato" element={<Contato />} />
                <Route path="/galeria" element={<Galeria />} />
                <Route path="*" element={<Notfound />} />

            </Routes>

        </BrowserRouter>

    )
}