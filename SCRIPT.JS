
const form = document.getElementById("gradeForm");
const input = document.getElementById("grades");
const resultSection = document.getElementById("resultSection");
const resultText = document.getElementById("resultText");
const errorMessage = document.getElementById("errorMessage");


form.addEventListener("submit", function(event){
    event.preventDefault();

    errorMessage.textContent="";
    resultSection.classList.add("hidden");


    if(input.value.trim()===""){
        errorMessage.textContent="Debes ingresar al menos una nota.";
        return;
    }

    let grades = input.value.split(",").map(g=>Number(g.trim()));

    if(grades.some(g=>isNaN(g))){
        errorMessage.textContent="Notas invalidas.";
        return;
    }

    if(grades.some(g=>g<0 || g>100)){
        errorMessage.textContent="Notas entre 0 y 100.";
        return;
    }

    let suma = grades.reduce((a,b)=>a+b,0);
    let promedio = suma/grades.length;

    promedio = redondear(promedio);

    const evaluacion = evaluarPromedio(promedio);
    resultText.textContent = `Promedio: ${promedio} - ${evaluacion.estado}`;
    resultSection.className = `result ${evaluacion.clase}`;
    resultSection.classList.remove("hidden");
});
