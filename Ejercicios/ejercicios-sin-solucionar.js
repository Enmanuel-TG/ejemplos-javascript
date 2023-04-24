// RESUELVE LOS SIGUIENTE EJERCICIOS, PUEDES BUSCAR EN GOOGLE LAS FORMULAS O INCLUSO PREGUNTARLE A CHAT GPT POR LA FORMULA, PERO NO LA RESOLUCIÓN DEL CÓDIGO.

//! No es necesario enfocarse en VALIDACIONES
//! No es necesario enfocarse en ESTILOS
//! No es necesario enfocarse en HTML
//! No es necesario enfocarse en CSS
//! No es necesario enfocarse en DOM
//! SOLO LA LÓGICA

// Fibonacci: Escribe una función que calcule los primeros n números de la secuencia de Fibonacci.

function fibonacci(n) {
  // Código...
}

fibonacci(5) // [0, 1, 1, 2, 3]
fibonacci(10) // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
fibonacci(20) // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34 ... 4181]

// Suma de números: Escribe una función que tome un arreglo de números y devuelva la suma de todos los números de dicho arreglo.

function sumArray(numbersArray) {
  // Código...
}

sumArray([1, 2, 3, 4, 5]) // 15
sumArray([10, 20, 30, 40, 50]) // 150
sumArray([100, 200, 300, 400, 500]) // 1500
sumArray([10]) // 10
sumArray([]) // 0

// Factorial: Escribe una función que calcule el factorial de un número dado. El factorial son la suma n números desde 1 hasta dicho número, por ejemplo el factorial de 5 es 1 + 2 + 3 + 4 + 5, es decir 15.
function factorial(n) {
  // Código...
}

factorial(0) // 0
factorial(1) // 1
factorial(5) // 15
factorial(10) // 55
factorial(20) // 210
factorial(100) // 5050

// Números primos: Escribe una función que determine si un número dado es primo o no.

// Ordenamiento de lista: Escribe una función que ordene un arreglo de números de menor a mayor.

function ordenar(numberArray) {
  // Código...
}

ordenar([1, 2, 3, 4, 5]) // [1, 2, 3, 4, 5]
ordenar([5, 4, 3, 2, 1]) // [1, 2, 3, 4, 5]
ordenar([200, 1, 10, 3, 20, 5, 2]) // [1, 2, 3, 5, 10, 20, 200]
ordenar([1]) // [1]
ordenar([]) // []
ordenar([1, 2, 3, 1, 4, 3, 6, 2, 1, 4, 5, 6,3, 7, 5, 4, 8, 5, 3, 6]) // [1, 1, 1, 2, 2, 3, 3, 3, 3, 4, 4, 4,5, 5, 5, 6, 6, 6, 7, 8]

// Palíndromos: Escribe una función que determine si una palabra dada es un palíndromo o no.

function esPalindromo(palabra) {
  // Código
}

esPalindromo("ana") // true
esPalindromo("oso") // true
esPalindromo("reconocer") // true
esPalindromo("palabra") // false
esPalindromo("hola") // false
esPalindromo("h") // true
esPalindromo("") // true

// Conversión de Celsius a Fahrenheit: Escribe una función que convierta grados Celsius a grados Fahrenheit.

function convertir(temperatura) {
  // Código...
}

convertir(-763) // -1303
convertir(-10) // 14
convertir(0) // 32
convertir(10) // 50
convertir(20) // 68
convertir(30) // 86
convertir(1500) // 2732

// Generador de contraseñas: Escribe una función que genere una contraseña aleatoria. Es decir, que cada vez que ejecute la función, esta devuelva un string con números, letras y simbolos aleatorios (cada vez diferente a la anterior).

function generatePassword() {
  // Código...
}

generatePassword() // "f&*fj29Dgr"
generatePassword() // "b4B4n*3n@"
generatePassword() // "afJ*#fF#3f"

// Cálculo de área de un triángulo: Escribe una función que calcule el área de un triángulo.

function calcularArea(base, altura) {
  // Código...
}

calcularArea(0, 10) // 0
calcularArea(10, 10) // 50
calcularArea(20, 10) // 100
calcularArea(30, 10) // 150
calcularArea(10, 20) // 100
calcularArea(10, 30) // 150
calcularArea(1, 15) // 7.5
