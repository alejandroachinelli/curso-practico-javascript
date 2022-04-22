function calcularPrecioConDescuento(precio, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

    return precioConDescuento;
}

function onClickButtonCalcularPrecio() {
    const precio = document.getElementById('precio').value;
    const descuento = document.getElementById('porcentaje').value;

    const precioConDescuento = calcularPrecioConDescuento(precio, descuento);

    document.getElementById('precioConDescuento').innerHTML = "El precio final con el descuento es de $"+precioConDescuento;
}