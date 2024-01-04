import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Splash from "./componentes/Splash/Splash";
import Menu from "./componentes/Menu/Menu";
import { UnlockSections } from "./context/DesbloquearSecciones/UnlockSections";
import Mapa from "./componentes/Mapa/Mapa";
import InicioPreguntas1 from "./componentes/Mapa/inicioPreguntas/InicioPreguntas1";
import {
  QuestionProvider,
  QuestionProviderTwo,
} from "./context/ContextSections/ContextOne";
import ContenedorVidas from "./componentes/Mapa/contenedorVidas/vidasSeccion1/ContenedorVidas1";
import Biblioteca from "./componentes/Biblioteca/Biblioteca";
import InicioPreguntas2 from "./componentes/Mapa/inicioPreguntas/InicioPreguntas2";
import InicioPreguntas3 from "./componentes/Mapa/inicioPreguntas/InicioPreguntas3";
import InicioPreguntas4 from "./componentes/Mapa/inicioPreguntas/inicioPreguntas4";
import InicioPreguntas5 from "./componentes/Mapa/inicioPreguntas/InicioPreguntas5";
import InicioPreguntas6 from "./componentes/Mapa/inicioPreguntas/InicioPreguntas6";
import InicioPreguntas7 from "./componentes/Mapa/inicioPreguntas/InicioPreguntas7";
import InicioPreguntas8 from "./componentes/Mapa/inicioPreguntas/InicioPreguntas8";
import InicioPreguntas9 from "./componentes/Mapa/inicioPreguntas/InicioPreguntas9";
import InicioPreguntas10 from "./componentes/Mapa/inicioPreguntas/InicioPreguntas10";
import InicioPreguntas11 from "./componentes/Mapa/inicioPreguntas/inicioPreguntas11";
import InicioPreguntas12 from "./componentes/Mapa/inicioPreguntas/inicioPreguntas12";
import InicioPreguntas13 from "./componentes/Mapa/inicioPreguntas/inicioPreguntas13";
import InicioPreguntas14 from "./componentes/Mapa/inicioPreguntas/inicioPreguntas14";
import InicioPreguntas15 from "./componentes/Mapa/inicioPreguntas/inicioPreguntas15";
import InicioPreguntas16 from "./componentes/Mapa/inicioPreguntas/inicioPreguntas16";
import ContenedorVidas2 from "./componentes/Mapa/contenedorVidas/vidasSeccion1/ContenedorVidas2";

function App() {
  return (
    <>
      <UnlockSections>
        <QuestionProvider>
          <QuestionProviderTwo>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Splash />} />
                <Route path="/Inicio" element={<Menu />} />
                <Route path="/Biblioteca" element={<Biblioteca />} />
                <Route path="/Mapa" element={<Mapa />} />
                <Route path="/Preguntas1" element={<InicioPreguntas1 />} />
                <Route path="/Preguntas2" element={<InicioPreguntas2 />} />
                <Route path="/Preguntas3" element={<InicioPreguntas3 />} />
                <Route path="/Preguntas4" element={<InicioPreguntas4 />} />
                <Route path="/Preguntas5" element={<InicioPreguntas5 />} />
                <Route path="/Preguntas6" element={<InicioPreguntas6 />} />
                <Route path="/Preguntas7" element={<InicioPreguntas7 />} />
                <Route path="/Preguntas8" element={<InicioPreguntas8 />} />
                <Route path="/Preguntas9" element={<InicioPreguntas9 />} />
                <Route path="/Preguntas10" element={<InicioPreguntas10 />} />
                <Route path="/Preguntas11" element={<InicioPreguntas11 />} />
                <Route path="/Preguntas12" element={<InicioPreguntas12 />} />
                <Route path="/Preguntas13" element={<InicioPreguntas13 />} />
                <Route path="/Preguntas14" element={<InicioPreguntas14 />} />
                <Route path="/Preguntas15" element={<InicioPreguntas15 />} />
                <Route path="/Preguntas16" element={<InicioPreguntas16 />} />
                <Route path="/Seccion1" element={<ContenedorVidas />} />
                <Route path="/Seccion2" element={<ContenedorVidas2 />} />
              </Routes>
            </BrowserRouter>
          </QuestionProviderTwo>
        </QuestionProvider>
      </UnlockSections>
    </>
  );
}

export default App;
