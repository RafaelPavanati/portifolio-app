import {Route, Routes} from 'react-router-dom';
import Home from './paginas/Home';
import Projetos from './paginas/Projetos';
import NavBar from "./componentes/NavBar";
import React from "react";
import Pessoas from "./paginas/Pessoas";
import Pessoa from "./paginas/Pessoa";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
function App() {

    return (
        <section>
            <NavBar/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/pessoas" element={<Pessoas/>}/>
                <Route path="/pessoa" element={<Pessoa/>}/>
                <Route path="/portifolios" element={<Projetos/>}/>
            </Routes>
        </section>
    );
}

export default App;
