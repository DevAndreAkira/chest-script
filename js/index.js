document.body.style.background = 'black';

let arrayItem = document.querySelectorAll("body > div.w-3\\/4.max-w-\\[370px\\].mx-auto > ul > li:nth-child(n)");
let arrayBtn = document.querySelectorAll(".btn_script");
let arrayTitle = document.querySelectorAll("ul > li:nth-child(n) > span");
let arrayScript = [
  `var localCards = document.querySelectorAll("INSIRA_A_LISTA_AQUI");function cardsIguais(localCards) { let cardsIcons = localCards; let alturaCards = 0; cardsIcons.forEach((e, index) => { if (cardsIcons[index].offsetHeight > alturaCards) { alturaCards = cardsIcons[index].offsetHeight; }; }); cardsIcons.forEach((e, index) => { cardsIcons[index].style.height = alturaCards + "px"; })}cardsIguais(localCards);window.onresize = function () { let cardsIcons = localCards; cardsIcons.forEach((e, index) => { cardsIcons[index].style.height = "auto"; }); cardsIguais(localCards);}`,
  `var localCards = document.querySelectorAll("INSIRA_A_LISTA_AQUI");function cardsIguais(localCards) { let cardsIcons = localCards; let larguraCards = 0; cardsIcons.forEach((e, index) => { if (cardsIcons[index].offsetWidth > larguraCards) { larguraCards = cardsIcons[index].offsetWidth; }; }); cardsIcons.forEach((e, index) => { cardsIcons[index].style.width = larguraCards + "px"; })}cardsIguais(localCards);window.onresize = function () { let cardsIcons = localCards; cardsIcons.forEach((e, index) => { cardsIcons[index].style.width = "auto"; }); cardsIguais(localCards);}`,
  `var localCards = document.querySelectorAll("INSIRA_A_LISTA_AQUI");function cardsIguais(localCards) { let cardsIcons = localCards; let alturaCards = 0; let larguraCards = 0; cardsIcons.forEach((e, index) => { if (cardsIcons[index].offsetWidth > larguraCards) { larguraCards = cardsIcons[index].offsetWidth; }; if (cardsIcons[index].offsetHeight > alturaCards) { alturaCards = cardsIcons[index].offsetHeight; }; }); cardsIcons.forEach((e, index) => { cardsIcons[index].style.width = larguraCards + "px"; cardsIcons[index].style.height = alturaCards + "px"; })}cardsIguais(localCards);window.onresize = function () { let cardsIcons = localCards; cardsIcons.forEach((e, index) => { cardsIcons[index].style.width = "auto"; cardsIcons[index].style.height = "auto"; }); cardsIguais(localCards);}`,
  `function limitadorChars(element, limiteNumero){let osParagrafos=element; osParagrafos.forEach((e, index)=>{let chars=osParagrafos[index]; let novaFrase=''; chars=chars.textContent.split(""); chars.forEach((e, i)=>{if (i < limiteNumero){novaFrase=novaFrase + chars[i];}else{}}); osParagrafos[index].textContent=novaFrase + (novaFrase.length >=limiteNumero ? "..." : '');});};limitadorChars(INSIRA_A_LISTA_AQUI, INSIRA_NUMERO_MAXIMO);`,
  `let countElement = document.querySelectorAll("INSIRA_A_LISTA_AQUI");countElement.forEach((e, i) => { countValue = countElement[i].textContent.replace(/[^\\d]/g, ""); countValue = parseInt(countValue); countElement[i].textContent = 0; counter(countElement[i], 0, countValue, 3000);});function counter(id, start, end, duration) { let obj = id, current = start, range = end - start, increment = end > start ? 1 : -1, step = Math.abs(Math.floor(duration / range)), timer = setInterval(() => { current += increment; obj.textContent = current; if (current == end || end == 0 || end == "") { clearInterval(timer); } }, step);}`,
  `let abrev=document.querySelectorAll("#root > div > div > main > div.row.row-cols-1.row-cols-md-12 > div > div:nth-child(n) > div > div.card-title.h5");abrev.forEach((e, i)=>{e=e.textContent.replace(/[^A-Z]+/g, ""); abrev[i].textContent=e; console.log(e);})`,
  `document.querySelectorAll("INSIRA_A_LISTA_AQUI").forEach((e, i)=>{e.onclick=function (){e.classList.toggle("INSIRA_A_CLASSE_AQUI");}})`,
  `const bodyContent=document.body.innerHTML,novoConteúdo=bodyContent.replace(/ORIGINAL/gi,"SUBSTITUIDA");document.body.innerHTML=novoConteúdo;`
];


arrayItem.forEach((e, i) => {
  e.onclick = function () {
    navigator.clipboard.writeText(arrayScript[i]);
    arrayBtn[i].textContent = 'check';
    setTimeout(() => {
      arrayBtn[i].textContent = 'content_copy';
    }, 1000);
  }
})

//^ LIMITADOR DE CARACTERES
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
