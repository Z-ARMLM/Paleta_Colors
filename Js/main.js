//Llamada del id del div donde estaran los colores
const colorsPaleta = document.getElementById("colorsPaleta"); 
//Declaracion de valor de los colores
const valorColor = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
//Size de la paleta esdecir  cuantosdivs de colores  generara
const tampaleta = 6;
//Arreglo para mostrarlo por local storage
const todos = [];

//Funcion que crea la primerapaleta de colores
const createpallete = () => {
    //Llamada del boton crear
    const button2 = document.getElementById("button2");

    // For que iterara hasta eltama;o asignado delapaleta creando los div hijos
    for(let i = 0; i< tampaleta; i++){
        const colores = document.createElement("div");
        colores.classList.add("paletaitem");
        colorsPaleta.appendChild(colores);
    } 
    actualizarpaleta();
    //Llamada dela funcion rebobinar

button2.disabled = true;
// deshabilita el boton crear para no crear paletas indefinidas a cada clic de  rebobinar
}
// Funcion encargada de calcular los colores 
 const coloria = (element) =>{
     let colors = "#"; //le da el string del color hex
     //for encargado de calcular losnumeros de los colores
     for(let i = 0; i < 6; i++){
         const elementosAzar = valorColor[Math.floor(Math.random() * valorColor.length)];
        colors += elementosAzar;
        // todos.push(colors);
        // console.log('Lista todos', colors);
    }
    element.style.backgroundColor = colors;
    element.innerHTML = `<span class = "colorHex"> ${colors} </span>`
    //Sele agrega el nombre al color
    todos.push(colors);
    localStorage.setItem("PaletaInicial", JSON.stringify(todos))
 }
//Funcion para rebobinar la paleta
 const actualizarpaleta = () =>{
    //For encargado para cambiar los colores a cadaclic
    for (let i = 0; i < colorsPaleta.children.length; i++) {
       coloria( colorsPaleta.children[i]);
        
    }

 }

const fijarCol = () =>{
    let  fijarColor = document.querySelector(".paletaitem");
    fijarColor.addEventListener("click", (e) => {
        //fijarColor.colorFijo();
     fijarColor.disabled = true;
    })

}

