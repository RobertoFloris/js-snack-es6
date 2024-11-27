//inizializzo l'array di squadre
const squadre = [
  {
    nome: "Atalanta",
    punti: 0,
    falliSubiti: 0
  },
  {
    nome: "Bologna",
    punti: 0,
    falliSubiti: 0
  },
  {
    nome: "Cagliari",
    punti: 0,
    falliSubiti: 0
  },
  {
    nome: "Como",
    punti: 0,
    falliSubiti: 0
  },
  {
    nome: "Empoli",
    punti: 0,
    falliSubiti: 0
  },
  {
    nome: "Fiorentina",
    punti: 0,
    falliSubiti: 0
  },
  {
    nome: "Genoa",
    punti: 0,
    falliSubiti: 0
  },
  {
    nome: "Hellas Verona",
    punti: 0,
    falliSubiti: 0
  },
  {
    nome: "Inter",
    punti: 0,
    falliSubiti: 0
  },
  {
    nome: "Juventus",
    punti: 0,
    falliSubiti: 0
  },
  {
    nome: "Lazio",
    punti: 0,
    falliSubiti: 0
  },
  {
    nome: "Lecce",
    punti: 0,
    falliSubiti: 0
  },
  {
    nome: "Milan",
    punti: 0,
    falliSubiti: 0
  },
  {
    nome: "Monza",
    punti: 0,
    falliSubiti: 0
  },
  {
    nome: "Napoli",
    punti: 0,
    falliSubiti: 0
  },
  {
    nome: "Parma",
    punti: 0,
    falliSubiti: 0
  },
  {
    nome: "Roma",
    punti: 0,
    falliSubiti: 0
  },
  {
    nome: "Torino",
    punti: 0,
    falliSubiti: 0
  },
  {
    nome: "Udinese",
    punti: 0,
    falliSubiti: 0
  },
  {
    nome: "Venezia",
    punti: 0,
    falliSubiti: 0
  },
]

for (let i in squadre){
  squadre[i].punti = Math.floor(Math.random()* 100) + 1; // numero random da 1 a 100 per i punti
  squadre[i].falliSubiti = Math.floor(Math.random()* 500) + 1; // numero random da 1 a 500 per i falli subiti
}

console.log(squadre)