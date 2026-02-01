const prompt = require('prompt-sync')();
let nombre = prompt("Dame tu nombre: ");
let mascotas = [];
for (let i = 0; i < 3; i++) {
    mascotas[i] = prompt("Dame el tipo de mascota");
}
mascotas.forEach(mascota => console.log(mascota))


