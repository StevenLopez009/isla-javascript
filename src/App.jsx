import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Splash from "./componentes/Splash/Splash";
import Menu from "./componentes/Menu/Menu";
import { UnlockSections } from "./context/DesbloquearSecciones/UnlockSections";
import Mapa from "./componentes/Mapa/Mapa";
import InicioPreguntas1 from "./componentes/Mapa/inicioPreguntas/InicioPreguntas1";
import {
  QuestionProviderEight,
  QuestionProviderEleven,
  QuestionProviderFifteen,
  QuestionProviderFive,
  QuestionProviderFour,
  QuestionProviderFourteen,
  QuestionProviderNine,
  QuestionProviderOne,
  QuestionProviderSeven,
  QuestionProviderSix,
  QuestionProviderSixteen,
  QuestionProviderTen,
  QuestionProviderThirteen,
  QuestionProviderThree,
  QuestionProviderTwelve,
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
import ContenedorVidas3 from "./componentes/Mapa/contenedorVidas/vidasSeccion1/ContenedorVidas3";
import ContenedorVidas4 from "./componentes/Mapa/contenedorVidas/vidasSeccion1/ContenedorVidas4";
import ContenedorVidas5 from "./componentes/Mapa/contenedorVidas/vidasSeccion1/ContenedorVidas5";
import ContenedorVidas6 from "./componentes/Mapa/contenedorVidas/vidasSeccion1/ContenedorVidas6";
import ContenedorVidas7 from "./componentes/Mapa/contenedorVidas/vidasSeccion1/ContenedorVidas7";
import ContenedorVidas8 from "./componentes/Mapa/contenedorVidas/vidasSeccion1/ContenedorVidas8";
import ContenedorVidas9 from "./componentes/Mapa/contenedorVidas/vidasSeccion1/ContenedorVidas9";
import ContenedorVidas10 from "./componentes/Mapa/contenedorVidas/vidasSeccion1/ContenedorVidas10";
import ContenedorVidas11 from "./componentes/Mapa/contenedorVidas/vidasSeccion1/ContenedorVidas11";
import ContenedorVidas12 from "./componentes/Mapa/contenedorVidas/vidasSeccion1/ContenedorVidas12";
import ContenedorVidas13 from "./componentes/Mapa/contenedorVidas/vidasSeccion1/ContenedorVidas13";
import ContenedorVidas14 from "./componentes/Mapa/contenedorVidas/vidasSeccion1/ContenedorVidas14";
import ContenedorVidas15 from "./componentes/Mapa/contenedorVidas/vidasSeccion1/ContenedorVidas15";
import ContenedorVidas16 from "./componentes/Mapa/contenedorVidas/vidasSeccion1/ContenedorVidas16";
import Taberna from "./componentes/Taberna/Taberna";
import Cuartel from "./componentes/Cuartel/Cuartel";

function App() {
  return (
    <>
      <UnlockSections>
        <QuestionProviderOne>
          <QuestionProviderTwo>
            <QuestionProviderThree>
              <QuestionProviderFour>
                <QuestionProviderFive>
                  <QuestionProviderSix>
                    <QuestionProviderSeven>
                      <QuestionProviderEight>
                        <QuestionProviderNine>
                          <QuestionProviderTen>
                            <QuestionProviderEleven>
                              <QuestionProviderTwelve>
                                <QuestionProviderThirteen>
                                  <QuestionProviderFourteen>
                                    <QuestionProviderFifteen>
                                      <QuestionProviderSixteen>
                                        <BrowserRouter>
                                          <Routes>
                                            <Route
                                              path="/"
                                              element={<Splash />}
                                            />
                                            <Route
                                              path="/Inicio"
                                              element={<Menu />}
                                            />
                                            <Route
                                              path="/Biblioteca"
                                              element={<Biblioteca />}
                                            />
                                            <Route
                                              path="/Mapa"
                                              element={<Mapa />}
                                            />
                                            <Route
                                              path="/Taberna"
                                              element={<Taberna />}
                                            />
                                            <Route
                                              path="/Cuartel"
                                              element={<Cuartel />}
                                            />
                                            <Route
                                              path="/Preguntas1"
                                              element={<InicioPreguntas1 />}
                                            />
                                            <Route
                                              path="/Preguntas2"
                                              element={<InicioPreguntas2 />}
                                            />
                                            <Route
                                              path="/Preguntas3"
                                              element={<InicioPreguntas3 />}
                                            />
                                            <Route
                                              path="/Preguntas4"
                                              element={<InicioPreguntas4 />}
                                            />
                                            <Route
                                              path="/Preguntas5"
                                              element={<InicioPreguntas5 />}
                                            />
                                            <Route
                                              path="/Preguntas6"
                                              element={<InicioPreguntas6 />}
                                            />
                                            <Route
                                              path="/Preguntas7"
                                              element={<InicioPreguntas7 />}
                                            />
                                            <Route
                                              path="/Preguntas8"
                                              element={<InicioPreguntas8 />}
                                            />
                                            <Route
                                              path="/Preguntas9"
                                              element={<InicioPreguntas9 />}
                                            />
                                            <Route
                                              path="/Preguntas10"
                                              element={<InicioPreguntas10 />}
                                            />
                                            <Route
                                              path="/Preguntas11"
                                              element={<InicioPreguntas11 />}
                                            />
                                            <Route
                                              path="/Preguntas12"
                                              element={<InicioPreguntas12 />}
                                            />
                                            <Route
                                              path="/Preguntas13"
                                              element={<InicioPreguntas13 />}
                                            />
                                            <Route
                                              path="/Preguntas14"
                                              element={<InicioPreguntas14 />}
                                            />
                                            <Route
                                              path="/Preguntas15"
                                              element={<InicioPreguntas15 />}
                                            />
                                            <Route
                                              path="/Preguntas16"
                                              element={<InicioPreguntas16 />}
                                            />
                                            <Route
                                              path="/Seccion1"
                                              element={<ContenedorVidas />}
                                            />
                                            <Route
                                              path="/Seccion2"
                                              element={<ContenedorVidas2 />}
                                            />
                                            <Route
                                              path="/Seccion3"
                                              element={<ContenedorVidas3 />}
                                            />
                                            <Route
                                              path="/Seccion4"
                                              element={<ContenedorVidas4 />}
                                            />
                                            <Route
                                              path="/Seccion5"
                                              element={<ContenedorVidas5 />}
                                            />
                                            <Route
                                              path="/Seccion6"
                                              element={<ContenedorVidas6 />}
                                            />
                                            <Route
                                              path="/Seccion7"
                                              element={<ContenedorVidas7 />}
                                            />
                                            <Route
                                              path="/Seccion8"
                                              element={<ContenedorVidas8 />}
                                            />
                                            <Route
                                              path="/Seccion9"
                                              element={<ContenedorVidas9 />}
                                            />
                                            <Route
                                              path="/Seccion10"
                                              element={<ContenedorVidas10 />}
                                            />
                                            <Route
                                              path="/Seccion11"
                                              element={<ContenedorVidas11 />}
                                            />
                                            <Route
                                              path="/Seccion12"
                                              element={<ContenedorVidas12 />}
                                            />
                                            <Route
                                              path="/Seccion13"
                                              element={<ContenedorVidas13 />}
                                            />
                                            <Route
                                              path="/Seccion14"
                                              element={<ContenedorVidas14 />}
                                            />
                                            <Route
                                              path="/Seccion15"
                                              element={<ContenedorVidas15 />}
                                            />
                                            <Route
                                              path="/Seccion16"
                                              element={<ContenedorVidas16 />}
                                            />
                                          </Routes>
                                        </BrowserRouter>
                                      </QuestionProviderSixteen>
                                    </QuestionProviderFifteen>
                                  </QuestionProviderFourteen>
                                </QuestionProviderThirteen>
                              </QuestionProviderTwelve>
                            </QuestionProviderEleven>
                          </QuestionProviderTen>
                        </QuestionProviderNine>
                      </QuestionProviderEight>
                    </QuestionProviderSeven>
                  </QuestionProviderSix>
                </QuestionProviderFive>
              </QuestionProviderFour>
            </QuestionProviderThree>
          </QuestionProviderTwo>
        </QuestionProviderOne>
      </UnlockSections>
    </>
  );
}

export default App;
