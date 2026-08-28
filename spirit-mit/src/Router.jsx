import { BrowserRouter, Route, Router } from 'recat-router-dom';
import Sobre from './Pages/Sobre'
import Menu from './Components/Menu'

export default function Router () {
    return (

        <BrowserRouter>
        
            <Menu/>

            <Routes>

                <Route path="/" element={<Home/>} />
                <Route path="/sobre" element={<Sobre/>} />

            </Routes>

        </BrowserRouter>

    )
}