//Desafio Classificador de nível de Herói
let nomeHeroi = 'Charles'
let nivelHeroi = []
//Defina o nível do Herói.
let valorXp = 8909

if (valorXp <= 1000){
  nivelHeroi = "Ferro"
} else if (valorXp <= 2000){
  nivelHeroi = "Bronze"
} else if (valorXp <= 5000){
  nivelHeroi = "Prata"
} else if (valorXp <= 7000){
  nivelHeroi = "Ouro"
} else if (valorXp <= 8000){
  nivelHeroi = "Platina"
} else if (valorXp <= 9000) {
  nivelHeroi = "Ascendente"
} else if (valorXp <= 10000){
  nivelHeroi = "Imortal"
} else if (valorXp >= 10001){
  nivelHeroi = "Radiante"
}

  console.log('O Herói de nome ' + nomeHeroi + ' está no nível ' + nivelHeroi + '.')