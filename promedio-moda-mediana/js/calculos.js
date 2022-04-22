

function calcularMediaAritmetica(arreglo) {
    // var suma = 0;
    // for (var i = 0; i < arreglo.length; i++) {
    //     suma += arreglo[i];
    // }
    const suma = arreglo.reduce((a, b) => a + b, 0);

    return suma / arreglo.length;
}