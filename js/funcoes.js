
//função para mudar o icone na pagina principal
function MudarIcone(icone) {
    document.getElementById("icone").src = `images/${icone}`;
}

/*funcão para calcular o total em vendas*/
function calcularTotal(preco) {
    const qtd = parseInt(document.getElementById("qtd").value);
    const tot = preco * qtd;
    document.getElementById("precototal").value = tot;
}
