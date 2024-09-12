class Calculadora {
    #resultado;

    constructor() {
        this.#resultado = 0;
    }

    get resultado() {
        return this.#resultado
    }

    set resultado(numero) {
        if(typeof numero == 'string') {
            numero = numero-0;
        }
        if(isNaN(numero) || typeof numero !== 'number') {
            throw new TypeError("O argumento deve ser um número válido");
        }
        this.#resultado = numero;
    }

    soma(valor) {
        if (typeof valor === 'string') {
            valor = parseFloat(valor); 
        }
        if (isNaN(valor) || typeof valor !== 'number') {
            throw new TypeError("O argumento deve ser um número válido");
        }
        this.#resultado += valor; 
    }
    subtrai(valor) {
        if (typeof valor === 'string') {
            valor = parseFloat(valor); 
        }
        if (isNaN(valor) || typeof valor !== 'number') {
            throw new TypeError("O argumento deve ser um número válido");
        }
        this.#resultado -= valor; 
    }
    multiplica(valor) {
        if (typeof valor === 'string') {
            valor = parseFloat(valor); 
        }
        if (isNaN(valor) || typeof valor !== 'number') {
            throw new TypeError("O argumento deve ser um número válido");
        }
        this.#resultado *= valor; 
    }
    divide(valor) {
        if (typeof valor === 'string') {
            valor = parseFloat(valor); 
        }
        if (isNaN(valor) || typeof valor !== 'number') {
            throw new TypeError("O argumento deve ser um número válido");
        }
        if (valor === 0) {
            throw new Error("divisão ilegal por zero");
        }
        this.#resultado /= valor;
    }
    inverte() {
        this.#resultado = -this.#resultado; 
    }

}

module.exports = Calculadora;