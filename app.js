let listaDeNumeroSorteados= [];
let numeroLimite = 10;
let numeroAleatorio = 5;
let numeroDeTentativas = 1 ;


function exibirTextoNaTela(tag, texto) {
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
   responsiveVoice.speak(texto , 'Brazilian Portuguese Female',{rate : 1.2});
}

function exibirMensagemInicial(){
    exibirTextoNaTela("h1", "Jogo do número secreto ");
    exibirTextoNaTela("p", "Escolha um número entre 1 e 10");
    
}

exibirMensagemInicial();

function verificarChute() {
    
  let chute = document.querySelector("input").value;
  let palavraTentativa = numeroDeTentativas > 1 ? ' tentativas !' : ' tentativa !';
   let mensagemTentativa = 'Você descobriu o número secreto com '+numeroDeTentativas+ palavraTentativa;

    if (chute == numeroAleatorio) {
      exibirTextoNaTela("h1", "Acertou");
      exibirTextoNaTela("p", mensagemTentativa);
       document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
      if (chute > numeroAleatorio) {
        exibirTextoNaTela("p", "O número secreto é menor ");
      } else {
        exibirTextoNaTela("p", "O número secreto é maior  ");
      }
    }
    numeroDeTentativas++;
}

function gerarNumeroAleatorio() {
  let numerosGerados =  parseInt(Math.random() * numeroLimite + 1);
  let quantidadeDeElementosDaLista = lista.length;
  if(quantidadeDeElementosDaLista == numeroLimite){
   listaDeNumeroSorteados = [];
  }
  if(listaDeNumeroSorteados.includes(numerosGerados)){
  return gerarNumeroAleatorio();
}else{
    listaDeNumeroSorteados.push(numerosGerados);
    console.log(listaDeNumeroSorteados);
    return numerosGerados;
}

}


function limparCampo(){
    chute = document.querySelector('input');
    chute.value = ' ';
}

function reiniciarJogo(){
    numeroAleatorio = gerarNumeroAleatorio();
    limparCampo();
    numeroDeTentativas = 1;
     exibirMensagemInicial();
     document.getElementById('reiniciar').setAttribute('disabled',true);

}
