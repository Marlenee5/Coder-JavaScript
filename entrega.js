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
