let numerosGenerados = [];

function NumAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

for (let i = 0; i < 10; i++) {
    let numero;
    do {
        numero = NumAleatorio(1, 100);
    } while (numerosGenerados.includes(numero)); // Verificar si el número ya está en el arreglo
    numerosGenerados.push(numero); // Agregar el número al arreglo
    
}

numerosGenerados.sort((a, b) => a - b); // Ordenar el arreglo
console.log(numerosGenerados);