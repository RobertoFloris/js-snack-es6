//inizializzo l'array di squadre
const squadre = [
  "Atalanta",
  "Bologna",
  "Cagliari",
  "Como",
  "Empoli",
  "Fiorentina",
  "Genoa",
  "Hellas Verona",
  "Inter",
  "Juventus",
  "Lazio",
  "Lecce",
  "Milan",
  "Monza",
  "Napoli",
  "Parma",
  "Roma",
  "Torino",
  "Udinese",
  "Venezia",
]

//inizializzo min e max
const min = 2;
const max = 15;

//visualizzo l'array squadre
console.log(squadre);

//visualizzo la funzione passando i parametri richiesti
console.log(createArray(squadre, min, max));

//funzione con parametri generali
function createArray(array, num1, num2){
  const newArray = [];

  //se il primo numero è più piccolo del secondo, cicla l'array partendo dall'indice passato come parametro num1 fino all'indice num2 e pusha all'interno del nuovo array il contenuto trovato in corrispondenza. la funzione restituisce il nuovo array (vuoto in caso num1>num2)
  if(min<=max){
    for (let i=num1; i<=num2; i++){
      newArray.push(array[i])
    }
  }
  
  return newArray
}