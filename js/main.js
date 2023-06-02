/*Para acceder a la API con la variable de la letra de inicio del trago y luego para armar las tarjetas de cada trago*/
function update(){
    let letra = document.getElementById("election").value;
    const api = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=";
    const url = `${api}${letra}`;
    
    fetch(url)
    .then(response=>response.json())
    .then(data => {
        console.log(data)
        let datos=data.drinks
        console.log(datos)
   
        let cad = `<div class="container">`
                   
        for (producto of datos) {
            cad += `
        <div class="tarjeta">
            <img src="${producto.strDrinkThumb}" alt="${producto.idDrink}">
            <div class="cuerpo">
                <h3>ID ${producto.idDrink} - Nombre: ${producto.strDrink}</h3>
                <h4><strong>Preparación</strong></h4>
                <p>${producto.strInstructions}</p>
                <p>Categoría:${producto.strCategory} </p>
            </div>
        </div>   
    `
        }

        cad += `</div>`

        document.getElementById("tarjetas").innerHTML = cad;
    }
    )

    return false;
}

/*Para header responsive - NAVBAR SE OCULTA O SE MUESTRA SEGÚN BOTON*/
function mostrar() {
    document.getElementById("navbar").style.display="block";
    document.getElementById("btn_menu").style.display="none"
    document.getElementById("btn_menu_ocultar").style.display="block"
}

function ocultar() {
    document.getElementById("navbar").style.display="none";
    document.getElementById("btn_menu").style.display="block";
    document.getElementById("btn_menu_ocultar").style.display="none";
}