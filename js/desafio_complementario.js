const suma = (a,b) => a + b;
const resta = (a,b) => a-b;

const iva = x => x * 0.21;
let precioProducto = 350;
let precioDescuento = 75;

let nuevoPrecio = resta(suma(precioProducto, iva(precioProducto)), precioDescuento);
console.log("El precio final es " + nuevoPrecio);