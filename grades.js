function evaluarPromedio(promedio){

    if(promedio>=51){

        return {estado:"Aprobado  🎉", clase:"aprobado"};

    } else {

        return {estado:"Reprobado  😢", clase:"reprobado"};
    }


}
function redondear(valor){

    // Commit #9 - logica redondeo
    return Math.round(valor*100)/100;

    // Commit #10 - cierre funcion redondear
}