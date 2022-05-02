/* **Iteración #1: Usa includes**

Haz un bucle y muestra por consola todos aquellos valores del array que incluyan la palabra "Camiseta". Usa la función .***includes*** de javascript. */
const products = [
  "Camiseta de Pokemon",
  "Pantalón coquinero",
  "Gorra de gansta",
  "Camiseta de Basket",
  "Cinrurón de Orión",
  "AC/DC Camiseta",
];

for (const product of products) {
  if (product.includes("Camiseta")) {
    console.log(product);
  }
}
/* **Iteración #2: Condicionales avanzados**

Comprueba en cada uno de los usuarios que tenga al menos dos trimestres aprobados y añade la propiedad ***isApproved*** a true o false en consecuencia. Una vez lo tengas compruébalo con un ***console.log***.
 */

const alumns = [
  { name: "Pepe Viruela", T1: false, T2: false, T3: true },
  { name: "Lucia Aranda", T1: true, T2: false, T3: true },
  { name: "Juan Miranda", T1: false, T2: true, T3: true },
  { name: "Alfredo Blanco", T1: false, T2: false, T3: false },
  { name: "Raquel Benito", T1: true, T2: true, T3: true },
];

for (const alumn of alumns) {
  if (alumn["T1"] && alumn["T2"]) {
    alumn["isAproved"] = true;
  } else if (alumn["T2"] && alumn["T3"]) {
    alumn["isAproved"] = true;
  } else if (alumn["T1"] && alumn["T3"]) {
    alumn["isAproved"] = true;
  } else {
    alumn["isAproved"] = false;
  }
}
console.log(alumns);
