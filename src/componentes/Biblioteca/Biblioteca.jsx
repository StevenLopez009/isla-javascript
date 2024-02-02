import { useState } from "react";
import "./Biblioteca.css";
import libroOne from "../../assets/img/imagen2.jpg";
import libroTwo from "../../assets/img/imagen6.jpg";
import libroThree from "../../assets/img/imagen5.jpg";
import libroFour from "../../assets/img/imagen4.jpg";
import libroFive from "../../assets/img/imagen3.jpg";
import libroSix from "../../assets/img/imagen56.jpg";
import libroSeven from "../../assets/img/imagen4.jpg";
import libroEight from "../../assets/img/imagen8.jpg";
import libroNine from "../../assets/img/imagen10.jpg";
import libroTen from "../../assets/img/imagen1.jpg";
import libroEleven from "../../assets/img/imagen17.jpg";
import libroTwelve from "../../assets/img/imagen12.jpg";
import libroThirteen from "../../assets/img/imagen13.jpg";
import libroFourteen from "../../assets/img/imagen14.jpg";
import libroFifteen from "../../assets/img/imagen15.jpg";
import libroSixteen from "../../assets/img/imagen16.jpg";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Libro from "./Libro.jsx";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Biblioteca = () => {
  const [start, setStart] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedLibro, setSelectedLibro] = useState([]);

  const infoLibro = [
    "JavaScript es un lenguaje fundamental en el desarrollo web. En JavaScript, una variable actúa como un espacio de memoria donde almacenamos diversos tipos de datos, incluyendo números, cadenas de texto y valores booleanos. Para declarar una variable, utilizamos la palabra clave let seguida del nombre de la variable y su valor asignado.Podemos crear constantes mediante const, las cuales mantienen un valor inmutable a lo largo del programa Para integrar funcionalidades en un documento HTML mediante JavaScript, empleamos la etiqueta <script></script>. En JS, el operador = asigna un valor a una variable, mientras que == compara los valores de dos variables y === verifica tanto los valores como los tipos de datos. El propósito  de JS radica en proporcionar interactividad a las páginas web. La consola, una herramienta esencial, permite visualizar mensajes y depurar código. Para imprimir mensajes en la consola, empleamos la función console.log() seguida del mensaje que deseamos mostrar, por ejemplo, console.log(Hola Mundo)",
    "Las estructuras de control son esenciales para dirigir el flujo del código. Un bucle es una de estas estructuras y permite repetir la ejecución de un bloque de código hasta que se cumpla una condición o se utilice la palabra clave break para detenerlo. La declaración continue permite saltar a la siguiente iteración del bucle. El bucle while ejecuta su código mientras una condición sea verdadera.La estructura switch maneja múltiples casos según el valor de una expresión, lo que posibilita la evaluación de diversas condiciones de manera más eficiente. Por otro lado, la estructura for crea bucles que se ejecutan un número específico de veces. La estructura if permite evaluar una sola condición, mientras que else if se utiliza para añadir condiciones adicionales cuando sea necesario. Estas estructuras son fundamentales para controlar el comportamiento y la lógica de un programa. ",
    "Una función en JavaScript es un bloque de código diseñado para realizar una tarea específica o calcular un valor. Para crear una función, utilizamos la palabra clave function seguida de un nombre, paréntesis que pueden contener parámetros, y un bloque de código entre llaves. Los parámetros son los valores que la función acepta y con los que opera El ámbito (scope) de una variable es el alcance donde puede ser utilizada y está disponible. El return al final de una función devuelve el valor calculado por la función. Una función anónima, también conocida como función flecha (arrow function), es una función sin nombre que puede ser asignada a una variable. Una función de orden superior toma funciones como argumentos y/o devuelve funciones como resultados. La anidación ocurre cuando llamamos a una función dentro de otra función. Invocar una función es simplemente ejecutar su código. Estos conceptos son fundamentales para comprender cómo funcionan las funciones en JavaScript y cómo pueden ser utilizadas de manera efectiva en la programación.",
    "Un objeto es una colección de propiedades y métodos interrelacionados. Para acceder a una propiedad dentro de un objeto, se pueden utilizar corchetes o la notación de punto. Para eliminar una propiedad de un objeto, se emplea el método delete. Existen múltiples formas de crear un objeto: utilizando la palabra clave new, con el constructor new object, o desde la declaración de una variable. Para verificar la existencia de una propiedad dentro de un objeto, se emplea el operador in junto con una estructura condicional if. Para añadir una nueva propiedad a un objeto previamente creado, se utiliza la notación de corchetes",
    "Un arreglo en JavaScript es una estructura de datos que almacena una colección ordenada de elementos. Para añadir un elemento al final del arreglo, se utiliza el método push(), mientras que para eliminar el último elemento se emplea pop(). Para conocer la longitud de un arreglo, se usa el método length(). La función Sort() ordena el arreglo de forma ascendente. Para combinar dos arreglos, se utiliza el método Concat(). La función IndexOf() busca un elemento dentro del arreglo. El método filter() selecciona los elementos que cumplen una condición. Para clonar un arreglo, se utiliza el método Arr.slice(), y para invertir el orden de un arreglo, se emplea Reverse() ",
    "El DOM representa la estructura de un documento como un árbol de objetos, donde cada nodo del árbol representa una parte del documento, como elementos HTML. Para seleccionar un elemento HTML por su ID, usamos document.getElementById(). Si queremos seleccionar varios elementos HTML del mismo tipo, empleamos document.querySelectorAll() especificando el elemento HTML deseado. Para agregar contenido a un elemento HTML, utilizamos element.innerHTML. Mediante el método remove(), eliminamos elementos HTML del DOM. Para modificar el contenido de un elemento HTML, usamos la propiedad setAttribute(). Para asignar un evento a un elemento HTML, empleamos      document.getElementById(id).addEventListener(evento, Función). Para capturar el valor de un input y trabajar con él, accedemos a input.value. Si queremos seleccionar varios elementos por su clase, utilizamos document.getElementsByClassName(). Por último, para crear un elemento HTML desde JavaScript, usamos el método createElement()",
    "AJAX, acrónimo de Asynchronous JavaScript and XML (JavaScript Asíncrono y XML), es una técnica de desarrollo web que posibilita la actualización de partes específicas de una página sin necesidad de recargarla por completo. fetch() es una función en JavaScript que se emplea para realizar peticiones HTTP desde el cliente a recursos en la web, como archivos JSON. Ofrece un manejo sencillo de errores y una buena compatibilidad con navegadores modernos,devolviendo una respuesta que puede ser capturada en una promesa then(). Por otro lado, XMLHttpRequest representa una forma más antigua de hacer peticiones HTTP. Aunque es más compleja de utilizar que fetch(), su principal ventaja radica en su mayor compatibilidad con navegadores antiguos. CORS (Cross-Origin Resource Sharing) es un mecanismo de seguridad implementado en los navegadores web que regula cómo los recursos web de una página pueden ser solicitados desde un dominio diferente. Existen diversos métodos para trabajar con peticiones: GET obtiene la respuesta en formato JSON, DELETE elimina, POST actualiza, PUT crea. Para capturar errores, utilizamos catch dentro de una estructura try...catch. Para abortar una solicitud AJAX en curso, se puede emplear el objeto XMLHttpRequest y su método abort(), el cual interrumpe la ejecución de la solicitud antes de que se complete.",
    "La herencia en la programación orientada a objetos (POO) permite que una clase (llamada subclase o clase derivada) herede propiedades y métodos de otra clase (llamada superclase o clase base). Un objeto en JavaScript es una estructura de datos que organiza eficientemente información mediante pares clave-valor. La encapsulación, un principio esencial, implica agrupar propiedades y métodos y exponer solo una interfaz controlada para interactuar con ellos. En POO, una clase sirve como plantilla o plano para crear objetos. La palabra clave para definir una clase en JavaScript, a partir de ECMAScript 6 (ES6), es class. El constructor de una clase es un método especial que se invoca automáticamente al crear una instancia de la clase. La herencia es fundamental en POO, ya que facilita la creación de nuevas clases basadas en clases existentes. El polimorfismo, otro concepto clave, permite que un objeto asuma múltiples formas o que distintos objetos respondan de manera diferente a la misma operación o método. Los métodos en POO se definen dentro de una clase utilizando la palabra clave function en JavaScript. En este contexto, un método es simplemente una función. Dentro de una clase en JavaScript, la palabra clave this se utiliza para hacer referencia a la instancia actual de la clase.",
    "El asincronismo se refiere a la ejecución de operaciones de forma no bloqueante, lo que permite que otras operaciones continúen mientras se espera a que ciertas tareas se completen. Los callbacks son funciones que se pasan como argumentos a otras funciones y se ejecutan después de que una operación asíncrona ha concluido. En JavaScript, una promesa es un objeto que representa el resultado eventual (éxito o fallo) de una operación asíncrona. Las promesas ofrecen una forma más estructurada y elegante de manejar el código asíncrono en comparación con los callbacks. Las características async y await en JavaScript simplifican y mejoran la legibilidad del código asíncrono al hacer que parezca síncrono. Utilizar promesas en lugar de callbacks tiene varias ventajas, como hacer que el código sea más legible, mantenible y fácil de manejar. El infierno de callbacks, también conocido como callback hell, ocurre cuando hay múltiples operaciones asíncronas anidadas, lo que puede dificultar la comprensión y el mantenimiento del código. setTimeout es una función en JavaScript que se utiliza para programar la ejecución de una función después de un cierto período de tiempo. La palabra clave async indica que una función es asíncrona en JavaScript.",
    "En JavaScript, puedes lanzar errores (también conocidos como excepciones) utilizando la palabra clave throw. Los errores de sintaxis en JavaScript ocurren cuando el intérprete encuentra un código que viola las reglas gramaticales del lenguaje, lo que impide que el código se ejecute correctamente. Para capturar errores, utilizamos try...catch, que permite definir un bloque de código donde pueden ocurrir errores y capturar esos errores para manejarlos. La declaración finally en JavaScript se utiliza junto con las declaraciones try y catch para especificar un bloque de código que se ejecutará siempre, independientemente de si se produjo una excepción o no. Una excepción en JavaScript es un objeto que se crea automáticamente o se lanza manualmente en tiempo de ejecución para indicar que ha ocurrido un error o una situación excepcional. El objeto Error en JavaScript es un objeto integrado que se utiliza para representar errores durante la ejecución del programa. console.error es un método proporcionado por la consola en JavaScript que se utiliza para imprimir mensajes de error en la consola del navegador.",
    "El almacenamiento en el navegador en JavaScript ofrece la capacidad de almacenar datos de forma persistente en el navegador web del usuario. Los principales mecanismos de almacenamiento son localStorage y sessionStorage. localStorage proporciona un almacén de datos persistente que permanece incluso después de cerrar y volver a abrir el navegador. En la mayoría de los navegadores modernos, el límite típico de almacenamiento para localStorage es de al menos 5 MB. sessionStorage, por otro lado, ofrece un almacén de datos de sesión que está disponible solo durante la sesión del navegador. Los datos en sessionStorage se eliminan al cerrar la pestaña del navegador o al finalizar la sesión. Para guardar en sessionStorage, se utiliza el método setItem(). Las cookies, por su parte, son pequeños archivos de texto que los sitios web envían al navegador del usuario y se almacenan en el disco duro de su computadora. Aunque no se recomienda su uso debido a preocupaciones de privacidad, las cookies tienen facilidad de acceso desde JavaScript. Además de localStorage, sessionStorage y cookies, tenemos IndexedDB (Database de Índice), que es una API en JavaScript que proporciona un sistema de almacenamiento de base de datos en el navegador web. IndexedDB permite agregar o actualizar objetos con el método put(objeto), y es una base de datos orientada a objetos, lo que significa que permite almacenar y recuperar objetos complejos en lugar de simplemente pares clave-valor. ",
    "Existen muchas herramientas para trabajar con JavaScript. Node.js:Es una plataforma para desarrollar aplicaciones del lado del servidor en JavaScript. Notepad++:Es un editor de texto liviano y poderoso para programación y edición de código. Git:Es un sistema de control de versiones para rastrear cambios en el código fuente. GitHub:Es una plataforma de desarrollo colaborativo basada en la nube para control de versiones y colaboración. npm:Es un gestor de paquetes esencial en el ecosistema de Node.js para la gestión de dependencias y ejecución de scripts. ESLint:Es una herramienta de linting para JavaScript que señala patrones problemáticos en el código fuente. Webpack:Es una herramienta para construir y empaquetar aplicaciones web modernas de forma eficiente. Mocha:Es un Marco robusto para la escritura y ejecución de pruebas en JavaScript. NVM:Es una herramienta para gestionar versiones específicas de Node.js en proyectos",
    "Un framework y una librería son herramientas de software que simplifican el desarrollo de aplicaciones, pero difieren en su enfoque y grado de control sobre el flujo de trabajo del desarrollador. React Native es un marco de desarrollo de código abierto de Facebook que permite construir aplicaciones móviles usando React y JavaScript. React, también de Facebook, es una biblioteca de JavaScript que construye interfaces de usuario (UI) interactivas y eficientes. D3.js, abreviatura de Data-Driven Documents, es una biblioteca JavaScript para manipular y visualizar datos en documentos web. Fetch, Axios y jQuery son comúnmente usados para peticiones HTTP en aplicaciones web. Socket.io es esencial para aplicaciones en tiempo real, facilitando la creación de apps interactivas y colaborativas, proporcionando una capa de abstracción sobre WebSockets y otros métodos de transporte. Angular es un framework frontend completo que estructura aplicaciones web escalables y mantenibles. Mocha, Chai y Jasmine son librerías para pruebas de código. Vue.js es un marco web flexible y progresivo, destacado por su sencillez y facilidad de integración. React Router es una librería de navegación para React, útil para gestionar el enrutamiento en aplicaciones de una sola página (SPA)",
    "En JavaScript, los módulos son herramientas clave para organizar y estructurar el código en archivos separados, lo que facilita la reutilización, el mantenimiento y la colaboración en proyectos de software. Los módulos pueden cargarse de forma perezosa, lo que significa que la carga y evaluación de los mismos se diferirá hasta que sean necesarios en tiempo de ejecución. ECMAScript 2015, también conocido como ES6, introdujo los módulos como parte de la especificación ECMAScript. Estos permiten reutilizar funciones, objetos y variables en distintas partes de una aplicación o incluso en proyectos diferentes. Esto ayuda a reducir la duplicación de código y agiliza el desarrollo. La palabra clave export se utiliza para exportar funciones, objetos o variables desde un módulo en JavaScript/ECMAScript, mientras que import se emplea para importar esos elementos en otro archivo. Además, CommonJS es un sistema y especificación para modularizar código en JavaScript fuera del navegador, siendo ampliamente utilizado en entornos de servidor y en herramientas como Node.js.",
    "La seguridad en JavaScript es un aspecto crucial, especialmente en aplicaciones web donde el código se ejecuta en el navegador del cliente y puede estar expuesto a diversas amenazas. El Ataque XSS (Cross-Site Scripting) es una vulnerabilidad de seguridad en aplicaciones web que permite a un atacante inyectar scripts maliciosos en páginas web, Validar y escapar las consultas SQL es una práctica fundamental para prevenir ataques de inyección de SQL. La inyección de SQL ocurre cuando los datos no se manejan adecuadamente y un atacante puede insertar o manipular comandos SQL, La Same-Origin Policy (Política del Mismo Origen) es una política de seguridad implementada en los navegadores web para restringir las solicitudes de recursos (como scripts, imágenes, o datos) a un dominio diferente al que originó la propia página.La sanitización y validación de datos de entrada son prácticas esenciales para garantizar la seguridad y la integridad de una aplicación. Un ataque de fuerza bruta es un método de prueba de acceso no autorizado que intenta descubrir una contraseña al probar múltiples combinaciones de claves,Limitar el número de solicitudes por IP es una medida efectiva para mitigar ataques de denegación de servicio (DoS) o ataques de fuerza bruta en una aplicación web.  El propósito principal de las Cookies seguras es garantizar que las cookies solo se envíen a través de conexiones cifradas (HTTPS),Cross-Site Request Forgery (CSRF) es una vulnerabilidad de seguridad en aplicaciones web que permite que un atacante realice acciones en nombre de un usuario sin su consentimiento. Para prevenir ataques CSRF, las aplicaciones web a menudo utilizan tokens CSRF ",
    "La optimización en JavaScript se refiere al proceso de mejorar el rendimiento, la eficiencia y la calidad del código JavaScript. Minimizar y combinar archivos JavaScript es una buena práctica común para optimizar el rendimiento de una aplicación web. La técnica comúnmente utilizada para retrasar la ejecución de JavaScript hasta que la página esté completamente cargada es colocar el código JavaScript al final del cuerpo del documento HTML, Reducir la complejidad de un bucle en JavaScript puede mejorar significativamente el rendimiento de tu código para ello reduce las operaciones costosas en los bucles, Reducir las solicitudes de red y minimizar el uso de recursos son estrategias clave para optimizar el rendimiento de una aplicación web.Dividir el código en módulos y cargarlos de forma perezosa (lazy loading) es una estrategia efectiva para optimizar el rendimiento de una aplicación web. Utilizar compresión de recursos y servidores de CDN (Content Delivery Network) son prácticas esenciales para mejorar el rendimiento y la velocidad de carga El uso de un preloader (precargador) y CSS para ocultar elementos hasta que estén listos es una técnica común para mejorar la experiencia del usuario y evitar el parpadeo durante su carga, La cabecera Cache-Control es una forma de controlar cómo los recursos de una página web son almacenados en caché y reutilizados por el navegador.",
  ];

  const titulos = [
    "Libro 1 Introduccion",
    "Libro 2 Estructuras de control",
    "Libro 3 Funciones",
    "Libro 4 Objetos",
    "Libro 5 Arreglos",
    "Libro 6 DOM",
    "Libro 7 Ajax y Fetch",
    "Libro 8 POO",
    "Libro 9 Asicronismo",
    "Libro 10 Errores",
    "Libro 11 Almacenamiento",
    "Libro 12 Herramientas",
    "Libro 13 Frameworks y Librerias",
    "Libro 14 Modulos",
    "Libro 15 Seguridad",
    "Libro 16 Optimizacion",
  ];

  const libros = [
    libroOne,
    libroTwo,
    libroThree,
    libroFour,
    libroFive,
    libroSix,
    libroSeven,
    libroEight,
    libroNine,
    libroTen,
    libroEleven,
    libroTwelve,
    libroThirteen,
    libroFourteen,
    libroFifteen,
    libroSixteen,
  ];

  const cambiarEstado = () => {
    setStart(true);
  };
  const openModal = (index) => {
    setSelectedLibro(index);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      {start ? (
        <div className="container">
          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{
              delay: 9000,
              disableOnInteraction: false,
            }}
            pagination={{
              el: ".pagination",
              clickable: true,
            }}
            slidesPerView={4}
            breakpoints={{
              "@0.00": {
                slidesPerView: 1,
                spaceBetween: 25,
              },
              "@0.50": {
                slidesPerView: 1.25,
                spaceBetween: 25,
              },
              "@1.00": {
                slidesPerView: 2,
                spaceBetween: 25,
              },
              "@1.25": {
                slidesPerView: 2.5,
                spaceBetween: 25,
              },
              "@1.50": {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              "@1.75": {
                slidesPerView: 4,
                spaceBetween: 20,
              },
            }}
          >
            {libros.map((libro, index) => (
              <SwiperSlide key={index}>
                <Libro
                  url={libro}
                  titulo={titulos[index]}
                  openModal={() => openModal(index)}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      ) : (
        <div className="contenedor contenedor-inicial">
          <h2>Biblioteca</h2>
          <button className="btn-play" onClick={cambiarEstado}></button>
        </div>
      )}
      {showModal && selectedLibro !== null && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <h2>{titulos[selectedLibro]}</h2>
            <p>{infoLibro[selectedLibro]}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Biblioteca;
