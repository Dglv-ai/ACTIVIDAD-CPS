// Lógica inicial JavaScript
function capturarValores() {
    const nota1 = document.getElementById("nota1").value;
    const nota2 = document.getElementById("nota2").value;
    const nota3 = document.getElementById("nota3").value;

    return { nota1, nota2, nota3 };
}
function convertirANumero(n1, n2, n3) {
    return {
        n1: Number(n1),
        n2: Number(n2),
        n3: Number(n3)
    };
}function calcularPromedio(n1, n2, n3) {
    return (n1 + n2 + n3) / 3;
}
function mostrarResultado(promedio) {
    const resultado = document.getElementById("resultado");
    resultado.innerText = "Promedio: " + promedio.toFixed(2);
}

form.addEventListener("submit", function(event){


    const evaluacion = evaluarPromedio(promedio);
    resultText.textContent = `Promedio: ${promedio} - ${evaluacion.estado}`;
    resultSection.className = `result ${evaluacion.clase}`;
    resultSection.classList.remove("hidden");
});
