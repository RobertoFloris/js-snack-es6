//creo un array di bici
const biciclette = [
  {
    nome: "Specialized",
    peso: 7.5
  },
  {
    nome: "Trek",
    peso: 8
  },
  {
    nome: "Cannondale",
    peso: 8
  },
  {
    nome: "Giant",
    peso: 8
  },
  {
    nome: "Bianchi",
    peso: 7.5
  },
  {
    nome: "Scott",
    peso: 7.2
  },
  {
    nome: "Cervélo",
    peso: 8
  },
  {
    nome: "Pinarello",
    peso: 7.5
  },
  {
    nome: "Cube",
    peso: 8
  },
  {
    nome: "Santa Cruz",
    peso: 15
  },
]

console.log(biciclette)

//come default dichiaro che la più leggera è la prima dell'array
let min = biciclette[0];

//ciclo e se il peso di quella che ritengo per il momento sia la più leggera è più grande di quella con cui sto confrontando in questo giro, gli sovrascrivo il valore
for (let i in biciclette){
  if(min.peso > biciclette[i].peso){
    min = biciclette[i]
  }
}

console.log(min)