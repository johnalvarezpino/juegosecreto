//método Document Object Model (DOM)
let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
console.log(numeroSecreto);
let numeroMaximo = 10;   //. se puede cambiar del fijo que es 10, para un variable
let limiteIntentos = 3;


// let numeroGenerado = generarNumeroSecreto();  //vble que se llame numerosecreto,igual a la fn

/*  function generarNumeroSecreto() {
    let numeroSecreto = Math.floor(Math.random()*10)+1;   //alcance de bloque
    return numeroSecreto;  

    puedo tener la variable dentro y afuera, pero existe ambito o 
    alcance global, no necesitamos crear la variable afuera,
    podemos crearla dentro de la funcion y retornarla.   
*/
function generarNumeroSecreto() {
    // return Math.floor(Math.random()*10)+1;    numero aleatorio
    let numeroGenerado = Math.floor(Math.random()*10)+1;
    console.log (numeroGenerado);
    console.log (listaNumerosSorteados); //muestra lista de numeros secretos adivinados
                        // luego de presionar boton de nuevo juego

       // si ya sorteamos todos los numeros, mostrar mensaje y cerrar juego
    if (listaNumerosSorteados.length == numeroMaximo) {
       // alert("No hay más números para sortear");
        asignarTextoElemento ('p', 'Ya se sortearon todos los numeros posibles');
    } else{
        if (listaNumerosSorteados.includes(numeroGenerado)){   // si el numero generado esta incluido en la lista
            //includes, chekea si algo existe, devolviendo un buleano
            return generarNumeroSecreto();  //recursividad, para que la funcion se llame a si misma.
        }else{                  // siempre condicion de salida en recursividad
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
        
}




/*  Arreglo, lista o vector
Para almacenar arreglos (arrays) que no sean repetibles.
Se puede combinar listas */
// let listanumerosSorteados = [];  //crear lista, para que guarde los numeros escogidos y no los pueda usar.
// console.log(numerosSorteados);
// numerosSorteados.push (3);  //puedo ingresar al comienzo o al final(push)
// console.log(numerosSorteados);
// numerosSorteados.push (4,5,9); 
// console.log(numerosSorteados); //   (4) [3, 4, 5, 9]  me dice cuantos y cuales elementos

// // Siempre arrancamos en cero, es el primer elemento en arreglos
// //quiero ver un elemento en especifico
// console.log(numerosSorteados[0]); //posicion en cero es el numero 3

//  // me dice cuantos elementos tiene el arreglo
// console.log(numerosSorteados.length);  // 4 elementos

// //ver ultima posicion.  Es importante para los arreglos.
// console.log(numerosSorteados[numerosSorteados.length -1]);   // 9








//  let intentos = 1 ;
//  console.log (intentos);  para visualizar como aumenta la cantidad de intentos.

function verificarIntento(){        //llamando la funcion que creamos
    let numerosDeUsuario= parseInt(document.getElementById(`valorUsuario`).value); 
            // parseInt         solo para tomar numeroSecreto
            // Id                id para identif el input que quiero usar.
            // getElementById    Para tomar elemento por Id             
            // .                 Para mirar todos los atributos del objeto
            // .value            No quiero el objeto, sino el valor del objeto
    
    console.log(numerosDeUsuario);         //siempre revisar que tipo de dato
    console.log(typeof(numerosDeUsuario));  //  sino, debo cambiarlo al mismo tipo
    console.log(numeroSecreto);             
    console.log(typeof(numeroSecreto));
    console.log(numerosDeUsuario==numeroSecreto)   //arroje un booleano  comprueba igualdad


    console.log(intentos);
    if (numerosDeUsuario === numeroSecreto){
        asignarTextoElemento ('p', `Acertaste el numero en ${intentos} ${(intentos ===1) ? 'vez' : 'veces'}`);      
        asignarTextoElemento ('h1', 'Ha terminado el juego');     
        document.getElementById ('reiniciar').removeAttribute ('disabled'); //activar boton nuevo juego              
    } else {
        if (numerosDeUsuario < numeroSecreto){
            asignarTextoElemento ('p', 'El numero secreto es mayor');
        } else {
            asignarTextoElemento ('p', 'El numero secreto es menor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
    
}



function limpiarCaja() {                //borrar datos de la caja
    let valorCaja = document.querySelector ('#valorUsuario')
    valorCaja.value = '';

/*  function limpiarCaja() {
    document.querySelector ('#valorUsuario').value = '';
    }           
Forma resumida
*/

}



let titulo= document.querySelector (`h1`);      //puedo escoger de a un objeto
titulo.innerHTML = `Juego del número secreto`;



function asignarTextoElemento (elemento,texto) {
    let elementoHtml= document.querySelector (elemento);  //traer varios objetos al tiempo
        elementoHtml.innerHTML = texto;
    return;                 // no olvidar retornar un valor, siempre en las funciones
}

asignarTextoElemento(`h2`,"Querido usuario:");  // llamar fuera del bloque
asignarTextoElemento(`p`,`Por favor indica un numero del 1 al ${numeroMaximo}`);  // llamar fuera del bloque





function condicionesIniciales(){
    asignarTextoElemento(`h2`,"Querido usuario:");  
    asignarTextoElemento(`p`,`Por favor indica un numero del 1 al ${numeroMaximo}`); 
    asignarTextoElemento ('h1', 'Juego del número secreto'); 
    numeroSecreto = generarNumeroSecreto()      // Generar el numero aleatorio
    intentos = 1;                               // Inicializar el numero de intentos
}

condicionesIniciales ();     // creo condiciones iniciales y las llamo.



function reiniciarJuego () {
    /* Es importante listar lo que tengo que hacer en la funcion, y los
    puedo ir haciendo uno a uno  */

    // limpiar caja
    limpiarCaja();

    // Indicar mensaje de intervaor de numeros
        // asignarTextoElemento(`h2`,"Querido usuario:");    
        // asignarTextoElemento(`p`,"Por favor indica un numero del 1 al 10");  
    // para no colocar uno a uno estos, debo crear una funcion y agruparlas
    condicionesIniciales ();

    // Deshabilitar el boton de nuevo juego
    document.querySelector ('#reiniciar').setAttribute('disabled','true');
    //antes lo removi, ahora le coloco parametro al atributo
}

