const funcoes = require("./funcoes");


describe("Testes de operações matemáticas", () => {
    it("teste soma entre dois números", () => {
        const a = 2
        const b = 3
        const soma = a + b;
    
        expect(soma).toBe(5);
    });

    it("teste subtração entre dois números", () => {
        const a = 2
        const b = 3
        const subtrai = a - b;
    
        expect(subtrai).toBe(-1);
    });

    it("retorna desconto de produto", () => {
        const produto = { 
            nome: "Fanta",
            preco: 10,
            desconto: 0.15,
        };

       const precoFinal = funcoes.calculaDesconto(produto.preco, produto.desconto);
         
       expect(precoFinal).toBe(8.5);
    })
});

//testando API

describe("Teste API de Pokemons", () => {

    it("Verifica se retorna o Pokemon escolhido", async () => {
        const axios = require("axios");
        const response = await axios("https://pokeapi.co/api/v2/pokemon/pikachu"); 

        expect(response.data).toBeTruthy();
        expect(response.status).toBe(200);
        expect(response.data.name).toBe("pikachu");


    })
})

