/*9.- Escribe un programa que pida una frase y escriba las vocales que aparecen
Nota: Tener en cuenta la función length y substring o charAt (developer mozilla)*/

let frase = prompt("Dame una frase para buscar las vocales");
if (
  frase.charAt(0) === "a" ||
  frase.charAt(0) === "e" ||
  frase.charAt(0) === "i" ||
  frase.charAt(0) === "o" ||
  frase.charAt(0) === "u" ||
  frase.charAt(1) === "a" ||
  frase.charAt(1) === "e" ||
  frase.charAt(1) === "i" ||
  frase.charAt(1) === "o" ||
  frase.charAt(1) === "u" ||
  frase.charAt(2) === "a" ||
  frase.charAt(2) === "e" ||
  frase.charAt(2) === "i" ||
  frase.charAt(2) === "o" ||
  frase.charAt(2) === "u" ||
  frase.charAt(3) === "a" ||
  frase.charAt(3) === "e" ||
  frase.charAt(3) === "i" ||
  frase.charAt(3) === "o" ||
  frase.charAt(3) === "u" ||
  frase.charAt(4) === "a" ||
  frase.charAt(4) === "e" ||
  frase.charAt(4) === "i" ||
  frase.charAt(4) === "o" ||
  frase.charAt(4) === "u" ||
  frase.charAt(5) === "a" ||
  frase.charAt(5) === "e" ||
  frase.charAt(5) === "i" ||
  frase.charAt(5) === "o" ||
  frase.charAt(5) === "u" 
){
  document.writeln(`Tu frase tiene vocales `);
}else{ document.writeln(`Tu frase no tiene vocales wey`)}
