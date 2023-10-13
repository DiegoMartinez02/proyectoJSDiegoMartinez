alert("Hola. Bienvenido al asistente virtual de DM.");
alert("Podés ver el proyecto en el cual se basa este copiando y pegando esto en otra pestaña 👉 https://diegomartinez02.github.io/PreEntrega2Martinez/")
alert("Ahora comencemos.")

//Variables globales:
let precioFinal = 70;
let opcion = prompt('¿Qué querés hacer?: \n1- Quiero saber qué es DM. \n2 - Quiero saber si me conviene. \n3 - Quiero conocer los beneficios. \n4- Quiero consejos y ayuda gratuita para mi negocio. \n5- Quiero contratar el servicio. \nPresioná X para finalizar.');
let cliente;


//Funciones:
function calcularPrecio(){
    negocio = prompt("¿Qué tipo de negocio tienes? \n1- mayorista \n2- minorista");
    switch (negocio) {
            case '1':
                precioFinal *= 1.4;
                break;
            case '2':
                precioFinal = precioFinal;
                break;
    }
            articulos = prompt("¿Cuántos artículos tienes? \n1- Menos de 7.000 \n2- 7.000 o más");
    switch (articulos) {
            case '1':
                precioFinal = precioFinal;
            alert("El precio final que tendrá el servicio será de " + precioFinal + " dólares americanos mensuales.");
            break;
            case '2':
                precioFinal *= 1.15;
            alert("El precio final que tendrá el servicio será de " + precioFinal + " dólares americanos mensuales.");
            break;
    }
}
function fichaCliente(){
    let nombre = prompt("Escribe tu primer nombre");
    let apellido = prompt("Escribe tu primer apellido");
    let nacimiento = prompt("Escribe tu fecha de nacimiento en el orden; día, mes y año (por ejemplo: 01-02-1993");
    let documento = prompt("Escribe tu número de documento");
    let numContacto = prompt("Escribe un número de contacto");
    cliente = {
        nombre, apellido, nacimiento, documento, numContacto, precioFinal
    }
}


//Simulador:
while (opcion != 'X' && opcion != 'x') {
    switch (opcion) {
        case '1':
            alert("DM En DM, no solo creamos sitios web; creamos oportunidades para tu negocio y te brindamos las soluciones necesarias.");
            alert("Lo que nos distingue es nuestro enfoque en la personalización y la satisfacción del cliente. Creemos que cada negocio es único, y nuestras soluciones reflejan esa creencia. No importa si sos un emprendedor individual o una empresa establecida, trabajamos mano a mano contigo para entender tus metas y desafíos específicos.");
            break;
        case '2':
            alert("\n¿Sentís que tu solución actual transmite una imágen profesional y de confianza para tus clientes? \n¿Estás satisfecho con tu presencia online actual? \n¿Cuánto tiempo y esfuerzo dedicás actualmente para mantener y actualizar tu catálogo o tienda online, a pesar de posiblemente estar pagando un servicio para eso? \n¿Cómo te sentirías si tuvieras una tienda online profesional, fácil de gestionar y diseñada para atraer más clientes y brindarles una excelente experiencia de compra? \nSi no estás del todo satisfecho con las respuestas que te surgieron, entonces en DM te podemos ayudar.");
            break;
        case '3':
            alert("Los beneficios de contratar a DM son: \nEspecialmente adaptado para tus necesidades. \nControl de todos los pedidos \nGestion de todos los clientes \nGestion de todos los articulos o productos \nActualización rápida de precios \nVentas mínimas sin complicaciones \nOptimización SEO que marca la diferencia \nImplementación de Marketing");
            break;
        case '4':
            alert("Podes acceder a nuestros tutoriales abriendo esto en otra pestaña 👉 https://diegomartinez02.github.io/PreEntrega2Martinez/paginas/ayuda_gratis.html");
            break;
        case '5':
            alert("¡Es genial que quieras contratar nuestro servicio para que tu negocio crezca!");
            calcularPrecio();
            alert("Ahora que sabes cuál es el precio que te corresponde procederemos a armar tu ficha de cliente");
            fichaCliente();
            alert("Genial, tu ficha de cliente es: \nNombre: " + cliente.nombre + "\nApellido: " + cliente.apellido + "\nFecha de nacimiento: " + cliente.nacimiento + "\nNúmero de documento: " + cliente.documento + "\nNúmero de contacto: " + cliente.numContacto + "\nPrecio que pagarás por el servicio: " + cliente.precioFinal + " dólares americanos mensuales");
        default:
            alert('Elegiste una opción que no está entre las disponibles');
            break;
    }
    opcion = prompt('¿Qué querés hacer?: \n1- Quiero saber qué es DM. \n2 - Quiero saber si me conviene. \n3 - Quiero conocer los beneficios. \n4- Quiero consejos y ayuda gratuita para mi negocio. \n5- Quiero contratar el servicio. \nPresioná X para finalizar.');
}