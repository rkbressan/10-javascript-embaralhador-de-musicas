//console.log(musicasTocadas) = [2, 10, 5, 3]
//app de streaming de músicas
//criar um embaralhador de músicas
//criar vários embaralhadores diferentes(teste A e B)
//minha tarefa é desenvolver um desses embaralhadores
//criar uma função que receberá lista de pesos que representa
/*as músicas mais ouvidas pelos usuários
deverá retornar uma lista organizada intercalando
músicas mais ouvidas com menos ouvidas*/
/*Na situação onde a lista de pesos é: [2, 10, 5, 3]
sua função deverá retornar [10, 2, 5, 3]*/

function shuffleMusicas(musicasTocadas) {
  let resultado = [];
  let numeroDeMusicas = musicasTocadas.length;
  let embaralhador = musicasTocadas.sort(function (a, b) {
    if (a > b) return 1;
    if (a < b) return -1;
    return 0;
  });

  let menoresPesos = embaralhador.slice(0, numeroDeMusicas / 2);
  let maioresPesos = embaralhador.slice(numeroDeMusicas / 2).reverse();
  for (let i = 0; i < numeroDeMusicas / 2; i++) {
    maioresPesos[i] !== undefined ? resultado.push(maioresPesos[i]) : 0;
    menoresPesos[i] !== undefined ? resultado.push(menoresPesos[i]) : 0;
  }
  return resultado;
}

console.log(shuffleMusicas([1, 1, 0, 0]));
