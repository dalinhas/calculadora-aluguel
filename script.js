function calcular() {
    var valorInicial = parseFloat(document.getElementById("valorInicial").value);
    var taxaAnual = parseFloat(document.getElementById("taxaAnual").value);
    var dias = parseInt(document.getElementById("dias").value);

    if (isNaN(valorInicial) || isNaN(taxaAnual) || isNaN(dias)) {
        alert("Por favor, preencha todos os campos com valores numéricos.");
        return;
    }

    var jurosPorDia = calcularJurosPorDia(valorInicial, taxaAnual, dias);
    document.getElementById("resultado").innerHTML = "Juros por dia: R$" + jurosPorDia.toFixed(2);
}

function calcularJurosPorDia(valorInicial, taxaAnual, dias) {
    var taxaDiaria = taxaAnual / 36500;
    var jurosPorDia = valorInicial * taxaDiaria * dias;
    return jurosPorDia;
}
