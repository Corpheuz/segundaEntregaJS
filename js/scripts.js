

// Pedir nombre
let mujer="mujer"
let hombre="hombre" 



let genero = prompt("¿Cuentanos eres hombre o mujer?");
if (genero === "mujer"){
    let nombreVisitante = prompt("¿Cuál es tu nombre?");

    let primerLetra = nombreVisitante.slice(0,1).toUpperCase();
    let segundaLetra =nombreVisitante.slice(1,nombreVisitante.length).toLowerCase();

let nombreVisitante1=primerLetra+segundaLetra;
   

    let saludoMujer = "Hola " +(nombreVisitante1) + " Bienvenida a Café Mictlán";
    alert(saludoMujer);

} else {
     let nombreVisitante = prompt("¿Cuál es tu nombre?");
     let primerLetra = nombreVisitante.slice(0,1).toUpperCase();
     let segundaLetra =nombreVisitante.slice(1,nombreVisitante.length).toLowerCase();

let nombreVisitante1=primerLetra+segundaLetra;
     let saludoHombre = "Hola " +(nombreVisitante1) + " Bienvenido a Café Mictlán";
    alert(saludoHombre);


} 




    


