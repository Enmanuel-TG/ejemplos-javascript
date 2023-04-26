function sumArray(numbersArray) {
  const XD = numbersArray.reduce((prev, num) => prev + num);
  console.log(XD);
}
sumArray([1, 2, 3, 4, 5]); // 15
sumArray([10, 20, 30, 40, 50]); // 150
sumArray([100, 200, 300, 400, 500]); // 1500
sumArray([10]); // 10
sumArray([0]); // 0
// --------------------------------------------------------------------------

function factorial(n) {
    let arreglo = [];
    for (let i = 1; i <= n; i++) {
        arreglo.push(i);
    }
    const XD = arreglo.reduce((prev, num) => prev + num);
    console.log(XD);
}

// factorial(0) // 0
factorial(1) // 1
factorial(5) // 15
factorial(10) // 55
factorial(20) // 210
factorial(100) // 5050

// --------------------------------------------------------------------------


function ordenar(numberArray) {
    const NewNumberArray = numberArray.sort()
    console.log(NewNumberArray)
}

ordenar([1, 2, 3, 4, 5]) // [1, 2, 3, 4, 5]
ordenar([5, 4, 3, 2, 1]) // [1, 2, 3, 4, 5]
ordenar([200, 1, 10, 3, 20, 5, 2]) // [1, 2, 3, 5, 10, 20, 200] --------> revisar
ordenar([1]) // [1]
ordenar([]) // []
ordenar([1, 2, 3, 1, 4, 3, 6, 2, 1, 4, 5, 6,3, 7, 5, 4, 8, 5, 3, 6]) // [1, 1, 1, 2, 2, 3, 3, 3, 3, 4, 4, 4,5, 5, 5, 6, 6, 6, 7, 8]


// --------------------------------------------------------------------------
function calcularArea(base, altura) {
  resultado = base * altura / 2;
  console.log(resultado)
}

calcularArea(0, 10) // 0
calcularArea(10, 10) // 50
calcularArea(20, 10) // 100
calcularArea(30, 10) // 150
calcularArea(10, 20) // 100
calcularArea(10, 30) // 150
calcularArea(1, 15) // 7.5

// --------------------------------------------------------------------------
function convertir(temperatura) {
  Fahrenheit = temperatura * 1.8 + 32;
  console.log(Fahrenheit)
}

convertir(-763) // -1303
convertir(-10) // 14
convertir(0) // 32
convertir(10) // 50
convertir(20) // 68
convertir(30) // 86
convertir(1500) // 2732
// --------------------------------------------------------------------------
function esPalindromo(palabra) {
  const newPala = palabra.split("").reverse().join("");
  if (palabra == newPala) {
    console.log(true);
  } else {
    console.log(false);
  }
}

esPalindromo("ana") // true
esPalindromo("oso") // true
esPalindromo("reconocer"); // true
esPalindromo("palabra"); // false
esPalindromo("h"); // true
esPalindromo("hola"); // false
esPalindromo("") // true


// --------------------------------------------------------------------------