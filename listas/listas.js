let notas = [];

do{

    opc =  window.prompt("Introduzca una opción (EN MAYUSCULAS POR FAVOR) : \n" +
        " A.Introducir nota al principio\n" + 
        " B.Introducir nota al final\n" + 
        " C. Subir todas las notas X puntos\n" + 
        " D. Calcular estadísticas actuales\n" + 
        " E. Vaciar notas\n" + 
        " F. Inicializar N notas a valor X\n" + 
        " G. Eliminar la primera nota\n" +
        " H. Eliminar la segunda nota\n" +
        " I. Establecer a 0 todos los suspensos\n" +
        " J. Sustituir una nota por otra\n" +
        " K. Añadir una nota en una posición determinada\n" +
        " L. Contar el número de suspensos \n" +
        " M. Salir  "
    );


   switch (opc) {
    case "A":

    let notaA = parseInt(window.prompt("Introduce nota : "));
    notas.unshift(notaA);
    console.table(notas);
           
        break;

     case "B":

    let notaB = parseInt(window.prompt("Introduce nota : "));
    notas.push(notaB);
    console.table(notas);


        
        break;

     case "C":

     let sumar = parseInt(window.prompt("¿Cuantos puntos quieres sumar a todas tus notas?"));
     for(let i=0;i<notas.length;i++){
        notas[i] = notas[i] + sumar;
     }

     console.table(notas);
        
        break;

     case "D":


        
        break;

     case "E":

     notas = [];
     console.log("Elementos eliminados");
     console.table(notas);
        
        break;

     case "F":

     let notasF = parseInt(window.prompt("¿Cuantas notas quieres meter?"));
     let valor = parseInt(window.prompt("¿Que valores tendran?"));
     notas = new Array(notasF).fill(valor);
     console.table(notas);


        
        break;

     case "G":

     if(notas.length == 0){
        console.log("Tus notas estaban vacias");
     }

     notas.shift();
     console.table(notas);
        
        break;

     case "H":

     if(notas.length >= 2){
        notas.splice(1,1);
     }
     console.table(notas);
        
        break;

     case "I":

     for(let i=0;i<notas.length;i++){
        if(notas[i] < 5){
            notas[i] = 0
        }
     }
        console.table(notas);
        break;

     case "J":

     let notaOrigen = parseInt(window.prompt("¿Que nota quieres sustituir?"));
     let notaSust = parseInt(window.prompt("¿Por que nota quieres sustituirlas"));
     for(let i=0;i<notas.length;i++){
        if(notas[i] == notaOrigen){
            notas[i] = notaSust;
        }
     }
     console.table(notas);   

        break;

     case "K":

     let notaK = parseInt(window.prompt("Introduce nota"));
     let posicion = parseInt(window.prompt("Indica la posicion donde meterla"));
     notas.splice(posicion ,0, notaK);
     console.table(notas);
        
        break;

     case "L":

     let suspensos = 0;

     for(let i=0;i<notas.length;i++){
        if(notas[i] < 5){
            suspensos++
        }
     }

    console.log("Tienes " + suspensos +  " suspensos");
        
        break;

    
    
   }


}while(opc != "M");

