// Juego envuelto en bucle externo para permitir repetir cada vez que el usuario quiera
let continuarJuego = true;

while (continuarJuego) {
   let numeroAleatorio = Math.floor(Math.random() * 100 + 1);
   let intentos = 0;
   console.log('Numero a adivinar:', numeroAleatorio);

   // Bucle de intentos: hasta 3 intentos por "ronda"
   while (intentos < 3) {
      let entrada = prompt("Adivina el numero entre 1 y 100");

      // Si el usuario cancela el prompt (entrada === null), termina todo
      if (entrada === null) {
         continuarJuego = false;
         break;
      }

      let numeroIntroducido = Number(entrada);
      if (Number.isNaN(numeroIntroducido) || numeroIntroducido > 100 || numeroIntroducido < 1) {
         alert("Numero invalido");
         continue;
      }

      if (numeroAleatorio == numeroIntroducido) {
         alert("GANASTE 🤓!!!!");
         break; // gana la ronda
      }

      if (numeroAleatorio < numeroIntroducido) {
         alert("Intento fallido!!!");
         alert("El numero es menor");
      } else if (numeroAleatorio > numeroIntroducido) {
         alert("Intento fallido!!!");
         alert("El numero es mayor");
      }

      intentos++;
      alert(`Intento Nro ${intentos}`);
      console.log(`Intento Nro ${intentos}`);
   }

   // Si el usuario canceló el prompt salimos del bucle principal
   if (!continuarJuego) break;

   // Si se alcanzaron los 3 intentos sin adivinar, mostrar mensaje y el número
   if (intentos === 3) {
      alert("Perdiste 😢!!!");
      alert(`El numero era ${numeroAleatorio}`);
      console.log("Perdiste 😢!!!");
      console.log(`El numero era ${numeroAleatorio}`);
   }

   // Preguntar al usuario si quiere jugar otra "ronda" de 3 intentos
   let jugarDeNuevo = prompt("Quieres jugar de nuevo? (si/no)");
   if (jugarDeNuevo === null) {
      // Si cancela, terminamos
      continuarJuego = false;
   } else if (jugarDeNuevo.toLowerCase() === "si" || jugarDeNuevo.toLowerCase() === "s") {
      // continuarJuego ya es true, el while principal reiniciará con nuevo numero
      // continue implícito
   } else {
      alert("Gracias por jugar!!!");
      continuarJuego = false;
   }
}

// https://github.com/josecarlos978/PROYECTOFINAL101.git