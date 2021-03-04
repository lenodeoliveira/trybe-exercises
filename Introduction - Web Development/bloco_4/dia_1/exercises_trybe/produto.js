let custo_produto = 10 * 1000;
let valor_venda = 15 * 1000;
let custo_total, lucro;
let imposto_produto = custo_produto * 0.2;

if(custo_produto < 0 || valor_venda < 0)
{
    console.log('Error: Valores abaixo de zero!');
} 
else
{
    custo_total = custo_produto + imposto_produto;
    lucro = valor_venda - custo_total;
    console.log('valor total de vendas: ' + valor_venda);
    console.log('valor total de compras: ' + custo_produto);
    console.log('lucro: ' + lucro); 
}


/* custo_produto += (20/100) * custo_produto;    

for (let i = 0; i <= quantidade; i++) {
    
    venda = valor_venda * i; 
    compra = custo_produto * i;
    lucro = venda - compra;
}
console.log('valor total de vendas: ' + venda);
console.log('valor total de compras: ' + compra);
console.log('lucro: ' + lucro); */