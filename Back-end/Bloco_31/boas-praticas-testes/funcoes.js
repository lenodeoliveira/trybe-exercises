const calculaDesconto = (preco, desconto) => {
    return preco - preco * desconto;;
}

module.exports = { calculaDesconto };