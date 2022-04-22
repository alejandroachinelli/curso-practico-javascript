//Codigo del cuadrado
console.group("Cuadrado");

const perimetroCuadrado = (lado) => lado * 4;

const areaCuadrado = (lado) => lado * lado;

console.groupEnd();

//Codigo del triangulo
console.group("Triangulo");

const perimetroTriangulo = (lado1, lado2, lado3) => parseInt(lado1) + parseInt(lado2) + parseInt(lado3);

const areaTriangulo = (base, altura) => (base * altura) / 2;
console.groupEnd();

//Codigo del circulo
console.group("Circulo");

const diametroCirculo = (radio) => radio * 2;

const PI = Math.PI;

const perimetroCirculo = (radio) => diametroCirculo(radio) * PI;

const areaCirculo = (radio) => PI * Math.pow(radio, 2);

console.groupEnd();

//Codigo que se conecta con el html

function calcularPerimetroCuadrado() {
    const lado = document.getElementById("ladoCuadrado").value;
    if(lado == ""){
        document.getElementById("resultado").innerHTML = "Ingrese un valor";
    }else{
        const perimetro = perimetroCuadrado(lado);
        document.getElementById("resultado").innerHTML = "El perimetro del cuadrado es: " + perimetro + " cm";
    }
}

function calcularAreaCuadrado() {
    const lado = document.getElementById("ladoCuadrado").value;
    const area = areaCuadrado(lado);
    document.getElementById("resultado").innerHTML = "El area del cuadrado es: " + area + " cm^2";
}

function calcularPerimetroTriangulo() {
    const lado1 = document.getElementById("lado1Triangulo").value;
    const lado2 = document.getElementById("lado2Triangulo").value;
    const lado3 = document.getElementById("lado3Triangulo").value;
    if(lado1 == "" || lado2 == "" || lado3 == ""){
        document.getElementById("resultado").innerHTML = "Ingrese los dos lados y la base del triangulo";
    }else{
        const perimetro = perimetroTriangulo(lado1, lado2, lado3);
        document.getElementById("resultado").innerHTML = "El perimetro del triangulo es: " + perimetro + " cm";
    }
}

function calcularAreaTriangulo() {
    const base = document.getElementById("lado3Triangulo").value;
    const altura = document.getElementById("alturaTriangulo").value;
    if(base == "" || altura == ""){
        document.getElementById("resultado").innerHTML = "Para calcular el area necesita ingresar la base y la altura";
    }else{
        const area = areaTriangulo(base, altura);
        document.getElementById("resultado").innerHTML = "El area del triangulo es: " + area + " cm^2";
    }
}

function calcularDiametroCirculo() {
    const radio = document.getElementById("radioCirculo").value;
    if(radio == ""){
        document.getElementById("resultado").innerHTML = "Ingrese el valor del radio";
    }else{
        const diametro = diametroCirculo(radio);
        document.getElementById("resultado").innerHTML = "El diametro del circulo es: " + diametro + " cm";
    }
}

function calcularPerimetroCirculo() {
    const radio = document.getElementById("radioCirculo").value;
    if(radio == ""){
        document.getElementById("resultado").innerHTML = "Ingrese el valor del radio";
    }else{
        const perimetro = perimetroCirculo(radio);
        document.getElementById("resultado").innerHTML = "El perimetro del circulo es: " + perimetro + " cm";
    }
}

function calcularAreaCirculo() {
    const radio = document.getElementById("radioCirculo").value;
    if(radio == ""){
        document.getElementById("resultado").innerHTML = "Ingrese el valor del radio";
    }else{
        const area = areaCirculo(radio);
        document.getElementById("resultado").innerHTML = "El area del circulo es: " + area + " cm^2";
    }
}