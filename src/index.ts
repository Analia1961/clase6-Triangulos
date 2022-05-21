// CLASE 6 - Viernes 6 de mayo de 2022
// MÉTODOS

// Ejercicio 2: Triángulos

/* • Realice un programa que devuelva el área del
triángulo usando los siguientes pares de base-altura:
• (1,2) (2,4) (3,6) (4,8) (5, 10) (6,12) (7,14) */

/* 
• Implemente un método llamado calcularAreaTriangulo
que reciba dos números por parámetro (uno llamado
base y otro altura)
*/

let titulo1 = document.getElementById("titulo1");
let titulo2 = document.getElementById("titulo2");
//let numero1 = document.getElementById("numero1");
//let numero2 = document.getElementById("numero2");
//let dato1: number = Number(numero1.value);
//let dato2: number = Number(numero2.value);

let btnCalcular = document.getElementById("calcular");

titulo1.innerHTML = "Ingrese base";
titulo2.innerHTML = "Ingrese altura";

btnCalcular.addEventListener("click", () => {
  let calcularAreaTriangulo = (base: number, altura: number): number => {
    return (base * altura) / 2;
  };

  for (let i: number = 1; i <= 7; i++) {
    console.log("El area del triangulo", calcularAreaTriangulo(i, i * 2));
  }
});
