const articulos = [
    {
        id: 1,
        categoria: 'Baño',
        descripcion: 'Teléfono de ducha con piedras',
        precio: 'Regístrate para recibir tu catálogo',
        imagen: './img/ducha.jpg',
    },
    {
        id: 2,
        categoria: 'Cocina',
        descripcion: 'Organizador con ganchos',
        precio: 'Regístrate para recibir tu catálogo',
        imagen: './img/organizador.JPG',
    },
    {
        id: 3,
        categoria: 'Varios',
        descripcion: 'Dispensador de shots',
        precio: 'Regístrate para recibir tu catálogo',
        imagen: './img/shots.jpg',
    },
    {
        id: 4,
        categoria: 'Cocina',
        descripcion: 'Abridor de frascos, botellas y bollones',
        precio: 'Regístrate para recibir tu catálogo',
        imagen: './img/abrebollones.jpg',
    },
    {
        id: 5,
        categoria: 'Cocina',
        descripcion: 'Abrelatas',
        precio: 'Regístrate para recibir tu catálogo',
        imagen: './img/abrelata.JPG',
    },
    {
        id: 6,
        categoria: 'Cocina',
        descripcion: 'Colador con bowl',
        precio: 'Regístrate para recibir tu catálogo',
        imagen: './img/colador.jpg',
    },
    {
        id: 7,
        categoria: 'Baño',
        descripcion: 'Cortina de baño',
        precio: 'Regístrate para recibir tu catálogo',
        imagen: './img/cortina_baño.jpg',
    },
    {
        id: 8,
        categoria: 'Varios',
        descripcion: 'Destapador magnético',
        precio: 'Regístrate para recibir tu catálogo',
        imagen: './img/destapador.JPG',
    },
    {
        id: 9,
        categoria: 'Cocina',
        descripcion: 'Dispensador de jabón con esponja',
        precio: 'Regístrate para recibir tu catálogo',
        imagen: './img/dispensador_jabon.jpg',
    },
    {
        id: 10,
        categoria: 'Cocina',
        descripcion: 'Escurreplatos retráctil de silicona',
        precio: 'Regístrate para recibir tu catálogo',
        imagen: './img/escurreplatos.jpg',
    },
    {
        id: 11,
        categoria: 'Cocina',
        descripcion: 'Exprimidor con protector',
        precio: 'Regístrate para recibir tu catálogo',
        imagen: './img/exprimidor.JPG',
    },
    {
        id: 12,
        categoria: 'Cocina',
        descripcion: 'Guantes lavaplatos de silicona',
        precio: 'Regístrate para recibir tu catálogo',
        imagen: './img/guantes.jpg',
    },
    {
        id: 13,
        categoria: 'Varios',
        descripcion: 'Inflador de pie con fuelle',
        precio: 'Regístrate para recibir tu catálogo',
        imagen: './img/inflador.jpg',
    },
    {
        id: 14,
        categoria: 'Varios',
        descripcion: 'Láminas anti-lluvia para espejos',
        precio: 'Regístrate para recibir tu catálogo',
        imagen: './img/laminas_espejos.jpg',
    },
    {
        id: 15,
        categoria: 'Cocina',
        descripcion: 'Set de 6 utensilios de cocina',
        precio: 'Regístrate para recibir tu catálogo',
        imagen: './img/utensilios.jpg',
    },
]
function catalogo(){
    const productos = document.querySelector('main.inicio');

    let productosInfo = document.createElement('div');
    productosInfo.classList.add("productosInfoDiv");
    for (const producto of articulos) {
        const enlaceLegibleCategoria = producto.categoria.replace(/ /g, '_');
        productosInfo.innerHTML += `
                        <section class="seccionProducto">
                            <img src=${producto.imagen}>
                        
                            
                            <a class="categoria" href="./paginas/${enlaceLegibleCategoria}.html"><span>${producto.categoria}</span></a>
                            
                            <h3 class="descripcion"> ${producto.descripcion}</h3>
                            <p class="precio">${producto.precio}</p>
                            <a class="botonVer" data-id=${producto.id} href="./paginas/producto.html?producto=${producto.id}">Ver</a>
                            </section>`;
                            
    }

    productos.appendChild(productosInfo);
    fetch('https://dummyjson.com/products/1')
    .then(res => res.json())
    .then(({thumbnail, category, title, price}) => {
        productosInfo.innerHTML += `
                        <section class="productoJson">
                            <img src=${thumbnail}>
                        
                            
                            <a class="categoria"><span>${category}</span></a>
                            
                            <h3 class="descripcion"> ${title}</h3>
                            <p class="precio">Precio:${price} dólares</p>
                            </section>`;
    }).catch( error => {
        alert("Hubo un error, estamos intentando solucionarlo");
    })
}
//Producto
function paginaProducto(){
    const searchParams = new URLSearchParams(window.location.search);
    const idProducto = searchParams.get('producto');
    let productoMostrar
    let productoDetalles = document.createElement('div');
productoDetalles.classList.add("productoDetalles");
    for (const producto of articulos){
        if (idProducto == producto.id){
            productoMostrar = producto;
            break;
        }
    }
    productoDetalles.innerHTML += `
                        <section>
                        <h2>${productoMostrar.descripcion}</h2>
                        <img src=".${productoMostrar.imagen}">
                        </section>`;
    const elementoMain = document.querySelector('main');
    elementoMain.appendChild(productoDetalles);
}

