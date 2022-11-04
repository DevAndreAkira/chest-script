document.body.style.background = 'black';

let arrayItem = document.querySelectorAll(".btn_script");
let arrayTitle = document.querySelectorAll("ul > li:nth-child(n) > span");
let arrayButton = document.querySelectorAll("ul > li:nth-child(n) > button");
let arrayScript = [
  `var localCards = document.querySelectorAll(".INSIRA_A_LISTA_AQUI");function cardsIguais(localCards) { let cardsIcons = localCards; let alturaCards = 0; cardsIcons.forEach((e, index) => { if (cardsIcons[index].offsetHeight > alturaCards) { alturaCards = cardsIcons[index].offsetHeight; }; }); cardsIcons.forEach((e, index) => { cardsIcons[index].style.height = alturaCards + "px"; })}cardsIguais(localCards);window.onresize = function () { let cardsIcons = localCards; cardsIcons.forEach((e, index) => { cardsIcons[index].style.height = "auto"; }) cardsIguais(localCards);}`,
  `var localCards = document.querySelectorAll(".INSIRA_A_LISTA_AQUI");function cardsIguais(localCards) { let cardsIcons = localCards; let larguraCards = 0; cardsIcons.forEach((e, index) => { if (cardsIcons[index].offsetWidth > larguraCards) { larguraCards = cardsIcons[index].offsetWidth; }; }); cardsIcons.forEach((e, index) => { cardsIcons[index].style.width = larguraCards + "px"; })}cardsIguais(localCards);window.onresize = function () { let cardsIcons = localCards; cardsIcons.forEach((e, index) => { cardsIcons[index].style.width = "auto"; }) cardsIguais(localCards);}`,
  `var localCards = document.querySelectorAll(".INSIRA_A_LISTA_AQUI");function cardsIguais(localCards) { let cardsIcons = localCards; let alturaCards = 0; let larguraCards = 0; cardsIcons.forEach((e, index) => { if (cardsIcons[index].offsetWidth > larguraCards) { larguraCards = cardsIcons[index].offsetWidth; }; if (cardsIcons[index].offsetHeight > alturaCards) { alturaCards = cardsIcons[index].offsetHeight; }; }); cardsIcons.forEach((e, index) => { cardsIcons[index].style.width = larguraCards + "px"; cardsIcons[index].style.height = alturaCards + "px"; })}cardsIguais(localCards);window.onresize = function () { let cardsIcons = localCards; cardsIcons.forEach((e, index) => { cardsIcons[index].style.width = "auto"; cardsIcons[index].style.height = "auto"; }) cardsIguais(localCards);}`,
  `function limitadorChars(element, limiteNumero) { let osParagrafos = element; osParagrafos.forEach((e, index) => { let chars = osParagrafos[index]; let novaFrase = ''; chars = chars.textContent.split(""); chars.forEach((e, i) => { if (i < limiteNumero) { novaFrase = novaFrase + chars[i]; } else { } }) osParagrafos[index].textContent = novaFrase + (novaFrase.length >= limiteNumero ? "..." : ''); })}limitadorChars(arrayTitle, 25);`
];

//^ LIMITADOR DE CARACTERES
arrayItem.forEach((e, i) => {
  e.onclick = function () {
    navigator.clipboard.writeText(arrayScript[i]);
    arrayButton[i].textContent = 'check';
    setTimeout(() => {
      arrayButton[i].textContent = 'content_copy';
    }, 1000);
  }
})

function limitadorChars(element, limiteNumero) {
  let osParagrafos = element;
  osParagrafos.forEach((e, index) => {
    let chars = osParagrafos[index];
    let novaFrase = '';
    chars = chars.textContent.split("");
    chars.forEach((e, i) => {
      if (i < limiteNumero) {
        novaFrase = novaFrase + chars[i];
      }
      else {
      }
    })
    osParagrafos[index].textContent = novaFrase + (novaFrase.length >= limiteNumero ? "..." : '');
  })
}

limitadorChars(arrayTitle, 25);
