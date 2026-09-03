import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Menu from './src/Components/Menu'
import Sobre from './src/Pages/Sobre'
import Home from './src/Pages/Home'
import Notfound from './src/Pages/Notfound'

export default function Router() {
    return (

        <BrowserRouter>
        
            <Menu/>

            <Routes>

                <Route path="/" element={<Home />} />
                <Route path="/sobre" element={<Sobre />} />
                <Route path="*" element={<Notfound />} />

            </Routes>

        </BrowserRouter>

    )
}