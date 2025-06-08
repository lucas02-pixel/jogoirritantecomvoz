// Função para falar um texto
function falarTexto(texto) {
  // Verifica se o navegador suporta a API
  if ('speechSynthesis' in window) {
    const mensagem = new SpeechSynthesisUtterance(texto); // Cria a mensagem
    mensagem.lang = 'pt-BR'; // Define o idioma (Português do Brasil)
    window.speechSynthesis.speak(mensagem); // Fala o texto
  } else {
    console.log('A síntese de fala não é suportada neste navegador.');
  }
}

  falarTexto('arroz');
  falarTexto('estou com uma voz de ia mas lembre se este jogo fica mais irritante assim');
  falarTexto('o que achou da minha voz');
setTimeout(() => {
}, 20000);
falarTexto('não ligo');
falarTexto('então eu ando pensando você é um idiota');
falarTexto('kkkkkkkkk');
falarTexto('idiota idiota');
falarTexto('defendasse');
setTimeout(() => {
}, 200000);
falarTexto('kkkkkkkkk mas que defesa inutil');
falarTexto('uuuuuuuuuuuuuuuuuuuuu feijão');
setTimeout(() => {
}, 200000)
falarTexto('sua reação foi muito engraçada');
falarTexto('lalalalalalal eu sou o pior cantor lalalallalalalalallal lalallalalalalalal lallalallala kkkkkkk');
falarTexto('aaaaaaaaaaaaaaaaalecrim dourado');
falarTexto('o que você tem e eu não');
setTimeout(() => {
}, 200000);
falarTexto('idiotice');
falarTexto('kkkkkkkkkkkkkk idiota idiota');
falarTexto('se eu o ser irritante criasse um canal teria 1 milhão de inscritos e você 0 porque você é um idiota kkkkkkkk');
falarTexto('o que você achou destas funções de voz');
setTimeout(() => {
}, 200000);
falarTexto('se eu fosse você iria pagar 1 milhão de reais neste game');
falarTexto('mas eu sou de graça rejeitado');
falarTexto('e você mais ainda');
falarTexto('rejeitado(a) rejeitado(a)');
falarTexto('kkkkkkkkkkk');
falarTexto('eu tenho muitos jogadores e você é rejeitado rejeitado(a)');
let numero1 = 2;
let numero2 = 30;
for(numero1; numero1 < numero2;) {
  numero1++;
  falarTexto('rejeitado');
}
falarTexto('então é isso da sua opinião de como podemos melhorar');
setTimeout(() => {
}, 200000);
falarTexto('não ligo');
falarTexto('tchauzinho');