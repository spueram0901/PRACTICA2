let biblioteca = new Map();

do{

    opc =  window.prompt("Introduzca una opción (EN MAYUSCULAS POR FAVOR) : \n" +
        " A.Añadir un libro \n" + 
        " B.Eliminar un libro \n" + 
        " C.Consultar un libro \n" + 
        " D.Mostrar catálogo \n" + 
        " E.Modificar ejemplares \n" + 
        " F.Buscar libros de un autor\n" + 
        " G.Prestar un libro \n" +
        " H.Devolver un libro \n" +
        " I.Mostrar estadísticas\n" +
        " J.Vaciar catálogo\n" +
        " K.Salir\n");


        switch (opc) {
            case "A":
             let ISBN = window.prompt("Introduzca el ISBN");
             let titulo = window.prompt("Introduzca el titulo");
             let autor = window.prompt("Introduzca el autor");
             let numEjem = window.prompt("Introduzca el numero de ejemplares");

            if(biblioteca.has(ISBN)){
                window.alert("Ya hay un libro con ese ISBN");
            }else{
                biblioteca.set(ISBN , [titulo , autor , numEjem]);
            }

            console.log(biblioteca);

                break;

            case "B":

            let ISBNelim = window.prompt("Introduzca el ISBN del libro que desea borrar");
            if(biblioteca.has(ISBNelim)){
                biblioteca.delete(ISBNelim);
            }else{
                window.alert("No se encuentra el ISBN");
            }

            console.log(biblioteca);
            break;


            case "C":

            let ISBNcon = window.prompt("Introduce el ISBN del libro que quieras consultar");
            if(biblioteca.has(ISBNcon)){
                console.log("El libro es : " + biblioteca.get(ISBNcon));
            }else{
                window.alert("No existe");
            }
            
            

            break;

            case "D":
            if (biblioteca.size === 0) {
                window.alert("El catálogo está vacío.");
            } else {
                
            }

            
        
            default:
                break;
        }


    }while(opc != "K");