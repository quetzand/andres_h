// Inicializa ScrollReveal.js
ScrollReveal().reveal('.titulo-seccion', {
    origin: 'left', // Establece el origen de la animación
    distance: '200px', // Establece la distancia del desplazamiento
    duration: 2000, // Establece la duración de la animación en milisegundos
    easing: 'ease', // Establece la función de interpolación de la animación
    reset: true, // Restablece la animación en cada desplazamiento
    viewFactor: 0.3 // Define la proporción de elemento visible antes de activar la animación
});

function mostrar(elem){
    //oculto todos los detalles
    detalles = document.getElementsByClassName("detalle");
    for(i=0; i < detalles.length; i++){
        detalles[i].style.display = "none";
    }

    links = document.querySelectorAll(".habilidades .menu li");
    for(i=0; i < detalles.length; i++){
        links[i].classList = "";
    }

    //visualizo el que corresponde en base al id
    id_skill = "info" + elem.id;
    document.getElementById(id_skill).style.display = "block";
    document.getElementById(elem.id).classList = "selected";
}

const testimonios = [
    {
        foto:"cliente1.png",
        titulo:"Un colaborador clave en soluciones de TI !!!",
        texto:"He tenido el placer de trabajar con Andrés Hernández en diversas implementaciones de sistemas a medida, servicios de ciberseguridad, pentesting y gestión de redes e infraestructura. Su enfoque profesional y profundo conocimiento técnico han sido fundamentales para garantizar la seguridad y el rendimiento de las soluciones. que hemos implementado. Andrés demuestra una gran capacidad para adaptarse a las necesidades de cada cliente, brindando soluciones eficientes y confiables que cumplen con los más altos estándares de calidad.",
        nombre:"Omar L.",
        puesto:"CEO SysAdmin México",
    },
    {
        foto:"cliente2.png",
        titulo:"Opinión de un Cliente Satisfecho.",
        texto:"Trabajar con Andrés Hernández ha sido una experiencia muy positiva. Gracias a su experiencia en diseño web, logramos tener una presencia sólida en internet y redes sociales, lo que ha potenciado la visibilidad de nuestra cadena de negocios de alimentos. Además, implementó un sistema de automatización para la operación de nuestro restaurante, lo que ha optimizado nuestros procesos y mejorado la eficiencia de nuestro servicio Agradezco su apoyo constante y su enfoque profesional, que nos ha permitido avanzar en nuestra transformación digital",
        nombre:"Aguistin M.",
        puesto:"Propietario de Cadena de Negocios de Alimentos",
    },
    {
        foto:"cliente3.png",
        titulo:"Trabajos de excelente calidad",
        texto:"Mi experiencia trabajando con Andrés Hernández ha sido excelente. Gracias a su trabajo, desarrollamos una página web que refleja de manera profesional mis servicios como consultor de seguridad, lo que ha mejorado significativamente mi visibilidad en línea. Además, Andrés brindó un invaluable apoyo en la conferencia sobre inteligencia artificial para el Colegio de Contadores Públicos, ayudándonos a presentar un contenido relevante y accesible. Estoy muy satisfecho con los resultados obtenidos y el compromiso demostrado por su parte.",
        nombre:"José Lúis C",
        puesto:"CEO, Web Developer",
    },
    {
        foto:"cliente4.png",
        titulo:"Calidad garantizada",
        texto:"ha sido una experiencia muy positiva. Gracias a su apoyo en la creación y desarrollo de contenido para mi negocio de contabilidad pública, logró posicionarme mejor en el mercado y brindar un servicio más accesible y cercano a mis clientes. Además , su asesoría en el desarrollo de mi negocio alterno, enfocado en la concientización sobre el cuidado de gatos y la venta de productos relacionados, ha sido clave para que hoy en día comience a monetizarlo. Estoy muy agradecida por su dedicación y por ayudarme a alcanzar. mis objetivos.",
        nombre:"Dana N.",
        puesto:"Consultor C.P.",
    }
]

//Variable que controla la ubicación del testimonio actual.
var pos = 0;
//Función para avaznar al siguiente testimonio
function siguiente(){
    pos++;
    document.getElementById("imgCliente").src = "img/" + testimonios[pos].foto;
    document.getElementById("tituloCliente").innerText =testimonios[pos].titulo;
    document.getElementById("txtCliente").innerText = testimonios[pos].texto;
    document.getElementById("nombreCliente").innerText = testimonios[pos].nombre;
    document.getElementById("puestoCliente").innerText = testimonios[pos].puesto;

    if(pos==3){
        pos= -1;
    }
}
//Función para cerrar el menu
function cerrar(){
    document.getElementsByClassName("nav-menu")[0].style.top ="-100%";
}
//Función para abrir el menu
function verMenu(){
    document.getElementsByClassName("nav-menu")[0].style.top ="0";
}