// Função para gerar um array com 10 números aleatórios entre 1 e 100
function gerarArrayAleatorio() {
    const array = [];
    for (let i = 0; i < 10; i++) {
        array.push(Math.floor(Math.random() * 100) + 1);
    }
    return array;
}

// Função para ordenar o array em ordem crescente 
function ordenarCrescente(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - 1; j++) {
            if (array[j] > array[j + 1]) {
                const temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
    return array;
}

// Função para ordenar o array em ordem decrescente 
function ordenarDecrescente(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - 1; j++) {
            if (array[j] < array[j + 1]) {
                // Troca os elementos
                const temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
    return array;
}

// Função para verificar se um número é primo
function ehPrimo(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// Função para filtrar números pares
function filtrarPares(array) {
    return array.filter(num => num % 2 === 0);
}

// Função para filtrar números ímpares
function filtrarImpares(array) {
    return array.filter(num => num % 2 !== 0);
}

// Função para filtrar números primos
function filtrarPrimos(array) {
    return array.filter(num => ehPrimo(num));
}

// Função principal
function main() {
    const array = gerarArrayAleatorio();

    // Exibe o array original
    document.getElementById('original').textContent = `Array original: ${array.join(', ')}`;

    // Ordena e exibe o array em ordem crescente
    const arrayCrescente = ordenarCrescente([...array]);
    document.getElementById('crescente').textContent = `Array ordenado crescente: ${arrayCrescente.join(', ')}`;

    // Ordena e exibe o array em ordem decrescente
    const arrayDecrescente = ordenarDecrescente([...array]);
    document.getElementById('decrescente').textContent = `Array ordenado decrescente: ${arrayDecrescente.join(', ')}`;

    // Filtra e exibe os números pares
    const pares = filtrarPares(array);
    document.getElementById('pares').textContent = `Números pares: ${pares.join(', ')}`;

    // Filtra e exibe os números ímpares
    const impares = filtrarImpares(array);
    document.getElementById('impares').textContent = `Números ímpares: ${impares.join(', ')}`;

    // Filtra e exibe os números primos
    const primos = filtrarPrimos(array);
    document.getElementById('primos').textContent = `Números primos: ${primos.join(', ')}`;
}

main();