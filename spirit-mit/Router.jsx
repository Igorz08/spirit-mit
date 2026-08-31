import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Sobre from './src/Pages/Sobre'
import Home from './src/Pages/Home'
import Menu from './src/Components/Menu'

export default function Router() {
    return (

        <BrowserRouter>
        
            <Menu/>

            <Routes>

                <Route path="/" element={<Home />} />
                <Route path="/sobre" element={<Sobre />} />

            </Routes>

        </BrowserRouter>

    )
}