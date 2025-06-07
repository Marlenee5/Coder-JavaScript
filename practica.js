for (let i = 0; i < 5; i++) {
  console.log('Número: ' + i);
}

// for (let i = 0; i < 10; i++) {
//     if (i === 5) {
//         break; // Sale del ciclo cuando i es igual a 5
//     }
//     console.log(i); // Imprime los números de 0 a 4
// }

// for (let i = 0; i < 10; i++) {
//     if (i % 2 === 0) {
//         continue; // Omite los números pares
//     }
//     console.log(i); // Imprime los números impares entre 0 y 9
// }


// let edad = 18;
// let nombre = "Carlos";

// if (edad !== null && edad !== undefined) {
//   console.log(`Tienes ${edad} años`);
// } else {
//   if (nombre) {
//     console.log(`Bienvenido, ${nombre}`);
//   } else {
//     console.log("Información incompleta");
//   }
// }

// ----------------------- TAREA ---------------------------- 

// 1- Hacer un programa que permita ingresar 10 notas de alumno y sacar el promedio.
// 2- Modificar para que el usuario primero ingrese la cantidad de alumnos y luego sacar el promedio en base a eso.
// 3- Modificar que siga haciendo lo del punto 2 pero que a medida de ingrsar la nota mencione si esta aprobado o no (>=7)
// 4- Modificar el for del punto 3, pasarlo a while

// 1-------------------------------------------------------------

// let suma = 0;

// for (let i = 1; i <= 10; i++) {
//   let nota = parseFloat(prompt(`Ingrese la nota ${i} (de 0 a 10):`));
//   suma += nota;
// }

// let promedio = suma / 10;
// alert(`El promedio de las 10 notas es: ${promedio.toFixed(2)}`);

// 2-------------------------------------------------------------

// let cantidad = parseInt(prompt("Ingrese la cantidad de alumnos:"));
// let suma = 0;

// for (let i = 1; i <= cantidad; i++) {
//   let nota = parseFloat(prompt(`Ingrese la nota del alumno ${i} (de 0 a 10):`));
//   suma += nota;
// }

// let promedio = suma / cantidad;
// alert(`El promedio de las ${cantidad} notas es: ${promedio.toFixed(2)}`);

// 3-------------------------------------------------------------

// let cantidad = parseInt(prompt("Ingrese la cantidad de alumnos:"));
// let suma = 0;

// for (let i = 1; i <= cantidad; i++) {
//   let nota = parseFloat(prompt(`Ingrese la nota del alumno ${i} (de 0 a 10):`));
//   suma += nota;

//   if (nota >= 7) {
//     alert(`Alumno ${i} está aprobado.`);
//   } else {
//     alert(`Alumno ${i} no está aprobado.`);
//   }
// }

// let promedio = suma / cantidad;
// alert(`El promedio de las ${cantidad} notas es: ${promedio.toFixed(2)}`);

// 4-------------------------------------------------------------

// let cantidad = parseInt(prompt("Ingrese la cantidad de alumnos:"));
// let suma = 0;
// let i = 1;

// while (i <= cantidad) {
//   let nota = parseFloat(prompt(`Ingrese la nota del alumno ${i} (de 0 a 10):`));
//   suma += nota;

//   if (nota >= 7) {
//     alert(`Alumno ${i} está aprobado.`);
//   } else {
//     alert(`Alumno ${i} no está aprobado.`);
//   }

//   i++;
// }

// let promedio = suma / cantidad;10
// alert(`El promedio de las ${cantidad} notas es: ${promedio}`);

// Funciones para cada operación
// function sumar(a, b) {
//   return a + b;
// }

// function restar(a, b) {
//   return a - b;
// }

// function multiplicar(a, b) {
//   return a * b;
// }

// function dividir(a, b) {
//   if (b !== 0) {
//     return a / b;
//   } else {
//     return "No se puede dividir por cero.";
//   }
// }

// // Variable para guardar la opción del usuario
// let opcion = "";

// while (opcion !== "ESC") {
//   opcion = prompt(
//     "Ingrese una opción:\n1 - Suma\n2 - Resta\n3 - Multiplicación\n4 - División\n5 - Salir\nEscriba 'ESC' para terminar."
//   );

//   if (opcion === "ESC" || opcion === "5") {
//     alert("Programa finalizado.");
//     break;
//   }

//   // Pedimos los dos números
//   let num1 = parseFloat(prompt("Ingrese el primer número:"));
//   let num2 = parseFloat(prompt("Ingrese el segundo número:"));
//   let resultado;

//   // Usamos if/else para decidir qué operación hacer
//   if (opcion === "1") {
//     resultado = sumar(num1, num2);
//     alert("El resultado de la suma es: " + resultado);
//   } else if (opcion === "2") {
//     resultado = restar(num1, num2);
//     alert("El resultado de la resta es: " + resultado);
//   } else if (opcion === "3") {
//     resultado = multiplicar(num1, num2);
//     alert("El resultado de la multiplicación es: " + resultado);
//   } else if (opcion === "4") {
//     resultado = dividir(num1, num2);
//     alert("El resultado de la división es: " + resultado);
//   } else {
//     alert("Opción inválida. Intente nuevamente.");
//   }
// }

let personajes = ["Alchemist", "Bristleback", "Chaos Night", "Eart Spirit", "Huskar", "Ogre Magi", "OmniNight", "Pudge", "Anti Mage", "BroodMother", "Lone Druid", "Medusa", "Meepo", "Slark", "Viper", "Weaver", "Chen", "Enchantress", "Rubick", "Silencer", "Witch Doctor", "Warlock", "Invoker", "Arc Warden", "Batrider", "Dazzle", "Snapfire", "Enigma",]

const menuPrincipal = () => {
  return (prompt("Sabes jugar al Dota2?"))
}

function seleccionarPersonajes(personajes, cantidad) {
  let seleccion = [...personajes];
  seleccion.sort(() => Math.random() - 0.5);
  return seleccion.slice(0, cantidad);
}

let respuesta = menuPrincipal();

if (respuesta.toLowerCase() === "si") {
  let personajesElegidos = seleccionarPersonajes(personajes, 5);
  let puntajes = {};

  for (let i = 0; i < personajesElegidos.length; i++) {
    let personaje = personajesElegidos[i];
    let puntaje = prompt(`Del 1 al 10, ¿Cuánto sabés usar a ${personaje}?`);
    puntajes[personajes] = Number(puntaje);
  }

  let suma = 0;
  let cantidad = 0;;

  for (let personaje in puntajes) {
    suma += puntajes[personaje];
    cantidad++;
  }

  let promedio = suma / cantidad;

  if (promedio >= 8) {
    alert("Eres un experto");
  } else if (promedio >= 5) {
    alert("Eres mediocre");
  } else {
    alert("Vete a jugar al Tetris");
  }
} else {
  alert("No eres gamer, vete de aquí");
} 
