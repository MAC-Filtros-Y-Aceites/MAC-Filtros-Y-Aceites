let slideIndex = 0;
function showSlides() {
    const slides = document.querySelectorAll('.carousel-slide img');
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    } slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = 'block';
    setTimeout(showSlides, 3000); // Cambia la imagen cada 3 segundos
}
function moveSlide(n) {
    slideIndex += n - 1;
    showSlides();
}
window.onload = showSlides;

var products = {
   1: {
        img: 'img/DA-223.png',
        title: 'Filtro de aceite A223',
        category: 'filtros',
        description: '<strong>DESCRIPCIÓN:</strong><br><br>Filtro de aceite flujo completo, enroscable.<br><br><strong>MARCAS:</strong> CHERY, CHEVROLET, FORD, JEEP, MCCORMICK, SKODA, SULLAIR, SUNWARD, SUZUKI, TOYOTA, VOLKSWAGEN.',
        additionalImg: 'img/DA-223-A.png'  // Imagen adicional
    },
    2: {
        img: 'img/DA-1402.png',
        title: 'Filtro de aceite A1402',
        category: 'filtros',
        description: '<strong>DESCRIPCIÓN:</strong><br><br>Filtro de aceite flujo completo, enroscable.<br><br><strong>MARCAS:</strong> CASE/CASE IH, CITROEN, DEUTZ-FAHR, FIAT, GREAT WALL, HITACHI, HONDA, HUERLIMANN TRACTORS, HYUNDAI, IHI, JAC, KOMATSU, MASSEY FERGUSON, MAZDA, MITSUBISHI, NEUSON, NISSAN, POLARIS, SAME, TORO, YANMAR.',
        additionalImg: 'img/DA-1402-A.png'  // Imagen adicional
    },
    3: {
        img: 'img/DA-4054SP.png',
        title: 'Filtro de aceite A4054SP',
        category: 'filtros',
        description: '<strong>DESCRIPCIÓN:</strong><br><br>Filtro de combustible secundario, enroscable.<br><br><strong>',
        additionalImg: 'img/DA-4054SP-A.png'  // Imagen adicional
    },
    4: {
        img: 'img/DA-3603.png',
        title: 'Filtro de aceite A3603',
        category: 'filtros',
        description: '<strong>DESCRIPCIÓN:</strong><br><br>Filtro de aceite flujo completo, enroscable.<br><br><strong>',
        additionalImg: 'img/DA-3603-A.png'  // Imagen adicional
    },
    5: {
        img: 'img/DA-4271SP.png',
        title: 'Filtro de aceite A4271SP',
        category: 'filtros',
        description: '<strong>DESCRIPCIÓN:</strong><br><br>Filtro de aceite flujo completo, enroscable.<br><br><strong>MARCAS:</strong> CHEVROLET, JMC.',
        additionalImg: 'img/DA-4271SP-A.png'  // Imagen adicional
    },
    6: {
        img: 'img/DA-14476.png',
        title: 'Filtro de aceite A14476',
        category: 'filtros',
        description: '<strong>DESCRIPCIÓN:</strong><br><br>Filtro de aceite flujo completo, enroscable.<br><br><strong>MARCAS:</strong> BYD, CASE/CASE IH, CHERY, CHEVROLET, DAIHATSU, GEELY, GREAT WALL, ISEKI, JOHN DEERE, KAWASAKI, NISSAN, SIMPLICITY, TOYOTA, ZOTIE.',
        additionalImg: 'img/DA-14476-A.png'  // Imagen adicional
    },
    7: {
        img: 'img/DAP3450.png',
        title: 'Filtro de aceite AP3450',
        category: 'filtros',
        description: '<strong>DESCRIPCIÓN:</strong><br><br>Filtro de aire primario, panel rígido.<br><br><strong>MARCAS:</strong> CHEVROLET.',
        additionalImg: 'img/DAP3450-A.png'  // Imagen adicional
    },
    8: {
        img: 'img/DAP16550.png',
        title: 'Filtro de aceite AP16550',
        category: 'filtros',
        description: '<strong>DESCRIPCIÓN:</strong><br><br>Filtro de aire primario, cilíndrico.<br><br><strong>MARCAS:</strong>',
        additionalImg: 'img/DAP16550-A.png'  // Imagen adicional
    },
    9: {
        img: 'img/DAPC010.png',
        title: 'Filtro de aceite APC010',
        category: 'filtros',
        description: '<strong>DESCRIPCIÓN:</strong><br><br>Filtro de aire primario, cilíndrico.<br><br><strong>MARCAS:</strong> FORD, MAZDA, TOYOTA.',
        additionalImg: 'img/DAPC010-A.png'  // Imagen adicional
    },
    10: {
        img: 'img/FA-A14616.png',
        title: 'Filtro de aceite A14616',
        category: 'filtros',
        description: '<strong>DESCRIPCIÓN:</strong><br><br>Filtro de aceite flujo completo, especial para transporte liviano.<br><br><strong>MARCAS:</strong> CHEVROLET.',
        additionalImg: 'img/FA-A14616-A.png'  // Imagen adicional
    },
    11: {
        img: 'img/FA-A14476.png',
        title: 'Filtro de aceite A14476',
        category: 'filtros',
        description: '<strong>DESCRIPCIÓN:</strong><br><br>Filtro de aceite flujo completo, especial para transporte liviano.<br><br><strong>MARCAS:</strong>BYD, CASE/CASE IH, CHERY, CHEVROLET, DAIHATSU, GEELY, GREAT WALL, ISEKI, JOHN DEERE, KAWASAKI, NISSAN, SIMPLICITY, TOYOTA, ZOTIE.',
        additionalImg: 'img/FA-A14476-A.png'  // Imagen adicional
    },
    12: {
        img: 'img/FA-A111.png',
        title: 'Filtro de aceite A111',
        category: 'filtros',
        description: '<strong>DESCRIPCIÓN:</strong><br><br>Filtro de aceite flujo completo, especial para transporte liviano.<br><br><strong>MARCAS:</strong> CHEVROLET, DAEWOO, GMC, HYSTER.',
        additionalImg: 'img/FA-A111-A.png'  // Imagen adicional
    },
    13: {
        img: 'img/FA-A323.png',
        title: 'Filtro de aceite A323',
        category: 'filtros',
        description: '<strong>DESCRIPCIÓN:</strong><br><br>Filtro de aceite flujo completo, especial para transporte liviano.<br><br><strong>MARCAS:</strong> AUSA, BOBCAT, CHEVROLET, GEHL, GENIE, HITACHI, HONDA, INGERSOLLRAND, JOHN DEERE, KAESER, KOMATSU, KUBOTA, MAZDA, MCCORMICK, MITSUBISHI, TENNANT,TORO, WESTERBEKE.',
        additionalImg: 'img/FA-A323-A.png'  // Imagen adicional
    },
    14: {
        img: 'img/FA-A1402.png',
        title: 'Filtro de aceite A1402',
        category: 'filtros',
        description: '<strong>DESCRIPCIÓN:</strong><br><br>Filtro de aceite flujo completo, especial para transporte liviano.<br><br><strong>MARCAS:</strong> CASE/CASE IH, CITROEN, DEUTZ-FAHR, FIAT, GREAT WALL, HITACHI, HONDA, HUERLIMANN TRACTORS, HYUNDAI, IHI, JAC, KOMATSU, MASSEY FERGUSON, MAZDA, MITSUBISHI, NEUSON, NISSAN, POLARIS, SAME, TORO, YANMAR.',
        additionalImg: 'img/FA-A1402-A.png'  // Imagen adicional
    },
    15: {
        img: 'img/FA-A223.png',
        title: 'Filtro de aceite A223',
        category: 'filtros',
        description: '<strong>DESCRIPCIÓN:</strong><br><br>Filtro de aceite flujo completo, especial para transporte liviano.<br><br><strong>MARCAS:</strong> CHERY, CHEVROLET, FORD, JEEP, MCCORMICK, SKODA, SULLAIR, SUNWARD, SUZUKI, TOYOTA, VOLKSWAGEN.',
        additionalImg: 'img/FA-A223-A.png'  // Imagen adicional
    },
    16: {
        img: 'img/FA-A7041SP.png',
        title: 'Filtro de aceite A7041SP',
        category: 'filtros',
        description: '<strong>DESCRIPCIÓN:</strong><br><br>Filtro de aceite flujo completo, especial para transporte mediano.<br><br><strong>MARCAS:</strong> CHEVROLET, CLARK, DETROIT DIESEL, HINO, ISUZU.',
        additionalImg: 'img/FA-A7041SP-A.png'  // Imagen adicional
    },
    17: {
        img: 'img/FAR-AP2712.png',
        title: 'Filtro de aire AP2712',
        category: 'filtros',
        description: '<strong>DESCRIPCIÓN:</strong><br><br>Filtro de aire primario, cilíndrico. Especial para transporte mediano.<br><br><strong>MARCAS:</strong> CHEVROLET, GMC, HITACHI, IHI, ISUZU, JAC, JCB, KUBOTA, NISSAN.',
        additionalImg: 'img/FAR-AP2712-A.png'  // Imagen adicional
    },
    18: {
        img: 'img/FAR-AP4495.png',
        title: 'Filtro de aire\nAP4495',
        category: 'filtros',
        description: '<strong>DESCRIPCIÓN:</strong><br><br>Filtro de aire primario, panel rígido. Especial para transporte liviano.<br><br><strong>MARCAS:</strong> CHEVROLET.',
        additionalImg: 'img/FAR-AP4495-A.png'  // Imagen adicional
    },
    19: {
        img: 'img/FAR-AP0978.png',
        title: 'Filtro de aire\nAP0978',
        category: 'filtros',
        description: '<strong>DESCRIPCIÓN:</strong><br><br>Filtro de aire primario, panel flexible. Especial para transporte liviano.<br><br><strong>MARCAS:</strong> DACIA, RENAULT.',
        additionalImg: 'img/FAR-AP0978-A.png'  // Imagen adicional
    },
    20: {
        img: 'img/FAR-AP3196.png',
        title: 'Filtro de aire AP3196',
        category: 'filtros',
        description: '<strong>DESCRIPCIÓN:</strong><br><br>Filtro de aire primario, panel rígido. Especial para transporte liviano.<br><br><strong>MARCAS:</strong> CHEVROLET.',
        additionalImg: 'img/FAR-AP3196-A.png'  // Imagen adicional
    },
    21: {
        img: 'img/FAR-AP3554.png',
        title: 'Filtro de aire AP3554',
        category: 'filtros',
        description: '<strong>DESCRIPCIÓN:</strong><br><br>Filtro de aire primario, panel flexible. Especial para transporte liviano.\<br><br><strong>MARCAS:</strong> RENAULT, SSANGYONG.',
        additionalImg: 'img/FAR-AP3554-A.png'  // Imagen adicional
    },
    22: {
        img: 'img/FAR-APC010.png',
        title: 'Filtro de aire APC010',
        category: 'filtros',
        description: '<strong>DESCRIPCIÓN:</strong><br><br>Filtro de aire primario, cilíndrico. Especial para transporte liviano diésel.<br><br><strong>MARCAS:</strong> FORD, MAZDA, TOYOTA.',
        additionalImg: 'img/FAR-APC010-A.png'  // Imagen adicional
    },
    23: {
        img: 'img/FC-PFG25121074.png',
        title: 'Filtro de combustible PFG25121074',
        category: 'filtros',
        description: '<strong>DESCRIPCIÓN:</strong><br><br>Filtro de combustible gasolina. Especial para transporte liviano.<br><br><strong>MARCAS:</strong> CHANGAN, CHERY, CHEVROLET, DAEWOO, FIAT, FOTON, HONDA, JEEP, MAZDA.',
        additionalImg: 'img/FC-PFG25121074-A.png'  // Imagen adicional
    },
    24: {
        img: 'img/FC-A941SP.png',
        title: 'Filtro de combustible A941SP',
        category: 'filtros',
        description: '<strong>DESCRIPCIÓN:</strong><br><br>Filtro de combustible primario. Especial para transporte mediano. <br><br><strong>MARCAS:</strong> ISUZU, KOMATSU, NISSAN, ROSCO, TOYOTA.',
        additionalImg: 'img/FC-A941SP-A.png'  // Imagen adicional
    },
    25: {
        img: 'img/FC-A243004.png',
        title: 'Filtro de combustible A243004',
        category: 'filtros',
        description: '<strong>DESCRIPCIÓN:</strong><br><br>Filtro de combustible primario. Especial para transporte mediano. <br><br><strong>MARCAS:</strong> AGRALE, ALLIS-CHALMERS, ASKAM KAMYON, ATLAS COPCO, ATLAS WEYHAUSEN, BARREIROS, BAUMANN,BERTHOUD, BMC, BOBCAT, BUEHRER, CARRARO, CASE/CASE IH, CHAMPION ROAD, CLARK, COMPAIR, DEMAG, DENNIS, DEUTZ, DEUTZ-FAHR, DITCH WITCH, DOPPSTADT, DYNAPAC, EICHER, FENDT, FIATALLIS, FORD, FOTON, FREEMAN, GENIE, GOLDO TRACTORS, HAMM, HITACHI, HOLDER TRACTORS, HUERLIMANN TRACTORS,IKARUS, IRISBUS, IVECO, JELCZ, KALMAR, KENWORTH, KOMATSU, KRAMER, LIEBHERR, LINDE, MANITOU,MENGELE, ORENSTEIN & KOPPEL, PEGASO, REFORM-WERKE, RENAULT VI, ROMAN, SAMBRON, SAME, SCHANZLIN, STEINBOCK, STILL, TIMBERJACK, VALMET, VOLKSWAGEN,VOLVO, WHITE.',
        additionalImg: 'img/FC-A243004-A.png'  // Imagen adicional
    },
    26: {
        img: 'img/FC-PP7355.png',
        title: 'Filtro de combustible PP7355',
        category: 'filtros',
        description: '<strong>DESCRIPCIÓN:</strong><br><br>Filtro de combustible primario. Especial para transporte liviano diésel. <br><br><strong>MARCAS:</strong> CHEVROLET, ISUZU, MITSUBISHI, TOYOTA.',
        additionalImg: 'img/FC-PP7355-A.png'  // Imagen adicional
    },
    27: {
        img: 'img/FC-AK570SP.png',
        title: 'Filtro de combustible AK570SP',
        category: 'filtros',
        description: '<strong>DESCRIPCIÓN:</strong><br><br>Filtro separador agua combustible con sensor. Especial para transporte liviano. <br><br><strong>MARCAS:</strong> ASIA, CATERPILLAR, CHEVROLET, DAIHATSU, GMC, HITACHI, HYSTER.',
        additionalImg: 'img/FC-AK570SP-A.png'  // Imagen adicional
    },
    28: {
        img: 'img/FCA-AP3109.png',
        title: 'Filtro de cabina AP3109',
        category: 'filtros',
        description: '<strong>DESCRIPCIÓN:</strong><br><br>Filtro de aire primario, panel rígido. Especial para transporte liviano. <br><br><strong>MARCAS:</strong> MAZDA.',
        additionalImg: 'img/FCA-AP3109-A.png'  // Imagen adicional
    },
    29: {
        img: 'img/FCA-AP31064.png',
        title: 'Filtro de cabina AP31064',
        category: 'filtros',
        description: '<strong>DESCRIPCIÓN:</strong><br><br>Filtro de aire acondicionado de cabina, panel rígido. Especial para transporte liviano. <br><br><strong>MARCAS:</strong> RENAULT.',
        additionalImg: 'img/FCA-AP31064-A.png'  // Imagen adicional
    },
    30: {
        img: 'img/FCA-AP31088.png',
        title: 'Filtro de cabina AP31088',
        category: 'filtros',
        description: '<strong>DESCRIPCIÓN:</strong><br><br>Filtro de aire acondicionado de cabina, panel rígido. Especial para transporte liviano. <br><br><strong>MARCAS:</strong> NISSAN.',
        additionalImg: 'img/FCA-AP31088-A.png'  // Imagen adicional
    },
    31: {
        img: 'img/FCA-AP31081.png',
        title: 'Filtro de cabina AP31081',
        category: 'filtros',
        description: '<strong>DESCRIPCIÓN:</strong><br><br>Filtro de aire acondicionado de cabina, panel rígido. Especial para transporte liviano. <br><br><strong>MARCAS:</strong> SUBARU, TOYOTA.',
        additionalImg: 'img/FCA-AP31081-A.png'  // Imagen adicional
    },
    32: {
        img: 'img/A-SAE250.png',
        title: 'Trasmisiones SAE250',
        category: 'aceites',
        description: '<strong>DESCRIPCIÓN:</strong><br><br>TRASMISIONES GL-1 MOTORLUB esta formulado con aceites base altamente refinados de alto desempeño, son lubricantes recomendados para transmisiones, ejes e impulsores finales en las que se requiera un protección APIGL-1.<br><br><strong>BENEFICIOS</strong><br><br>Para uso en vehículos comerciales de trasmisión manual, árboles e impulsores finales que requieren API GL-1. En carretera para camiones de trabajo liviano y pesado, buses y furgonetas. Resistencia a la oxidación. Buena protección  a la herrumbe y al desgaste.<br><br><strong>TAMAÑO:</strong> Galón',
        additionalImg: ''  // Imagen adicional
    },
    33: {
        img: 'img/A-SAE140.png',
        title: 'Trasmisiones SAE140',
        category: 'aceites',
        description: '<strong>DESCRIPCIÓN:</strong><br><br>TRASMISIONES GL-1 MOTORLUB esta formulado con aceites base altamente refinados de alto desempeño, son lubricantes recomendados para transmisiones, ejes e impulsores finales en las que se requiera un protección APIGL-1.<br><br><strong>BENEFICIOS</strong><br><br>Para uso en vehículos comerciales de trasmisión manual, árboles e impulsores finales que requieren API GL-1. En carretera para camiones de trabajo liviano y pesado, buses y furgonetas. Resistencia a la oxidación. Buena protección  a la herrumbe y al desgaste.<br><br><strong>TAMAÑO:</strong> Galón',
        additionalImg: ''  // Imagen adicional
    },
    34: {
        img: 'img/A-ISO68.png',
        title: 'Hidraulico ISO68',
        category: 'aceites',
        description: '<strong>DESCRIPCIÓN:</strong><br><br>HIDRAULICO ISO68 ofrece protección antidesgaste, lo que reduce los costos de mantenimiento al minimizar el desgaste de los componentes. Su resistencia a la oxidación prolonga la vida útil del lubricante y del sistema hidráulico.<br><br><strong>BENEFICIOS</strong><br><br>Ideal para sistemas hidrostáticos de alta presión, proporcionando lubricación eficiente y protección contra la corrosión y la oxidación, asegurando así un rendimiento fiable en diversas aplicaciones industriales y de vehículos.<br><br><strong>TAMAÑO:</strong> Galón',
        additionalImg: ''  // Imagen adicional
    },
    35: {
        img: 'img/G-MLAZULCALCIO.jpeg',
        title: 'Grasa Azul de Calcio',
        category: 'grasas',
        description: '<strong>DESCRIPCIÓN:</strong><br><br>GRASA AZUL DE CALCIO es una excelente opción multipropósito para la lubricación y protección de componentes automotrices. Está formulada con jabón de calcio y aceites minerales refinados de baja viscosidad, mejorada con inhibidores de oxidación y aditivos que mejoran la adherencia<br><br><strong>BENEFICIOS</strong><br><br>Esta grasa es ideal para aplicaciones que requieren una protección superior contra la corrosión y el desgaste, manteniendo los componentes bien lubricados y protegidos en diversas condiciones.<br><br><strong>TAMAÑO:</strong> Cuñete',
        additionalImg: ''  // Imagen adicional
    },
    36: {
        img: 'img/R-MLREFRIVERDE.jpeg',
        title: 'Liquido Refrigerante Rojo',
        category: 'refrigerantes',
        description: '<strong>DESCRIPCIÓN:</strong><br><br>MOTOCOOLER LIQUIDO REFRIGERANTE Ofrece protección contra la corrosión de los componentes metálicos presentes en el motor como en el circuito de refrigeración.<br><br><strong>TAMAÑO:</strong> Un cuarto',
        additionalImg: ''  // Imagen adicional
    },
    37: {
        img: 'img/R-MLREFRIROJO.jpeg',
        title: 'Liquido Refrigerante Verde',
        category: 'refrigerantes',
        description: '<strong>DESCRIPCIÓN:</strong><br><br>MOTOCOOLER LIQUIDO REFRIGERANTE Ofrece protección contra la corrosión de los componentes metálicos presentes en el motor como en el circuito de refrigeración.<br><br><strong>TAMAÑO:</strong> Un cuarto',
        additionalImg: ''  // Imagen adicional
    }
    // Agrega más productos aquí
};

function showProduct(productId) {
    document.getElementById('inicio').classList.add('hidden');
    document.getElementById('nosotros').classList.add('hidden');
    document.getElementById('productos').classList.add('hidden');
    document.getElementById('product-details').classList.remove('hidden');

    var product = products[productId];
    document.getElementById('product-img').src = product.img;
    document.getElementById('product-title').innerText = product.title;
    document.getElementById('product-description').innerHTML = product.description;
    document.getElementById('whatsapp-link').href = 'https://wa.me/573002917564?text=Hola,%20me%20gustaría%20obtener%20más%20información%20sobre%20' + encodeURIComponent(product.title);
    document.getElementById('whatsapp-link').target = '_blank';

    // Mostrar la imagen adicional
    var additionalImgElement = document.getElementById('additional-info-img');
    if (product.additionalImg) {
        additionalImgElement.src = product.additionalImg;
        additionalImgElement.classList.remove('hidden');
    } else {
        additionalImgElement.classList.add('hidden');
    }
}

function showCatalog(category = '') {
    document.getElementById('inicio').classList.add('hidden');
    document.getElementById('nosotros').classList.add('hidden');
    document.getElementById('product-details').classList.add('hidden');
    document.getElementById('productos').classList.remove('hidden');

    loadCatalog(category);
}

function searchProduct() {
    const searchTerm = document.getElementById('search-input').value.toLowerCase();
    const catalogTodos = document.getElementById('catalog-todos');
    const catalogFiltros = document.getElementById('catalog-filtros');
    const catalogAceites = document.getElementById('catalog-aceites');
    const catalogRefrigerantes= document.getElementById('catalog-refrigerantes');
    const catalogGrasas = document.getElementById('catalog-grasas');
    const catalogOtros = document.getElementById('catalog-otros');
    // Asegúrate de que los contenedores existen antes de limpiar
    if (catalogTodos) catalogTodos.innerHTML = '';
    if (catalogFiltros) catalogFiltros.innerHTML = '';
    if (catalogAceites) catalogAceites.innerHTML = '';
    if (catalogRefrigerantes) catalogRefrigerantes.innerHTML = '';
    if (catalogGrasas) catalogGrasas.innerHTML = '';
    if (catalogOtros) catalogOtros.innerHTML = '';

    for (let id in products) {
        const product = products[id];
        if (product.title.toLowerCase().includes(searchTerm)) {
            const productDiv = document.createElement('div');
            productDiv.className = 'product';
            productDiv.setAttribute('onclick', `showProduct(${id})`);
            productDiv.innerHTML = `
                    <img src="${product.img}" alt="${product.title}">
                    <h2>${product.title}</h2>
                `;

            if (product.category === 'filtros') {
                if (catalogFiltros) catalogFiltros.appendChild(productDiv);
            } else if (product.category === 'aceites') {
                if (catalogAceites) catalogAceites.appendChild(productDiv);
            } else if (product.category === 'refrigerantes') {
                if (catalogRefrigerantes) catalogRefrigerantes.appendChild(productDiv);
            }else if (product.category === 'grasas') {
                if (catalogGrasas) catalogGrasas.appendChild(productDiv);
            }else if (catalogOtros) {
                catalogOtros.appendChild(productDiv);
            }
        }
    }
}

function loadCatalog(category = '') {
    const catalogFiltros = document.getElementById('catalog-filtros');
    const catalogAceites = document.getElementById('catalog-aceites');
    const catalogRefrigerantes = document.getElementById('catalog-refrigerantes');
    const catalogGrasas = document.getElementById('catalog-grasas');
    const catalogOtros = document.getElementById('catalog-otros');
    const catalogTodos = document.getElementById('catalog-todos');
    // Limpiar contenedores
    if (catalogFiltros) catalogFiltros.innerHTML = '';
    if (catalogAceites) catalogAceites.innerHTML = '';
    if (catalogRefrigerantes) catalogRefrigerantes.innerHTML = '';
    if (catalogGrasas) catalogGrasas.innerHTML = '';
    if (catalogOtros) catalogOtros.innerHTML = '';
    if (catalogTodos) catalogTodos.innerHTML = '';

    for (let id in products) {
        const product = products[id];
        const productDiv = document.createElement('div');
        productDiv.className = 'product';
        productDiv.setAttribute('onclick', `showProduct(${id})`);
        productDiv.innerHTML = `
                <img src="${product.img}" alt="${product.title}">
                <h2>${product.title}</h2>
            `;

        if (category === '' || category === 'todos') {
            if (catalogTodos) catalogTodos.appendChild(productDiv);
        } else if (product.category === category)
        { if (category === 'filtros') {
            catalogFiltros.appendChild(productDiv);
        } else if (category === 'aceites') {
            catalogAceites.appendChild(productDiv);
        } else if (category === 'refrigerantes') {
            catalogRefrigerantes.appendChild(productDiv);
        } else if (category === 'grasas') {
            catalogGrasas.appendChild(productDiv);
        } else {
            catalogOtros.appendChild(productDiv);
        }
        }
    }
}

document.addEventListener('DOMContentLoaded', function() {
    showSection('inicio'); // Mostrar la sección de inicio por defecto

    // Añadir event listener al campo de entrada de búsqueda
    const searchInput = document.getElementById('search-input');
    searchInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            searchProduct();
        }
    });
});

function showSection(sectionId) {
    const sections = document.querySelectorAll('.container');
    sections.forEach(section => {
        if (section.id === sectionId) {
            section.classList.remove('hidden');
        } else {
            section.classList.add('hidden');
        }
    });
}
document.addEventListener('DOMContentLoaded', () => showSection('inicio'));

function sendEmail(event) {
    let parms = {
        name : document.getElementById("name").value,
        from_email : document.getElementById("email").value,
        subject : document.getElementById("subject").value,
        message : document.getElementById("message").value,
        to_name: "MAC Filtros y Aceites"
    }

    emailjs.send("service_rq8g74d", "template_xve0swd", parms).then(alert)
}
