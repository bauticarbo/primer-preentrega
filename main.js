let carrito = [];

let codigoProducto;

function sumarAlCarrito(producto) {
  carrito.push(productosStock[producto - 1]);
}

const productosStock = [
  { prod: "remera", precio: 2500 },
  { prod: "jean", precio: 3600 },
  { prod: "bermuda", precio: 3300 },
  { prod: "buzo", precio: 4000 },
  { prod: "campera de jean", precio: 7000 },
  { prod: "zapatillas", precio: 11000 },
];

while (codigoProducto != "FINALIZAR") {
  codigoProducto = prompt(
    'Ingrese el numero que representa el producto que desea elegir:\n\n1)Remera $2500\n2)Jean $3600\n3)Bermuda $3300\n4)Buzo $4000\n5)Campera de jean $7000\n6)Zapatillas $11000\n\nPara finalizar la orden ingrese "FINALIZAR"'
  );
  sumarAlCarrito(codigoProducto);
}

//EL CARRITO QUEDO CONFORMADO POR LOS OBJETOS QUE SE LE ACABAN DE SUMAR
//console.log(carrito);

let enCarrito = "Los productos que colocó en el carrito son:\n";
let totalCarrito = 0;

for (let i = 0; i < carrito.length - 1; i++) {
  enCarrito += "\n" + carrito[i].prod + " $" + carrito[i].precio;
  totalCarrito += carrito[i].precio;
}

alert(enCarrito + "\n\nSumando un total de: $" + totalCarrito);
