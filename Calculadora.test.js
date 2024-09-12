const Calculadora = require("./Calculadora");

describe("Calculadora", () => {
    it("Criar nova calculadora", () => {
        const calculadora = new Calculadora();
        expect(calculadora).toBeDefined();
        expect(calculadora.resultado).toBeDefined();
        expect(typeof calculadora.resultado).toBe("number");
        expect(calculadora.resultado).toBe(0);
    });
    it("Obtém resultado", () => {
        const calculadora = new Calculadora();
        expect(calculadora.resultado).toBeDefined();
        expect(typeof calculadora.resultado).toBe("number");
    });
    it("Atribui um novo valor á calculadora", () => {
        const calculadora = new Calculadora();
        expect(() => calculadora.resultado = "Texto").toThrow(TypeError);
        expect(() => calculadora.resultado = "Texto")
             .toThrow("O argumento deve ser um número válido");
        expect(calculadora.resultado).toBe(0);
        expect(() => calculadora.resultado = "5").not.toThrow(TypeError);
        expect(calculadora.resultado).toBe(5);
    });
    it("Soma dos valores numéricos", () => {
        const calculadora = new Calculadora();
        expect(() => calculadora.soma(10)).not.toThrow();
        expect(calculadora.resultado).toBe(10);
        expect(() => calculadora.soma("5")).not.toThrow();
        expect(calculadora.resultado).toBe(15);
        expect(() => calculadora.soma("Texto")).toThrow(TypeError);
        expect(() => calculadora.soma("Texto"))
             .toThrow("O argumento deve ser um número válido");
        expect(calculadora.resultado).toBe(15);
    });
    it("Subtrai os valores numéricos", () => {
        const calculadora = new Calculadora();
        calculadora.resultado = 20;
        expect(() => calculadora.subtrai(10)).not.toThrow();
        expect(calculadora.resultado).toBe(10);
        expect(() => calculadora.subtrai("5")).not.toThrow();
        expect(calculadora.resultado).toBe(5);
        expect(() => calculadora.subtrai("Texto")).toThrow(TypeError);
        expect(() => calculadora.subtrai("Texto"))
             .toThrow("O argumento deve ser um número válido");
        expect(calculadora.resultado).toBe(5);
    });
    it("Multiplica os valores numéricos", () => {
        const calculadora = new Calculadora();
        calculadora.resultado = 10;
        expect(() => calculadora.multiplica(2)).not.toThrow();
        expect(calculadora.resultado).toBe(20);
        expect(() => calculadora.multiplica("3")).not.toThrow();
        expect(calculadora.resultado).toBe(60);
        expect(() => calculadora.multiplica("Texto")).toThrow(TypeError);
        expect(() => calculadora.multiplica("Texto"))
            .toThrow("O argumento deve ser um número válido");
        expect(calculadora.resultado).toBe(60);
    });
    it("Divide os valores numéricos", () => {
        const calculadora = new Calculadora();
        calculadora.resultado = 20;
        expect(() => calculadora.divide(2)).not.toThrow();
        expect(calculadora.resultado).toBe(10);
        expect(() => calculadora.divide("5")).not.toThrow();
        expect(calculadora.resultado).toBe(2);
        expect(() => calculadora.divide(0)).toThrow(Error);
        expect(() => calculadora.divide(0)).toThrow("divisão ilegal por zero");
        expect(() => calculadora.divide("0")).toThrow(Error);
        expect(() => calculadora.divide("0")).toThrow("divisão ilegal por zero");
        expect(calculadora.resultado).toBe(2);
    });
    it("Inverte o sinal do resultado", () => {
        const calculadora = new Calculadora();
        calculadora.resultado = 10;
        expect(() => calculadora.inverte()).not.toThrow();
        expect(calculadora.resultado).toBe(-10);
        expect(() => calculadora.inverte()).not.toThrow();
        expect(calculadora.resultado).toBe(10);
        calculadora.resultado = 0;
        expect(() => calculadora.inverte()).not.toThrow();
        expect(calculadora.resultado).toBeCloseTo(0); 
        calculadora.resultado = "5";
        expect(() => calculadora.inverte()).not.toThrow();
        expect(calculadora.resultado).toBe(-5);
    });
    
    
})