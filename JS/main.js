let nombre = "angel";
let apellido = "rodriguez"
const ESPACIO = " "
let edad = 2024;
console.log(nombre + ESPACIO + apellido);

//let anioDeNacimiento = prompt("Ingrese año de nacimiento");

//let edadUsuario = 2024 - anioDeNacimiento;
//alert("tu edad es " + edadUsuario)

let precio = prompt("cuanto gasto en compras?")

if (precio <= 100000){
    alert("fue un gasto minimo")
}
else if (precio > 100000){
    alert("fue un gasto mayor")
}

for (let x = 0; x < 10; x++) {
    console.log("ciclo de for " + x)
}

let numeroIngresado;

do {
    numeroIngresado = parseInt(prompt("Ingrese un numero del 1 al 10"));

    if ((numeroIngresado >= 1) && (numeroIngresado <= 10)) {
        alert("Numero correcto");
    } else {
        alert("numero incorrecto");
    }
} while ((numeroIngresado > 10) || (numeroIngresado < 1));