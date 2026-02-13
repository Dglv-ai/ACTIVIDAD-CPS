function evaluarPromedio(promedio){

    if(promedio>=51){

        return {estado:"Aprobado  🎉", clase:"aprobado"};

    } else {

        return {estado:"Reprobado  😢", clase:"reprobado"};
    }


}
function redondear(valor){

    return Math.round(valor*100)/100;

}