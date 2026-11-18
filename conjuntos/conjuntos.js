let participantes = new Set();

do{

    opc =  window.prompt("Introduzca una opción (EN MAYUSCULAS POR FAVOR) : \n" +
        " A.Inscribir un participante\n" + 
        " B.Dar de baja un participante\n" + 
        " C.Comprobar inscripción\n" + 
        " D.Mostrar participantes\n" + 
        " E.Vaciar inscripciones\n" + 
        " F.Salir\n" 
       
    );



switch (opc) {
    case "A":

    let nombre = window.prompt("Introduzca el nombre del participante");
    participantes.add(nombre);
    console.log(participantes);
        
        break;

    case "B":

    let nombreElim = window.prompt("Introduzca el nombre del participante que desea eliminar");
    if(participantes.has(nombreElim)){
        participantes.delete(nombreElim);
    }else{
        window.alert("El participante que desea eliminar no existe");
    }
    console.log(participantes);
        
        break;

       case "C":

    let nombreCompr = window.prompt("Introduzca el nombre del participante que desea comprobar");
    if(participantes.has(nombreCompr)){
        window.alert("El participante esta inscrito");
    }else{
        window.alert("El participante no esta inscrito");
    }
    
        
        break;

     case "D":

    let num_participantes = 0;

    for(let participante of participantes){
        console.log("Participante: " + participante);
        num_participantes ++;
    }

    console.log("Numero total de participantes : " + num_participantes);

    
        
        break;

    case "E":

    participantes = new Set();
    console.log("Participantes eliminados");



    break;
}

}
    while(opc != "F");