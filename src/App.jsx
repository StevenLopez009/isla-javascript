import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Splash from "./componentes/Splash/Splash";
import Menu from "./componentes/Menu/Menu";
import { UnlockSections } from "./context/DesbloquearSecciones/UnlockSections";
import Mapa from "./componentes/Mapa/Mapa";
import InicioPreguntas1 from "./componentes/Mapa/inicioPreguntas/InicioPreguntas1";
import { QuestionProvider } from "./context/ContextSections/ContextOne";
import ContenedorVidas from "./componentes/Mapa/contenedorVidas/vidasSeccion1/ContenedorVidas1";
import Biblioteca from "./componentes/Biblioteca/Biblioteca";

function App() {
  return (
    <>
      <UnlockSections>
        <QuestionProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Splash />} />
              <Route path="/Inicio" element={<Menu />} />
              <Route path="/Biblioteca" element={<Biblioteca />} />
              <Route path="/Mapa" element={<Mapa />} />
              <Route path="/Preguntas1" element={<InicioPreguntas1 />} />
              <Route path="/Seccion1" element={<ContenedorVidas />} />
            </Routes>
          </BrowserRouter>
        </QuestionProvider>
      </UnlockSections>
    </>
  );
}

export default App;
